import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import LegalNav from '@/components/LegalNav'

export const metadata = {
  title: 'Privacy Policy',
  description:
    'How Kashir Wath collects, uses, stores, shares and protects your personal information when you interact with us.',
}

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        image="/images/hero.jpg"
        label="Privacy"
        title="Privacy Policy"
        subtitle="How we collect, use and protect your information — with care and transparency."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
        compact
      />

      <section className="legal-page">
        <div className="legal-container">
          <RevealOnScroll>
            <LegalNav />
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="legal-intro">
              <p>
                At KASHIR WATH, we respect your privacy and are committed to handling your personal
                information responsibly, transparently and securely. This Privacy Policy explains
                how we collect, use, store, share and protect information when you visit our
                website, contact us, request a travel proposal, make a booking or participate in
                our travel experiences.
              </p>
            </div>
          </RevealOnScroll>

          {/* TOC */}
          <RevealOnScroll>
            <div className="legal-toc">
              <h4>Contents</h4>
              <ol>
                <li><a href="#commitment">Our Commitment to Your Privacy</a></li>
                <li><a href="#information-collected">Information We May Collect</a></li>
                <li><a href="#how-we-use">How We Use Your Information</a></li>
                <li><a href="#sharing-information">Sharing Information with Service Providers</a></li>
                <li><a href="#communications">WhatsApp, Telephone & Email Communications</a></li>
                <li><a href="#marketing">Marketing Communications</a></li>
                <li><a href="#cookies">Cookies and Website Technologies</a></li>
                <li><a href="#data-security">Data Security</a></li>
                <li><a href="#data-retention">Data Retention</a></li>
                <li><a href="#privacy-rights">Your Privacy Rights</a></li>
                <li><a href="#children">Children&apos;s Information</a></li>
                <li><a href="#external-websites">External Websites and Services</a></li>
                <li><a href="#policy-changes">Changes to This Policy</a></li>
                <li><a href="#privacy-enquiries">Privacy Enquiries and Grievances</a></li>
                <li><a href="#governing-law">Governing Law and Jurisdiction</a></li>
                <li><a href="#our-promise">Our Promise</a></li>
              </ol>
            </div>
          </RevealOnScroll>

          {/* Section 1 */}
          <RevealOnScroll>
            <div className="legal-section" id="commitment">
              <span className="legal-section-number">Section 1</span>
              <h2>Our Commitment to Your Privacy</h2>
              <p>
                At KASHIR WATH, we respect your privacy and are committed to handling your personal
                information responsibly, transparently and securely.
              </p>
              <p>
                We collect and use personal information only for legitimate business purposes and
                in accordance with applicable law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 2 */}
          <RevealOnScroll>
            <div className="legal-section" id="information-collected">
              <span className="legal-section-number">Section 2</span>
              <h2>Information We May Collect</h2>
              <p>
                Depending on your interaction with us, we may collect the following types of
                information:
              </p>

              <h3>A. Personal and Contact Information</h3>
              <ul>
                <li>Name and contact details.</li>
                <li>Mobile number, email address and communication preferences.</li>
                <li>City or country of residence, where relevant to planning your journey.</li>
              </ul>

              <h3>B. Booking and Travel Information</h3>
              <ul>
                <li>Travel dates, destination preferences and itinerary details.</li>
                <li>Number of travellers and relevant accommodation preferences.</li>
                <li>Booking confirmations, payment status and transaction references.</li>
                <li>Special requests relating to meals, transport, accommodation or activities.</li>
              </ul>

              <h3>C. Information Required for Travel Arrangements</h3>
              <p>
                Where reasonably necessary, we may request identity documents, permit-related
                information or other travel documentation required by law, accommodation providers,
                transport operators or relevant authorities.
              </p>
              <p>
                We will seek only the information reasonably necessary for the relevant purpose.
              </p>

              <h3>D. Special Assistance Information</h3>
              <p>
                If you voluntarily share information about mobility, accessibility, dietary needs
                or other assistance requirements, we may use it to help assess whether suitable
                arrangements can be made.
              </p>
              <p>
                Please share sensitive information only where necessary for your travel
                arrangements.
              </p>

              <h3>E. Website and Technical Information</h3>
              <p>
                Where applicable, our website or service providers may collect technical
                information such as device type, browser, approximate location, website usage, IP
                address and cookie identifiers.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 3 */}
          <RevealOnScroll>
            <div className="legal-section" id="how-we-use">
              <span className="legal-section-number">Section 3</span>
              <h2>How We Use Your Information</h2>
              <p>We may use your information to:</p>
              <ul>
                <li>Respond to enquiries and prepare travel proposals.</li>
                <li>Plan, coordinate and administer bookings.</li>
                <li>Communicate booking confirmations, payment reminders and itinerary updates.</li>
                <li>Arrange accommodation, transport, permits, activities and other confirmed services.</li>
                <li>Address special requests and reasonable assistance requirements.</li>
                <li>Communicate important safety information and travel disruptions.</li>
                <li>Process payments, refunds and accounting records.</li>
                <li>Respond to complaints, disputes and customer-support requests.</li>
                <li>Improve our services and website.</li>
                <li>Send promotional communications where legally permitted and, where required, with your consent.</li>
                <li>Comply with legal, regulatory, tax, accounting and lawful authority requirements.</li>
                <li>Prevent fraud, misuse and unauthorised transactions.</li>
              </ul>
              <p>
                We will not knowingly use personal information for purposes materially incompatible
                with the purpose for which it was collected, except where permitted or required by
                law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 4 */}
          <RevealOnScroll>
            <div className="legal-section" id="sharing-information">
              <span className="legal-section-number">Section 4</span>
              <h2>Sharing Information with Service Providers</h2>
              <p>
                To deliver your confirmed travel arrangements, we may share relevant information
                with:
              </p>
              <ul>
                <li>Hotels, homestays and accommodation providers.</li>
                <li>Transport operators and drivers.</li>
                <li>Local guides, activity providers and other travel partners.</li>
                <li>Permit authorities or government agencies where required.</li>
                <li>Payment processors, banks and payment service providers.</li>
                <li>Website hosting, booking, communication, analytics and technical-support providers.</li>
                <li>Professional advisers, insurers or legal representatives where reasonably necessary.</li>
                <li>Law enforcement or public authorities where disclosure is legally required.</li>
              </ul>
              <p>
                We aim to share only information reasonably necessary for the relevant purpose.
              </p>
              <p>
                We do not sell personal information to third parties as a commercial data product.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 5 */}
          <RevealOnScroll>
            <div className="legal-section" id="communications">
              <span className="legal-section-number">Section 5</span>
              <h2>WhatsApp, Telephone and Email Communications</h2>
              <p>
                If you contact us through WhatsApp, telephone, email or social media, we may use
                the information you provide to respond and manage your enquiry or booking.
              </p>
              <p>
                Please be aware that third-party communication platforms operate under their own
                terms and privacy policies.
              </p>
              <p>
                For sensitive documents, please use the submission method we designate where
                available and avoid sharing unnecessary personal information through public
                channels.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 6 */}
          <RevealOnScroll>
            <div className="legal-section" id="marketing">
              <span className="legal-section-number">Section 6</span>
              <h2>Marketing Communications</h2>
              <p>
                We may send travel inspiration, new itineraries, offers or updates where permitted
                by applicable law.
              </p>
              <p>
                You may opt out of promotional communications at any time by using the unsubscribe
                option, replying to the communication or contacting us.
              </p>
              <p>
                Opting out of marketing will not prevent us from sending essential communications
                concerning an existing booking, payment, safety matter or legal obligation.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 7 */}
          <RevealOnScroll>
            <div className="legal-section" id="cookies">
              <span className="legal-section-number">Section 7</span>
              <h2>Cookies and Website Technologies</h2>
              <p>
                Our website may use cookies or similar technologies to maintain functionality,
                understand website usage, remember preferences or support permitted analytics and
                marketing activities.
              </p>
              <p>
                Where consent is required, we will seek it before using the relevant non-essential
                technologies.
              </p>
              <p>
                You may be able to control cookies through your browser or our cookie-management
                tools, where available. Disabling certain cookies may affect website functionality.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 8 */}
          <RevealOnScroll>
            <div className="legal-section" id="data-security">
              <span className="legal-section-number">Section 8</span>
              <h2>Data Security</h2>
              <p>
                We use reasonable technical, organisational and administrative safeguards designed
                to protect personal information against unauthorised access, disclosure, alteration,
                loss or misuse.
              </p>
              <p>
                However, no website, digital platform, messaging service or electronic transmission
                can be guaranteed completely secure.
              </p>
              <p>
                You are responsible for taking reasonable precautions when sharing information,
                protecting your devices and verifying that you are communicating through an
                official KASHIR WATH channel.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 9 */}
          <RevealOnScroll>
            <div className="legal-section" id="data-retention">
              <span className="legal-section-number">Section 9</span>
              <h2>Data Retention</h2>
              <p>
                We retain personal information only for as long as reasonably necessary for the
                purposes described in this Policy, including booking administration, customer
                support, legal compliance, accounting, dispute resolution and the establishment or
                defence of legal claims.
              </p>
              <p>
                When information is no longer required, we will take reasonable steps to delete it,
                anonymise it or securely dispose of it, subject to applicable law and legitimate
                retention requirements.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 10 */}
          <RevealOnScroll>
            <div className="legal-section" id="privacy-rights">
              <span className="legal-section-number">Section 10</span>
              <h2>Your Privacy Rights</h2>
              <p>
                Subject to applicable law, you may have the right to request access to, correction
                of, updating of or deletion of certain personal information, withdraw consent where
                processing is based on consent, or raise a privacy-related grievance.
              </p>
              <p>
                Some information may need to be retained where legally required or necessary to
                complete a booking, maintain records or resolve a dispute.
              </p>
              <p>
                We may need to verify your identity before acting on a request.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 11 */}
          <RevealOnScroll>
            <div className="legal-section" id="children">
              <span className="legal-section-number">Section 11</span>
              <h2>Children&apos;s Information</h2>
              <p>
                Where a booking involves a child, we generally rely on a parent, guardian or
                authorised adult to provide the information necessary for travel arrangements.
              </p>
              <p>
                We do not knowingly collect children&apos;s personal information for unrelated
                marketing purposes without an appropriate lawful basis or required consent.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 12 */}
          <RevealOnScroll>
            <div className="legal-section" id="external-websites">
              <span className="legal-section-number">Section 12</span>
              <h2>External Websites and Services</h2>
              <p>
                Our website or communications may contain links to third-party websites, booking
                platforms or service providers.
              </p>
              <p>
                Those services are governed by their own terms and privacy policies. KASHIR WATH
                does not control their independent privacy practices.
              </p>
              <p>
                We encourage you to review their policies before sharing information directly with
                them.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 13 */}
          <RevealOnScroll>
            <div className="legal-section" id="policy-changes">
              <span className="legal-section-number">Section 13</span>
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy to reflect changes in our services, website,
                business practices or applicable law.
              </p>
              <p>
                The updated version will be published with a revised effective date. Material
                changes will be communicated where required by law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 14 */}
          <RevealOnScroll>
            <div className="legal-section" id="privacy-enquiries">
              <span className="legal-section-number">Section 14</span>
              <h2>Privacy Enquiries and Grievances</h2>
              <p>
                For privacy-related questions, requests or complaints, please contact:
              </p>
              <ul>
                <li>Brand: KASHIR WATH</li>
                <li>Email: Available upon request</li>
                <li>Telephone/WhatsApp: Available upon request</li>
              </ul>
              <p>
                We will review privacy complaints and respond within the period required by
                applicable law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 15 */}
          <RevealOnScroll>
            <div className="legal-section" id="governing-law">
              <span className="legal-section-number">Section 15</span>
              <h2>Governing Law and Jurisdiction</h2>
              <p>
                This Privacy Policy is governed by the laws of India.
              </p>
              <p>
                Subject to applicable law, disputes arising from this Policy shall be subject to
                the exclusive jurisdiction of the competent courts at New Delhi, India, provided
                that such courts have jurisdiction over the matter.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 16 */}
          <RevealOnScroll>
            <div className="legal-section" id="our-promise">
              <span className="legal-section-number">Section 16</span>
              <h2>Our Promise</h2>
              <p>
                We value the trust our guests place in us. We aim to handle personal information
                with care, use it responsibly and communicate transparently about how it supports
                your journey.
              </p>
            </div>
          </RevealOnScroll>

          {/* Footer */}
          <RevealOnScroll>
            <div className="legal-footer">
              <div className="legal-brand">KASHIR WATH</div>
              <div className="legal-tagline">Discover Kashmir with care, respect and a deeper connection.</div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
