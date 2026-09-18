# Supabase overview

A map of the Supabase projects on the `kofapgtech` organization, written to
support the decision about where website form submissions should be stored.

Captured 2026-09-18. Row counts are planner estimates (`pg_stat_user_tables`)
and are approximate.

## The four projects

The organization is on the **free plan, which allows 2 active projects**. Both
slots are currently in use, which is why `kofa-website` cannot be resumed
without pausing something else.

| Project | Status | Region | Created | What it is |
| --- | --- | --- | --- | --- |
| `kofa-os` (`rhuwwmcmfmqgudcwzdyu`) | **ACTIVE** | us-west-1 | 2026-08-11 | The internal operations platform. 43 tables. Real data. |
| `pride-south-side` (`jcskmaiqkdoxubfsdons`) | **ACTIVE** | us-east-2 | 2026-09-17 | A community site backend. 10 tables, **all empty**. |
| `kofa-website` (`oegiakeyzlacxgtuqrws`) | PAUSED | us-east-2 | 2026-08-17 | What the website code points at today. Contents unknown — cannot be inspected while paused. |
| `kofapgtech's Project` (`asnsktfnvroawwvvpyqu`) | PAUSED | us-west-2 | 2026-07-28 | Contents unknown — cannot be inspected while paused. Carries the default auto-generated project name and is referenced nowhere in this repo. Pausing it frees nothing; it is already paused. |

## `kofa-os` — the operations database

43 tables in `public`, grouped by what they do:

- **Identity and tenancy** — `organizations`, `profiles` (7 rows), `app_users`,
  `accounts`, `platform_admins`, `departments` (24), `department_leads`,
  `org_email_domains`, `active_workspace`, `workspace_reset_archives`
- **Payroll and compensation** — `pay_periods` (120 rows), `payroll_payments`,
  `profile_rates`, `time_entry_costs`
- **Time tracking** — `time_entries`, `timesheet_weeks`,
  `timesheet_week_reviews`, `task_time_requests`, `task_hour_allocations`
- **HR and onboarding** — `onboarding_agreements`, `onboarding_signatures`,
  `onboarding_progress` (5), `onboarding_reading` (31), `onboarding_settings`,
  `employee_attachments`
- **Delivery work** — `projects`, `tasks`, `task_assignees`, `deliverables`,
  `deliverable_reviews`, `deliverable_comments`, `deliverable_attachments`,
  `deliverable_fee_allocations`
- **Budgets** — `workstream_budgets`, `workstream_budget_requests`,
  `workstream_members`, `project_monthly_budgets`, `project_budget_alerts`
- **Support and messaging** — `tickets`, `ticket_comments`,
  `ticket_attachments`, `notifications`, `account_share_links`

### Sensitivity

Several tables hold data that should never be one policy mistake away from the
public internet:

| Table | Holds |
| --- | --- |
| `profile_rates` | `bill_rate`, `cost_rate` — per-person billing and cost rates |
| `payroll_payments` | payment `amount`, `paid_at`, `deel_reference` |
| `profiles` | `email`, `phone`, `termination_date`, `termination_reason`, `rehire_eligible` |
| `onboarding_signatures` | `typed_name`, `signed_at`, `ip`, `user_agent` — legally significant signing records |
| `employee_attachments` | employee file paths and metadata |

### Security posture

This database is carefully locked down, and it is worth preserving that:

- **RLS is enabled on all 43 tables.**
- **There are zero policies granting the `anon` role anything.** Every policy
  targets authenticated roles. The anonymous role currently has no read or
  write path into any table.
- `platform_admins`, `project_budget_alerts` and `workspace_reset_archives`
  have RLS on with no policies at all — deny-by-default.
- Access is mediated by ~68 `SECURITY DEFINER` functions (`is_admin`,
  `current_org_id`, `has_financial_access`, `can_manage_payroll`, …) that the
  policies call, rather than by table-level grants.

## `pride-south-side`

10 tables — `posts`, `post_comments`, `post_reactions`, `profiles`, `events`,
`event_submissions`, `health_providers`, `marketplace_products`,
`newsletter_signups`, `partner_orgs`. All have RLS policies.

**Every table has 0 rows.** The project was created 2026-09-17 and has no data
in it yet.

## `kofa-website`

Cannot be inspected while paused — both SQL and the API-key endpoint fail.

The website code in `src/lib/supabase.ts` points here and expects a single
table, `contact_submissions`. Whether that table currently exists, and whether
it holds any submissions collected before the project was paused, is unknown
until the project is resumed. The repo now carries an idempotent definition of
it in `supabase/migrations/`, so it can be created or reconciled either way.

## What this means for the form

Putting `contact_submissions` in `kofa-os` would make the website's publishable
key — which ships in the JavaScript bundle of a public, statically hosted site —
the **first anonymous-reachable credential against the payroll and HR
database**. The table itself would be insert-only, but the key also reaches that
project's auth and REST endpoints, so the blast radius of any future policy
mistake becomes payroll data rather than a list of contact form submissions.
This is the separation the comment in `src/lib/supabase.ts` was describing.

Since `pride-south-side` is completely empty, pausing it frees the needed slot
without taking any real data or workload offline, and lets `kofa-website` be
resumed as its own isolated project.
