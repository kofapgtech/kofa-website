-- Website form submissions (contact page + "Connect with us" section).
--
-- This lives in the "kofa-website" Supabase project, deliberately separate from
-- the kofa-os operations database: the key that writes here ships inside the JS
-- bundle of a static site, so this table must never front anything sensitive.
--
-- Written to be idempotent so it can be applied to the existing project without
-- clobbering rows already collected.

create table if not exists public.contact_submissions (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz not null default now(),
  name           text not null,
  email          text not null,
  organization   text,
  message        text,
  wants_intake   boolean not null default false,
  preferred_time text,
  source         text not null
);

-- Columns added defensively in case an earlier hand-made version of the table
-- predates them.
alter table public.contact_submissions add column if not exists organization   text;
alter table public.contact_submissions add column if not exists message        text;
alter table public.contact_submissions add column if not exists wants_intake   boolean not null default false;
alter table public.contact_submissions add column if not exists preferred_time text;

-- Recreated rather than added, so the set of valid sources always matches
-- SubmissionSource in src/lib/supabase.ts even if the table already existed.
alter table public.contact_submissions drop constraint if exists contact_submissions_source_check;
alter table public.contact_submissions add  constraint contact_submissions_source_check
  check (source in ('contact', 'connect', 'intake', 'waitlist', 'schedule'));

-- The partner team reads newest-first; submissions are also filtered by source
-- to see how each form is performing.
create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);
create index if not exists contact_submissions_source_created_at_idx
  on public.contact_submissions (source, created_at desc);

alter table public.contact_submissions enable row level security;

-- Anonymous visitors may INSERT and nothing else. There is deliberately no
-- SELECT, UPDATE or DELETE policy for anon/authenticated, so no visitor can
-- read submissions back out with the publishable key. Staff read the table via
-- the Supabase dashboard / service role, which bypasses RLS.
drop policy if exists "Anyone can submit a form" on public.contact_submissions;
create policy "Anyone can submit a form"
  on public.contact_submissions
  for insert
  to anon, authenticated
  with check (true);
