import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import LegalNav from '@/components/LegalNav'

export const metadata = {
  title: 'Modification & Rescheduling Policy',
  description:
    'How to request modifications or rescheduling of confirmed Kashir Wath bookings, including charges, traveller-initiated and operator-initiated changes.',
}

export default function ModificationPolicy() {
  return (
    <>
      <PageHero
        image="/images/hero.jpg"
        label="Policies"
        title="Modification & Rescheduling Policy"
        subtitle="Every journey is carefully curated. Changes are considered thoughtfully, transparently and subject to practical feasibility."
        breadcrumbs={[
          { label: 'Policies', href: '/policies' },
          { label: 'Modification & Rescheduling' },
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
                KASHIR WATH TOURS specialises in curated journeys, heritage-led travel experiences,
                pilgrimage itineraries and personalised travel arrangements. This policy establishes
                the terms under which a traveller may request a modification or rescheduling of a
                confirmed booking, and the circumstances in which KASHIR WATH TOURS may need to
                modify arrangements.
              </p>
            </div>
          </RevealOnScroll>

          {/* TOC */}
          <RevealOnScroll>
            <div className="legal-toc">
              <h4>Contents</h4>
              <ol>
                <li><a href="#purpose">Purpose and Scope</a></li>
                <li><a href="#definitions">Definitions</a></li>
                <li><a href="#submission">Submission of Modification Requests</a></li>
                <li><a href="#before-confirmation">Modification Before Final Confirmation</a></li>
                <li><a href="#after-confirmation">Modifications After Booking Confirmation</a></li>
                <li><a href="#charges">Modification and Rescheduling Charges</a></li>
                <li><a href="#rescheduling">Rescheduling Requested by the Traveller</a></li>
                <li><a href="#traveller-names">Changes to Traveller Names or Passenger Composition</a></li>
                <li><a href="#accommodation-changes">Changes to Accommodation, Room Configuration or Transport</a></li>
                <li><a href="#itinerary-changes">Itinerary Changes Requested by the Traveller</a></li>
                <li><a href="#operator-changes">Changes Initiated by Kashir Wath Tours</a></li>
                <li><a href="#during-journey">Traveller-Initiated Changes During the Journey</a></li>
                <li><a href="#delays">Delays, Missed Connections and Late Arrival</a></li>
                <li><a href="#written-confirmation">Written Confirmation and Revised Documents</a></li>
                <li><a href="#cancellation-relationship">Relationship with Cancellation &amp; Refund Policy</a></li>
                <li><a href="#legal">Legal and Contractual Interpretation</a></li>
                <li><a href="#contact">Contact</a></li>
              </ol>
            </div>
          </RevealOnScroll>

          {/* Section 1 */}
          <RevealOnScroll>
            <div className="legal-section" id="purpose">
              <span className="legal-section-number">Section 1</span>
              <h2>Purpose and Scope</h2>
              <p>
                KASHIR WATH TOURS specialises in curated journeys, heritage-led travel experiences, pilgrimage itineraries and personalised travel arrangements.
              </p>
              <p>
                Our journeys may require advance coordination with accommodation providers, transport operators, local guides, activity providers and other service partners. Certain arrangements may be reserved specifically for a traveller, family or private group.
              </p>
              <p>
                Consequently, a change to one component of a confirmed booking may affect the availability, cost and feasibility of other components.
              </p>
              <p>
                This policy establishes the terms under which a traveller may request a modification or rescheduling of a confirmed booking, and the circumstances in which KASHIR WATH TOURS may need to modify arrangements for operational, safety-related or other legitimate reasons.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 2 */}
          <RevealOnScroll>
            <div className="legal-section" id="definitions">
              <span className="legal-section-number">Section 2</span>
              <h2>Definitions</h2>
              <p>For this policy:</p>
              <p>
                <strong>Modification</strong> means a requested change to an existing booking, including travel dates, passenger details, accommodation, room configuration, transport, itinerary, activities or other confirmed services.
              </p>
              <p>
                <strong>Rescheduling</strong> means moving a confirmed journey from its original departure date to a different date.
              </p>
              <p>
                <strong>Confirmed Booking</strong> means a booking for which KASHIR WATH TOURS has issued written confirmation after completion of the applicable booking requirements.
              </p>
              <p>
                <strong>Supplier Charges</strong> means cancellation fees, amendment fees, fare differences, accommodation penalties and other charges imposed by third-party service providers in connection with a requested change.
              </p>
              <p>
                <strong>Booking Value</strong> means the amount payable for the services covered by the relevant booking, as specified in the booking confirmation, subject to any expressly agreed adjustments.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 3 */}
          <RevealOnScroll>
            <div className="legal-section" id="submission">
              <span className="legal-section-number">Section 3</span>
              <h2>Submission of Modification Requests</h2>
              <p>
                All requests to modify or reschedule a confirmed booking must be submitted in writing through KASHIR WATH TOURS&apos; official business email or another official communication channel designated for bookings.
              </p>
              <p>
                A request communicated verbally, to a driver, to an individual supplier or through an unofficial channel will not automatically constitute an approved amendment.
              </p>
              <p>
                A requested change will become effective only when KASHIR WATH TOURS confirms its acceptance in writing.
              </p>
              <p>Travellers should provide reasonable notice and include:</p>
              <ul>
                <li>Booking reference or confirmation details.</li>
                <li>Original travel dates.</li>
                <li>Requested new dates, where applicable.</li>
                <li>Names of the affected travellers.</li>
                <li>Details of the requested change.</li>
                <li>Any relevant accessibility, accommodation or other requirements.</li>
              </ul>
              <p>
                Submitting a request does not guarantee that the requested change can be accommodated.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 4 */}
          <RevealOnScroll>
            <div className="legal-section" id="before-confirmation">
              <span className="legal-section-number">Section 4</span>
              <h2>Modification Before Final Confirmation</h2>
              <p>
                Before a booking is confirmed, travellers may request changes to the proposed itinerary or services.
              </p>
              <p>
                KASHIR WATH TOURS will consider such requests subject to availability, feasibility and any additional planning or supplier costs already incurred.
              </p>
              <p>
                An itinerary proposal, quotation, preliminary availability indication or verbal discussion does not guarantee that all proposed services will remain available until the booking is confirmed.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 5 */}
          <RevealOnScroll>
            <div className="legal-section" id="after-confirmation">
              <span className="legal-section-number">Section 5</span>
              <h2>Modifications After Booking Confirmation</h2>
              <p>
                After confirmation, changes will be assessed individually.
              </p>
              <p>Acceptance will depend on factors including:</p>
              <ul>
                <li>Availability of accommodation and transport.</li>
                <li>Supplier amendment and cancellation conditions.</li>
                <li>Whether the requested change affects other confirmed arrangements.</li>
                <li>The proximity of the departure date.</li>
                <li>The operational feasibility of the revised itinerary.</li>
                <li>Applicable permissions, weather conditions and access restrictions.</li>
                <li>Additional costs resulting from the change.</li>
              </ul>
              <p>
                KASHIR WATH TOURS may decline a requested modification where it is impracticable, unsafe, unavailable or inconsistent with supplier conditions.
              </p>
              <p>
                Where a change is feasible, the traveller will be informed of the revised arrangements and any additional charges or applicable credit before the amendment is confirmed.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 6 */}
          <RevealOnScroll>
            <div className="legal-section" id="charges">
              <span className="legal-section-number">Section 6</span>
              <h2>Modification and Rescheduling Charges</h2>
              <p>A modification or rescheduling request may result in:</p>
              <ol>
                <li>Supplier-imposed amendment or cancellation charges.</li>
                <li>Fare differences or revised accommodation rates.</li>
                <li>Additional transport or operational expenses.</li>
                <li>Additional charges for guides, permits, activities or other services.</li>
                <li>A reasonable administrative or re-planning fee, where disclosed in the booking terms and permitted by applicable law.</li>
              </ol>
              <p>
                Any additional charge will be communicated to the traveller before the requested change is confirmed, wherever reasonably practicable.
              </p>
              <p>
                Charges will not be imposed merely because a request was submitted. They must relate to the applicable booking terms, actual costs, disclosed fees or another lawful basis.
              </p>
              <p>
                Where the original service cannot be transferred to the revised dates, a fresh quotation may be required.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 7 */}
          <RevealOnScroll>
            <div className="legal-section" id="rescheduling">
              <span className="legal-section-number">Section 7</span>
              <h2>Rescheduling Requested by the Traveller</h2>
              <p>
                A traveller may request rescheduling by submitting a written request to KASHIR WATH TOURS.
              </p>
              <p>Rescheduling is subject to:</p>
              <ul>
                <li>Availability on the requested dates.</li>
                <li>Supplier approval.</li>
                <li>Revised pricing.</li>
                <li>The cancellation and amendment terms applicable to existing reservations.</li>
                <li>The operational feasibility of the revised itinerary.</li>
              </ul>
              <p>
                KASHIR WATH TOURS may offer alternative dates or a revised itinerary where the original arrangements are unavailable.
              </p>
              <p>
                The original booking will not automatically be treated as rescheduled merely because a request has been submitted.
              </p>
              <p>
                If the traveller does not accept the proposed revised arrangements, the consequences for the original booking will be determined under the applicable Cancellation &amp; Refund Policy and confirmed booking terms.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 8 */}
          <RevealOnScroll>
            <div className="legal-section" id="traveller-names">
              <span className="legal-section-number">Section 8</span>
              <h2>Changes to Traveller Names or Passenger Composition</h2>
              <p>
                Requests to replace a traveller, change a passenger name or alter the number of participants are subject to supplier rules, identity requirements, transport capacity, accommodation restrictions and applicable law.
              </p>
              <p>
                Some bookings may not permit passenger substitution or may require a new reservation.
              </p>
              <p>
                Any additional costs or documentation requirements will be communicated before approval wherever reasonably practicable.
              </p>
              <p>
                A change in the number of participants may affect per-person pricing, vehicle allocation, room configuration, meal arrangements and the overall feasibility of a small-group or private journey.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 9 */}
          <RevealOnScroll>
            <div className="legal-section" id="accommodation-changes">
              <span className="legal-section-number">Section 9</span>
              <h2>Changes to Accommodation, Room Configuration or Transport</h2>
              <p>
                Requests to upgrade or change accommodation, room categories, vehicle categories, meal plans or other services will be subject to availability and revised pricing.
              </p>
              <p>
                A confirmed accommodation or vehicle category will be supplied in accordance with the booking confirmation, subject to the terms governing permitted substitutions and circumstances beyond reasonable control.
              </p>
              <p>
                Where the traveller requests an upgrade or additional service, the additional cost must be accepted before the revised arrangement is confirmed.
              </p>
              <p>
                KASHIR WATH TOURS does not guarantee the availability of a particular room, view, vehicle registration, driver, guide or individual service provider unless that feature has been expressly confirmed in writing and remains subject to the applicable terms.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 10 */}
          <RevealOnScroll>
            <div className="legal-section" id="itinerary-changes">
              <span className="legal-section-number">Section 10</span>
              <h2>Itinerary Changes Requested by the Traveller</h2>
              <p>
                A traveller may request changes to the route, sightseeing schedule, temple visits, heritage locations, activities or duration of the journey.
              </p>
              <p>
                Such changes may affect travel time, accommodation nights, meal arrangements, permissions, safety requirements and supplier commitments.
              </p>
              <p>
                KASHIR WATH TOURS may recommend an alternative where a requested change would make the itinerary impractical, excessively rushed or inconsistent with reasonable safety considerations.
              </p>
              <p>
                No additional activity or destination should be treated as included unless it has been expressly confirmed in writing.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 11 */}
          <RevealOnScroll>
            <div className="legal-section" id="operator-changes">
              <span className="legal-section-number">Section 11</span>
              <h2>Changes Initiated by Kashir Wath Tours</h2>
              <p>KASHIR WATH TOURS may need to modify a confirmed itinerary because of circumstances such as:</p>
              <ul>
                <li>Adverse weather or unsafe road conditions.</li>
                <li>Official closures or access restrictions.</li>
                <li>Security-related instructions.</li>
                <li>Supplier unavailability or service failure.</li>
                <li>A safety concern affecting a traveller or the group.</li>
                <li>An emergency or other material operational disruption.</li>
              </ul>
              <p>
                Where reasonably practicable, KASHIR WATH TOURS will communicate the reason for the change and consider an appropriate alternative.
              </p>
              <p>
                Where a material change is initiated by KASHIR WATH TOURS and is not attributable to the traveller, the available remedy will depend on the nature of the change, the services affected, the booking terms and applicable law.
              </p>
              <p>
                Any refund, price adjustment, substitute service or rescheduling option will be assessed accordingly. This policy does not create an automatic right to substitute any service without regard to its contractual significance.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 12 */}
          <RevealOnScroll>
            <div className="legal-section" id="during-journey">
              <span className="legal-section-number">Section 12</span>
              <h2>Traveller-Initiated Changes During the Journey</h2>
              <p>
                Requests made after the journey has commenced may be difficult to accommodate because transport, accommodation, guides and other services may already have been arranged.
              </p>
              <p>
                Any approved change may involve additional charges or the loss of unused services, subject to the relevant supplier terms and applicable law.
              </p>
              <p>
                KASHIR WATH TOURS will consider reasonable requests where operationally feasible, but cannot guarantee that a revised route, additional night, early check-in, late check-out or alternative destination can be arranged at short notice.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 13 */}
          <RevealOnScroll>
            <div className="legal-section" id="delays">
              <span className="legal-section-number">Section 13</span>
              <h2>Delays, Missed Connections and Late Arrival</h2>
              <p>
                Travellers should arrive at the designated meeting point at the agreed time and communicate delays as soon as possible.
              </p>
              <p>
                Where a traveller arrives late, misses a departure or fails to reach a meeting point, KASHIR WATH TOURS will consider whether the itinerary can reasonably be adjusted.
              </p>
              <p>
                Any additional vehicle waiting charges, new transport costs, accommodation expenses or supplier penalties may be payable by the traveller where they result from the traveller&apos;s delay or failure to comply with the confirmed arrangements, subject to the booking terms and applicable law.
              </p>
              <p>
                No guarantee is given that a missed activity, departure or reservation can be recovered or rescheduled.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 14 */}
          <RevealOnScroll>
            <div className="legal-section" id="written-confirmation">
              <span className="legal-section-number">Section 14</span>
              <h2>Written Confirmation and Revised Documents</h2>
              <p>
                An approved modification or rescheduling will be documented through a revised itinerary, updated quotation, booking amendment or written confirmation.
              </p>
              <p>
                The revised document will identify material changes to dates, services, prices or other booking terms.
              </p>
              <p>
                Travellers should review the revised confirmation carefully and notify KASHIR WATH TOURS promptly if any material detail appears incorrect.
              </p>
              <p>
                Unless expressly stated otherwise, the remainder of the original booking terms will continue to apply.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 15 */}
          <RevealOnScroll>
            <div className="legal-section" id="cancellation-relationship">
              <span className="legal-section-number">Section 15</span>
              <h2>Relationship with Cancellation &amp; Refund Policy</h2>
              <p>
                If a requested modification cannot be accommodated and the traveller decides not to proceed, the resulting cancellation will be assessed under the applicable Cancellation &amp; Refund Policy and confirmed booking terms.
              </p>
              <p>
                This policy does not replace or override the cancellation provisions governing the original booking.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 16 */}
          <RevealOnScroll>
            <div className="legal-section" id="legal">
              <span className="legal-section-number">Section 16</span>
              <h2>Legal and Contractual Interpretation</h2>
              <p>
                Nothing in this policy excludes or limits any right or remedy that cannot lawfully be excluded or limited.
              </p>
              <p>
                Where a specific written booking agreement contains a valid, expressly agreed provision addressing a particular modification, that provision will be read together with this policy and applicable law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 17 */}
          <RevealOnScroll>
            <div className="legal-section" id="contact">
              <span className="legal-section-number">Section 17</span>
              <h2>Contact</h2>
              <p>
                For modification or rescheduling requests, please contact:
              </p>
              <p>
                KASHIR WATH TOURS<br />
                Email: [Official Business Email]<br />
                Website: [Official Website URL]<br />
                Booking Reference: Please include your booking reference in all communications.
              </p>
            </div>
          </RevealOnScroll>

          {/* Footer */}
          <RevealOnScroll>
            <div className="legal-footer">
              <p className="legal-brand">KASHIR WATH</p>
              <p className="legal-tagline">Soulful Journeys Through Kashir</p>
              <p>
                Every journey is carefully curated. Changes are considered thoughtfully, transparently and subject to practical feasibility.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
