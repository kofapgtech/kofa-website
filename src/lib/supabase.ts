import { createClient } from '@supabase/supabase-js';

/**
 * Public website database (Supabase project "kofa-website").
 *
 * Deliberately a separate project from the kofa-os operations database: this key
 * ships inside the JS bundle of a static site, so it must not front anything
 * sensitive. The only table is `contact_submissions`, and its RLS policies let
 * anonymous visitors INSERT and nothing else — no visitor can read submissions
 * back. Rotate by replacing the values here or by setting the env vars at build
 * time.
 */
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? 'https://oegiakeyzlacxgtuqrws.supabase.co';
const SUPABASE_PUBLISHABLE_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ?? 'sb_publishable_7QrkJiX3TBT_EvFvEm_V7A_SFP0ViuH';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: false },
});

export type SubmissionSource = 'contact' | 'intake' | 'waitlist' | 'schedule';

export interface ContactSubmission {
  name: string;
  email: string;
  organization?: string;
  message?: string;
  wants_intake?: boolean;
  preferred_time?: string;
  source: SubmissionSource;
}

/**
 * Persist a form submission. Returns an error message on failure so callers can
 * show the visitor something truthful instead of a false success state.
 */
export async function submitContact(entry: ContactSubmission): Promise<{ error: string | null }> {
  const { error } = await supabase.from('contact_submissions').insert({
    name: entry.name.trim(),
    email: entry.email.trim(),
    organization: entry.organization?.trim() || null,
    message: entry.message?.trim() || null,
    wants_intake: entry.wants_intake ?? false,
    preferred_time: entry.preferred_time?.trim() || null,
    source: entry.source,
  });

  if (error) {
    return { error: error.message };
  }
  return { error: null };
}
