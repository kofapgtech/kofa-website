<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/22db5b08-d792-44f2-bb4c-1467c592ff92

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Form submissions (Supabase)

The contact page and the home page "Connect with us" section both write to the
`contact_submissions` table in the Supabase project **kofa-website**
(`oegiakeyzlacxgtuqrws`) via `src/lib/supabase.ts`.

The schema lives in [`supabase/migrations/`](supabase/migrations/) and is
idempotent, so it can be re-applied safely. RLS lets anonymous visitors INSERT
and nothing else — submissions cannot be read back with the publishable key that
ships in the bundle. Read them from the Supabase dashboard.

Rows are tagged with a `source` so each form can be reported on separately:

| `source`   | Where it comes from                              |
| ---------- | ------------------------------------------------ |
| `connect`  | "Connect with us" section on the home page        |
| `contact`  | Contact page form                                 |
| `intake`   | Contact page form with "request an intake" ticked |

Project URL and key are compiled in as defaults; set `VITE_SUPABASE_URL` and
`VITE_SUPABASE_PUBLISHABLE_KEY` (see [.env.example](.env.example)) to point a
build at a different project.
