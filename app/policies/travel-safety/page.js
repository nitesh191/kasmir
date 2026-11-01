import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import LegalNav from '@/components/LegalNav'

export const metadata = {
  title: 'Travel & Safety Policy',
  description:
    'Travel planning, safety instructions, health considerations, local conditions, transport, accommodation and emergency guidance for Kashir Wath journeys.',
}

export default function TravelSafetyPolicy() {
  return (
    <>
      <PageHero
        image="/images/hero.jpg"
        label="Policies"
        title="Travel & Safety Policy"
        subtitle="Travel thoughtfully. Follow local guidance. Respect the landscape. Put safety before the itinerary."
        breadcrumbs={[
          { label: 'Policies', href: '/policies' },
          { label: 'Travel & Safety' },
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
                KASHIR WATH designs and facilitates curated journeys across Kashmir. This Travel
                &amp; Safety Policy explains the principal responsibilities of KASHIR WATH and
                travellers in relation to travel planning, safety instructions, health-related
                considerations, local conditions, transport, accommodation, itinerary changes and
                emergency situations.
              </p>
            </div>
          </RevealOnScroll>

          {/* TOC */}
          <RevealOnScroll>
            <div className="legal-toc">
              <h4>Contents</h4>
              <ol>
                <li><a href="#purpose">Purpose and Scope</a></li>
                <li><a href="#traveller-responsibility">Traveller Responsibility and Informed Participation</a></li>
                <li><a href="#nature-kashmir">Nature of Kashmir Travel</a></li>
                <li><a href="#weather-road">Weather, Road Conditions and Itinerary Changes</a></li>
                <li><a href="#security">Security, Local Restrictions and Official Directions</a></li>
                <li><a href="#health-fitness">Health, Medical Fitness and Physical Requirements</a></li>
                <li><a href="#altitude">Altitude, Mountain Travel and Physical Exertion</a></li>
                <li><a href="#rivers-lakes">Rivers, Lakes, Waterfalls, Meadows and Off-Road Areas</a></li>
                <li><a href="#transport">Transport and Road Safety</a></li>
                <li><a href="#accommodation">Accommodation Safety and Conduct</a></li>
                <li><a href="#personal-belongings">Personal Belongings, Documents and Valuables</a></li>
                <li><a href="#children-seniors">Children, Older Travellers and Participants Requiring Assistance</a></li>
                <li><a href="#traveller-conduct">Traveller Conduct and Safety Instructions</a></li>
                <li><a href="#optional-activities">Optional Activities and Independent Exploration</a></li>
                <li><a href="#third-party">Third-Party Suppliers and Service Providers</a></li>
                <li><a href="#emergencies">Medical Emergencies and Other Emergencies</a></li>
                <li><a href="#travel-insurance">Travel Insurance</a></li>
                <li><a href="#alcohol">Alcohol, Intoxicants and Prohibited Items</a></li>
                <li><a href="#personal-data">Personal Data and Emergency Information</a></li>
                <li><a href="#complaints">Complaints, Hazards and Incident Reporting</a></li>
                <li><a href="#changes-delays">Changes, Delays, Cancellations and Refunds</a></li>
                <li><a href="#no-guarantee">No Guarantee of Risk-Free Travel</a></li>
                <li><a href="#limitation">Limitation of Liability</a></li>
                <li><a href="#other-policies">Relationship with Other Policies</a></li>
                <li><a href="#updates">Updates to This Policy</a></li>
                <li><a href="#contact">Contact Information</a></li>
              </ol>
            </div>
          </RevealOnScroll>

          {/* Section 1 */}
          <RevealOnScroll>
            <div className="legal-section" id="purpose">
              <span className="legal-section-number">Section 1</span>
              <h2>Purpose and Scope</h2>
              <p>
                KASHIR WATH designs and facilitates curated journeys across Kashmir and, where expressly offered, other destinations.
              </p>
              <p>
                Our itineraries may include urban sightseeing, cultural and heritage walks, religious sites, mountain roads, lakes, rivers, meadows, rural areas, remote destinations and locations requiring additional travel time or physical effort.
              </p>
              <p>
                This Travel &amp; Safety Policy explains the principal responsibilities of KASHIR WATH and travellers in relation to travel planning, safety instructions, health-related considerations, local conditions, transport, accommodation, itinerary changes and emergency situations.
              </p>
              <p>
                Travel inherently involves risks that cannot always be eliminated. Conditions may change before or during a journey, and the risks associated with a particular activity or location may differ from those reasonably anticipated at the time of booking.
              </p>
              <p>
                KASHIR WATH seeks to communicate material information and take reasonable steps within the scope of its confirmed arrangements. This policy does not guarantee risk-free travel or replace a traveller&apos;s own judgment, preparation or compliance with lawful instructions.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 2 */}
          <RevealOnScroll>
            <div className="legal-section" id="traveller-responsibility">
              <span className="legal-section-number">Section 2</span>
              <h2>Traveller Responsibility and Informed Participation</h2>
              <p>
                By booking or participating in a KASHIR WATH journey, travellers are expected to read the itinerary, understand the nature of the proposed activities and raise relevant concerns before departure.
              </p>
              <p>Travellers are responsible for:</p>
              <ul>
                <li>Reading the itinerary and identifying any physical, logistical or other requirements that may affect their participation.</li>
                <li>Providing accurate and relevant information about their travel requirements.</li>
                <li>Following reasonable safety instructions issued by the tour operator, driver, guide, accommodation provider, site administrator or competent authority.</li>
                <li>Remaining within permitted visitor areas and using designated routes where required.</li>
                <li>Avoiding conduct that creates an unreasonable risk to themselves or others.</li>
                <li>Informing the designated tour representative or relevant service provider of a safety concern as soon as reasonably practicable.</li>
                <li>Making informed decisions about optional activities, subject to applicable restrictions and the availability of suitable arrangements.</li>
              </ul>
              <p>
                A traveller&apos;s decision to participate does not remove any duty or legal responsibility that KASHIR WATH or another party may have under applicable law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 3 */}
          <RevealOnScroll>
            <div className="legal-section" id="nature-kashmir">
              <span className="legal-section-number">Section 3</span>
              <h2>Nature of Kashmir Travel</h2>
              <p>
                Kashmir is geographically diverse. Travel conditions may vary considerably between Srinagar and other urban areas, mountain destinations, rural settlements, valleys, pilgrimage locations and remote landscapes.
              </p>
              <p>Depending on the itinerary, travellers may encounter:</p>
              <ul>
                <li>Mountain roads, bends, steep gradients and narrow road sections.</li>
                <li>Traffic congestion, roadworks, diversions and temporary closures.</li>
                <li>Snowfall, rain, fog, strong winds or rapidly changing weather.</li>
                <li>Slippery surfaces, uneven paths, steps and unpaved approaches.</li>
                <li>Variable mobile network coverage and limited connectivity.</li>
                <li>Restricted access to medical facilities or emergency services in remote areas.</li>
                <li>Temporary restrictions imposed by public authorities or site administrators.</li>
                <li>Long driving periods or delays caused by local conditions.</li>
              </ul>
              <p>
                Travel times and accessibility information are estimates unless expressly confirmed otherwise. A location&apos;s inclusion in an itinerary does not guarantee uninterrupted access or arrival at a particular time.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 4 */}
          <RevealOnScroll>
            <div className="legal-section" id="weather-road">
              <span className="legal-section-number">Section 4</span>
              <h2>Weather, Road Conditions and Itinerary Changes</h2>
              <p>
                Weather and road conditions may affect the safety, accessibility and timing of travel.
              </p>
              <p>
                KASHIR WATH may recommend, modify, postpone or omit an activity where reasonably necessary because of weather, road closures, local advisories, safety concerns, site restrictions, supplier limitations or other material circumstances.
              </p>
              <p>Examples include:</p>
              <ul>
                <li>Heavy rain, snowfall, landslides or a risk of falling rocks.</li>
                <li>Flooding, rising water levels or unsafe conditions near rivers and lakes.</li>
                <li>Poor visibility, road closures or unsafe driving conditions.</li>
                <li>Temporary restrictions affecting religious, heritage or tourist sites.</li>
                <li>Local administrative instructions or security-related restrictions.</li>
                <li>A vehicle breakdown or the unavailability of a confirmed service.</li>
                <li>Medical or other emergencies affecting a participant or the group.</li>
              </ul>
              <p>
                Where practicable, KASHIR WATH will communicate significant changes and consider a reasonable alternative consistent with the circumstances and the booking terms.
              </p>
              <p>
                An alternative activity, route, accommodation or service may not be identical to the original arrangement. Any applicable refund, price adjustment or additional charge will be assessed under the relevant booking terms, the facts of the situation and applicable law.
              </p>
              <p>
                KASHIR WATH does not guarantee that every itinerary item can be completed regardless of external conditions.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 5 */}
          <RevealOnScroll>
            <div className="legal-section" id="security">
              <span className="legal-section-number">Section 5</span>
              <h2>Security, Local Restrictions and Official Directions</h2>
              <p>
                Travel in certain areas may be affected by security advisories, local restrictions, public order requirements, administrative instructions or changes in access permissions.
              </p>
              <p>
                Travellers must comply with applicable law and legitimate directions issued by competent authorities, security personnel, site administrators and other authorised officials.
              </p>
              <p>
                KASHIR WATH may change a route, avoid a location, restrict an activity or suspend a part of a journey when reasonably required by safety considerations, official instructions or prevailing conditions.
              </p>
              <p>
                No itinerary or prior confirmation should be interpreted as a guarantee of access to a location where access depends on a public authority, security agency, local administration, religious institution or other third party.
              </p>
              <p>
                Travellers should check applicable government travel advisories and any specific instructions communicated before departure.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 6 */}
          <RevealOnScroll>
            <div className="legal-section" id="health-fitness">
              <span className="legal-section-number">Section 6</span>
              <h2>Health, Medical Fitness and Physical Requirements</h2>
              <p>
                Travellers should assess whether they are reasonably able to participate in the activities and travel conditions described in the itinerary.
              </p>
              <p>
                Some journeys may involve extended driving, early departures, stairs, walking over uneven surfaces, changes in elevation, limited facilities or access to locations where medical assistance is not immediately available.
              </p>
              <p>
                Before booking, travellers should consider any medical or mobility-related requirements that could materially affect their participation.
              </p>
              <p>Travellers should:</p>
              <ul>
                <li>Seek advice from an appropriately qualified healthcare professional where their medical circumstances warrant it.</li>
                <li>Carry prescribed medication and any essential personal medical supplies.</li>
                <li>Inform KASHIR WATH before departure of relevant requirements that may affect the feasibility or safety of the planned journey.</li>
                <li>Avoid undertaking activities that conflict with medical advice or their own physical limitations.</li>
                <li>Inform the relevant representative promptly if they become unwell or are unable to continue safely.</li>
              </ul>
              <p>
                KASHIR WATH is a travel operator, not a medical provider. Unless expressly stated otherwise, it does not provide medical assessments, medical treatment or emergency medical personnel as part of its services.
              </p>
              <p>
                Any health information supplied by a traveller will be handled in accordance with applicable privacy requirements and used only as reasonably necessary for the relevant purpose.
              </p>
              <p>
                Travellers should disclose sensitive health information only through an appropriate channel and to the extent reasonably necessary for planning or safety.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 7 */}
          <RevealOnScroll>
            <div className="legal-section" id="altitude">
              <span className="legal-section-number">Section 7</span>
              <h2>Altitude, Mountain Travel and Physical Exertion</h2>
              <p>
                Some destinations or activities may involve higher elevations, steep approaches, exposed paths, extended walking or other physical demands.
              </p>
              <p>
                Possible concerns include fatigue, breathlessness, dizziness, dehydration, altitude-related illness, falls and difficulty accessing medical assistance.
              </p>
              <p>
                Travellers should not assume that a route is suitable merely because it is marketed as a sightseeing excursion or appears manageable in photographs.
              </p>
              <p>
                Where a proposed activity involves material physical demands, travellers should review the description and seek clarification before booking.
              </p>
              <p>
                Travellers should stop and inform the relevant representative if they experience symptoms that make continued participation unsafe.
              </p>
              <p>
                KASHIR WATH may decline to facilitate, modify or discontinue an activity where there is a reasonable safety concern, taking account of the circumstances and applicable law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 8 */}
          <RevealOnScroll>
            <div className="legal-section" id="rivers-lakes">
              <span className="legal-section-number">Section 8</span>
              <h2>Rivers, Lakes, Waterfalls, Meadows and Off-Road Areas</h2>
              <p>
                Natural landscapes can contain hidden or changing hazards, including slippery stones, unstable ground, sudden changes in water depth, strong currents, steep edges, soft terrain and limited mobile connectivity.
              </p>
              <p>
                Travellers must exercise particular caution around water bodies, waterfalls, riverbanks, mountain edges and remote viewpoints.
              </p>
              <p>
                Unless an activity has been expressly arranged and appropriate permissions and safety provisions are in place, travellers should not assume that swimming, boating, entering water, crossing streams, trekking off-road or approaching exposed edges is permitted or suitable.
              </p>
              <p>
                Travellers should inform the designated representative before undertaking an optional activity that departs from the planned itinerary, particularly where the activity involves water, remote terrain or limited connectivity.
              </p>
              <p>
                KASHIR WATH may advise against or refuse to facilitate an activity where the prevailing conditions, permissions or available safety arrangements are inadequate.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 9 */}
          <RevealOnScroll>
            <div className="legal-section" id="transport">
              <span className="legal-section-number">Section 9</span>
              <h2>Transport and Road Safety</h2>
              <p>
                Transport services will be arranged as specified in the confirmed booking, subject to availability and the applicable terms.
              </p>
              <p>Travellers must:</p>
              <ul>
                <li>Wear seat belts wherever provided and required.</li>
                <li>Follow applicable vehicle safety rules.</li>
                <li>Avoid distracting the driver or interfering with vehicle operation.</li>
                <li>Follow reasonable instructions relating to boarding, stopping and roadside safety.</li>
                <li>Avoid boarding a vehicle that appears manifestly unsafe and report the concern promptly.</li>
                <li>Inform the driver or designated representative before leaving the vehicle at an unplanned location.</li>
              </ul>
              <p>
                Driving times may vary due to traffic, weather, roadworks, road closures, security checks and other circumstances.
              </p>
              <p>
                A vehicle category, model or seating configuration will be as specified in the confirmed booking, subject to any permitted substitution under the booking terms.
              </p>
              <p>
                The inclusion of a private vehicle does not imply that the driver will accompany travellers on every walk, temple approach, trail or independent excursion.
              </p>
              <p>
                Where travellers arrange their own transport, engage an independent provider or undertake an activity outside the confirmed arrangements, responsibility for that separate arrangement will be assessed according to the actual circumstances and applicable law.
              </p>
              <p>
                Nothing in this section excludes any responsibility that KASHIR WATH may have for transport services it has undertaken to arrange or provide.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 10 */}
          <RevealOnScroll>
            <div className="legal-section" id="accommodation">
              <span className="legal-section-number">Section 10</span>
              <h2>Accommodation Safety and Conduct</h2>
              <p>
                Accommodation arrangements are subject to the confirmed booking and the relevant property&apos;s policies.
              </p>
              <p>Travellers should:</p>
              <ul>
                <li>Follow the property&apos;s safety, fire, access and conduct instructions.</li>
                <li>Keep keys, personal belongings and travel documents secure.</li>
                <li>Avoid entering another guest&apos;s room or a restricted area without permission.</li>
                <li>Report hazards, damage or security concerns to the property and, where relevant, the designated KASHIR WATH representative.</li>
                <li>Exercise care around balconies, stairs, fireplaces, heaters, electrical equipment and other potential hazards.</li>
                <li>Avoid unsafe use of heating or electrical appliances.</li>
              </ul>
              <p>
                Accommodation standards, room configuration, facilities, heating, views, meals and other amenities depend on the confirmed property and the actual services offered.
              </p>
              <p>
                A description of accommodation as premium, luxury, boutique or heritage-oriented is not a guarantee of identical facilities across different properties.
              </p>
              <p>
                Where a confirmed property becomes unavailable or cannot reasonably be used, any alternative arrangement will be handled in accordance with the booking terms and applicable law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 11 */}
          <RevealOnScroll>
            <div className="legal-section" id="personal-belongings">
              <span className="legal-section-number">Section 11</span>
              <h2>Personal Belongings, Documents and Valuables</h2>
              <p>
                Travellers are responsible for safeguarding their passports, identification documents, money, electronic devices, valuables and other personal belongings.
              </p>
              <p>KASHIR WATH recommends that travellers:</p>
              <ul>
                <li>Keep essential documents and valuables secure.</li>
                <li>Maintain copies of important travel documents separately where appropriate.</li>
                <li>Avoid leaving valuables unattended in vehicles or public areas.</li>
                <li>Use reasonable precautions when carrying cash or electronic devices.</li>
                <li>Report loss, theft or suspected misuse promptly to the relevant authorities and service providers.</li>
              </ul>
              <p>
                KASHIR WATH will assess any responsibility for loss or damage in accordance with the actual circumstances, the services it has undertaken to provide and applicable law. This policy does not automatically exclude responsibility for negligence or other liability that cannot lawfully be excluded.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 12 */}
          <RevealOnScroll>
            <div className="legal-section" id="children-seniors">
              <span className="legal-section-number">Section 12</span>
              <h2>Children, Older Travellers and Participants Requiring Assistance</h2>
              <p>
                The suitability of a journey for children, older travellers or people requiring additional assistance depends on the itinerary, transport, accommodation, physical demands and available support.
              </p>
              <p>
                A parent, legal guardian or responsible accompanying adult must supervise children and ensure that their participation is appropriate to the activity and prevailing conditions.
              </p>
              <p>
                Travellers requiring mobility assistance, accessibility arrangements or other additional support should communicate their requirements before booking so that feasibility can be assessed.
              </p>
              <p>
                KASHIR WATH will communicate material limitations that it knows about or that are reasonably apparent from the arrangements being offered. However, the availability of accessible facilities, medical support, specialised equipment or personal assistance must be confirmed for the particular journey.
              </p>
              <p>
                No accessibility feature or support service should be assumed unless expressly confirmed.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 13 */}
          <RevealOnScroll>
            <div className="legal-section" id="traveller-conduct">
              <span className="legal-section-number">Section 13</span>
              <h2>Traveller Conduct and Safety Instructions</h2>
              <p>
                Travellers must behave in a manner that does not unreasonably endanger themselves, fellow participants, local residents, service providers or property.
              </p>
              <p>The following conduct is prohibited where it violates applicable law, site rules or reasonable safety requirements:</p>
              <ul>
                <li>Threatening, abusive, violent or harassing behaviour.</li>
                <li>Interfering with a driver, guide or other service provider while they perform safety-sensitive duties.</li>
                <li>Entering restricted areas or disregarding official closures.</li>
                <li>Deliberately damaging property or creating a dangerous situation.</li>
                <li>Using prohibited substances or possessing prohibited items in violation of applicable law.</li>
                <li>Ignoring reasonable safety instructions in a manner that creates a material risk.</li>
              </ul>
              <p>
                Where a traveller&apos;s conduct creates a serious or continuing safety concern, KASHIR WATH may take proportionate steps, which may include issuing a warning, asking the traveller to discontinue an activity, seeking assistance from a relevant service provider or competent authority, or arranging an alternative to continued participation where reasonably necessary.
              </p>
              <p>
                Any decision affecting participation, transport or accommodation will depend on the circumstances, available alternatives, contractual terms and applicable law.
              </p>
              <p>
                Additional costs, refunds or other consequences will be assessed under the relevant booking terms and applicable law. No blanket forfeiture or exclusion of statutory rights is intended.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 14 */}
          <RevealOnScroll>
            <div className="legal-section" id="optional-activities">
              <span className="legal-section-number">Section 14</span>
              <h2>Optional Activities and Independent Exploration</h2>
              <p>
                An optional activity may involve risks, costs, permissions or physical requirements that differ from those associated with the main itinerary.
              </p>
              <p>
                Travellers should obtain clarification before participating in an activity that is not expressly included in the confirmed booking.
              </p>
              <p>
                Independent exploration, third-party excursions or activities arranged directly by a traveller may fall outside KASHIR WATH&apos;s confirmed arrangements.
              </p>
              <p>
                However, whether KASHIR WATH has any duty or responsibility in a particular situation will depend on the actual role it undertook, the circumstances and applicable law; the fact that an activity is described as optional or independent does not automatically eliminate all responsibility.
              </p>
              <p>
                Travellers should not interpret the mention of an activity, location or supplier in a general guide as confirmation that the activity has been booked, vetted for their individual circumstances or included in the tour price.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 15 */}
          <RevealOnScroll>
            <div className="legal-section" id="third-party">
              <span className="legal-section-number">Section 15</span>
              <h2>Third-Party Suppliers and Service Providers</h2>
              <p>
                Journeys may involve accommodation providers, transport operators, guides, activity providers, restaurants, site administrators and other third parties.
              </p>
              <p>
                The role of KASHIR WATH will depend on the specific service and booking arrangement.
              </p>
              <p>
                Where a service is supplied by a third party, its availability, operational standards, terms and performance may be affected by circumstances outside KASHIR WATH&apos;s direct control.
              </p>
              <p>
                KASHIR WATH will take reasonable steps within the scope of its arrangements to communicate relevant information and address material service issues.
              </p>
              <p>
                Nothing in this policy represents that every supplier is controlled by KASHIR WATH or removes any responsibility that KASHIR WATH may have under applicable law or the confirmed booking.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 16 */}
          <RevealOnScroll>
            <div className="legal-section" id="emergencies">
              <span className="legal-section-number">Section 16</span>
              <h2>Medical Emergencies and Other Emergencies</h2>
              <p>
                If a medical, security, environmental or other emergency occurs, travellers should contact the appropriate local emergency service or competent authority where necessary and notify the designated tour representative as soon as reasonably practicable.
              </p>
              <p>Depending on the circumstances, reasonable steps may include:</p>
              <ul>
                <li>Contacting emergency services.</li>
                <li>Seeking assistance from local authorities or nearby service providers.</li>
                <li>Arranging transport to an appropriate medical facility where available.</li>
                <li>Communicating relevant information to the traveller&apos;s nominated emergency contact, where appropriate and lawful.</li>
                <li>Modifying or suspending the itinerary.</li>
              </ul>
              <p>
                The response available will depend on the location, connectivity, weather, road access, availability of medical facilities, official instructions and the nature of the emergency.
              </p>
              <p>
                KASHIR WATH does not guarantee immediate rescue, uninterrupted communication, the availability of a particular hospital or doctor, or a particular medical outcome.
              </p>
              <p>
                Unless expressly included in the booking, emergency assistance, medical treatment, evacuation, ambulance services and rescue operations are not automatically included in the tour price.
              </p>
              <p>
                Travellers remain responsible for applicable medical, transport and other personal expenses, subject to the booking terms, any applicable insurance coverage and the rights and obligations imposed by law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 17 */}
          <RevealOnScroll>
            <div className="legal-section" id="travel-insurance">
              <span className="legal-section-number">Section 17</span>
              <h2>Travel Insurance</h2>
              <p>
                KASHIR WATH strongly recommends that travellers consider appropriate travel insurance before departure.
              </p>
              <p>Depending on the itinerary and their individual circumstances, travellers may wish to review cover for:</p>
              <ul>
                <li>Medical treatment and hospitalisation.</li>
                <li>Emergency evacuation or repatriation, where relevant.</li>
                <li>Trip cancellation or interruption.</li>
                <li>Travel delays and missed connections.</li>
                <li>Baggage loss or damage.</li>
                <li>Personal accidents and other covered liabilities.</li>
                <li>Activities involving mountain terrain or other higher-risk conditions, if applicable.</li>
              </ul>
              <p>
                Travellers should check exclusions, claim conditions, geographical coverage, activity restrictions and policy limits directly with the insurer.
              </p>
              <p>
                Insurance availability, eligibility and coverage depend on the insurer and the policy purchased. KASHIR WATH does not guarantee that a particular claim will be accepted or that every activity is insured.
              </p>
              <p>
                Unless expressly confirmed in writing, travel insurance is not included in the tour price.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 18 */}
          <RevealOnScroll>
            <div className="legal-section" id="alcohol">
              <span className="legal-section-number">Section 18</span>
              <h2>Alcohol, Intoxicants and Prohibited Items</h2>
              <p>
                Travellers must comply with applicable law and the rules of accommodation providers, religious institutions, protected areas and other locations.
              </p>
              <p>
                The possession or use of prohibited substances, weapons or other restricted items is not permitted where prohibited by law or relevant site rules.
              </p>
              <p>
                Travellers must not participate in a safety-sensitive activity while impaired in a manner that creates a material risk to themselves or others.
              </p>
              <p>
                KASHIR WATH may take proportionate steps where a traveller&apos;s conduct creates a safety or legal concern, subject to applicable law and the relevant booking terms.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 19 */}
          <RevealOnScroll>
            <div className="legal-section" id="personal-data">
              <span className="legal-section-number">Section 19</span>
              <h2>Personal Data and Emergency Information</h2>
              <p>
                KASHIR WATH may need certain information to facilitate a booking or respond to an emergency, such as a traveller&apos;s contact details, relevant accessibility requirements or nominated emergency contact.
              </p>
              <p>
                Information should be provided through appropriate channels and only to the extent reasonably necessary for the relevant purpose.
              </p>
              <p>
                Any collection, use, storage or sharing of personal information will be governed by KASHIR WATH&apos;s Privacy Policy and applicable law.
              </p>
              <p>
                Travellers should avoid sharing unnecessary sensitive information and should inform KASHIR WATH if relevant contact or emergency details change before departure.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 20 */}
          <RevealOnScroll>
            <div className="legal-section" id="complaints">
              <span className="legal-section-number">Section 20</span>
              <h2>Complaints, Hazards and Incident Reporting</h2>
              <p>
                Travellers should report safety concerns, service deficiencies, hazards or incidents to the designated representative as soon as reasonably practicable.
              </p>
              <p>
                Where immediate danger exists, travellers should prioritise their safety and contact the appropriate emergency service or authority rather than waiting for a response from KASHIR WATH.
              </p>
              <p>Where practicable, a report should include:</p>
              <ul>
                <li>The location and approximate time of the incident.</li>
                <li>A description of the concern.</li>
                <li>Any immediate assistance required.</li>
                <li>Relevant photographs or supporting information, provided it is safe and lawful to obtain them.</li>
              </ul>
              <p>
                KASHIR WATH will consider reported concerns in light of the circumstances and the information available. Reporting an incident does not guarantee a particular outcome, but prompt communication may help identify appropriate next steps.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 21 */}
          <RevealOnScroll>
            <div className="legal-section" id="changes-delays">
              <span className="legal-section-number">Section 21</span>
              <h2>Changes, Delays, Cancellations and Refunds</h2>
              <p>
                Travel arrangements may be affected by circumstances including weather, road closures, public authority instructions, supplier unavailability, emergencies and other events beyond reasonable control.
              </p>
              <p>
                The applicable consequences will depend on the reason for the change, the services affected, the booking terms, supplier conditions and applicable law.
              </p>
              <p>
                KASHIR WATH will communicate material changes where reasonably practicable and consider alternatives consistent with the circumstances.
              </p>
              <p>
                Refunds, credits, rescheduling, replacement services and additional costs will be assessed under the applicable Booking &amp; Payment Policy, Cancellation &amp; Refund Policy and confirmed booking terms.
              </p>
              <p>
                Nothing in this policy creates an automatic right to retain all amounts paid, nor does it automatically guarantee a full refund in every situation. Any non-refundable amount or deduction must be consistent with the agreed terms and applicable law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 22 */}
          <RevealOnScroll>
            <div className="legal-section" id="no-guarantee">
              <span className="legal-section-number">Section 22</span>
              <h2>No Guarantee of Risk-Free Travel</h2>
              <p>
                KASHIR WATH endeavours to facilitate journeys with reasonable care and appropriate attention to the nature of the itinerary.
              </p>
              <p>
                However, no travel operator can guarantee that every journey, road, accommodation facility, activity, natural location or third-party service will be free from risk or interruption.
              </p>
              <p>
                Information about destinations, routes, expected conditions and travel durations is provided for planning purposes and may change.
              </p>
              <p>
                Nothing in this policy excludes or limits a legal duty, consumer right or liability that cannot lawfully be excluded or limited.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 23 */}
          <RevealOnScroll>
            <div className="legal-section" id="limitation">
              <span className="legal-section-number">Section 23</span>
              <h2>Limitation of Liability</h2>
              <p>
                To the extent permitted by applicable law, KASHIR WATH is not responsible for a loss or disruption solely because it results from circumstances genuinely beyond its reasonable control, such as an official closure, sudden adverse weather or an independently imposed access restriction.
              </p>
              <p>
                Any assessment of responsibility will take account of the actual services arranged or provided, the conduct of the relevant parties, the booking terms, the circumstances of the incident and applicable law.
              </p>
              <p>
                This policy does not exclude or limit liability for fraud, wilful misconduct, negligence, breach of a non-excludable legal duty or any other matter for which liability cannot lawfully be excluded or limited.
              </p>
              <p>
                A traveller&apos;s own conduct, failure to follow reasonable safety instructions or failure to disclose a material requirement may be relevant to the assessment of responsibility where legally appropriate, but does not automatically eliminate another party&apos;s liability.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 24 */}
          <RevealOnScroll>
            <div className="legal-section" id="other-policies">
              <span className="legal-section-number">Section 24</span>
              <h2>Relationship with Other Policies</h2>
              <p>This Travel &amp; Safety Policy should be read together with KASHIR WATH&apos;s:</p>
              <ul>
                <li>Terms and Conditions;</li>
                <li>Booking and Payment Policy;</li>
                <li>Cancellation and Refund Policy;</li>
                <li>Responsible Travel Policy;</li>
                <li>Privacy Policy; and</li>
                <li>Website Disclaimer &amp; Intellectual Property Policy.</li>
              </ul>
              <p>
                The confirmed itinerary, written booking confirmation and any activity-specific safety instructions should also be reviewed.
              </p>
              <p>
                If a question arises concerning a specific service, the relevant booking documents and applicable law will be considered alongside this policy. Nothing in this document is intended to override a mandatory legal requirement or a confirmed contractual commitment that remains in force.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 25 */}
          <RevealOnScroll>
            <div className="legal-section" id="updates">
              <span className="legal-section-number">Section 25</span>
              <h2>Updates to This Policy</h2>
              <p>
                KASHIR WATH may update this policy to reflect changes in its services, operating procedures, destination conditions or applicable law.
              </p>
              <p>
                The version published on the official website, together with any applicable booking documents, should be consulted for the relevant journey.
              </p>
              <p>
                A policy update does not retrospectively remove a right or obligation that has already accrued or that cannot lawfully be changed.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 26 */}
          <RevealOnScroll>
            <div className="legal-section" id="contact">
              <span className="legal-section-number">Section 26</span>
              <h2>Contact Information</h2>
              <p>
                For questions concerning travel arrangements, safety requirements or an incident relating to a KASHIR WATH journey, please contact:
              </p>
              <p>
                KASHIR WATH<br />
                Email: [Official Business Email]<br />
                Website: [Official Website URL]<br />
                Business Address: [Complete Business Address, New Delhi, India]<br />
                Emergency Contact During Travel: [Provide only if an operational contact system is in place]
              </p>
            </div>
          </RevealOnScroll>

          {/* Footer */}
          <RevealOnScroll>
            <div className="legal-footer">
              <p className="legal-brand">KASHIR WATH</p>
              <p className="legal-tagline">Soulful Journeys Through Kashir</p>
              <p>
                Travel thoughtfully. Follow local guidance. Respect the landscape. Put safety before the itinerary.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
