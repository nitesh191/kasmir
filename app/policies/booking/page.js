import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import LegalNav from '@/components/LegalNav'

export const metadata = {
  title: 'Booking, Cancellation, Refund & Force Majeure Policy',
  description:
    'Booking procedures, cancellation terms, refund conditions, itinerary changes and force majeure policy for Kashir Wath journeys.',
}

export default function BookingPolicy() {
  return (
    <>
      <PageHero
        image="/images/hero.jpg"
        label="Policies"
        title="Booking, Cancellation & Refund Policy"
        subtitle="Travel safety, force majeure and our approach to responsible travel."
        breadcrumbs={[
          { label: 'Policies', href: '/policies/booking' },
          { label: 'Booking & Cancellation' },
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
                At KASHIR WATH, we curate meaningful journeys through Kashir, bringing
                together its landscapes, cultural heritage, spiritual traditions, local
                communities, distinctive accommodations and lesser-known experiences.
                This policy explains our booking procedures, cancellation terms, refunds
                and approach to unexpected travel disruptions.
              </p>
            </div>
          </RevealOnScroll>

          {/* TOC */}
          <RevealOnScroll>
            <div className="legal-toc">
              <h4>Contents</h4>
              <ol>
                <li><a href="#responsible-travel">Our Approach to Responsible Travel</a></li>
                <li><a href="#booking-confirmation">Booking Confirmation & Acceptance</a></li>
                <li><a href="#package-price">Package Price, Inclusions & Exclusions</a></li>
                <li><a href="#advance-payments">Advance Payments & Balance Payments</a></li>
                <li><a href="#itinerary-changes">Itinerary Changes & Destination Access</a></li>
                <li><a href="#travel-conditions">Travel Conditions & Official Restrictions</a></li>
                <li><a href="#force-majeure">Force Majeure & Unforeseen Circumstances</a></li>
                <li><a href="#alternative-arrangements">Alternative Accommodation & Transport</a></li>
                <li><a href="#supplier-advances">Supplier Advances & Financial Settlement</a></li>
                <li><a href="#cancellation-by-traveller">Cancellation by the Traveller</a></li>
                <li><a href="#cancellation-refunds">Calculation of Cancellation Refunds</a></li>
                <li><a href="#special-bookings">Special Bookings & Non-Refundable Services</a></li>
                <li><a href="#bespoke-itinerary">Bespoke Itinerary Curation & Planning Fees</a></li>
                <li><a href="#non-transferability">Non-Transferability, Rescheduling & Credits</a></li>
                <li><a href="#no-shows">No-Shows, Late Arrivals & Early Departures</a></li>
                <li><a href="#illness-medical">Illness, Medical Emergencies & Group Travel</a></li>
                <li><a href="#traveller-responsibilities">Traveller Responsibilities & Cooperation</a></li>
                <li><a href="#third-party-providers">Third-Party Service Providers</a></li>
                <li><a href="#cancellation-by-kw">Cancellation or Material Change by Kashir Wath</a></li>
                <li><a href="#refund-processing">Refund Processing</a></li>
                <li><a href="#travel-insurance">Travel Insurance</a></li>
                <li><a href="#communication">Communication & Emergency Coordination</a></li>
                <li><a href="#liability">Responsibility, Liability & Consumer Protection</a></li>
                <li><a href="#payment-disputes">Payment Disputes & Refund Enquiries</a></li>
                <li><a href="#applicable-law">Applicable Law & Interpretation</a></li>
                <li><a href="#policy-updates">Policy Updates & Existing Bookings</a></li>
                <li><a href="#acknowledgement">Acknowledgement & Acceptance</a></li>
              </ol>
            </div>
          </RevealOnScroll>

          {/* Section 1 */}
          <RevealOnScroll>
            <div className="legal-section" id="responsible-travel">
              <span className="legal-section-number">Section 1</span>
              <h2>Our Approach to Responsible Travel</h2>
              <p>
                Every journey is planned with care, attention to detail and respect for the
                destination. Depending on the itinerary, arrangements may involve accommodation
                reservations, private transportation, local specialists, experienced service
                providers, personalised planning and advance commitments.
              </p>
              <p>
                We believe that a well-planned journey begins with clear communication. This
                policy explains our booking procedures, package inclusions, cancellation terms,
                refunds, itinerary changes, additional expenses and approach to unexpected travel
                disruptions.
              </p>
              <p>
                Our intention is to provide travellers with clarity and confidence while allowing
                us to organise journeys responsibly and sustainably.
              </p>
              <p>
                By confirming a booking and making payment, the traveller acknowledges the booking
                terms and conditions communicated before confirmation, subject to applicable law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 2 */}
          <RevealOnScroll>
            <div className="legal-section" id="booking-confirmation">
              <span className="legal-section-number">Section 2</span>
              <h2>Booking Confirmation & Acceptance of Terms</h2>
              <p>
                A booking is considered confirmed when KASHIR WATH has accepted the booking, the
                traveller has accepted the applicable terms, and the required initial payment has
                been received.
              </p>
              <p>
                The booking confirmation or written quotation will specify, as applicable:
              </p>
              <ul>
                <li>Travel dates and duration.</li>
                <li>Confirmed itinerary and destinations.</li>
                <li>Total package price and payment schedule.</li>
                <li>Accommodation category and transportation arrangements.</li>
                <li>Included and excluded services.</li>
                <li>Applicable cancellation and refund conditions.</li>
                <li>Any special conditions relating to particular hotels, houseboats, permits, activities, transport services or other arrangements.</li>
              </ul>
              <p>
                Travellers are encouraged to review these details and raise any questions before
                confirming their booking.
              </p>
              <p>
                Any special condition that materially affects the price, cancellation rights or
                services included in a booking will be communicated before the relevant commitment
                is confirmed, wherever reasonably practicable.
              </p>
              <p>
                If a required payment is not received within the agreed timeframe, KASHIR WATH may
                notify the traveller and, where permitted by the agreed terms and applicable law,
                release or cancel the provisional arrangements.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 3 */}
          <RevealOnScroll>
            <div className="legal-section" id="package-price">
              <span className="legal-section-number">Section 3</span>
              <h2>Package Price, Inclusions & Exclusions</h2>

              <h3>3.1 What the package price includes</h3>
              <p>
                The package price covers only the services expressly identified as included in the
                confirmed quotation, itinerary or booking confirmation.
              </p>
              <p>
                Depending on the selected journey, these may include accommodation, transportation,
                meals, sightseeing, transfers, local experiences, guides or other specified services.
              </p>
              <p>
                A service should not be assumed to be included simply because it is commonly offered
                by other travel operators.
              </p>

              <h3>3.2 Services that may be charged separately</h3>
              <p>Unless expressly included in writing, the following may be payable separately:</p>
              <ul>
                <li>Additional hotel nights, houseboat stays, room upgrades, early check-in or late check-out.</li>
                <li>Meals, snacks, beverages and refreshments outside the confirmed meal plan.</li>
                <li>Additional vehicle usage, extended vehicle duty, route diversions, extra transfers or replacement transportation.</li>
                <li>Local taxis, union-operated vehicles, pony rides and other locally arranged transport.</li>
                <li>Entry tickets, activity fees, permits, registration charges and government fees.</li>
                <li>Special experiences, equipment hire, personal guides or optional activities.</li>
                <li>Laundry, telephone charges, shopping, tips and personal expenses.</li>
                <li>Medical consultations, medicines, hospitalisation, ambulance services and emergency transportation or evacuation.</li>
                <li>Travel insurance, unless expressly included.</li>
                <li>Expenses arising from a traveller&apos;s personal request, missed departure, early departure or need for separate arrangements.</li>
                <li>Other services not expressly included in the confirmed package.</li>
              </ul>
              <p>
                This list is illustrative rather than exhaustive. Any applicable exclusions or
                additional charges will be explained as part of the booking or relevant arrangement.
              </p>

              <h3>3.3 Additional expenses during a journey</h3>
              <p>
                Occasionally, circumstances may require arrangements beyond the original itinerary.
                For example, an unexpected road closure may require an additional overnight stay, an
                alternative route or replacement transportation.
              </p>
              <p>
                Where reasonably practicable, KASHIR WATH will explain the reason, estimated cost
                and available options before arranging an additional service and will seek the
                traveller&apos;s approval.
              </p>
              <p>
                If immediate action is reasonably necessary to protect life, health or safety, it
                may not always be possible to obtain prior approval. In such circumstances, we will
                communicate the relevant details as soon as reasonably practicable.
              </p>

              <h3>3.4 Package price and additional services</h3>
              <p>
                A confirmed package does not automatically include unlimited additional nights,
                meals, transport, activities or other services beyond its stated inclusions.
              </p>
              <p>
                Additional arrangements remain subject to availability, operational feasibility,
                supplier conditions and any required traveller approval.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 4 */}
          <RevealOnScroll>
            <div className="legal-section" id="advance-payments">
              <span className="legal-section-number">Section 4</span>
              <h2>Advance Payments & Balance Payments</h2>
              <p>
                The initial payment secures the booking and enables KASHIR WATH to begin or confirm
                the relevant planning, reservations and coordination.
              </p>
              <p>
                Unless a separate fee is expressly identified in writing, the advance payment forms
                part of the agreed package price.
              </p>
              <p>
                Payment of an advance does not, by itself, make the entire amount non-refundable.
                Any cancellation charge or refund will be assessed under the applicable booking
                terms, the services and commitments involved, and applicable law.
              </p>
              <p>
                The balance payment must be made by the due date specified in the booking
                confirmation.
              </p>
              <p>
                If the balance remains unpaid, KASHIR WATH may issue a payment reminder and, where
                permitted by the agreed terms and applicable law, suspend or cancel the booking.
                Any resulting cancellation charge will be assessed under the applicable cancellation
                conditions.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 5 */}
          <RevealOnScroll>
            <div className="legal-section" id="itinerary-changes">
              <span className="legal-section-number">Section 5</span>
              <h2>Itinerary Changes & Destination Access</h2>
              <p>
                Our itineraries describe the journey planned at the time of booking. While we make
                reasonable efforts to deliver the confirmed experience, access to every road,
                village, valley, sightseeing point, pilgrimage site or activity cannot be guaranteed
                under all circumstances.
              </p>
              <p>
                Weather, seasonal conditions, road access, local operating conditions, permit
                requirements and official directions may occasionally require changes to a route,
                schedule, accommodation or activity.
              </p>
              <p>
                Where reasonably practicable, KASHIR WATH will communicate material changes and
                explore suitable alternatives.
              </p>
              <p>
                The safety of travellers and the lawful operation of the journey will take priority
                over completing the original itinerary exactly as planned.
              </p>
              <p>
                If a traveller declines a reasonable alternative, any resulting cancellation or
                refund will be assessed under the applicable booking terms and law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 6 */}
          <RevealOnScroll>
            <div className="legal-section" id="travel-conditions">
              <span className="legal-section-number">Section 6</span>
              <h2>Travel Conditions & Official Restrictions in Kashir</h2>
              <p>
                KASHIR WATH plans journeys with an understanding that mountain travel can involve
                changing weather, road access, seasonal conditions and local administrative
                requirements.
              </p>
              <p>
                On occasion, official directions or developments affecting public movement may
                require changes to travel arrangements. These may include:
              </p>
              <ul>
                <li>Temporary restrictions affecting access to particular areas.</li>
                <li>Official advisories or directions concerning visitor movement.</li>
                <li>Road closures, traffic restrictions or changes in route accessibility.</li>
                <li>Temporary closure of tourist destinations, valleys, villages, pilgrimage sites or other locations.</li>
                <li>Local demonstrations, shutdowns or public disturbances affecting transport or access.</li>
                <li>Changes to permit requirements, entry conditions or operating permissions.</li>
                <li>Safety-related instructions issued by competent authorities.</li>
                <li>Other local developments that materially affect the safe or lawful operation of a journey.</li>
              </ul>
              <p>
                KASHIR WATH does not control decisions made independently by government authorities,
                police, road authorities or other competent bodies. However, we will make reasonable
                efforts to consider reliable information, communicate material developments and
                coordinate appropriate arrangements.
              </p>
              <p>
                Our objective is to manage changing circumstances thoughtfully, with clear
                communication and due regard for the traveller&apos;s experience and well-being.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 7 */}
          <RevealOnScroll>
            <div className="legal-section" id="force-majeure">
              <span className="legal-section-number">Section 7</span>
              <h2>Force Majeure & Unforeseen Circumstances</h2>

              <h3>7.1 Meaning of force majeure</h3>
              <p>
                Force majeure refers to an extraordinary event or circumstance beyond the reasonable
                control of KASHIR WATH that prevents, materially delays or disrupts the agreed
                arrangements, or makes the journey unsafe, unlawful or impracticable.
              </p>
              <p>Examples may include:</p>
              <ul>
                <li>Severe weather, heavy snowfall, avalanches, landslides, cloudbursts, flooding or other natural events.</li>
                <li>Road closures, damaged infrastructure or inaccessible mountain routes.</li>
                <li>Official directions, temporary access restrictions or changes to permit requirements.</li>
                <li>Serious local incidents or public disturbances affecting the safe operation of travel.</li>
                <li>War, armed conflict, public emergencies or comparable exceptional circumstances.</li>
                <li>Epidemics, pandemics, public health emergencies or applicable quarantine restrictions.</li>
                <li>Flight, railway, helicopter or other transport interruptions.</li>
                <li>Suspension of essential services or closure of destinations by competent authorities.</li>
              </ul>

              <h3>7.2 Arrangements when an unexpected event occurs</h3>
              <p>
                If such an event affects a confirmed journey, KASHIR WATH may, as reasonably
                necessary:
              </p>
              <ul>
                <li>Modify or reroute the itinerary.</li>
                <li>Replace an inaccessible destination with a suitable alternative, where available.</li>
                <li>Adjust accommodation or transportation arrangements.</li>
                <li>Shorten, suspend or discontinue the affected part of the journey.</li>
                <li>Propose revised travel dates, postponement or a mutually agreed travel credit.</li>
                <li>Cancel the affected arrangements where a reasonable alternative is not feasible.</li>
              </ul>

              <h3>7.3 Responsibility for events beyond reasonable control</h3>
              <p>
                KASHIR WATH will make reasonable efforts to fulfil its confirmed commitments. To
                the extent permitted by applicable law, we will not be responsible for a failure or
                delay directly caused by a qualifying event beyond our reasonable control, provided
                that the event was not caused by our own breach, negligence or other legally
                actionable conduct.
              </p>
              <p>
                This provision does not remove any responsibility or liability that cannot lawfully
                be excluded.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 8 */}
          <RevealOnScroll>
            <div className="legal-section" id="alternative-arrangements">
              <span className="legal-section-number">Section 8</span>
              <h2>Alternative Accommodation, Transport & Sightseeing</h2>
              <p>
                If a planned destination, hotel, houseboat or route becomes inaccessible or
                unsuitable, KASHIR WATH will make reasonable efforts to identify a practical
                alternative, subject to availability and prevailing conditions.
              </p>
              <p>
                Replacement accommodation or transportation may differ from the original
                arrangement in location, category, facilities or cost. During unexpected
                disruptions, availability at the original price cannot always be guaranteed.
              </p>
              <p>
                Where an included service cannot be delivered, any refund or adjustment due for
                that service will be assessed separately under the applicable refund provisions.
                Additional expenses and refunds will not automatically cancel each other out.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 9 */}
          <RevealOnScroll>
            <div className="legal-section" id="supplier-advances">
              <span className="legal-section-number">Section 9</span>
              <h2>Supplier Advances & Financial Settlement During Disruptions</h2>
              <p>
                KASHIR WATH may pay advances to hotels, houseboats, transport providers, activity
                operators and other suppliers to secure confirmed arrangements.
              </p>
              <p>
                If an unexpected event prevents a service from being used, we will make reasonable
                efforts to seek a refund, credit, rescheduling option or other adjustment from the
                relevant supplier where available.
              </p>
              <p>
                The financial settlement will take account of the circumstances and, as applicable:
              </p>
              <ul>
                <li>Services already provided.</li>
                <li>Services that could not be delivered.</li>
                <li>The confirmed package inclusions and exclusions.</li>
                <li>The applicable booking and cancellation terms.</li>
                <li>Supplier refunds, credits or other amounts recovered or reasonably recoverable.</li>
                <li>Genuine, documented, non-recoverable commitments, where properly disclosed and legally permissible.</li>
                <li>Reasonable additional expenses arising from alternative arrangements.</li>
                <li>Any mandatory rights or remedies under applicable law.</li>
              </ul>
              <p>
                A supplier&apos;s refusal to refund an advance does not, by itself, automatically
                make the entire package non-refundable.
              </p>
              <p>
                We will endeavour to avoid unnecessary duplication of costs. The same loss or
                expense will not be charged twice.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 10 */}
          <RevealOnScroll>
            <div className="legal-section" id="cancellation-by-traveller">
              <span className="legal-section-number">Section 10</span>
              <h2>Cancellation by the Traveller</h2>
              <p>
                A traveller wishing to cancel a confirmed booking must submit a written
                cancellation request through the official communication channel specified in the
                booking confirmation.
              </p>
              <p>
                Unless different conditions have been expressly disclosed and accepted before
                confirmation for a particular journey or service, the following standard
                cancellation schedule will apply.
              </p>

              <h3>Standard Cancellation Schedule</h3>
              <p>
                Cancellation charges are calculated against the total agreed package price.
              </p>
              <div className="legal-table-wrapper">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Cancellation Period</th>
                      <th>Charge</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>60 days or more before departure</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>45–59 days before departure</td>
                      <td>15%</td>
                    </tr>
                    <tr>
                      <td>30–44 days before departure</td>
                      <td>25%</td>
                    </tr>
                    <tr>
                      <td>15–29 days before departure</td>
                      <td>50%</td>
                    </tr>
                    <tr>
                      <td>8–14 days before departure</td>
                      <td>75%</td>
                    </tr>
                    <tr>
                      <td>0–7 days before departure</td>
                      <td>Up to 100%*</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                *Subject to the accepted booking terms and applicable law.
              </p>
              <p>
                The standard cancellation charge for a traveller-initiated cancellation made 60
                days or more before departure is 10% of the total agreed package price. This amount
                is intended to cover reasonable cancellation-related administration, booking
                coordination and other applicable costs.
              </p>
              <p>
                Cancellation charges will be applied in accordance with the accepted terms, the
                circumstances of the booking and applicable law. They are not intended to operate
                as an automatic penalty regardless of the actual arrangements or circumstances.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 11 */}
          <RevealOnScroll>
            <div className="legal-section" id="cancellation-refunds">
              <span className="legal-section-number">Section 11</span>
              <h2>Calculation of Cancellation Refunds</h2>
              <p>
                Where a refund is due, KASHIR WATH will calculate the refundable balance after
                taking account of the applicable cancellation charge and other lawful, properly
                applicable deductions.
              </p>
              <p>Depending on the booking, these may include:</p>
              <ul>
                <li>The cancellation charge applicable under the accepted terms.</li>
                <li>Supplier cancellation charges or genuine, documented non-recoverable commitments.</li>
                <li>Separately agreed planning or itinerary curation fees, where applicable.</li>
                <li>Charges for services already provided or consumed, where contractually agreed and legally permissible.</li>
                <li>Other adjustments expressly permitted under the accepted booking terms and applicable law.</li>
                <li>Amounts refunded, credited or recovered from suppliers, where relevant to the calculation.</li>
              </ul>
              <p>
                No amount will be deducted twice for the same expense.
              </p>
              <p>
                A customer may request a reasonable explanation of the material deductions used to
                calculate the refund.
              </p>
              <p>
                Nothing in this policy permits KASHIR WATH to retain an amount where retention
                would be contrary to applicable law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 12 */}
          <RevealOnScroll>
            <div className="legal-section" id="special-bookings">
              <span className="legal-section-number">Section 12</span>
              <h2>Special Bookings & Non-Refundable Services</h2>
              <p>
                Certain services may be subject to specific cancellation conditions imposed by the
                supplier or arising from a commitment made specifically for the traveller. These
                may include:
              </p>
              <ul>
                <li>Special promotional or non-refundable accommodation rates.</li>
                <li>Selected hotels, resorts, boutique properties or houseboats.</li>
                <li>Helicopter tickets and separately ticketed transport.</li>
                <li>Special events, private experiences and pre-arranged activities.</li>
                <li>Chartered transport or specially reserved vehicles.</li>
                <li>Permits, registrations or other fees that are not refundable under the relevant conditions.</li>
                <li>Limited-availability reservations or special group allocations.</li>
              </ul>
              <p>
                Where a service carries a special cancellation condition, KASHIR WATH will
                communicate the applicable condition and its material financial implications before
                the relevant commitment is confirmed, wherever reasonably practicable.
              </p>
              <p>
                A non-refundable component does not automatically make the entire package
                non-refundable.
              </p>
              <p>
                The fact that a journey is premium, private, customised or individually curated
                does not, by itself, remove any refund entitlement that may otherwise exist.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 13 */}
          <RevealOnScroll>
            <div className="legal-section" id="bespoke-itinerary">
              <span className="legal-section-number">Section 13</span>
              <h2>Bespoke Itinerary Curation & Planning Fees</h2>
              <p>
                Some KASHIR WATH journeys involve individual research, route planning,
                accommodation selection, local coordination and the development of personalised
                experiences.
              </p>
              <p>
                Where a separate itinerary curation or professional planning fee is charged, its
                amount, scope, payment conditions and cancellation treatment will be communicated
                to and accepted by the traveller before the relevant work begins.
              </p>
              <p>
                Where no separate fee has been disclosed and agreed, KASHIR WATH will not
                retrospectively designate an arbitrary part of the package price as a separate
                non-refundable planning fee merely because a booking is cancelled.
              </p>
              <p>
                A planning fee and cancellation charge will not be applied cumulatively to recover
                the same work or expense twice.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 14 */}
          <RevealOnScroll>
            <div className="legal-section" id="non-transferability">
              <span className="legal-section-number">Section 14</span>
              <h2>Non-Transferability, Rescheduling & Credit Notes</h2>

              <h3>14.1 Transfer to another traveller</h3>
              <p>
                Bookings are made for the traveller or travellers identified in the booking
                confirmation and are not automatically transferable to another person.
              </p>
              <p>
                A request to substitute a traveller requires prior written approval from KASHIR
                WATH and may depend on availability, identification requirements, permits, supplier
                conditions, applicable charges and operational feasibility.
              </p>
              <p>
                A refusal to transfer a booking does not, by itself, remove any refund entitlement
                that may otherwise arise under the accepted terms and applicable law.
              </p>

              <h3>14.2 Date changes and rescheduling</h3>
              <p>
                Requests to change travel dates, destinations, accommodation, passenger details or
                other confirmed arrangements are subject to availability and written approval.
              </p>
              <p>
                A postponement is not automatically a cancellation-free change and does not create
                an indefinite entitlement to travel at the original price.
              </p>

              <h3>14.3 Credit notes and future travel credits</h3>
              <p>
                Where operationally feasible, KASHIR WATH may offer a credit note or future travel
                credit as an alternative to a cash refund. A credit note will be issued only where
                the arrangement has been agreed or is otherwise permitted by applicable law. It
                will not automatically replace a cash refund that is legally due unless the
                traveller validly agrees to that alternative.
              </p>
              <p>
                The written credit note will specify, as applicable: the credit amount and booking
                to which it relates, date of issue and validity period, the journeys or services
                for which it may be used, whether it can be transferred or combined with other
                offers, and any applicable fare difference or booking condition.
              </p>
              <p>
                Credit notes are not automatically transferable, redeemable for cash or extendable
                beyond their stated validity. However, their conditions will remain subject to
                applicable law and any rights that cannot lawfully be excluded.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 15 */}
          <RevealOnScroll>
            <div className="legal-section" id="no-shows">
              <span className="legal-section-number">Section 15</span>
              <h2>No-Shows, Late Arrivals & Early Departures</h2>
              <p>
                If a traveller does not arrive at the designated departure point, misses a
                departure, arrives too late to join the journey or voluntarily leaves the journey
                before completion, some services may no longer be recoverable.
              </p>
              <p>
                Any refund will be assessed in light of the services already provided, applicable
                supplier conditions, the circumstances of the missed or unused services and
                applicable law.
              </p>
              <p>
                A traveller&apos;s decision to decline an included activity or leave early does not
                automatically create a right to a refund for unused services.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 16 */}
          <RevealOnScroll>
            <div className="legal-section" id="illness-medical">
              <span className="legal-section-number">Section 16</span>
              <h2>Illness, Medical Emergencies & Group Travel</h2>

              <h3>16.1 Assistance during a medical emergency</h3>
              <p>
                If a traveller becomes unwell or sustains an injury, KASHIR WATH will make
                reasonable efforts to help coordinate appropriate assistance, including contacting
                emergency services, facilitating access to a medical facility, or notifying an
                emergency contact where appropriate.
              </p>
              <p>
                KASHIR WATH is a travel organiser, not a medical provider. We cannot guarantee the
                availability of a particular doctor, ambulance, hospital bed, treatment or
                evacuation service.
              </p>

              <h3>16.2 Medical and related expenses</h3>
              <p>
                Unless expressly included in the confirmed package or otherwise required by law,
                medical consultations, medicines, treatment, hospitalisation, ambulance services,
                emergency transportation, evacuation and additional accommodation are the
                responsibility of the affected traveller.
              </p>
              <p>
                Travellers are strongly encouraged to carry prescribed medication, relevant
                emergency information and suitable travel insurance.
              </p>

              <h3>16.3 Effect on a group journey</h3>
              <p>
                If a traveller requires medical attention, KASHIR WATH will assess the situation
                and make reasonable efforts to assist while considering the safety and practical
                needs of the remaining group.
              </p>

              <h3>16.4 Health information and ability to travel</h3>
              <p>
                Travellers should inform KASHIR WATH before departure of any relevant assistance
                requirement that may reasonably affect the safe operation of the journey.
              </p>
              <p>
                Travellers remain responsible for carrying their prescribed medication and
                assessing whether the itinerary is suitable for their needs.
              </p>

              <h3>16.5 If a traveller cannot continue</h3>
              <p>
                If illness, injury or another personal circumstance requires a traveller to
                discontinue the journey, KASHIR WATH will make reasonable efforts to coordinate
                practical arrangements where possible.
              </p>
              <p>
                Additional costs arising from separate transport, accommodation, medical assistance
                or early departure will generally be payable by the traveller unless otherwise
                agreed or required by law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 17 */}
          <RevealOnScroll>
            <div className="legal-section" id="traveller-responsibilities">
              <span className="legal-section-number">Section 17</span>
              <h2>Traveller Responsibilities & Cooperation</h2>
              <p>To help ensure a smooth and responsible journey, travellers are expected to:</p>
              <ul>
                <li>Provide accurate booking details, identification and emergency contact information.</li>
                <li>Carry valid travel documents and any required permits or identification.</li>
                <li>Follow applicable laws, official directions and reasonable safety guidance.</li>
                <li>Respect local communities, cultural practices, private property and environmental guidelines.</li>
                <li>Avoid restricted areas and activities that are prohibited or considered unsafe.</li>
                <li>Inform the tour organiser promptly if they need assistance or become unwell.</li>
                <li>Carry prescribed medication and disclose relevant assistance requirements before departure.</li>
                <li>Take reasonable care of personal belongings, valuables and travel documents.</li>
                <li>Make payments due under the confirmed booking terms.</li>
                <li>Cooperate with reasonable itinerary changes made for safety, legal or operational reasons.</li>
              </ul>
              <p>
                Nothing in this section transfers to the traveller a responsibility that legally
                belongs to KASHIR WATH or another responsible party.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 18 */}
          <RevealOnScroll>
            <div className="legal-section" id="third-party-providers">
              <span className="legal-section-number">Section 18</span>
              <h2>Third-Party Service Providers</h2>
              <p>
                Certain services, including accommodation, transportation, flights, railways,
                helicopter operations, local taxis, guides and activities, may be supplied by
                independent providers.
              </p>
              <p>
                KASHIR WATH will make reasonable efforts to coordinate confirmed arrangements and
                communicate material supplier conditions where applicable.
              </p>
              <p>
                We do not control every independent provider&apos;s operational decisions. To the
                extent permitted by applicable law, KASHIR WATH will not be responsible for an
                independent provider&apos;s failure that is genuinely beyond our reasonable control
                and not caused by our own breach, negligence or other legally actionable conduct.
              </p>
              <p>
                Where KASHIR WATH is responsible for arranging or supplying a service, the nature
                of that responsibility will be determined by the confirmed booking and applicable
                law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 19 */}
          <RevealOnScroll>
            <div className="legal-section" id="cancellation-by-kw">
              <span className="legal-section-number">Section 19</span>
              <h2>Cancellation or Material Change by Kashir Wath</h2>
              <p>
                If KASHIR WATH cancels a confirmed journey for reasons within its control, or fails
                to provide a material part of the confirmed package for reasons attributable to its
                own failure, we will inform the affected traveller and address the matter in
                accordance with the booking terms and applicable law.
              </p>
              <p>
                Depending on the circumstances, the available remedy may include an appropriate
                alternative arrangement, a mutually agreed postponement or a refund for services
                not provided.
              </p>
              <p>
                Nothing in this policy is intended to exclude any refund, remedy or liability that
                applicable law requires.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 20 */}
          <RevealOnScroll>
            <div className="legal-section" id="refund-processing">
              <span className="legal-section-number">Section 20</span>
              <h2>Refund Processing</h2>
              <p>
                Where a refund is due and its amount has been determined, KASHIR WATH will
                ordinarily initiate the refund within 14 working days, unless a different period is
                required by law or reasonably necessary because of circumstances that will be
                explained to the traveller.
              </p>
              <p>
                Refunds will ordinarily be returned through the original payment method where
                reasonably practicable. Another method may be used by mutual agreement.
              </p>
              <p>
                Supplier processing will not be relied upon to withhold a refund indefinitely
                where the amount is otherwise legally due.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 21 */}
          <RevealOnScroll>
            <div className="legal-section" id="travel-insurance">
              <span className="legal-section-number">Section 21</span>
              <h2>Travel Insurance</h2>
              <p>
                KASHIR WATH strongly recommends that travellers obtain suitable travel insurance
                before departure, particularly for mountain journeys, remote destinations,
                high-altitude locations and routes affected by seasonal weather.
              </p>
              <p>Depending on the policy, cover may include:</p>
              <ul>
                <li>Medical expenses and hospitalisation.</li>
                <li>Emergency transportation or evacuation.</li>
                <li>Trip cancellation or interruption.</li>
                <li>Travel delays and missed connections.</li>
                <li>Additional accommodation and transport.</li>
                <li>Other covered travel-related expenses.</li>
              </ul>
              <p>
                Travel insurance is the traveller&apos;s responsibility unless expressly included
                in the booking confirmation. KASHIR WATH cannot guarantee that an insurer will
                approve a claim.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 22 */}
          <RevealOnScroll>
            <div className="legal-section" id="communication">
              <span className="legal-section-number">Section 22</span>
              <h2>Communication & Emergency Coordination</h2>
              <p>
                KASHIR WATH will make reasonable efforts to communicate material changes,
                significant disruptions and available options as soon as reasonably practicable.
              </p>
              <p>
                Where immediate action is reasonably necessary to protect life, health or safety,
                it may not always be possible to obtain individual approval before taking the first
                appropriate step. Relevant circumstances and subsequent arrangements will be
                communicated as soon as practicable.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 23 */}
          <RevealOnScroll>
            <div className="legal-section" id="liability">
              <span className="legal-section-number">Section 23</span>
              <h2>Responsibility, Liability & Consumer Protection</h2>
              <p>
                KASHIR WATH aims to plan and coordinate confirmed journeys with reasonable care and
                to communicate material changes transparently.
              </p>
              <p>
                To the extent permitted by applicable law, KASHIR WATH will not be responsible for
                losses directly caused by extraordinary circumstances beyond its reasonable control
                or by independent third-party decisions that it could not reasonably prevent,
                provided the relevant loss was not caused by KASHIR WATH&apos;s own breach,
                negligence or other legally actionable conduct.
              </p>
              <p>
                Any limitation of responsibility under this policy applies only to the extent
                permitted by law. It does not exclude liability that cannot lawfully be excluded or
                restrict mandatory consumer rights.
              </p>
              <p>
                Nothing in this policy is intended to authorise an unlawful charge, an unfair
                contractual condition or the improper withholding of a refund.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 24 */}
          <RevealOnScroll>
            <div className="legal-section" id="payment-disputes">
              <span className="legal-section-number">Section 24</span>
              <h2>Payment Disputes & Refund Enquiries</h2>
              <p>
                Travellers are encouraged to contact KASHIR WATH in writing if they have a question
                concerning a booking, payment, cancellation charge, amendment or refund calculation.
              </p>
              <p>
                Nothing in this section restricts a traveller&apos;s lawful right to approach a
                bank, payment provider, consumer commission or other competent authority.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 25 */}
          <RevealOnScroll>
            <div className="legal-section" id="applicable-law">
              <span className="legal-section-number">Section 25</span>
              <h2>Applicable Law & Interpretation</h2>
              <p>
                This policy shall be interpreted in accordance with the laws of India, including
                the Indian Contract Act, 1872, the Consumer Protection Act, 2019, and other
                applicable laws, as amended from time to time.
              </p>
              <p>
                If any provision is found to be invalid or unenforceable, the remaining provisions
                will continue to apply to the extent permitted by law.
              </p>
              <p>
                In the event of a conflict, mandatory legal requirements will prevail.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 26 */}
          <RevealOnScroll>
            <div className="legal-section" id="policy-updates">
              <span className="legal-section-number">Section 26</span>
              <h2>Policy Updates & Existing Bookings</h2>
              <p>
                KASHIR WATH may update this policy from time to time to reflect operational
                improvements, changes in service arrangements or applicable legal requirements.
              </p>
              <p>
                An existing confirmed booking will ordinarily remain subject to the terms accepted
                at the time of confirmation, unless the parties agree otherwise or applicable law
                requires a different outcome.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 27 */}
          <RevealOnScroll>
            <div className="legal-section" id="acknowledgement">
              <span className="legal-section-number">Section 27</span>
              <h2>Acknowledgement & Acceptance</h2>
              <p>
                By confirming a booking and making payment, the traveller acknowledges that:
              </p>
              <ul>
                <li>The package price covers the services expressly listed in the confirmed booking.</li>
                <li>Additional services and expenses outside the agreed inclusions may be chargeable separately under the applicable terms.</li>
                <li>Travel conditions, destination access and service availability may change.</li>
                <li>Reasonable itinerary adjustments may be necessary for safety, legal or operational reasons.</li>
                <li>Personal medical expenses and emergency services are not included unless expressly stated.</li>
                <li>Cancellation charges, supplier conditions and refund procedures apply as disclosed before confirmation, subject to applicable law.</li>
                <li>Bookings are not automatically transferable, and any credit note or rescheduling arrangement is subject to its written conditions.</li>
                <li>Mandatory rights and remedies available under applicable law remain unaffected.</li>
              </ul>
              <p>
                KASHIR WATH remains committed to thoughtful planning, clear communication,
                responsible travel and meaningful experiences across Kashir.
              </p>
            </div>
          </RevealOnScroll>

          {/* Footer */}
          <RevealOnScroll>
            <div className="legal-footer">
              <div className="legal-brand">KASHIR WATH</div>
              <div className="legal-tagline">Soulful Journeys Through Kashir</div>
              <p>
                Booking, cancellation, refund and amendment enquiries —
                please contact us through the official channel specified in your booking confirmation.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
