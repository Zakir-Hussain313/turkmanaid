'use client';

import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-linear-to-b from-blue-50/50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl mb-6 mx-auto">
              <FileText className="w-8 h-8" />
            </div>

            <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
              Terms of <span className="text-blue-700">Service</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These terms govern your use of our website and services. By accessing
              or using our site, you agree to these terms.
            </p>

            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-gray-700 leading-relaxed">

          <TermsSection title="1. Acceptance of Terms">
            By accessing or using the Turkman Aid website, you confirm that
            you have read, understood, and agree to be bound by these Terms of
            Service. If you do not agree, please do not use our website.
          </TermsSection>

          <TermsSection title="2. About Turkman Aid">
            Turkman Aid is a non-profit organization dedicated to humanitarian
            and community-based initiatives. Information provided on this website
            is for general informational purposes only.
          </TermsSection>

          <TermsSection title="3. Use of the Website">
            You agree to use this website lawfully and respectfully. You must not:
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Use the site for unlawful or fraudulent purposes</li>
              <li>Attempt to gain unauthorized access to systems or data</li>
              <li>Disrupt or interfere with the site&apos;s security or functionality</li>
              <li>Upload malicious code or harmful content</li>
            </ul>
          </TermsSection>

          <TermsSection title="4. Donations">
            All donations made through this website are voluntary. While we make
            every effort to ensure funds are used responsibly, donations are
            generally non-refundable unless required by law.
          </TermsSection>

          <TermsSection title="5. Intellectual Property">
            All content on this website, including text, images, logos, and design,
            is the property of Turkman Aid or its licensors and may not be
            reproduced or distributed without prior written consent.
          </TermsSection>

          <TermsSection title="6. Third-Party Services and Links">
            Our website may include links to third-party websites or services. We
            do not control and are not responsible for their content, policies, or
            practices.
          </TermsSection>

          <TermsSection title="7. Disclaimer">
            The website and its content are provided “as is” without warranties of
            any kind. We do not guarantee accuracy, completeness, or availability
            of the website at all times.
          </TermsSection>

          <TermsSection title="8. Limitation of Liability">
            To the maximum extent permitted by law, Turkman Aid shall not be
            liable for any direct or indirect damages arising from your use of or
            inability to use this website.
          </TermsSection>

          <TermsSection title="9. Indemnification">
            You agree to indemnify and hold harmless Turkman Aid from any
            claims, losses, or damages resulting from your violation of these
            terms or misuse of the website.
          </TermsSection>

          <TermsSection title="10. Privacy">
            Your use of this website is also governed by our Privacy Policy, which
            explains how we collect and use personal information.
          </TermsSection>

          <TermsSection title="11. Changes to These Terms">
            We may update these Terms of Service from time to time. Continued use
            of the website after changes are posted constitutes acceptance of the
            revised terms.
          </TermsSection>

          <TermsSection title="12. Governing Law">
            These Terms of Service are governed by and interpreted in accordance
            with applicable local laws, without regard to conflict of law
            principles.
          </TermsSection>

          <TermsSection title="13. Contact Information">
            If you have questions regarding these Terms of Service, please contact
            us through the contact page on our website.
          </TermsSection>

        </div>
      </section>
    </div>
  );
}

/* Reusable section component */
function TermsSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl text-gray-900 mb-4">{title}</h2>
      <div className="text-gray-600 space-y-3">{children}</div>
    </motion.div>
  );
}
