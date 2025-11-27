import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "OrganizeMyTeam Terms of Service - The terms and conditions for using Team Manager.",
  openGraph: {
    title: "Terms of Service | OrganizeMyTeam",
    description:
      "OrganizeMyTeam Terms of Service - The terms and conditions for using Team Manager.",
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = "January 1, 2025";

  return (
    <div className="container-landing section-padding">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: {lastUpdated}
        </p>

        <div className="mt-12 prose prose-lg max-w-none">
          <h2>Agreement to Terms</h2>
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and
            use of the OrganizeMyTeam website and Team Manager application
            (collectively, the &quot;Service&quot;) provided by OrganizeMyTeam
            (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
          </p>
          <p>
            By accessing or using the Service, you agree to be bound by these
            Terms. If you disagree with any part of these Terms, you may not
            access the Service.
          </p>

          <h2>Description of Service</h2>
          <p>
            Team Manager is a financial management platform designed for youth
            sports team treasurers. The Service allows users to track payments,
            manage expenses, generate reports, and communicate with team
            members about financial matters.
          </p>

          <h2>Account Registration</h2>
          <p>
            To use certain features of the Service, you must register for an
            account. When you register, you agree to:
          </p>
          <ul>
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and promptly update your account information</li>
            <li>
              Maintain the security and confidentiality of your login
              credentials
            </li>
            <li>
              Accept responsibility for all activities that occur under your
              account
            </li>
            <li>
              Notify us immediately of any unauthorized use of your account
            </li>
          </ul>
          <p>
            You must be at least 18 years old to create an account and use the
            Service.
          </p>

          <h2>Acceptable Use</h2>
          <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul>
            <li>
              Use the Service in any way that violates any applicable law or
              regulation
            </li>
            <li>
              Use the Service to transmit any unauthorized advertising or
              promotional materials
            </li>
            <li>
              Impersonate any person or entity, or falsely state or
              misrepresent your affiliation with a person or entity
            </li>
            <li>
              Interfere with or disrupt the Service or servers or networks
              connected to the Service
            </li>
            <li>
              Attempt to gain unauthorized access to any portion of the Service
              or any other systems or networks
            </li>
            <li>
              Use any automated means to access the Service or collect
              information from the Service
            </li>
            <li>
              Upload or transmit viruses, malware, or other malicious code
            </li>
          </ul>

          <h2>User Content</h2>
          <p>
            You are responsible for all content you upload, post, or otherwise
            make available through the Service (&quot;User Content&quot;). You
            retain ownership of your User Content, but you grant us a
            non-exclusive, worldwide, royalty-free license to use, store, and
            process your User Content solely for the purpose of providing the
            Service.
          </p>
          <p>You represent and warrant that:</p>
          <ul>
            <li>
              You own or have the necessary rights to use and authorize the use
              of your User Content
            </li>
            <li>
              Your User Content does not violate the rights of any third party
            </li>
            <li>
              You have obtained any necessary consents from individuals whose
              information you upload to the Service
            </li>
          </ul>

          <h2>Payment Terms</h2>
          <h3>Free Tier</h3>
          <p>
            We offer a free tier of the Service with certain limitations. The
            free tier is provided &quot;as is&quot; and may be modified or
            discontinued at any time.
          </p>

          <h3>Paid Subscriptions</h3>
          <p>
            Paid subscription plans are billed in advance on a monthly or annual
            basis. You agree to pay all fees associated with your subscription
            plan. Fees are non-refundable except as required by law or as
            explicitly stated in these Terms.
          </p>

          <h3>Cancellation</h3>
          <p>
            You may cancel your subscription at any time. Cancellation will take
            effect at the end of your current billing period. You will not
            receive a refund for any unused portion of your subscription.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality
            are owned by OrganizeMyTeam and are protected by international
            copyright, trademark, patent, trade secret, and other intellectual
            property laws.
          </p>
          <p>
            You may not copy, modify, distribute, sell, or lease any part of the
            Service or included software, nor may you reverse engineer or
            attempt to extract the source code of the software.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            The Service may contain links to or integrate with third-party
            websites or services. We are not responsible for the content,
            privacy policies, or practices of any third-party websites or
            services. Your use of third-party services is at your own risk.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
            AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT.
          </p>
          <p>
            We do not warrant that the Service will be uninterrupted, secure, or
            error-free, that defects will be corrected, or that the Service is
            free of viruses or other harmful components.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL
            ORGANIZEMYTEAM, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, OR
            AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION,
            LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES,
            RESULTING FROM:
          </p>
          <ul>
            <li>Your access to or use of or inability to access or use the Service</li>
            <li>Any conduct or content of any third party on the Service</li>
            <li>Any content obtained from the Service</li>
            <li>
              Unauthorized access, use, or alteration of your transmissions or
              content
            </li>
          </ul>

          <h2>Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless OrganizeMyTeam and
            its officers, directors, employees, and agents from and against any
            claims, liabilities, damages, judgments, awards, losses, costs, or
            expenses (including reasonable attorneys&apos; fees) arising out of
            or relating to your violation of these Terms or your use of the
            Service.
          </p>

          <h2>Termination</h2>
          <p>
            We may terminate or suspend your account and access to the Service
            immediately, without prior notice or liability, for any reason,
            including if you breach these Terms.
          </p>
          <p>
            Upon termination, your right to use the Service will immediately
            cease. If you wish to terminate your account, you may do so by
            contacting us or using the account deletion feature in the Service.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the State of Delaware, United States, without regard to
            its conflict of law provisions.
          </p>

          <h2>Dispute Resolution</h2>
          <p>
            Any dispute arising from these Terms or your use of the Service
            shall first be attempted to be resolved through good faith
            negotiations. If the dispute cannot be resolved through negotiation,
            it shall be resolved through binding arbitration in accordance with
            the rules of the American Arbitration Association.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time.
            If a revision is material, we will provide at least 30 days&apos;
            notice prior to any new terms taking effect. What constitutes a
            material change will be determined at our sole discretion.
          </p>
          <p>
            Your continued use of the Service after any changes to these Terms
            constitutes acceptance of those changes.
          </p>

          <h2>Severability</h2>
          <p>
            If any provision of these Terms is held to be unenforceable or
            invalid, such provision will be changed and interpreted to
            accomplish the objectives of such provision to the greatest extent
            possible under applicable law, and the remaining provisions will
            continue in full force and effect.
          </p>

          <h2>Entire Agreement</h2>
          <p>
            These Terms constitute the entire agreement between you and
            OrganizeMyTeam regarding the use of the Service and supersede all
            prior and contemporaneous understandings, agreements,
            representations, and warranties.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:legal@organizemyteam.com">
                legal@organizemyteam.com
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
