import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import LegalNav from '@/components/LegalNav'

export const metadata = {
  title: 'Complaints & Grievance Redressal Policy',
  description:
    'How to submit complaints, our review process, escalation procedures and resolution timelines for Kashir Wath travellers.',
}

export default function ComplaintsPolicy() {
  return (
    <>
      <PageHero
        image="/images/hero.jpg"
        label="Policies"
        title="Complaints & Grievance Redressal Policy"
        subtitle="Every concern deserves a fair hearing, a clear process and a considered response."
        breadcrumbs={[
          { label: 'Policies', href: '/policies' },
          { label: 'Complaints & Grievance' },
        ]}
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
                KASHIR WATH TOURS aims to provide carefully curated travel arrangements supported by
                clear communication and professional service. We encourage travellers to raise
                genuine concerns through the designated channels so that the relevant facts can be
                reviewed and an appropriate response considered.
              </p>
            </div>
          </RevealOnScroll>

          {/* TOC */}
          <RevealOnScroll>
            <div className="legal-toc">
              <h4>Contents</h4>
              <ol>
                <li><a href="#commitment">Our Commitment to Fair Complaint Handling</a></li>
                <li><a href="#what-may-be-raised">What May Be Raised as a Complaint</a></li>
                <li><a href="#how-to-submit">How to Submit a Complaint</a></li>
                <li><a href="#urgent-concerns">Urgent Concerns During Travel</a></li>
                <li><a href="#acknowledgement">Acknowledgement</a></li>
                <li><a href="#review">Review and Investigation</a></li>
                <li><a href="#resolution-time">Target Resolution Time</a></li>
                <li><a href="#possible-outcomes">Possible Outcomes</a></li>
                <li><a href="#third-party">Complaints Involving Third-Party Suppliers</a></li>
                <li><a href="#escalation">Escalation</a></li>
                <li><a href="#refund-complaints">Refund-Related Complaints</a></li>
                <li><a href="#safety-complaints">Complaints About Safety or Serious Misconduct</a></li>
                <li><a href="#good-faith">Good-Faith Communication and Evidence</a></li>
                <li><a href="#privacy">Privacy and Confidentiality</a></li>
                <li><a href="#external-remedies">External Remedies</a></li>
                <li><a href="#no-retaliation">No Retaliation for Genuine Complaints</a></li>
                <li><a href="#policy-updates">Policy Updates</a></li>
                <li><a href="#contact">Contact</a></li>
              </ol>
            </div>
          </RevealOnScroll>

          {/* Section 1 */}
          <RevealOnScroll>
            <div className="legal-section" id="commitment">
              <span className="legal-section-number">Section 1</span>
              <h2>Our Commitment to Fair Complaint Handling</h2>
              <p>
                KASHIR WATH TOURS aims to provide carefully curated travel arrangements supported by clear communication and professional service.
              </p>
              <p>
                We recognise that concerns may arise before departure, during a journey or after its completion.
              </p>
              <p>
                We encourage travellers to raise genuine concerns through the designated channels so that the relevant facts can be reviewed and an appropriate response considered.
              </p>
              <p>
                This policy establishes a transparent process for receiving, acknowledging, assessing and responding to complaints.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 2 */}
          <RevealOnScroll>
            <div className="legal-section" id="what-may-be-raised">
              <span className="legal-section-number">Section 2</span>
              <h2>What May Be Raised as a Complaint</h2>
              <p>A complaint may relate to matters such as:</p>
              <ul>
                <li>A material discrepancy between the confirmed booking and the service provided.</li>
                <li>Accommodation or transport arrangements.</li>
                <li>Communication or booking administration.</li>
                <li>An itinerary change or service interruption.</li>
                <li>Conduct of a representative or service provider.</li>
                <li>A safety concern or incident.</li>
                <li>A payment, cancellation or refund issue.</li>
                <li>A concern relating to accessibility or a disclosed requirement.</li>
                <li>Another matter directly connected with a service arranged or provided by KASHIR WATH TOURS.</li>
              </ul>
              <p>
                Complaints should describe the relevant concern clearly and provide reasonable supporting information where available.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 3 */}
          <RevealOnScroll>
            <div className="legal-section" id="how-to-submit">
              <span className="legal-section-number">Section 3</span>
              <h2>How to Submit a Complaint</h2>
              <p>Complaints may be submitted through:</p>
              <p>
                Official Email: [Official Business Email]<br />
                Website: [Official Website URL]<br />
                Postal Address: [Complete Business Address, New Delhi, India]
              </p>
              <p>Please include, where applicable:</p>
              <ul>
                <li>Traveller&apos;s name.</li>
                <li>Booking reference.</li>
                <li>Travel dates.</li>
                <li>Description of the concern.</li>
                <li>Date and location of the incident.</li>
                <li>Relevant photographs, receipts, messages or other supporting documents.</li>
                <li>The outcome or remedy being requested.</li>
              </ul>
              <p>
                Travellers should avoid including unnecessary sensitive personal information.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 4 */}
          <RevealOnScroll>
            <div className="legal-section" id="urgent-concerns">
              <span className="legal-section-number">Section 4</span>
              <h2>Urgent Concerns During Travel</h2>
              <p>
                Where a concern affects immediate safety, medical assistance or access to an essential service, travellers should notify the designated travel representative promptly.
              </p>
              <p>
                Where there is immediate danger, travellers should contact the appropriate emergency service or competent authority without waiting for a response from KASHIR WATH TOURS.
              </p>
              <p>
                A formal written complaint may be submitted after the immediate situation has been addressed.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 5 */}
          <RevealOnScroll>
            <div className="legal-section" id="acknowledgement">
              <span className="legal-section-number">Section 5</span>
              <h2>Acknowledgement</h2>
              <p>
                KASHIR WATH TOURS aims to acknowledge a complaint within three business days of receipt, where reasonably practicable.
              </p>
              <p>
                The acknowledgement may confirm receipt, request further information or explain the next step.
              </p>
              <p>
                This is a service target and does not replace any mandatory statutory deadline or legally prescribed grievance procedure.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 6 */}
          <RevealOnScroll>
            <div className="legal-section" id="review">
              <span className="legal-section-number">Section 6</span>
              <h2>Review and Investigation</h2>
              <p>
                Complaints will be assessed according to their nature and seriousness.
              </p>
              <p>Where reasonably necessary, KASHIR WATH TOURS may:</p>
              <ul>
                <li>Review the booking confirmation and applicable policies.</li>
                <li>Examine communications and relevant documents.</li>
                <li>Request clarification from the traveller.</li>
                <li>Seek information from a relevant supplier or representative.</li>
                <li>Review the circumstances of the incident.</li>
                <li>Consider whether an adjustment, corrective action or other remedy is appropriate.</li>
              </ul>
              <p>
                The review will be conducted on the basis of the information reasonably available.
              </p>
              <p>
                Where a supplier or another third party is involved, the time required to obtain relevant information may affect the investigation.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 7 */}
          <RevealOnScroll>
            <div className="legal-section" id="resolution-time">
              <span className="legal-section-number">Section 7</span>
              <h2>Target Resolution Time</h2>
              <p>
                KASHIR WATH TOURS aims to provide a substantive response within 15 business days of receiving sufficient information to assess the complaint.
              </p>
              <p>
                If the matter requires additional investigation, supplier records or other information, we will aim to communicate the reason for the delay and provide an updated expected timeframe.
              </p>
              <p>
                These are internal service targets. They do not override any mandatory legal deadline, limitation period or statutory remedy available to a traveller.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 8 */}
          <RevealOnScroll>
            <div className="legal-section" id="possible-outcomes">
              <span className="legal-section-number">Section 8</span>
              <h2>Possible Outcomes</h2>
              <p>Depending on the facts, the booking terms and applicable law, possible outcomes may include:</p>
              <ul>
                <li>An explanation or clarification.</li>
                <li>Correction of a booking or administrative error.</li>
                <li>Appropriate corrective action for a service issue.</li>
                <li>A proposed alternative service.</li>
                <li>A price adjustment or refund where contractually or legally due.</li>
                <li>Referral to a relevant supplier for further review.</li>
                <li>An explanation of why a requested remedy cannot be provided.</li>
                <li>Another reasonable response appropriate to the circumstances.</li>
              </ul>
              <p>
                The availability of a particular remedy will depend on the nature of the complaint and the applicable contractual and legal framework.
              </p>
              <p>
                A complaint does not automatically establish liability or an entitlement to a full refund. Equally, this policy does not restrict a remedy to which a traveller is legally entitled.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 9 */}
          <RevealOnScroll>
            <div className="legal-section" id="third-party">
              <span className="legal-section-number">Section 9</span>
              <h2>Complaints Involving Third-Party Suppliers</h2>
              <p>
                Where a complaint concerns accommodation, transport, a guide or another supplier, KASHIR WATH TOURS will assess the matter in light of the services it arranged or undertook to provide.
              </p>
              <p>
                Where appropriate, we may seek a response or corrective action from the supplier.
              </p>
              <p>
                The existence of a third-party supplier does not automatically absolve KASHIR WATH TOURS of any contractual or legal responsibility it may have.
              </p>
              <p>
                Where the supplier is independently engaged by the traveller, the respective responsibilities will be assessed according to the actual arrangement, relevant documents and applicable law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 10 */}
          <RevealOnScroll>
            <div className="legal-section" id="escalation">
              <span className="legal-section-number">Section 10</span>
              <h2>Escalation</h2>
              <p>
                If a traveller is dissatisfied with the initial response, they may request an internal review by writing to:
              </p>
              <p>
                Escalation Contact: [Name or Designated Role]<br />
                Email: [Escalation Email, if separate]
              </p>
              <p>
                The escalation request should explain which aspect of the original response is disputed and include any additional relevant information.
              </p>
              <p>
                Where reasonably practicable, the escalated matter will be reviewed by a person who was not solely responsible for the original decision, if such a person is available within the business.
              </p>
              <p>
                KASHIR WATH TOURS will aim to communicate the outcome of the internal review within a reasonable period.
              </p>
              <p>
                Internal escalation does not require a traveller to waive or delay any legal right or remedy.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 11 */}
          <RevealOnScroll>
            <div className="legal-section" id="refund-complaints">
              <span className="legal-section-number">Section 11</span>
              <h2>Refund-Related Complaints</h2>
              <p>
                Complaints concerning cancellations, refunds, deductions or rescheduling will be reviewed under the applicable booking documents and relevant law.
              </p>
              <p>The review may require verification of:</p>
              <ul>
                <li>Amounts paid.</li>
                <li>Services delivered or reserved.</li>
                <li>Applicable cancellation terms.</li>
                <li>Supplier charges and recoverable amounts.</li>
                <li>Any agreed alternative arrangement.</li>
                <li>The reason for cancellation or disruption.</li>
              </ul>
              <p>
                Where a refund is due, KASHIR WATH TOURS will communicate the applicable process and expected timeframe, subject to any mandatory legal requirements.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 12 */}
          <RevealOnScroll>
            <div className="legal-section" id="safety-complaints">
              <span className="legal-section-number">Section 12</span>
              <h2>Complaints About Safety or Serious Misconduct</h2>
              <p>
                Complaints involving an alleged safety failure, harassment, discrimination, violence, serious misconduct or other significant incident will be treated according to the nature and urgency of the concern.
              </p>
              <p>
                Where appropriate, KASHIR WATH TOURS may preserve relevant records, seek supplier information or refer the matter to a competent authority.
              </p>
              <p>
                Nothing in this policy prevents a traveller from contacting the police, a consumer authority, a regulator or another competent body where appropriate.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 13 */}
          <RevealOnScroll>
            <div className="legal-section" id="good-faith">
              <span className="legal-section-number">Section 13</span>
              <h2>Good-Faith Communication and Evidence</h2>
              <p>
                All parties are encouraged to communicate respectfully and provide accurate information.
              </p>
              <p>
                KASHIR WATH TOURS may request reasonable supporting documentation where necessary to investigate a complaint.
              </p>
              <p>
                The business will handle complaints on their merits and will not reject a genuine complaint merely because the traveller has expressed dissatisfaction strongly or publicly.
              </p>
              <p>
                However, the investigation may be limited where relevant information is unavailable, contradictory or cannot reasonably be verified.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 14 */}
          <RevealOnScroll>
            <div className="legal-section" id="privacy">
              <span className="legal-section-number">Section 14</span>
              <h2>Privacy and Confidentiality</h2>
              <p>
                Complaint records may contain personal, financial or travel-related information.
              </p>
              <p>
                KASHIR WATH TOURS will handle such information in accordance with its Privacy Policy and applicable law.
              </p>
              <p>
                Information may be shared with relevant suppliers, advisers, insurers, authorities or other persons where reasonably necessary and legally permissible for investigating or resolving the matter.
              </p>
              <p>
                We will not promise absolute confidentiality where disclosure is legally required or reasonably necessary to address a legitimate safety, legal or contractual issue.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 15 */}
          <RevealOnScroll>
            <div className="legal-section" id="external-remedies">
              <span className="legal-section-number">Section 15</span>
              <h2>External Remedies</h2>
              <p>
                If a complaint remains unresolved, a traveller may pursue any available remedy through an appropriate consumer dispute-resolution mechanism, competent authority, court or other legally recognised forum, subject to applicable law.
              </p>
              <p>
                Nothing in this policy requires a traveller to accept an internal decision as final where the law provides a right to further recourse.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 16 */}
          <RevealOnScroll>
            <div className="legal-section" id="no-retaliation">
              <span className="legal-section-number">Section 16</span>
              <h2>No Retaliation for Genuine Complaints</h2>
              <p>
                KASHIR WATH TOURS does not intend to penalise a traveller merely for raising a genuine concern in good faith.
              </p>
              <p>
                However, the business reserves the right to respond appropriately to unlawful threats, harassment, fraudulent claims or abusive conduct, subject to applicable law.
              </p>
              <p>
                This provision does not restrict lawful criticism, truthful reviews or a traveller&apos;s right to seek legal redress.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 17 */}
          <RevealOnScroll>
            <div className="legal-section" id="policy-updates">
              <span className="legal-section-number">Section 17</span>
              <h2>Policy Updates</h2>
              <p>
                KASHIR WATH TOURS may update this policy to reflect changes in its procedures, business arrangements or applicable requirements.
              </p>
              <p>
                Any update will be subject to applicable law and will not retrospectively remove rights or remedies that cannot lawfully be withdrawn.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 18 */}
          <RevealOnScroll>
            <div className="legal-section" id="contact">
              <span className="legal-section-number">Section 18</span>
              <h2>Contact</h2>
              <p>
                KASHIR WATH TOURS<br />
                Email: [Official Business Email]<br />
                Website: [Official Website URL]<br />
                Business Address: [Complete Business Address, New Delhi, India]
              </p>
            </div>
          </RevealOnScroll>

          {/* Footer */}
          <RevealOnScroll>
            <div className="legal-footer">
              <p className="legal-brand">KASHIR WATH</p>
              <p className="legal-tagline">Soulful Journeys Through Kashir</p>
              <p>
                Every concern deserves a fair hearing, a clear process and a considered response.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
