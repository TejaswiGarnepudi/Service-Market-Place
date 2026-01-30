import React from 'react';
import { Link } from 'react-router-dom';
import './Termsandconditions.css';

const Termsandconditions = () => {
  return (
    <div className="terms-container">
      <div className="terms-content">
        <header className="terms-header">
          <h1>Terms and Conditions</h1>
          <p className="last-updated">Last Updated: January 30, 2026</p>
        </header>

        <div className="terms-body">
          <section className="terms-section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to ServiceHub. These Terms and Conditions govern your use of our platform
              and the services provided. By accessing or using ServiceHub, you agree to be bound
              by these terms. If you do not agree with any part of these terms, you may not use
              our services.
            </p>
          </section>

          <section className="terms-section">
            <h2>2. Definitions</h2>
            <p>For the purposes of these Terms and Conditions:</p>
            <ul>
              <li><strong>"Platform"</strong> refers to the ServiceHub website and mobile applications.</li>
              <li><strong>"User"</strong> refers to any individual or entity using the Platform.</li>
              <li><strong>"Seller"</strong> refers to users offering services on the Platform.</li>
              <li><strong>"Buyer"</strong> refers to users purchasing services on the Platform.</li>
              <li><strong>"Service"</strong> refers to any freelance service offered through the Platform.</li>
              <li><strong>"Order"</strong> refers to a buyer's purchase of a seller's service.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>3. Account Registration</h2>
            <p>To use certain features of ServiceHub, you must register for an account:</p>
            <ul>
              <li>You must be at least 18 years old to create an account.</li>
              <li>You must provide accurate, current, and complete information during registration.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You are responsible for all activities that occur under your account.</li>
              <li>You must notify us immediately of any unauthorized use of your account.</li>
              <li>We reserve the right to suspend or terminate accounts that violate these terms.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>4. User Responsibilities</h2>
            <h3>4.1 General Conduct</h3>
            <p>All users agree to:</p>
            <ul>
              <li>Use the Platform in compliance with all applicable laws and regulations.</li>
              <li>Not engage in fraudulent, abusive, or illegal activities.</li>
              <li>Not harass, threaten, or intimidate other users.</li>
              <li>Not post false, misleading, or deceptive content.</li>
              <li>Not use the Platform to distribute spam or unsolicited messages.</li>
              <li>Not attempt to gain unauthorized access to the Platform or other user accounts.</li>
            </ul>

            <h3>4.2 Seller Responsibilities</h3>
            <p>Sellers must:</p>
            <ul>
              <li>Provide accurate descriptions of their services.</li>
              <li>Deliver services as described and within agreed timeframes.</li>
              <li>Maintain professional communication with buyers.</li>
              <li>Not offer services that violate intellectual property rights.</li>
              <li>Not request or provide contact information to circumvent Platform fees.</li>
            </ul>

            <h3>4.3 Buyer Responsibilities</h3>
            <p>Buyers must:</p>
            <ul>
              <li>Provide clear and complete project requirements.</li>
              <li>Make timely payments for services ordered.</li>
              <li>Respond to seller communications in a reasonable timeframe.</li>
              <li>Not request services that violate laws or these terms.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>5. Service Listings and Orders</h2>
            <h3>5.1 Service Listings</h3>
            <ul>
              <li>Sellers may create listings to offer their services.</li>
              <li>All listings must comply with our content policies.</li>
              <li>We reserve the right to remove listings that violate our policies.</li>
              <li>Sellers are responsible for the accuracy of their listings.</li>
            </ul>

            <h3>5.2 Orders</h3>
            <ul>
              <li>When a buyer purchases a service, a binding contract is created between buyer and seller.</li>
              <li>Orders cannot be cancelled without mutual agreement or valid cause.</li>
              <li>Sellers must deliver completed work within the specified delivery time.</li>
              <li>Buyers must approve or request revisions within the review period.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>6. Payment Terms</h2>
            <h3>6.1 Fees</h3>
            <ul>
              <li>ServiceHub charges a service fee on all transactions.</li>
              <li>Sellers pay a commission fee on earnings (typically 20% of order value).</li>
              <li>Buyers may pay processing fees depending on payment method.</li>
              <li>All fees are clearly displayed before transaction completion.</li>
            </ul>

            <h3>6.2 Payment Processing</h3>
            <ul>
              <li>Payments are held in escrow until order completion.</li>
              <li>Funds are released to sellers upon order approval or automatic completion.</li>
              <li>Sellers can withdraw earnings according to withdrawal policies.</li>
              <li>Minimum withdrawal amounts may apply.</li>
            </ul>

            <h3>6.3 Refunds</h3>
            <ul>
              <li>Refunds are processed according to our refund policy.</li>
              <li>Disputes may be resolved through our resolution center.</li>
              <li>ServiceHub reserves the right to issue refunds at its discretion.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>7. Intellectual Property</h2>
            <h3>7.1 Platform Content</h3>
            <ul>
              <li>All Platform content, including logos, design, and code, is owned by ServiceHub.</li>
              <li>Users may not reproduce, distribute, or create derivative works without permission.</li>
            </ul>

            <h3>7.2 User Content</h3>
            <ul>
              <li>Users retain ownership of content they create and upload.</li>
              <li>By uploading content, users grant ServiceHub a license to use, display, and distribute it.</li>
              <li>Users represent that they have rights to all content they upload.</li>
              <li>Completed work belongs to the buyer unless otherwise agreed.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>8. Prohibited Activities</h2>
            <p>Users are strictly prohibited from:</p>
            <ul>
              <li>Offering or requesting illegal services.</li>
              <li>Engaging in fraud, scams, or deceptive practices.</li>
              <li>Sharing personal contact information to avoid fees.</li>
              <li>Creating multiple accounts to manipulate the system.</li>
              <li>Spamming, phishing, or distributing malware.</li>
              <li>Infringing on intellectual property rights.</li>
              <li>Manipulating reviews or ratings.</li>
              <li>Reselling ServiceHub services without authorization.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>9. Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Our use of your personal information is governed by
              our Privacy Policy, which is incorporated into these terms by reference. By using
              ServiceHub, you consent to our collection and use of your data as described in the
              Privacy Policy.
            </p>
          </section>

          <section className="terms-section">
            <h2>10. Dispute Resolution</h2>
            <ul>
              <li>Users are encouraged to resolve disputes directly through Platform communication.</li>
              <li>If direct resolution fails, disputes may be escalated to our support team.</li>
              <li>ServiceHub may mediate disputes but is not obligated to do so.</li>
              <li>Final decisions on disputes rest with ServiceHub at its sole discretion.</li>
              <li>Users agree to binding arbitration for unresolved disputes where applicable by law.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>11. Limitation of Liability</h2>
            <p>
              ServiceHub acts as a marketplace platform connecting buyers and sellers. We do not
              guarantee the quality, safety, or legality of services offered. To the maximum extent
              permitted by law:
            </p>
            <ul>
              <li>ServiceHub is not liable for any indirect, incidental, or consequential damages.</li>
              <li>Our total liability shall not exceed the fees paid by you in the past 12 months.</li>
              <li>We are not responsible for user conduct or service quality.</li>
              <li>We do not guarantee uninterrupted or error-free Platform operation.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>12. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless ServiceHub, its affiliates, and employees
              from any claims, damages, losses, or expenses arising from your use of the Platform,
              violation of these terms, or infringement of any third-party rights.
            </p>
          </section>

          <section className="terms-section">
            <h2>13. Termination</h2>
            <ul>
              <li>You may terminate your account at any time through account settings.</li>
              <li>We may suspend or terminate accounts that violate these terms.</li>
              <li>Upon termination, you lose access to Platform features and pending earnings may be forfeited.</li>
              <li>Obligations and liabilities incurred prior to termination survive.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>14. Modifications to Terms</h2>
            <p>
              ServiceHub reserves the right to modify these Terms and Conditions at any time.
              We will notify users of significant changes via email or Platform notification.
              Continued use of the Platform after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="terms-section">
            <h2>15. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws
              of the jurisdiction in which ServiceHub operates, without regard to conflict of law
              principles. Any disputes shall be resolved in the courts of that jurisdiction.
            </p>
          </section>

          <section className="terms-section">
            <h2>16. Contact Information</h2>
            <p>
              If you have questions about these Terms and Conditions, please contact us at:
            </p>
            <ul>
              <li>Email: legal@servicehub.com</li>
              <li>Support: support@servicehub.com</li>
              <li>Address: 123 Service Street, Business City, ST 12345</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>17. Miscellaneous</h2>
            <ul>
              <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions remain in effect.</li>
              <li><strong>Entire Agreement:</strong> These terms constitute the entire agreement between you and ServiceHub.</li>
              <li><strong>No Waiver:</strong> Failure to enforce any right does not constitute a waiver of that right.</li>
              <li><strong>Assignment:</strong> You may not assign these terms without our consent.</li>
            </ul>
          </section>

          <div className="terms-acceptance">
            <p>
              By using ServiceHub, you acknowledge that you have read, understood, and agree to be
              bound by these Terms and Conditions.
            </p>
          </div>
        </div>

        <div className="terms-footer">
          <Link to="/login" className="back-link">← Back to Login</Link>
          <Link to="/privacy-policy" className="privacy-link">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Termsandconditions;