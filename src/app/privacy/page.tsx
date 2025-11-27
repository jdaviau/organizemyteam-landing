import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "OrganizeMyTeam Privacy Policy - Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | OrganizeMyTeam",
    description:
      "OrganizeMyTeam Privacy Policy - Learn how we collect, use, and protect your personal information.",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 1, 2025";

  return (
    <div className="container-landing section-padding">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: {lastUpdated}
        </p>

        <div className="mt-12 prose prose-lg max-w-none">
          <h2>Introduction</h2>
          <p>
            OrganizeMyTeam (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
            is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you use our Team Manager application and website
            (collectively, the &quot;Service&quot;).
          </p>
          <p>
            Please read this Privacy Policy carefully. By using the Service,
            you agree to the collection and use of information in accordance
            with this policy.
          </p>

          <h2>Information We Collect</h2>

          <h3>Information You Provide</h3>
          <p>We collect information you provide directly to us, including:</p>
          <ul>
            <li>
              <strong>Account Information:</strong> Name, email address,
              password, and phone number when you create an account.
            </li>
            <li>
              <strong>Team Information:</strong> Team name, sport, season
              details, and organization information.
            </li>
            <li>
              <strong>Member Information:</strong> Names, email addresses, and
              contact information for team members and families you add to your
              team.
            </li>
            <li>
              <strong>Financial Information:</strong> Payment records, expense
              data, and transaction details you enter into the Service.
            </li>
            <li>
              <strong>Communications:</strong> Information you provide when
              contacting us for support or feedback.
            </li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <p>
            When you use our Service, we may automatically collect certain
            information, including:
          </p>
          <ul>
            <li>
              <strong>Usage Data:</strong> Pages visited, features used, and
              actions taken within the Service.
            </li>
            <li>
              <strong>Device Information:</strong> Browser type, operating
              system, device type, and unique device identifiers.
            </li>
            <li>
              <strong>Log Data:</strong> IP address, access times, and
              referring URLs.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve the Service</li>
            <li>Process transactions and send related information</li>
            <li>
              Send you technical notices, updates, and administrative messages
            </li>
            <li>Respond to your comments, questions, and support requests</li>
            <li>
              Monitor and analyze trends, usage, and activities in connection
              with the Service
            </li>
            <li>Detect, investigate, and prevent fraudulent or unauthorized activity</li>
            <li>Personalize and improve your experience</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share information
            as follows:
          </p>
          <ul>
            <li>
              <strong>With Your Consent:</strong> We may share information when
              you direct us to do so.
            </li>
            <li>
              <strong>Team Members:</strong> Information you add about team
              members may be visible to other authorized users of your team.
            </li>
            <li>
              <strong>Service Providers:</strong> We may share information with
              third-party vendors who perform services on our behalf (e.g.,
              hosting, email delivery, analytics).
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose information
              if required by law or in response to valid legal requests.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger,
              acquisition, or sale of assets, your information may be
              transferred.
            </li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction. These measures include:
          </p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication requirements</li>
            <li>Secure data storage practices</li>
          </ul>
          <p>
            However, no method of transmission over the Internet or electronic
            storage is 100% secure. While we strive to protect your information,
            we cannot guarantee absolute security.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain your information for as long as your account is active or
            as needed to provide you with the Service. We may also retain and
            use your information to comply with legal obligations, resolve
            disputes, and enforce our agreements.
          </p>
          <p>
            You may request deletion of your account and associated data at any
            time by contacting us at{" "}
            <a href="mailto:privacy@organizemyteam.com">
              privacy@organizemyteam.com
            </a>
            .
          </p>

          <h2>Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information:</p>
          <ul>
            <li>
              <strong>Access:</strong> Request a copy of the personal
              information we hold about you.
            </li>
            <li>
              <strong>Correction:</strong> Request that we correct inaccurate or
              incomplete information.
            </li>
            <li>
              <strong>Deletion:</strong> Request that we delete your personal
              information.
            </li>
            <li>
              <strong>Data Portability:</strong> Request a copy of your data in
              a portable format.
            </li>
            <li>
              <strong>Opt-Out:</strong> Opt out of certain data processing
              activities, such as marketing communications.
            </li>
          </ul>
          <p>
            To exercise these rights, please contact us at{" "}
            <a href="mailto:privacy@organizemyteam.com">
              privacy@organizemyteam.com
            </a>
            .
          </p>

          <h2>Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to collect and
            store information about your interactions with our Service. You can
            control cookies through your browser settings, though disabling
            cookies may affect the functionality of the Service.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            The Service is not directed to children under 13. We do not
            knowingly collect personal information from children under 13. If
            you believe we have collected information from a child under 13,
            please contact us immediately.
          </p>
          <p>
            While team treasurers may enter information about youth team members
            (such as player names), this information is controlled by the team
            administrator and should only include information necessary for team
            management purposes.
          </p>

          <h2>International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries
            other than your country of residence. These countries may have
            different data protection laws. By using the Service, you consent to
            the transfer of your information to the United States and other
            countries.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &quot;Last updated&quot; date. We encourage you to
            review this Privacy Policy periodically.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:privacy@organizemyteam.com">
                privacy@organizemyteam.com
              </a>
            </li>
            <li>
              Contact Form: <a href="/contact">organizemyteam.com/contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
