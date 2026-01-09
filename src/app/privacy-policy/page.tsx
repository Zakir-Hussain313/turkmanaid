'use client';

import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
              <ShieldCheck className="w-8 h-8" />
            </div>

            <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
              Privacy <span className="text-blue-700">Policy</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy matters to us. This page explains how we collect, use,
              and protect your personal information.
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
          
          <PolicySection title="1. Introduction">
            Turkman Aid (“we”, “our”, or “us”) is committed to respecting and
            protecting your privacy. This Privacy Policy outlines how we handle
            personal information collected through our website and related
            services.
          </PolicySection>

          <PolicySection title="2. Information We Collect">
            We may collect personal information that you voluntarily provide,
            including:
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Name and email address when contacting us</li>
              <li>Messages and inquiries submitted through forms</li>
              <li>Donation-related information required for processing payments</li>
              <li>Basic technical data such as browser type and IP address</li>
            </ul>
            <p className="mt-4">
              We do not intentionally collect sensitive personal data.
            </p>
          </PolicySection>

          <PolicySection title="3. How We Use Your Information">
            Your information is used solely to:
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Respond to inquiries and communications</li>
              <li>Process donations and issue receipts</li>
              <li>Improve website functionality and user experience</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </PolicySection>

          <PolicySection title="4. Donations and Payments">
            Donations made through our website are securely processed by
            third-party payment providers. We do not store full payment details on
            our servers. These providers handle your information in accordance
            with their own privacy and security policies.
          </PolicySection>

          <PolicySection title="5. Data Sharing">
            We do not sell, rent, or trade your personal data. Limited information
            may be shared with trusted service providers strictly for operational
            purposes, and only under confidentiality obligations.
          </PolicySection>

          <PolicySection title="6. Cookies and Analytics">
            Our website may use cookies or basic analytics tools to understand how
            visitors interact with the site. You may control cookie preferences
            through your browser settings.
          </PolicySection>

          <PolicySection title="7. Data Retention">
            Personal information is retained only for as long as necessary to
            fulfill the purposes described in this policy or to meet legal
            requirements.
          </PolicySection>

          <PolicySection title="8. Your Rights">
            Depending on your location, you may have the right to request access,
            correction, or deletion of your personal data. Requests can be made
            through our contact page.
          </PolicySection>

          <PolicySection title="9. Data Security">
            We implement reasonable technical and organizational measures to
            protect your information. While we strive to safeguard data, no
            internet transmission is completely secure.
          </PolicySection>

          <PolicySection title="10. Third-Party Links">
            Our website may contain links to external websites. We are not
            responsible for the privacy practices or content of those sites.
          </PolicySection>

          <PolicySection title="11. Changes to This Policy">
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page with a revised date.
          </PolicySection>

          <PolicySection title="12. Contact Us">
            If you have questions or concerns about this Privacy Policy, please
            contact us using the contact form available on our website.
          </PolicySection>

        </div>
      </section>
    </div>
  );
}

/* Reusable section component */
function PolicySection({
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
