import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import LegalNav from '@/components/LegalNav'

export const metadata = {
  title: 'Terms & Conditions',
  description:
    'Guest responsibilities, responsible travel, safety, environmental care and conduct guidelines for Kashir Wath journeys.',
}

export default function TermsAndConditions() {
  return (
    <>
      <PageHero
        image="/images/hero.jpg"
        label="Legal"
        title="Terms & Conditions"
        subtitle="Guest responsibilities, responsible travel, safety and environmental care."
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
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
                At Kashir Wath, we believe that travel is more than visiting destinations. It is
                about discovering local culture, appreciating nature, respecting communities and
                creating meaningful memories. These Terms &amp; Conditions explain the shared
                responsibilities that help make every journey safe, comfortable, respectful and
                enjoyable.
              </p>
            </div>
          </RevealOnScroll>

          {/* TOC */}
          <RevealOnScroll>
            <div className="legal-toc">
              <h4>Contents</h4>
              <ol>
                <li><a href="#responsible-travel">Our Commitment to Responsible Travel</a></li>
                <li><a href="#itinerary-timings">Itinerary, Timings & Sightseeing Coordination</a></li>
                <li><a href="#natural-landscapes">Exploring Kashmir&apos;s Natural Landscapes Safely</a></li>
                <li><a href="#remote-destinations">Remote Destinations & Mobile Network Limitations</a></li>
                <li><a href="#transport-safety">Transport Safety & Cooperation with the Driver</a></li>
                <li><a href="#environmental-responsibility">Environmental Responsibility</a></li>
                <li><a href="#local-culture">Respect for Local Culture & Communities</a></li>
                <li><a href="#accommodation-etiquette">Personal Space, Privacy & Accommodation Etiquette</a></li>
                <li><a href="#health-fitness">Health, Fitness & Personal Preparedness</a></li>
                <li><a href="#prohibited-substances">Weapons, Alcohol & Prohibited Substances</a></li>
                <li><a href="#third-party-services">Third-Party Services & Activity Guidelines</a></li>
                <li><a href="#personal-belongings">Personal Belongings & Lost Property</a></li>
                <li><a href="#photography">Photography, Recording & Consent</a></li>
                <li><a href="#itinerary-changes">Itinerary Changes & Operational Decisions</a></li>
                <li><a href="#additional-requests">Additional Requests & Guest-Related Expenses</a></li>
                <li><a href="#respectful-conduct">Respectful Conduct & Group Well-Being</a></li>
                <li><a href="#resolving-concerns">Communication & Resolving Concerns</a></li>
                <li><a href="#responsibility-liability">Responsibility & Liability</a></li>
                <li><a href="#other-policies">Relationship with Other Booking Policies</a></li>
                <li><a href="#governing-law">Governing Law & Dispute Resolution</a></li>
                <li><a href="#shared-commitment">Our Shared Commitment</a></li>
              </ol>
            </div>
          </RevealOnScroll>

          {/* Section 1 */}
          <RevealOnScroll>
            <div className="legal-section" id="responsible-travel">
              <span className="legal-section-number">Section 1</span>
              <h2>Our Commitment to Responsible Travel</h2>
              <p>
                Our aim is to organise thoughtful journeys with care, responsible planning, clear
                communication and respect for every guest.
              </p>
              <p>
                A wonderful travel experience is a shared effort. While we make reasonable efforts
                to coordinate your journey responsibly, we request our guests to cooperate with the
                travel team, respect local guidelines and follow the safety instructions
                communicated during the trip.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 2 */}
          <RevealOnScroll>
            <div className="legal-section" id="itinerary-timings">
              <span className="legal-section-number">Section 2</span>
              <h2>Itinerary, Timings & Sightseeing Coordination</h2>
              <p>
                Every itinerary is planned with reasonable care, taking into account travel
                distances, road conditions, sightseeing durations, local operating hours and other
                practical requirements.
              </p>
              <p>
                To help everyone make the most of the journey, guests are kindly requested to:
              </p>
              <ul>
                <li>Keep a copy of their itinerary readily accessible.</li>
                <li>Remain informed about the day&apos;s programme and scheduled departure times.</li>
                <li>Remember the designated meeting points and agreed return timings.</li>
                <li>Coordinate with the tour representative before extending their stay at a sightseeing location.</li>
                <li>Ensure that accompanying family members or group members understand the relevant timings and instructions.</li>
              </ul>
              <p>
                Our journeys may involve multiple destinations, advance arrangements and
                considerable travel distances. A delay at one location can affect subsequent
                activities and the experience of other guests.
              </p>
              <p>
                Where additional expenses arise directly from a guest&apos;s personal delay or
                requested change, the guest may be responsible for reasonably attributable costs,
                provided these have a lawful basis and are communicated wherever reasonably
                practicable.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 3 */}
          <RevealOnScroll>
            <div className="legal-section" id="natural-landscapes">
              <span className="legal-section-number">Section 3</span>
              <h2>Exploring Kashmir&apos;s Natural Landscapes Safely</h2>
              <p>
                Kashmir&apos;s rivers, waterfalls, meadows, forests, valleys and mountain trails
                offer unforgettable experiences. However, natural surroundings can change quickly,
                and locations that appear peaceful may contain hidden risks.
              </p>
              <p>
                For your safety and the well-being of the group, we kindly request you to:
              </p>
              <ul>
                <li>Inform the designated driver or tour coordinator before moving away from the agreed vehicle, group, route or meeting point.</li>
                <li>Obtain any necessary approval before entering areas where access, safety or operational considerations require it.</li>
                <li>Avoid unsafe river crossings, unstable waterfall edges, hazardous rocks and unfamiliar or isolated trails.</li>
                <li>Follow reasonable safety instructions from the tour coordinator, driver, local authorities and activity operators.</li>
                <li>Avoid taking unnecessary risks for photographs, videos or social media content.</li>
                <li>Return to the agreed meeting point at the communicated time.</li>
              </ul>
              <p>
                Permission to visit a destination does not necessarily mean that every nearby trail,
                riverbank, stream or viewpoint is safe or authorised for access.
              </p>
              <p>
                Guests who independently disregard communicated safety instructions or enter
                unauthorised or unsafe areas may bear responsibility for consequences attributable
                to their own actions, subject to the circumstances and applicable law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 4 */}
          <RevealOnScroll>
            <div className="legal-section" id="remote-destinations">
              <span className="legal-section-number">Section 4</span>
              <h2>Remote Destinations & Mobile Network Limitations</h2>
              <p>
                Some valleys, mountain routes, forest stretches, meadows and remote sightseeing
                locations may have limited or no mobile network coverage.
              </p>
              <p>We also encourage guests to:</p>
              <ul>
                <li>Keep their mobile phones charged.</li>
                <li>Save important contact details and retain an accessible itinerary.</li>
                <li>Download offline maps wherever practical.</li>
                <li>Avoid exploring unfamiliar or isolated places alone, especially when connectivity is weak or weather conditions are changing.</li>
              </ul>
              <p>
                Please understand that continuous communication and immediate assistance cannot
                always be guaranteed in remote locations.
              </p>
              <p>
                Kashir Wath will make reasonable efforts within its role and available resources to
                support guest safety. These limitations do not remove any safety obligations or
                legal responsibilities applicable to Kashir Wath.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 5 */}
          <RevealOnScroll>
            <div className="legal-section" id="transport-safety">
              <span className="legal-section-number">Section 5</span>
              <h2>Transport Safety & Cooperation with the Driver</h2>
              <p>
                Safe transportation depends on responsible driving, suitable road conditions and
                cooperation from everyone travelling in the vehicle.
              </p>
              <p>Guests are requested to:</p>
              <ul>
                <li>Wear seat belts wherever provided and required.</li>
                <li>Allow the driver to concentrate on the road without unnecessary distraction.</li>
                <li>Follow reasonable safety instructions and applicable traffic rules.</li>
                <li>Avoid pressuring the driver to speed, overtake dangerously, ignore road closures or continue through unsafe conditions.</li>
                <li>Discuss additional stops, detours or route changes with the tour coordinator before making arrangements with the driver.</li>
                <li>Treat the vehicle and its facilities with reasonable care.</li>
              </ul>
              <p>
                Weather, road conditions, traffic restrictions, mechanical issues or official
                directions may occasionally require changes to the route, vehicle or travel
                schedule. Safety and lawful operation will always take priority over completing a
                particular route or sightseeing stop.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 6 */}
          <RevealOnScroll>
            <div className="legal-section" id="environmental-responsibility">
              <span className="legal-section-number">Section 6</span>
              <h2>Environmental Responsibility: Keep Kashmir Clean</h2>
              <p>
                Kashmir&apos;s natural beauty is a precious shared heritage. Its rivers, lakes,
                meadows, forests, mountains and villages deserve our care and respect.
              </p>
              <p>
                We warmly request every guest to help us preserve Kashmir&apos;s beauty for future
                generations.
              </p>
              <ul>
                <li>Please do not throw wrappers, plastic bottles, tissues, cigarette butts, food packaging or any other waste on roads, meadows, trails, riversides, viewpoints or public spaces.</li>
                <li>Carry your waste with you until a suitable disposal facility is available.</li>
                <li>Never throw waste into rivers, streams, lakes, waterfalls or other water bodies.</li>
                <li>Minimise single-use plastics wherever practical.</li>
                <li>Prefer reusable water bottles, bags and other environmentally responsible alternatives.</li>
                <li>Never throw litter from a moving vehicle.</li>
                <li>Use designated waste bins and follow local waste-disposal guidelines.</li>
                <li>Respect forests, wildlife, plants and fragile natural ecosystems.</li>
                <li>Leave religious sites, heritage structures, villages and natural surroundings as clean and undisturbed as possible.</li>
              </ul>
              <p>
                Even a small wrapper or plastic bottle can spoil a beautiful landscape and
                contribute to long-term environmental damage. We therefore encourage every guest to
                take personal responsibility for the waste they generate.
              </p>
              <p>
                Where a guest causes demonstrable environmental damage, deliberately litters or
                violates applicable environmental regulations, responsibility for attributable
                loss, damage or lawful penalties may be assessed in accordance with applicable law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 7 */}
          <RevealOnScroll>
            <div className="legal-section" id="local-culture">
              <span className="legal-section-number">Section 7</span>
              <h2>Respect for Local Culture & Communities</h2>
              <p>
                Kashmir&apos;s identity is shaped by its people, traditions, heritage, faith,
                hospitality and way of life.
              </p>
              <p>We encourage guests to approach local communities with curiosity, sensitivity and respect. Please:</p>
              <ul>
                <li>Respect local customs, cultural practices and religious sentiments.</li>
                <li>Follow applicable rules at religious sites, heritage locations and restricted areas.</li>
                <li>Seek permission before photographing individuals or private properties where appropriate.</li>
                <li>Respect the privacy and daily lives of local residents.</li>
                <li>Treat drivers, guides, artisans, vendors, accommodation staff and fellow travellers courteously.</li>
                <li>Avoid damaging heritage structures, public property or community facilities.</li>
                <li>Follow lawful instructions issued by relevant authorities.</li>
              </ul>
              <p>
                Responsible travel means appreciating local life while respecting the dignity,
                privacy and traditions of the people who make each destination special.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 8 */}
          <RevealOnScroll>
            <div className="legal-section" id="accommodation-etiquette">
              <span className="legal-section-number">Section 8</span>
              <h2>Personal Space, Privacy & Accommodation Etiquette</h2>
              <p>
                Every guest deserves privacy, dignity and respectful treatment throughout the
                journey.
              </p>
              <p>
                Guests are requested to respect room assignments, personal belongings, quiet hours,
                shared facilities and the reasonable comfort of other occupants.
              </p>
              <p>
                No guest may enter another guest&apos;s room, private accommodation space or
                assigned sleeping area without the occupant&apos;s permission or other lawful
                authority.
              </p>
              <p>
                Harassment, intimidation, threats, violence, unwanted physical contact,
                discriminatory abuse and deliberate property damage are unacceptable.
              </p>
              <p>
                If a concern arises, please inform the tour coordinator so that reasonable steps
                can be considered to protect the people involved and maintain a respectful
                environment.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 9 */}
          <RevealOnScroll>
            <div className="legal-section" id="health-fitness">
              <span className="legal-section-number">Section 9</span>
              <h2>Health, Fitness & Personal Preparedness</h2>
              <p>
                Mountain travel can involve cold temperatures, changing weather, altitude
                variations, uneven terrain, extended road journeys, physical exertion and limited
                access to immediate medical assistance.
              </p>
              <p>
                Guests are encouraged to assess their personal readiness for planned activities and
                carry essential medication, suitable clothing, comfortable footwear and other
                personal necessities.
              </p>
              <p>
                If you feel unwell or believe that an activity may put you at risk, please inform
                the tour coordinator and avoid participating until the concern has been
                appropriately considered.
              </p>
              <p>
                Kashir Wath will make reasonable efforts to assist within its role and available
                resources. However, medical facilities or emergency assistance may not be
                immediately accessible in remote locations.
              </p>
              <p>
                Nothing in this section excludes any responsibility that Kashir Wath is legally
                required to retain.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 10 */}
          <RevealOnScroll>
            <div className="legal-section" id="prohibited-substances">
              <span className="legal-section-number">Section 10</span>
              <h2>Weapons, Alcohol & Prohibited Substances</h2>
              <p>
                To maintain a safe and respectful travel environment, guests must not carry,
                possess, use or distribute unlawful weapons, illegal narcotics, prohibited drugs or
                other substances where their possession or use is unlawful.
              </p>
              <p>
                Alcohol must not be consumed where prohibited by law, accommodation rules, activity
                requirements or other applicable restrictions.
              </p>
              <p>
                Guests must not participate in an activity while impaired by alcohol or other
                intoxicating substances where this may compromise their safety, the safety of
                others or the safe operation of a vehicle or activity.
              </p>
              <p>
                Lawfully carried prescription medicines for personal medical use are not prohibited
                merely because they are medicines. Guests must comply with applicable prescription,
                documentation and transport requirements.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 11 */}
          <RevealOnScroll>
            <div className="legal-section" id="third-party-services">
              <span className="legal-section-number">Section 11</span>
              <h2>Third-Party Services & Activity Guidelines</h2>
              <p>
                Certain services may be delivered by independent accommodation providers, transport
                operators, guides, activity organisers or other local suppliers.
              </p>
              <p>
                Guests are requested to follow the relevant provider&apos;s lawful instructions,
                safety requirements and participation guidelines.
              </p>
              <p>
                Activities may be modified, postponed or cancelled where weather, access
                restrictions, official directions, equipment availability or other material
                circumstances make participation unsafe or impracticable.
              </p>
              <p>
                Kashir Wath remains responsible for the contractual obligations it has undertaken
                and any liability imposed upon it by applicable law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 12 */}
          <RevealOnScroll>
            <div className="legal-section" id="personal-belongings">
              <span className="legal-section-number">Section 12</span>
              <h2>Personal Belongings & Lost Property</h2>
              <p>
                Guests are encouraged to take reasonable care of their cash, jewellery, electronic
                devices, travel documents, medicines and other personal belongings.
              </p>
              <p>
                Please check your seat, accommodation, luggage and personal storage areas before
                leaving a vehicle or sightseeing location.
              </p>
              <p>
                Where an item is misplaced, Kashir Wath may provide reasonable assistance in
                contacting the relevant driver, accommodation provider or establishment.
              </p>
              <p>
                Recovery cannot be guaranteed, particularly where an item has been lost in a public
                place or remote location.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 13 */}
          <RevealOnScroll>
            <div className="legal-section" id="photography">
              <span className="legal-section-number">Section 13</span>
              <h2>Photography, Recording & Consent</h2>
              <p>
                Guests are welcome to capture memories of their journey wherever photography and
                recording are lawful and permitted.
              </p>
              <p>
                Please respect restrictions at religious sites, security-sensitive locations,
                private properties and other places where photography requires permission or is
                prohibited.
              </p>
              <p>
                The privacy and dignity of fellow guests, local residents and staff must be
                respected. Identifiable photographs or recordings should not be used to harass,
                unlawfully expose or harm another person.
              </p>
              <p>
                Kashir Wath will seek appropriate consent before using identifiable guest
                photographs, testimonials or recordings for promotional purposes wherever required
                by law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 14 */}
          <RevealOnScroll>
            <div className="legal-section" id="itinerary-changes">
              <span className="legal-section-number">Section 14</span>
              <h2>Itinerary Changes & Operational Decisions</h2>
              <p>
                We plan our journeys carefully, but travel conditions in mountainous regions can
                change because of weather, road conditions, access restrictions, official
                directions, supplier availability or other operational circumstances.
              </p>
              <p>
                Where reasonably necessary, Kashir Wath may adjust the sequence, timing, route or
                availability of a sightseeing stop or activity.
              </p>
              <p>
                A change in sightseeing sequence or timing does not automatically establish an
                entitlement to a refund where the contracted service remains substantially
                available. Where a material contracted service cannot be delivered, the applicable
                remedy will be determined under the relevant booking terms and applicable law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 15 */}
          <RevealOnScroll>
            <div className="legal-section" id="additional-requests">
              <span className="legal-section-number">Section 15</span>
              <h2>Additional Requests & Guest-Related Expenses</h2>
              <p>
                We understand that guests may wish to explore additional places, extend a stop,
                request a detour or make changes to their travel plans.
              </p>
              <p>
                We will consider such requests and accommodate them wherever reasonably feasible,
                subject to safety, timing, vehicle availability, local restrictions and operational
                requirements.
              </p>
              <p>
                Additional charges will be communicated wherever reasonably practicable and must
                have a lawful contractual basis.
              </p>
              <p>
                Kashir Wath is not required to facilitate an unavailable, unlawful or unsafe
                activity or arrangement.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 16 */}
          <RevealOnScroll>
            <div className="legal-section" id="respectful-conduct">
              <span className="legal-section-number">Section 16</span>
              <h2>Respectful Conduct & Group Well-Being</h2>
              <p>
                We want every guest to feel comfortable, respected and welcome throughout the
                journey.
              </p>
              <p>
                Guests are expected to treat fellow travellers, local residents, staff, drivers and
                service providers with courtesy and consideration.
              </p>
              <p>
                Threatening behaviour, harassment, violence, unlawful conduct, deliberate property
                damage or repeated disregard of reasonable safety instructions may require
                intervention.
              </p>
              <p>
                Any restriction on participation or change to arrangements will be handled in
                accordance with the circumstances, applicable booking terms and law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 17 */}
          <RevealOnScroll>
            <div className="legal-section" id="resolving-concerns">
              <span className="legal-section-number">Section 17</span>
              <h2>Communication & Resolving Concerns</h2>
              <p>
                We encourage guests to communicate any concern regarding a service, activity,
                accommodation arrangement or travel experience promptly to the designated tour
                coordinator or the official contact provided in the booking confirmation.
              </p>
              <p>
                Kashir Wath will consider genuine complaints fairly, taking into account the
                confirmed arrangements, the circumstances and applicable law.
              </p>
              <p>
                This process does not prevent guests from exercising their statutory rights or
                approaching an appropriate consumer authority or legal forum.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 18 */}
          <RevealOnScroll>
            <div className="legal-section" id="responsibility-liability">
              <span className="legal-section-number">Section 18</span>
              <h2>Responsibility & Liability</h2>
              <p>
                Kashir Wath and each guest remain responsible for their respective obligations and
                conduct under the confirmed arrangements and applicable law.
              </p>
              <p>
                To the extent legally permissible, a guest may be responsible for reasonable,
                evidenced losses directly caused by that guest&apos;s unlawful conduct, wilful
                misconduct, negligence or material breach of these Terms &amp; Conditions.
              </p>
              <p>
                Nothing in these Terms &amp; Conditions excludes or limits responsibility for
                negligence, breach of contract or any other matter for which Kashir Wath is legally
                responsible.
              </p>
              <p>
                Nothing excludes or limits liability for death, personal injury, fraud, statutory
                obligations or any other matter to the extent that such liability cannot lawfully
                be excluded or restricted.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 19 */}
          <RevealOnScroll>
            <div className="legal-section" id="other-policies">
              <span className="legal-section-number">Section 19</span>
              <h2>Relationship with Other Booking Policies</h2>
              <p>
                These Terms &amp; Conditions should be read together with the quotation, confirmed
                itinerary, payment terms, cancellation and refund policy, travel safety provisions
                and any other documents expressly applicable to the booking.
              </p>
              <p>
                Booking, cancellation, refund and force majeure matters are governed by the
                relevant separate policy applicable to the booking and by applicable law.
              </p>
              <p>
                Nothing in these Terms &amp; Conditions overrides mandatory legal rights or
                protections.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 20 */}
          <RevealOnScroll>
            <div className="legal-section" id="governing-law">
              <span className="legal-section-number">Section 20</span>
              <h2>Governing Law & Dispute Resolution</h2>
              <p>
                These Terms &amp; Conditions shall be governed by the laws of India, subject to
                applicable legal requirements and mandatory consumer-protection provisions.
              </p>
              <p>
                The parties are encouraged to resolve concerns through reasonable, respectful and
                good-faith communication wherever practicable.
              </p>
              <p>
                Where a dispute cannot be resolved amicably, it may be referred to the competent
                court, consumer commission or other legally authorised forum having jurisdiction
                under applicable law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 21 */}
          <RevealOnScroll>
            <div className="legal-section" id="shared-commitment">
              <span className="legal-section-number">Section 21</span>
              <h2>Our Shared Commitment</h2>
              <p>
                At Kashir Wath, we believe the best journeys are created when thoughtful planning
                is matched by mutual respect, responsible choices and care for the places we visit.
              </p>
              <p>
                We will make reasonable efforts to organise your journey with attention, communicate
                important instructions and support a safe and meaningful travel experience.
              </p>
              <p>
                In return, we ask our guests to remain informed about their itinerary, respect
                agreed timings, follow reasonable safety instructions, care for their belongings,
                respect local communities and help preserve Kashmir&apos;s natural beauty.
              </p>
              <p>
                By confirming a booking or participating in a journey organised by Kashir Wath,
                guests acknowledge these Terms &amp; Conditions, subject to their rights and
                protections under applicable law.
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
