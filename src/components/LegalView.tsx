import React from 'react';
import { TriangleAlert } from 'lucide-react';

/**
 * Boilerplate legal pages.
 *
 * These are generic starting templates, not legal advice, and they have not been
 * reviewed by counsel. Bracketed values must be filled in and the whole document
 * reviewed by a lawyer before the site is treated as having enforceable terms.
 */

const CONTACT_EMAIL = '[legal@kofapg.com]';
const GOVERNING_LAW = '[State of Illinois, United States]';
const ENTITY = 'Kofa Policy Group';

interface Clause {
  heading: string;
  body: string[];
}

const privacyClauses: Clause[] = [
  {
    heading: 'Information we collect',
    body: [
      `When you submit a form on this website, we collect the information you provide: your name, email address, organization, the message you write, and whether you requested an intake appointment along with any times you suggest.`,
      `We do not use advertising trackers or third-party analytics cookies on this site.`,
    ],
  },
  {
    heading: 'How we use your information',
    body: [
      `We use what you submit to respond to your enquiry, schedule any intake session you request, and maintain a record of our correspondence. We do not sell your personal information, and we do not share it with third parties for their own marketing.`,
    ],
  },
  {
    heading: 'Where your information is stored',
    body: [
      `Form submissions are stored in a database hosted by Supabase, our data processor, on servers located in the United States. Access is restricted to authorized ${ENTITY} personnel.`,
    ],
  },
  {
    heading: 'How long we keep it',
    body: [
      `We retain enquiry records for as long as needed to respond and to maintain a record of our business relationship, and then for [retention period, e.g. 24 months] afterward, unless you ask us to delete them sooner.`,
    ],
  },
  {
    heading: 'Your rights',
    body: [
      `Depending on where you live, you may have the right to request access to the personal information we hold about you, ask us to correct or delete it, or object to how we use it. To make a request, contact us at ${CONTACT_EMAIL}. We will respond within the timeframe required by applicable law.`,
    ],
  },
  {
    heading: "Children's privacy",
    body: [
      `This website is not directed to children under 13, and we do not knowingly collect personal information from them. If you believe a child has provided us information, contact us and we will delete it.`,
    ],
  },
  {
    heading: 'Changes to this policy',
    body: [
      `We may update this policy from time to time. Material changes will be reflected in the effective date shown above.`,
    ],
  },
  {
    heading: 'Contact us',
    body: [`Questions about this policy can be sent to ${CONTACT_EMAIL}.`],
  },
];

const termsClauses: Clause[] = [
  {
    heading: 'Acceptance of these terms',
    body: [
      `By accessing or using this website, you agree to these Terms of Service. If you do not agree, please do not use the site.`,
    ],
  },
  {
    heading: 'What this website is',
    body: [
      `This site provides general information about ${ENTITY} and its services. Nothing on it constitutes legal, financial, or professional advice, and nothing on it creates a client relationship. Any engagement with ${ENTITY} is governed by a separate written agreement.`,
    ],
  },
  {
    heading: 'Submissions and enquiries',
    body: [
      `Submitting a form does not obligate ${ENTITY} to provide services, and does not create a contract. We may decline any enquiry. Please do not send confidential or sensitive information through this website.`,
    ],
  },
  {
    heading: 'Acceptable use',
    body: [
      `You agree not to use this site to break the law, to interfere with its operation or security, to submit false information or another person's information without permission, or to access it by automated means without our permission.`,
    ],
  },
  {
    heading: 'Intellectual property',
    body: [
      `The content, design, logos, and marks on this site are owned by ${ENTITY} or its licensors and may not be reproduced or used without written permission, except as permitted by law.`,
    ],
  },
  {
    heading: 'Third-party links',
    body: [
      `This site may link to third-party websites. We do not control them and are not responsible for their content, practices, or availability.`,
    ],
  },
  {
    heading: 'Disclaimer and limitation of liability',
    body: [
      `This website is provided "as is" and "as available", without warranties of any kind, express or implied, to the fullest extent permitted by law. To the fullest extent permitted by law, ${ENTITY} is not liable for any indirect, incidental, or consequential damages arising from your use of this site.`,
    ],
  },
  {
    heading: 'Governing law',
    body: [
      `These terms are governed by the laws of ${GOVERNING_LAW}, without regard to conflict of law principles.`,
    ],
  },
  {
    heading: 'Changes to these terms',
    body: [
      `We may revise these terms at any time. Continued use of the site after changes take effect constitutes acceptance of the revised terms.`,
    ],
  },
  {
    heading: 'Contact us',
    body: [`Questions about these terms can be sent to ${CONTACT_EMAIL}.`],
  },
];

const LegalPage: React.FC<{ title: string; clauses: Clause[] }> = ({ title, clauses }) => (
  <div className="w-full bg-[#fff8f3] text-[#251a08]">
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-20">
      <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-[#2c6748] tracking-tight mb-3">
        {title}
      </h1>
      <p className="text-sm text-[#526859] mb-8">Effective date: [date]</p>

      <div className="flex items-start gap-3 rounded-xl border border-[#e0c9a6] bg-[#fff1e3] p-4 mb-10">
        <TriangleAlert className="w-5 h-5 shrink-0 text-[#a86a1e] mt-0.5" />
        <p className="text-sm text-[#5c4a2e] leading-relaxed">
          <strong>Template pending legal review.</strong> This is generic boilerplate,
          not legal advice. Bracketed values still need to be filled in, and the text
          should be reviewed by counsel before it is relied on.
        </p>
      </div>

      <div className="space-y-8">
        {clauses.map((clause) => (
          <section key={clause.heading}>
            <h2 className="text-xl font-bold font-display text-[#251a08] mb-3">
              {clause.heading}
            </h2>
            {clause.body.map((para, i) => (
              <p key={i} className="text-base text-[#404942] leading-relaxed mb-3">
                {para}
              </p>
            ))}
          </section>
        ))}
      </div>
    </section>
  </div>
);

export const PrivacyPolicyView: React.FC = () => (
  <LegalPage title="Privacy Policy" clauses={privacyClauses} />
);

export const TermsOfServiceView: React.FC = () => (
  <LegalPage title="Terms of Service" clauses={termsClauses} />
);
