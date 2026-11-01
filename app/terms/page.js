import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import LegalNav from '@/components/LegalNav'

export const metadata = {
  title: 'Terms & Conditions',
  description:
    'Complete terms and conditions governing access to and use of the Kashir Wath website, bookings, travel arrangements and services.',
}

export default function TermsAndConditions() {
  return (
    <>
      <PageHero
        image="/images/hero.jpg"
        label="Legal"
        title="Terms & Conditions"
        subtitle="A transparent booking begins with clear expectations."
        breadcrumbs={[
          { label: 'Policies', href: '/policies' },
          { label: 'Terms & Conditions' },
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
                Welcome to KASHIR WATH, a travel brand dedicated to thoughtfully curated journeys
                through Kashmir, its landscapes, cultural traditions, sacred geography, historical
                heritage and living communities. These Terms &amp; Conditions govern access to and
                use of the KASHIR WATH website, enquiries, quotations, itineraries, bookings,
                travel arrangements and services supplied or arranged under the KASHIR WATH brand.
              </p>
              <p>
                Effective Date: [Insert Date] &bull; Last Updated: [Insert Date]
              </p>
            </div>
          </RevealOnScroll>

          {/* TOC */}
          <RevealOnScroll>
            <div className="legal-toc">
              <h4>Contents</h4>
              <ol>
                <li><a href="#introduction">Introduction and Acceptance</a></li>
                <li><a href="#business-identity">Business Identity and Legal Status</a></li>
                <li><a href="#our-approach">Our Approach and the Kashir Wath Difference</a></li>
                <li><a href="#definitions">Definitions</a></li>
                <li><a href="#website-info">Website Information and Enquiries</a></li>
                <li><a href="#quotations">Quotations, Prices and Validity</a></li>
                <li><a href="#included-excluded">What Is Included and Excluded</a></li>
                <li><a href="#booking-request">Booking Request and Confirmation</a></li>
                <li><a href="#lead-traveller">Lead Traveller and Group Bookings</a></li>
                <li><a href="#payment-terms">Payment Terms</a></li>
                <li><a href="#accuracy">Accuracy of Customer Information</a></li>
                <li><a href="#documents">Customer Documents, Permits and Legal Compliance</a></li>
                <li><a href="#itineraries">Itineraries and Operational Changes</a></li>
                <li><a href="#kashmir-specific">Kashmir-Specific Conditions and Access Restrictions</a></li>
                <li><a href="#weather">Weather, Natural Conditions and Terrain</a></li>
                <li><a href="#health-fitness">Health, Fitness and Personal Suitability</a></li>
                <li><a href="#children-seniors">Children and Senior Citizens</a></li>
                <li><a href="#accommodation">Accommodation Terms</a></li>
                <li><a href="#transportation">Transportation Terms</a></li>
                <li><a href="#meals">Meals and Dietary Requirements</a></li>
                <li><a href="#guides">Guides, Experiences and Religious or Heritage Sites</a></li>
                <li><a href="#photography">Photography, Privacy and Respectful Conduct</a></li>
                <li><a href="#traveller-conduct">Traveller Conduct</a></li>
                <li><a href="#travel-insurance">Travel Insurance</a></li>
                <li><a href="#emergencies">Emergencies and Medical Assistance</a></li>
                <li><a href="#third-party">Third-Party Suppliers</a></li>
                <li><a href="#optional-services">Optional Services and Customer-Arranged Activities</a></li>
                <li><a href="#modifications">Modifications and Rescheduling</a></li>
                <li><a href="#cancellations">Cancellations and Refunds</a></li>
                <li><a href="#force-majeure">Force Majeure and Extraordinary Events</a></li>
                <li><a href="#abandon-itinerary">Customer Request to Leave or Abandon the Itinerary</a></li>
                <li><a href="#complaints">Complaints and Grievance Redressal</a></li>
                <li><a href="#limitation-liability">Limitation of Liability</a></li>
                <li><a href="#indemnity">Indemnity for Customer Misconduct</a></li>
                <li><a href="#personal-belongings">Personal Belongings and Valuables</a></li>
                <li><a href="#ip-content">Photographs, Website Content and Intellectual Property</a></li>
                <li><a href="#website-links">Website Links and External Information</a></li>
                <li><a href="#privacy">Privacy and Personal Data</a></li>
                <li><a href="#communications">Communications and Written Records</a></li>
                <li><a href="#fraud">Fraud, Unauthorised Representation and Impersonation</a></li>
                <li><a href="#changes-tc">Changes to These Terms &amp; Conditions</a></li>
                <li><a href="#severability">Severability</a></li>
                <li><a href="#no-waiver">No Waiver</a></li>
                <li><a href="#entire-agreement">Entire Agreement and Written Amendments</a></li>
                <li><a href="#governing-law">Governing Law and Jurisdiction</a></li>
                <li><a href="#contact">Contact and Grievance Information</a></li>
              </ol>
            </div>
          </RevealOnScroll>

          {/* Section 1 */}
          <RevealOnScroll>
            <div className="legal-section" id="introduction">
              <span className="legal-section-number">Section 1</span>
              <h2>Introduction and Acceptance</h2>
              <p>Welcome to KASHIR WATH, a travel brand dedicated to thoughtfully curated journeys through Kashmir, its landscapes, cultural traditions, sacred geography, historical heritage and living communities.</p>
              <p>These Terms &amp; Conditions govern access to and use of the KASHIR WATH website, enquiries, quotations, itineraries, bookings, travel arrangements and services supplied or arranged under the KASHIR WATH brand.</p>
              <p>By submitting a booking request, making a payment, confirming a quotation, accepting a travel proposal or otherwise engaging our services, you acknowledge that you have had a reasonable opportunity to read and understand these Terms &amp; Conditions and the other policies applicable to your booking.</p>
              <p>These Terms &amp; Conditions must be read together with, where applicable:</p>
              <ol>
                <li>Booking &amp; Payment Policy</li>
                <li>Cancellation &amp; Refund Policy</li>
                <li>Modification &amp; Rescheduling Policy</li>
                <li>Force Majeure Policy</li>
                <li>Travel &amp; Safety Policy</li>
                <li>Health, Safety &amp; Risk Policy</li>
                <li>Children &amp; Senior Citizens Travel Policy</li>
                <li>Responsible Travel Policy</li>
                <li>Third-Party Supplier Policy</li>
                <li>Privacy Policy</li>
                <li>Website Disclaimer &amp; Intellectual Property Policy</li>
                <li>Any itinerary, quotation, booking confirmation, written amendment or special condition issued for your particular journey.</li>
              </ol>
              <p>The version of these Terms &amp; Conditions applicable to a booking will be identified by the booking confirmation or other written booking record, subject to applicable law and any subsequently agreed written amendment.</p>
              <p>If a particular booking document expressly establishes a specific condition for that booking, that condition will prevail over a general provision only to the extent of the actual inconsistency and only where legally permissible.</p>
              <p>Nothing in these Terms &amp; Conditions is intended to exclude, restrict or override a right or remedy that cannot lawfully be excluded, restricted or overridden.</p>
            </div>
          </RevealOnScroll>

          {/* Section 2 */}
          <RevealOnScroll>
            <div className="legal-section" id="business-identity">
              <span className="legal-section-number">Section 2</span>
              <h2>Business Identity and Legal Status</h2>
              <p>KASHIR WATH is the brand name under which travel-related services are offered by:</p>
              <p>
                Legal Name: [Insert Full Legal Name]<br />
                Legal Structure: [Sole Proprietorship/Actual Registered Legal Structure]<br />
                Principal Place of Business: [Insert Complete Address]<br />
                Business Email: [Insert Email Address]<br />
                Business Telephone: [Insert Contact Number]<br />
                GSTIN: [Insert GSTIN if applicable]
              </p>
              <p>The legal person or entity identified above is responsible for the contractual obligations it undertakes in relation to confirmed bookings, subject to the applicable contract and law.</p>
              <p>Where KASHIR WATH operates as a sole proprietorship, the proprietorship is not a separate legal person from its proprietor. The actual legal identity must therefore be disclosed accurately wherever required.</p>
              <p>KASHIR WATH must not be understood to be a government department, government tourism authority, temple administration, religious trust, heritage authority or representative of any community unless a specific, verifiable authorisation expressly establishes such a relationship.</p>
              <p>Unless specifically disclosed and supported by written authorisation, KASHIR WATH is an independent travel brand and does not claim official affiliation with any temple, religious institution, government authority, local administration or community organisation.</p>
            </div>
          </RevealOnScroll>

          {/* Section 3 */}
          <RevealOnScroll>
            <div className="legal-section" id="our-approach">
              <span className="legal-section-number">Section 3</span>
              <h2>Our Approach and the Kashir Wath Difference</h2>
              <p>KASHIR WATH aims to offer a more considered way of experiencing Kashmir.</p>
              <p>Depending on the journey selected, our approach may include:</p>
              <h3>3.1 Curated Journeys</h3>
              <p>We design journeys around a considered combination of destinations, travel time, accommodation, experiences, cultural context and practical feasibility.</p>
              <p>A curated journey is not necessarily the shortest, cheapest or most activity-intensive itinerary. The emphasis is on coherence, suitability and the overall quality of the experience.</p>
              <h3>3.2 Cultural and Heritage Context</h3>
              <p>Selected journeys may introduce travellers to Kashmir&apos;s historical, cultural, spiritual and architectural heritage, including Kashmiri Pandit traditions, sacred places, historical narratives and community memories.</p>
              <p>Historical and religious information is provided for educational and cultural understanding. Different traditions, historical sources and communities may interpret particular events or beliefs differently.</p>
              <p>We endeavour to distinguish established information, traditional accounts, religious beliefs and interpretations wherever reasonably practicable.</p>
              <h3>3.3 Thoughtful Itinerary Planning</h3>
              <p>Where the itinerary permits, we aim to balance sightseeing with reasonable travel time, rest, local conditions and the interests of the travellers.</p>
              <p>The actual itinerary remains subject to road conditions, weather, operating hours, permits, local restrictions, supplier availability, safety considerations and other circumstances beyond our reasonable control.</p>
              <h3>3.4 Accommodation Selection</h3>
              <p>Where accommodation is included, we aim to select properties that are appropriate to the journey&apos;s positioning, budget, location, facilities and availability.</p>
              <p>Premium hotels, resorts, boutique properties or highly regarded homestays may be proposed according to the particular itinerary.</p>
              <p>The actual property, category, room configuration, meal plan and inclusions will be those specified in the written quotation or booking confirmation.</p>
              <h3>3.5 Vehicle Selection</h3>
              <p>Where road transportation is included, we aim to arrange a vehicle appropriate to the itinerary, passenger count, luggage and road conditions.</p>
              <p>Vehicles such as an Innova Crysta, Ertiga or another suitable vehicle may be proposed depending on the booking.</p>
              <p>No particular make, model, vehicle age, seating configuration or luggage capacity is guaranteed unless expressly confirmed in writing.</p>
              <h3>3.6 Smaller Groups and Private Journeys</h3>
              <p>Some KASHIR WATH journeys may be offered as small-group departures, private family journeys or customised itineraries.</p>
              <p>The group-size limit, departure date, private or shared arrangement and minimum operating requirements will be stated in the relevant tour details.</p>
              <p>A small-group promise applies only where the particular departure is explicitly sold on that basis.</p>
              <h3>3.7 Local Experiences and Supplier Coordination</h3>
              <p>Where feasible and included in the booking, we may coordinate local guides, experiences, accommodation, transportation, meals or other arrangements through third-party suppliers.</p>
              <p>Experiences that depend on local permissions, community participation, religious schedules or individual supplier availability cannot be guaranteed unless specifically confirmed.</p>
              <h3>3.8 No Automatic Guarantee of Every Brand Benefit</h3>
              <p>The above describes the KASHIR WATH approach. It does not mean that every journey automatically includes every feature.</p>
              <p>Only the services, facilities, experiences and benefits specifically included in the written quotation or booking confirmation form part of the customer&apos;s purchased package.</p>
              <p>We will not intentionally advertise a material feature as included if it is not intended to be supplied as part of the relevant booking.</p>
            </div>
          </RevealOnScroll>

          {/* Section 4 */}
          <RevealOnScroll>
            <div className="legal-section" id="definitions">
              <span className="legal-section-number">Section 4</span>
              <h2>Definitions</h2>
              <p>For these Terms &amp; Conditions:</p>
              <p><strong>&ldquo;KASHIR WATH&rdquo;</strong>, <strong>&ldquo;we&rdquo;</strong>, <strong>&ldquo;us&rdquo;</strong> or <strong>&ldquo;our&rdquo;</strong> refers to the legal business or proprietor identified in Section 2, operating under the KASHIR WATH brand.</p>
              <p><strong>&ldquo;Customer&rdquo;</strong>, <strong>&ldquo;traveller&rdquo;</strong>, <strong>&ldquo;you&rdquo;</strong> or <strong>&ldquo;your&rdquo;</strong> refers to the person making the booking and, where applicable, the persons travelling under that booking.</p>
              <p><strong>&ldquo;Lead Traveller&rdquo;</strong> means the person designated to communicate with KASHIR WATH and coordinate booking-related decisions for a group.</p>
              <p><strong>&ldquo;Booking&rdquo;</strong> means a travel arrangement accepted by KASHIR WATH and confirmed in writing.</p>
              <p><strong>&ldquo;Quotation&rdquo;</strong> means a written proposal specifying the proposed itinerary, price, inclusions, exclusions and other relevant conditions.</p>
              <p><strong>&ldquo;Supplier&rdquo;</strong> means an independent hotel, resort, homestay, transport operator, guide, activity provider, restaurant, local coordinator or other service provider involved in delivering a travel arrangement.</p>
              <p><strong>&ldquo;Travel Package&rdquo;</strong> means the combination of services specifically described in a quotation or booking confirmation.</p>
              <p><strong>&ldquo;Written Confirmation&rdquo;</strong> includes confirmation sent through an official email, booking document or another communication channel expressly designated by KASHIR WATH for that booking.</p>
            </div>
          </RevealOnScroll>

          {/* Section 5 */}
          <RevealOnScroll>
            <div className="legal-section" id="website-info">
              <span className="legal-section-number">Section 5</span>
              <h2>Website Information and Enquiries</h2>
              <p>Information published on the website is intended to help travellers understand our destinations, travel concepts, experiences and available services.</p>
              <p>Website content may include destination guides, historical material, religious traditions, suggested itineraries, travel estimates, photographs, indicative prices and general travel advice.</p>
              <p>Unless expressly stated otherwise:</p>
              <ul>
                <li>A website enquiry is not a confirmed booking.</li>
                <li>A suggested itinerary is not a confirmed travel arrangement.</li>
                <li>An indicative price is not necessarily a final quotation.</li>
                <li>An online request does not guarantee availability.</li>
                <li>A photograph does not guarantee the precise view, room, weather, landscape condition or experience a traveller will encounter.</li>
                <li>A general destination article does not constitute a guarantee that a location will remain accessible or operational on the intended travel date.</li>
              </ul>
              <p>Travellers should request a current written quotation and confirm the final inclusions before making payment.</p>
              <p>We may correct factual, typographical, technical or pricing errors in website content. Where an error materially affects an existing confirmed booking, we will address it in accordance with the booking terms and applicable law rather than treating a published error as an automatic right to disregard the customer&apos;s lawful remedies.</p>
            </div>
          </RevealOnScroll>

          {/* Section 6 */}
          <RevealOnScroll>
            <div className="legal-section" id="quotations">
              <span className="legal-section-number">Section 6</span>
              <h2>Quotations, Prices and Validity</h2>
              <p>Every quotation should be read as a complete document, including its itinerary, pricing, inclusions, exclusions, assumptions and validity period.</p>
              <p>Unless stated otherwise, a quotation is an offer for the particular dates, number of travellers, room configuration and services specified in it.</p>
              <p>A quotation may be affected by:</p>
              <ul>
                <li>Travel dates and seasonality.</li>
                <li>Number of travellers.</li>
                <li>Room occupancy and room category.</li>
                <li>Hotel, resort or homestay availability.</li>
                <li>Vehicle category and usage.</li>
                <li>Route, duration and sightseeing requirements.</li>
                <li>Local taxes, tolls, parking charges and permits.</li>
                <li>Supplier rates and availability.</li>
                <li>Special events, festivals or peak-period demand.</li>
                <li>Changes requested by the customer.</li>
                <li>Any material assumptions stated in the quotation.</li>
              </ul>
              <p>The quotation&apos;s validity period will be specified wherever reasonably practicable.</p>
              <p>If a quotation expires before the customer accepts it, availability and pricing may need to be checked again.</p>
              <p>Once a booking has been confirmed and the agreed amount has been accepted, the confirmed price will be governed by the booking documents, except where a permitted adjustment is expressly disclosed, agreed or otherwise lawfully applicable.</p>
              <p>We will not treat an arbitrary price increase as automatically binding after confirmation merely because supplier prices have changed.</p>
              <p>Any additional payment request must have a legitimate contractual or legal basis and be communicated transparently.</p>
            </div>
          </RevealOnScroll>

          {/* Section 7 */}
          <RevealOnScroll>
            <div className="legal-section" id="included-excluded">
              <span className="legal-section-number">Section 7</span>
              <h2>What Is Included and Excluded</h2>
              <p>Only services expressly listed as included in the written quotation or booking confirmation form part of the package price.</p>
              <p>Depending on the particular package, inclusions may cover:</p>
              <ul>
                <li>Accommodation for the specified dates.</li>
                <li>Transportation on the specified routes and dates.</li>
                <li>Meals specifically listed in the package.</li>
                <li>Sightseeing or experiences specifically mentioned.</li>
                <li>Guide or local-coordination services where expressly included.</li>
                <li>Permits or entry tickets where expressly included.</li>
                <li>Other services individually identified in the booking documents.</li>
              </ul>
              <p>Unless expressly included, the following may be excluded:</p>
              <ul>
                <li>Airfare, train tickets or intercity transport to the designated starting point.</li>
                <li>Airport, railway-station or bus-terminal transfers not listed in the itinerary.</li>
                <li>Meals, snacks, beverages or special dietary arrangements not specified.</li>
                <li>Entry tickets, donations, offerings and temple-related contributions.</li>
                <li>Pony, palki, porter, trekking equipment or other optional services.</li>
                <li>Personal shopping, laundry, room service and personal expenses.</li>
                <li>Additional accommodation caused by an early arrival, late departure or personal change.</li>
                <li>Medical expenses, medicines, hospitalisation and evacuation costs.</li>
                <li>Travel insurance.</li>
                <li>Charges for route diversions, additional vehicle use or extra sightseeing not included in the package.</li>
                <li>Charges arising from customer-requested modifications where properly disclosed and applicable.</li>
                <li>Costs caused by a traveller&apos;s personal decision to leave the itinerary or use alternative arrangements.</li>
              </ul>
              <p>This list is illustrative, not exhaustive. The package-specific inclusion and exclusion list will govern.</p>
              <p>If a customer requires a service that is not listed, the customer should obtain written confirmation of availability, price and scope before relying on it.</p>
            </div>
          </RevealOnScroll>

          {/* Sections 8-46 follow the same pattern */}
          {/* Section 8 */}
          <RevealOnScroll>
            <div className="legal-section" id="booking-request">
              <span className="legal-section-number">Section 8</span>
              <h2>Booking Request and Confirmation</h2>
              <p>A booking generally proceeds through the following stages:</p>
              <ol>
                <li>The customer submits an enquiry.</li>
                <li>KASHIR WATH discusses the customer&apos;s requirements and proposes an itinerary.</li>
                <li>A written quotation is issued.</li>
                <li>The customer confirms acceptance of the quotation and applicable terms.</li>
                <li>The required advance or payment is received.</li>
                <li>Availability and supplier arrangements are verified or secured as applicable.</li>
                <li>KASHIR WATH issues a written booking confirmation.</li>
              </ol>
              <p>A booking will not be treated as confirmed solely because an enquiry has been submitted, an itinerary has been discussed or a customer has received an unaccepted quotation.</p>
              <p>A payment acknowledgement is not necessarily the same as a final booking confirmation.</p>
              <p>Where a supplier has not yet confirmed an essential service, we will communicate the relevant status and avoid representing the service as finally secured when it is not.</p>
              <p>If an essential service becomes unavailable before the booking can be confirmed, we may propose a suitable alternative or handle the matter in accordance with the applicable booking policy and law.</p>
              <p>The customer should verify the dates, traveller count, names, accommodation details, room configuration, inclusions, exclusions, payment schedule and other material particulars stated in the confirmation.</p>
              <p>Any discrepancy should be reported promptly.</p>
            </div>
          </RevealOnScroll>

          {/* Section 9 */}
          <RevealOnScroll>
            <div className="legal-section" id="lead-traveller">
              <span className="legal-section-number">Section 9</span>
              <h2>Lead Traveller and Group Bookings</h2>
              <p>For a group booking, the Lead Traveller will ordinarily serve as the principal communication contact.</p>
              <p>The Lead Traveller should ensure that the group receives the material booking information and that individual travellers understand the itinerary, costs, safety requirements and applicable policies.</p>
              <p>The Lead Traveller may communicate changes and decisions for the group only to the extent authorised by the other affected travellers or their lawful representatives.</p>
              <p>Unless the booking documents expressly provide otherwise and applicable law permits it, the Lead Traveller is not automatically personally liable for every other traveller&apos;s payment merely because they coordinated the booking.</p>
              <p>Each traveller remains responsible for their own conduct, personal information, documentation, health-related disclosures and compliance with applicable instructions.</p>
              <p>Changes affecting the whole group may require agreement from the relevant group members and may result in revised costs or supplier conditions.</p>
            </div>
          </RevealOnScroll>

          {/* Section 10 */}
          <RevealOnScroll>
            <div className="legal-section" id="payment-terms">
              <span className="legal-section-number">Section 10</span>
              <h2>Payment Terms</h2>
              <p>Payment amounts, due dates, accepted payment methods and instalment schedules will be specified in the quotation, booking confirmation or Booking &amp; Payment Policy.</p>
              <p>A booking may require an advance payment before accommodation, transportation or other arrangements can be secured.</p>
              <p>The balance payment must be made by the stated deadline.</p>
              <p>If the customer fails to make a required payment, we may issue a payment reminder and, where contractually permitted and legally appropriate, suspend further arrangements or cancel the booking in accordance with the applicable payment and cancellation terms.</p>
              <p>Any consequences of late payment must be consistent with the disclosed booking terms and applicable law.</p>
              <p>Customers should make payments only through payment channels communicated or authorised by KASHIR WATH.</p>
              <p>Customers should retain payment receipts and transaction references.</p>
              <p>A payment made to an unauthorised third party, personal account or individual who is not authorised to collect the amount may not discharge the customer&apos;s payment obligation to KASHIR WATH.</p>
              <p>However, we will assess the actual circumstances and any applicable legal obligations before determining the effect of a disputed payment.</p>
              <p>Where a payment is received, the applicable receipt, invoice or other transaction record will be issued as required by law.</p>
              <p>Applicable taxes will be charged and disclosed in accordance with the relevant tax rules.</p>
            </div>
          </RevealOnScroll>

          {/* Sections 11-46: Keeping the same structure but condensing for brevity */}
          {[
            { id: 'accuracy', num: 11, title: 'Accuracy of Customer Information', content: [
              'The customer is responsible for supplying accurate and complete information reasonably required to arrange the booking.',
              'This may include: full names as required for travel documents; correct travel dates and contact details; number and ages of travellers; room-sharing and bedding preferences; relevant mobility, accessibility or dietary requirements; information reasonably necessary to assess the suitability of a proposed itinerary; passport, permit or identification details where lawfully required; emergency-contact details where requested for safety purposes.',
              'Incorrect names, ages, dates, passenger counts or other material information may cause booking difficulties, additional charges or inability to use a particular service.',
              'Where an error is attributable to the customer, we will explain the available correction options and applicable costs where reasonably practicable.',
              'Where an error is attributable to KASHIR WATH, we will take reasonable steps to correct it and address any resulting issue in accordance with the booking terms and applicable law.',
              'Personal information will be handled under the applicable Privacy Policy and law.',
            ]},
            { id: 'documents', num: 12, title: 'Customer Documents, Permits and Legal Compliance', content: [
              'Travellers are responsible for carrying valid identification, travel documents and other documents legally required for their journey.',
              'Depending on the destination and the traveller\u2019s circumstances, certain areas may require permits, registration, identification checks or other authorisations.',
              'Where a permit or permission is expressly included in the package, KASHIR WATH will undertake the specified coordination within the agreed scope.',
              'Unless expressly agreed otherwise, the traveller remains responsible for providing accurate documents and meeting personal eligibility requirements.',
              'No permit, access approval, security clearance or entry permission is guaranteed merely because it has been requested.',
              'Access may be refused or restricted by the competent authority even where the traveller has made a booking.',
              'Travellers must comply with applicable laws, local administrative orders, security directions, religious-site rules and lawful instructions from authorised personnel.',
              'We do not guarantee entry to a restricted, protected, security-sensitive or temporarily closed location.',
            ]},
            { id: 'itineraries', num: 13, title: 'Itineraries and Operational Changes', content: [
              'Travel itineraries are prepared using the information and conditions reasonably available at the time of planning.',
              'Actual travel conditions may differ because of weather, road conditions, traffic, landslides, snowfall, road closures, security restrictions, local regulations, religious events, operating hours, supplier limitations or other circumstances.',
              'KASHIR WATH may need to adjust the order, timing or delivery of activities to preserve practical feasibility, comply with lawful directions or respond to safety concerns.',
              'Where reasonably practicable, we will inform the customer of a material change and explain its likely impact.',
              'We will endeavour to offer a reasonable alternative where feasible.',
              'A change in sequence or timing does not automatically constitute a failure to provide the package if the material services remain substantially as agreed.',
              'However, this clause does not authorise us to make any material change without regard to the customer\u2019s contractual rights.',
              'If a significant included service becomes unavailable, the remedy will depend on the circumstances, the booking terms, the alternative offered, the amount paid and applicable law.',
              'Customers should not assume that every sightseeing point can be visited regardless of weather, local restrictions or opening arrangements.',
            ]},
            { id: 'kashmir-specific', num: 14, title: 'Kashmir-Specific Conditions and Access Restrictions', content: [
              'Kashmir is a region where weather, terrain, road access, administrative directions, security conditions and local operating arrangements may affect travel.',
              'Access to particular destinations, religious sites, villages, border areas, mountain routes or heritage locations may be subject to temporary or permanent restrictions.',
              'KASHIR WATH does not control the decisions of government authorities, security forces, local administrations, road authorities, religious institutions or private property owners.',
              'We cannot guarantee that a particular area will remain open or that a route will be available on the intended travel date.',
              'Where access becomes restricted, we may assess alternatives in consultation with the customer, taking into account safety, feasibility, cost and the nature of the booking.',
              'No customer should attempt to bypass a lawful restriction, enter a prohibited area or disregard a security instruction to preserve an itinerary.',
              'Where a restriction materially affects the package, the applicable Modification, Cancellation, Refund or Force Majeure Policy will be considered alongside the booking documents and applicable law.',
            ]},
            { id: 'weather', num: 15, title: 'Weather, Natural Conditions and Terrain', content: [
              'Kashmir\u2019s landscapes may involve mountain roads, high-altitude locations, uneven paths, riverbanks, waterfalls, meadows, snow, slippery surfaces and changing weather.',
              'Depending on the itinerary, travellers may encounter: rain, snow, fog or low visibility; cold conditions or sudden temperature changes; slippery, uneven or unpaved surfaces; long road journeys and winding mountain roads; limited mobile connectivity; delays caused by weather or road conditions; temporary closures or changes to outdoor activities.',
              'Outdoor experiences may be postponed, modified or omitted where conditions make them impractical or unsafe.',
              'Travellers must follow relevant safety instructions and should not enter riverbanks, waterfalls, trails, meadows, steep terrain or other potentially hazardous areas without considering local conditions and appropriate guidance.',
              'No photograph, promotional description or suggested experience should be interpreted as a guarantee that a location is safe for every traveller or accessible in every season.',
            ]},
            { id: 'health-fitness', num: 16, title: 'Health, Fitness and Personal Suitability', content: [
              'Travellers should assess whether the proposed journey is suitable for their health, mobility, stamina and personal circumstances.',
              'Some itineraries may involve long drives, early departures, stairs, uneven ground, limited facilities, high altitude, cold weather or extended periods away from medical services.',
              'Customers should disclose relevant requirements that may materially affect the feasibility or safety of the itinerary, to the extent reasonably necessary for planning.',
              'Travellers with a medical condition, reduced mobility, pregnancy-related concerns or other circumstances that may affect their ability to participate should seek appropriate professional advice before undertaking a potentially demanding journey.',
              'KASHIR WATH is a travel service provider, not a substitute for a medical professional.',
              'We do not guarantee that a particular itinerary is medically suitable for every person.',
              'Where a traveller\u2019s condition or an unexpected health event makes an activity unsuitable, a modification or alternative may be considered subject to availability, additional costs, safety requirements and applicable policy.',
              'Any decision involving immediate medical treatment should be made with appropriate medical professionals or emergency services.',
            ]},
            { id: 'children-seniors', num: 17, title: 'Children and Senior Citizens', content: [
              'Children must be supervised by their parent, guardian or another responsible adult authorised to care for them.',
              'Parents or guardians should assess the suitability of travel duration, meal arrangements, weather, altitude, terrain and activities for the child.',
              'Senior citizens should assess the physical demands of the itinerary in light of their individual health, mobility and stamina.',
              'Chronological age alone does not determine whether a person can participate safely in a journey.',
              'Where a particular route or activity has a genuine physical, medical, legal or operational requirement, the relevant conditions should be explained before booking where reasonably practicable.',
              'Special assistance, accessible rooms, lifts, wheelchair access, medical facilities, suitable bedding or other accessibility requirements must be requested in advance and confirmed in writing.',
              'Such facilities should not be assumed to exist unless confirmed.',
              'The Children & Senior Citizens Travel Policy forms part of the relevant booking terms.',
            ]},
            { id: 'accommodation', num: 18, title: 'Accommodation Terms', content: [
              'Accommodation is subject to the property\u2019s actual availability, room category, occupancy limits, check-in and check-out rules and other stated conditions.',
              'The confirmed booking document will identify the accommodation or the agreed category and any permitted substitution arrangements.',
              'Room photographs and property descriptions may be illustrative and may not represent the precise room assigned.',
              'A specific room number, floor, view, balcony, adjoining-room arrangement, bedding configuration or other individual feature is not guaranteed unless expressly confirmed in writing.',
              'Where a property becomes unavailable before the stay, we will seek an appropriate alternative in accordance with the booking documents and applicable law.',
              'An alternative should be assessed with regard to the agreed accommodation category, location, material facilities, price and overall booking.',
              'Customers should communicate special requests in advance. A request is not a confirmed entitlement unless accepted by the property or expressly included in the booking confirmation.',
              'Check-in and check-out times are governed by the property unless otherwise confirmed.',
              'Property rules concerning smoking, noise, occupancy, damage, visitors and use of facilities must be followed.',
              'Any damage, extra occupancy, unauthorised use or additional property charge attributable to a traveller may be payable by that traveller where supported by the applicable terms and evidence.',
            ]},
            { id: 'transportation', num: 19, title: 'Transportation Terms', content: [
              'Where transportation is included, the vehicle and operating arrangement will be as specified in the booking confirmation, subject to any permitted operational substitution.',
              'Travel times are estimates and may vary due to traffic, weather, road closures, security checks, vehicle restrictions and other conditions.',
              'Passengers must follow applicable safety requirements and lawful instructions from the driver or authorised personnel.',
              'Seat-belt use is required wherever seat belts are provided and applicable law requires their use.',
              'Vehicle occupancy and luggage must remain within appropriate limits.',
              'Customers must inform us in advance about unusually large luggage, mobility equipment, child seats or other special requirements.',
              'A particular vehicle model, registration number, driver or seating configuration is not guaranteed unless specifically confirmed and operationally feasible.',
              'If a vehicle develops a mechanical issue, the responsible service provider should take reasonable steps to arrange a safe solution, subject to the circumstances.',
              'Additional vehicle use, extra distance, overtime, route changes or services beyond the confirmed scope may attract additional charges where those charges are properly disclosed and applicable.',
              'No driver should be asked to violate traffic laws, exceed lawful working or driving limits, enter a restricted road or undertake an unsafe manoeuvre.',
            ]},
            { id: 'meals', num: 20, title: 'Meals and Dietary Requirements', content: [
              'Meals are included only where specified in the quotation or booking confirmation.',
              'Customers should inform us of dietary preferences or restrictions before booking so that feasibility can be assessed.',
              'Vegetarian, religiously appropriate, allergy-sensitive or other special meals cannot be guaranteed unless the relevant arrangement has been expressly confirmed.',
              'Where a serious food allergy or medical dietary restriction is involved, the customer should communicate the requirement clearly and directly, including any necessary precautions.',
              'Restaurants, hotels and other meal providers may have their own kitchen practices, ingredients, cross-contact risks and service limitations.',
              'KASHIR WATH will communicate confirmed arrangements within its control, but should not be understood to provide a medical guarantee about food preparation unless an express written commitment lawfully establishes one.',
              'Customers must not assume that every local restaurant, property or remote destination can accommodate every dietary requirement.',
            ]},
            { id: 'guides', num: 21, title: 'Guides, Experiences and Religious or Heritage Sites', content: [
              'A guide, interpreter, local coordinator or specialist experience is included only where specified in the booking confirmation.',
              'Some temples, shrines, heritage buildings, village locations or religious spaces may have restrictions on entry, photography, clothing, conduct, timing or participation.',
              'Travellers must respect the rules communicated by the relevant authority or community.',
              'Participation in a religious ritual, meeting with a religious figure, access to a restricted area, interaction with a local family or attendance at a particular ceremony is not guaranteed unless the arrangement has been expressly confirmed and remains permissible.',
              'KASHIR WATH does not guarantee a particular spiritual experience, religious outcome, blessing, darshan, ceremony or personal interaction.',
              'Our role is to facilitate the travel arrangements specifically agreed with the customer, not to guarantee an individual religious or emotional result.',
              'Where cultural or heritage information is provided, it should be understood in its stated historical, religious or interpretive context.',
            ]},
            { id: 'photography', num: 22, title: 'Photography, Privacy and Respectful Conduct', content: [
              'Travellers should respect the privacy and dignity of local residents, other travellers, property staff, religious practitioners and community members.',
              'Permission should be obtained before photographing or recording individuals where consent is appropriate, particularly inside private homes, religious settings or sensitive community spaces.',
              'Photography or recording may be prohibited in particular locations.',
              'Travellers must comply with applicable restrictions and instructions.',
              'No traveller should enter a private room, residence, restricted area or another guest\u2019s accommodation without permission.',
              'The use of drones, professional filming equipment or other specialised recording equipment may require permission or be restricted by law.',
              'Customers must not represent private conversations, personal images or community participation as authorised for publication without the necessary permission.',
              'KASHIR WATH\u2019s use of customer photographs, testimonials or identifiable personal information is governed by the relevant consent arrangements, Privacy Policy and applicable law.',
            ]},
            { id: 'traveller-conduct', num: 23, title: 'Traveller Conduct', content: [
              'All travellers are expected to behave respectfully and lawfully throughout the journey.',
              'Unacceptable conduct may include: threats, harassment, violence or intimidation; discriminatory or abusive behaviour; damage to accommodation, vehicles, heritage property or natural surroundings; unauthorised entry into restricted areas or private property; disregard of lawful security or safety instructions; possession or use of prohibited substances or unlawful items; deliberate interference with the safety or comfort of other travellers; persistent disruptive behaviour that materially affects the delivery of the journey; unauthorised use of another person\u2019s room or personal belongings.',
              'Travellers must not bring weapons or prohibited items where possession is unlawful or contrary to the relevant property, transport or destination rules.',
              'If a traveller\u2019s conduct creates an immediate and serious safety risk, the relevant supplier or responsible personnel may take reasonable steps to address the situation, including refusing participation in a particular activity where justified.',
              'Where feasible and appropriate, KASHIR WATH will explain the concern and consider proportionate alternatives.',
              'Any removal from an activity, interruption of services or cancellation arising from misconduct must be assessed in accordance with the booking terms, the actual circumstances and applicable law.',
              'No clause in this section authorises discriminatory treatment or an arbitrary refusal to provide a service.',
            ]},
            { id: 'travel-insurance', num: 24, title: 'Travel Insurance', content: [
              'Travel insurance is strongly recommended, particularly for journeys involving mountain roads, remote destinations, outdoor activities, medical uncertainty or weather-related disruption.',
              'Customers should review whether their insurance covers: medical treatment and hospitalisation; emergency evacuation or repatriation, where applicable; trip cancellation and interruption; missed connections and delays; lost, stolen or damaged baggage; adventure or outdoor activities, if relevant; weather-related disruption and other stated risks.',
              'Insurance availability, eligibility, exclusions and claim decisions are governed by the insurer\u2019s own terms.',
              'KASHIR WATH does not act as an insurer merely by arranging travel services.',
              'Unless expressly agreed and legally authorised, purchasing, maintaining and verifying suitable insurance remains the traveller\u2019s responsibility.',
              'The absence of insurance does not automatically eliminate any legal responsibility that KASHIR WATH may otherwise have.',
            ]},
            { id: 'emergencies', num: 25, title: 'Emergencies and Medical Assistance', content: [
              'In an emergency, the immediate priority is the safety of the traveller and other affected persons.',
              'Travellers should contact the appropriate emergency service, medical facility, police authority or other competent agency where necessary.',
              'KASHIR WATH will make reasonable efforts to provide travel-related assistance within its practical ability and the scope of its role.',
              'However, response times and available assistance may be affected by network coverage, road access, weather, distance, local restrictions and the availability of emergency services.',
              'KASHIR WATH does not operate an emergency medical service and cannot guarantee immediate rescue, evacuation, hospital admission or a particular medical outcome.',
              'Any medical, transport, accommodation or other emergency expenditure will be addressed according to the circumstances, the relevant booking terms, any applicable insurance and the law.',
            ]},
            { id: 'third-party', num: 26, title: 'Third-Party Suppliers', content: [
              'A travel package may include services provided by independent hotels, resorts, homestays, drivers, transport operators, guides, activity providers, restaurants or other suppliers.',
              'The quotation or booking confirmation should identify the relevant services and any important supplier-specific conditions where applicable.',
              'Depending on the arrangement, KASHIR WATH may act as a coordinator, booking intermediary, package organiser or direct contracting provider for a particular service.',
              'The role applicable to a service should be understood from the booking documents and the actual arrangement rather than assumed to be identical in every case.',
              'Independent suppliers may have their own operational rules, availability limits and cancellation conditions.',
              'We will take reasonable steps within our role to communicate relevant conditions and coordinate confirmed arrangements.',
              'A supplier\u2019s independent status does not, by itself, remove any contractual or legal responsibility that KASHIR WATH may have for its own representations, obligations, acts or omissions.',
              'If a supplier fails to deliver an agreed service, we will assess the circumstances and take reasonable steps within our contractual role to help address the issue.',
              'Any remedy will depend on the booking, the service concerned, the cause of the failure and applicable law.',
            ]},
            { id: 'optional-services', num: 27, title: 'Optional Services and Customer-Arranged Activities', content: [
              'Customers may choose to purchase optional activities or additional services not included in the confirmed package.',
              'Before accepting an optional service, customers should check its price, operating conditions, cancellation terms, safety requirements and supplier identity where relevant.',
              'If the customer independently books an activity, transport service or accommodation outside the KASHIR WATH arrangement, responsibility for that separate contract will ordinarily be governed by the agreement with the relevant provider, subject to applicable law.',
              'However, the fact that a service is optional or separately arranged does not automatically exclude any legal responsibility KASHIR WATH may have for its own advice, representations or conduct concerning that service.',
              'Customers should not assume that KASHIR WATH has inspected, approved, insured or independently verified every third-party activity merely because it is discussed during travel planning.',
              'Any particular verification, inspection or approval should be claimed only where it has actually taken place.',
            ]},
            { id: 'modifications', num: 28, title: 'Modifications and Rescheduling', content: [
              'Requests to change travel dates, traveller numbers, accommodation, room occupancy, transportation, routes, experiences or other booking details must be submitted through the designated communication channel.',
              'A requested change is not effective until accepted and confirmed in writing.',
              'Modifications may depend on supplier availability, permits, seasonal conditions, operational feasibility and the applicable booking terms.',
              'Additional costs may arise from: supplier amendment or cancellation charges; revised accommodation rates; transportation changes; changes in passenger count; additional services or travel days; replanning or administrative work where a fee has been disclosed and is legally permissible; other reasonable and properly disclosed costs attributable to the requested change.',
              'We will communicate material additional costs before proceeding where reasonably practicable.',
              'A requested change may not be possible, even where the customer is willing to pay additional charges.',
              'The Modification & Rescheduling Policy forms part of these Terms & Conditions.',
            ]},
            { id: 'cancellations', num: 29, title: 'Cancellations and Refunds', content: [
              'Cancellations must be communicated in writing through the designated booking contact.',
              'The applicable Cancellation & Refund Policy, the booking confirmation and any specific supplier conditions will govern the assessment of cancellation charges and refunds, subject to applicable law.',
              'The amount refundable, if any, may depend on: the date the cancellation request is received; the amount already paid; the time remaining before departure; the services already supplied; supplier cancellation conditions; recoverable and non-recoverable amounts; whether a booking is refundable, partially refundable or non-refundable under the disclosed conditions; whether the cancellation arises from the customer, KASHIR WATH, a supplier or an extraordinary event; any applicable statutory or contractual remedy.',
              'No cancellation fee or deduction will be treated as automatically valid merely because it appears in a policy. It must have a lawful and applicable basis.',
              'Where a refund is approved, it will ordinarily be processed through the original payment method where reasonably practicable, subject to payment-provider requirements and applicable law.',
              'Any stated processing period is an estimate unless the relevant law requires a specific deadline.',
              'Customers should not rely on verbal assurances that conflict with the written booking terms without obtaining written clarification.',
              'The detailed Cancellation & Refund Policy must be read before making payment.',
            ]},
            { id: 'force-majeure', num: 30, title: 'Force Majeure and Extraordinary Events', content: [
              'A journey may be affected by circumstances outside the reasonable control of the parties, including severe weather, natural disasters, landslides, major road closures, security restrictions, government orders, public emergencies, transport shutdowns or other extraordinary events.',
              'The Force Majeure Policy explains how such circumstances will be assessed.',
              'Depending on the circumstances, a journey or particular service may need to be delayed, modified, suspended or cancelled.',
              'KASHIR WATH will assess reasonable alternatives where feasible and communicate material changes where practicable.',
              'The financial consequences will depend on the applicable booking terms, recoverable supplier amounts, the services already delivered, the cause of the disruption and applicable law.',
              'The existence of an extraordinary event does not automatically mean that all amounts paid are forfeited.',
              'Equally, an extraordinary event does not automatically guarantee a full refund in every situation where suppliers have already provided services or incurred properly chargeable costs.',
              'Any determination will be made in accordance with the applicable policy and law.',
            ]},
            { id: 'abandon-itinerary', num: 31, title: 'Customer Request to Leave or Abandon the Itinerary', content: [
              'A traveller may decide to leave the group, skip an activity, shorten a stay or make independent travel arrangements.',
              'Where feasible, the traveller should inform KASHIR WATH or the relevant trip contact before departing from the agreed arrangement.',
              'The traveller is responsible for understanding the practical consequences of the decision, including transport, accommodation, safety, communication and any additional cost.',
              'Unused services are not automatically refundable merely because a traveller chooses not to use them.',
              'Any refund or adjustment will be assessed under the applicable booking terms, supplier conditions and law.',
              'Where a traveller leaves because of a material failure in the agreed service, a safety issue or another circumstance for which KASHIR WATH may be responsible, the matter will be assessed on its actual merits.',
              'Nothing in this section removes any remedy available under applicable law.',
            ]},
            { id: 'complaints', num: 32, title: 'Complaints and Grievance Redressal', content: [
              'We encourage customers to raise concerns promptly so that an issue may be addressed while the journey is ongoing, where practical.',
              'Complaints should include the booking reference, relevant dates, a description of the issue and any supporting information reasonably available.',
              'Complaints may be submitted to: Grievance Contact: [Insert Name or Designation]; Email: [Insert Official Grievance Email]; Telephone: [Insert Contact Number]; Postal Address: [Insert Complete Business Address].',
              'Our intended service targets are: acknowledgement within three business days of receiving a complaint; a substantive response within fifteen business days after receiving sufficient information, where reasonably practicable.',
              'These are internal service targets, not a restriction on any statutory deadline, legal remedy or customer\u2019s right to approach an appropriate authority.',
              'If additional investigation is required, we will endeavour to communicate the reason for the delay and the expected next step.',
              'Customers may pursue any remedy available under applicable law.',
              'The Complaints & Grievance Redressal Policy provides further details.',
            ]},
            { id: 'limitation-liability', num: 33, title: 'Limitation of Liability', content: [
              'KASHIR WATH will be responsible for the obligations it has undertaken under the confirmed booking and applicable law.',
              'To the extent legally permissible, KASHIR WATH is not responsible for loss caused solely by circumstances outside its reasonable control where it has not otherwise breached a contractual or legal duty.',
              'Examples may include certain unforeseeable road closures, independent government restrictions, extreme weather events or the independent conduct of third parties.',
              'The assessment of responsibility will depend on the actual circumstances, the relevant contractual role, any duty of care, the foreseeability of the event, reasonable mitigation and applicable law.',
              'To the extent permitted by law, KASHIR WATH will not be responsible for purely speculative, remote or unsupported losses that are not legally recoverable.',
              'However, nothing in these Terms & Conditions excludes or limits liability where such exclusion or limitation is prohibited by law, including any liability that cannot lawfully be excluded for fraud, wilful misconduct, negligence, breach of a mandatory legal duty or other legally protected rights, as applicable to the circumstances.',
              'Nothing in this section: removes a customer\u2019s non-excludable statutory rights; authorises misleading advertising or misrepresentation; excludes a remedy required by applicable consumer law; automatically transfers all responsibility to a third-party supplier; prevents a competent authority or court from determining liability under applicable law.',
              'Any monetary limitation, where legally permissible and applicable, must be expressly stated in the relevant booking terms and must not be assumed merely from this general clause.',
            ]},
            { id: 'indemnity', num: 34, title: 'Indemnity for Customer Misconduct', content: [
              'To the extent permitted by law, a traveller may be responsible for direct, reasonably evidenced loss or damage caused by the traveller\u2019s unlawful conduct, wilful misconduct, material breach of the booking terms or negligent damage to property.',
              'This may include reasonable repair or replacement costs arising from damage to accommodation, vehicles, equipment or property where responsibility is properly established.',
              'The customer will not be required to indemnify KASHIR WATH for loss to the extent that the loss was caused by KASHIR WATH\u2019s own legally actionable conduct or where an indemnity would be unlawful.',
              'Any claim for reimbursement should be supported by reasonable evidence and assessed in accordance with applicable law.',
              'This clause is not intended to impose unlimited liability for ordinary travel risks or losses outside the traveller\u2019s responsibility.',
            ]},
            { id: 'personal-belongings', num: 35, title: 'Personal Belongings and Valuables', content: [
              'Travellers should take reasonable care of their money, identification documents, electronic devices, jewellery, luggage and other personal belongings.',
              'Valuables should not be left unattended in vehicles, public spaces or accommodation.',
              'Any lost-property report should be made promptly to the relevant property, transport operator or local authority and, where appropriate, to KASHIR WATH.',
              'Responsibility for lost, stolen or damaged belongings will depend on the circumstances, the relevant supplier\u2019s role, any applicable insurance and the law.',
              'KASHIR WATH does not automatically assume custody of personal belongings merely because it has arranged transportation or accommodation.',
              'However, this clause does not exclude responsibility where KASHIR WATH has expressly accepted custody or is otherwise legally responsible.',
            ]},
            { id: 'ip-content', num: 36, title: 'Photographs, Website Content and Intellectual Property', content: [
              'The KASHIR WATH name, original website copy, original editorial material, original itinerary descriptions, brand elements and other content owned by or lawfully licensed to KASHIR WATH are protected to the extent provided by applicable law.',
              'Customers may use website content for personal, non-commercial reference.',
              'Reproduction, republication, commercial use, systematic copying, unauthorised distribution or misrepresentation of protected content is not permitted without appropriate permission, except where an applicable legal exception allows it.',
              'This provision does not claim exclusive ownership of historical facts, public-domain information, religious traditions, geographical names, general travel ideas or material owned by third parties.',
              'Photographs, maps, artwork, quotations and other third-party material remain subject to the rights and conditions applicable to that material.',
              'The separate Website Disclaimer & Intellectual Property Policy provides further details.',
            ]},
            { id: 'website-links', num: 37, title: 'Website Links and External Information', content: [
              'The KASHIR WATH website may contain links to external websites, maps, booking systems, government resources or third-party services.',
              'External websites are operated independently and may change their content, terms, prices or availability without our control.',
              'A link does not necessarily constitute an endorsement, guarantee or official affiliation.',
              'Customers should review the terms and privacy practices of external services before using them.',
              'Where KASHIR WATH directly recommends or arranges a third-party service as part of a confirmed booking, our responsibilities concerning that arrangement will be determined by the actual contractual relationship and applicable law.',
            ]},
            { id: 'privacy', num: 38, title: 'Privacy and Personal Data', content: [
              'Customer information may be used to respond to enquiries, prepare quotations, confirm bookings, coordinate suppliers, process payments, communicate travel updates, provide customer support and comply with legal obligations.',
              'Information will be handled in accordance with the KASHIR WATH Privacy Policy and applicable data-protection law.',
              'Where personal information must be shared with a hotel, transport provider, guide, payment processor, authority or other service provider to fulfil a booking, such sharing will be assessed under the applicable privacy requirements and the stated purposes of processing.',
              'Customers should not submit unnecessary sensitive personal information through public website forms or unsecured channels.',
              'The Privacy Policy explains applicable purposes, disclosures, retention practices, security measures and available rights.',
              'Nothing in these Terms & Conditions constitutes blanket consent to every possible use of personal information.',
            ]},
            { id: 'communications', num: 39, title: 'Communications and Written Records', content: [
              'Booking-related communications should be sent through the official contact details or communication channels designated by KASHIR WATH.',
              'Email and written booking records are important for confirming prices, inclusions, changes, payments and customer requests.',
              'Customers should retain quotations, receipts, booking confirmations and relevant communications.',
              'A phone call or informal conversation may help clarify requirements, but a material change to an existing booking should be recorded in writing.',
              'Where a communication platform is used, customers should take reasonable care to verify that the account or contact is genuinely authorised by KASHIR WATH.',
              'KASHIR WATH will not ask customers to disregard normal payment-verification precautions.',
            ]},
            { id: 'fraud', num: 40, title: 'Fraud, Unauthorised Representation and Impersonation', content: [
              'No person may claim to represent KASHIR WATH, collect payments in its name, issue booking confirmations or make binding commitments on its behalf without proper authority.',
              'Customers should verify unusual payment instructions, changes to bank details or requests to transfer funds to a new account.',
              'Where a suspected fraudulent communication is identified, the customer should contact KASHIR WATH using previously verified official contact details.',
              'KASHIR WATH may take reasonable steps to protect its brand, customers and business from impersonation, unauthorised use and fraudulent representations.',
              'The legal consequences of any disputed transaction will depend on the evidence, the actual authority involved and applicable law.',
            ]},
            { id: 'changes-tc', num: 41, title: 'Changes to These Terms & Conditions', content: [
              'KASHIR WATH may update these Terms & Conditions to reflect changes in its services, operating procedures, legal requirements or business arrangements.',
              'The latest version will be published on the website with an updated revision date.',
              'A revision will not automatically alter an existing confirmed booking retrospectively where doing so would conflict with the applicable contract or law.',
              'Material changes affecting an existing booking will be handled in accordance with the relevant booking documents and applicable legal requirements.',
              'Customers should review the applicable version when making a new booking.',
            ]},
            { id: 'severability', num: 42, title: 'Severability', content: [
              'If a provision of these Terms & Conditions is found by a competent authority or court to be invalid, unlawful or unenforceable, that provision will be treated as modified or severed to the minimum extent necessary, where legally permissible.',
              'The remaining provisions will continue to apply to the extent they remain lawful and enforceable.',
              'This clause does not authorise a court or either party to disregard mandatory legal protections.',
            ]},
            { id: 'no-waiver', num: 43, title: 'No Waiver', content: [
              'A failure or delay by KASHIR WATH in enforcing a contractual provision does not automatically mean that the provision has been permanently waived.',
              'Any waiver must be assessed in light of the circumstances and applicable law.',
              'A one-time accommodation or exception does not necessarily establish a permanent entitlement to the same exception on future bookings.',
            ]},
            { id: 'entire-agreement', num: 44, title: 'Entire Agreement and Written Amendments', content: [
              'These Terms & Conditions, the applicable policies, the accepted quotation, the booking confirmation and any written amendment collectively form the contractual record for the relevant booking.',
              'Where a specific booking document establishes a clear, expressly agreed term that conflicts with a general website provision, the specific term will govern only to the extent of the inconsistency and only where legally permissible.',
              'No provision should be interpreted as authorising an undisclosed charge, misleading representation or unlawful exclusion of responsibility.',
              'Any agreed amendment should be recorded in writing.',
            ]},
            { id: 'governing-law', num: 45, title: 'Governing Law and Jurisdiction', content: [
              'These Terms & Conditions are governed by the laws of India.',
              'Subject to applicable law, disputes may be brought before the competent courts at New Delhi where those courts have jurisdiction over the dispute.',
              'Nothing in this clause is intended to remove a customer\u2019s right to approach a consumer commission, regulator or other competent forum where the law permits or requires the matter to be brought before that forum.',
              'Any jurisdiction provision will operate only to the extent legally enforceable in the circumstances.',
              'The parties may attempt to resolve a dispute through good-faith communication before commencing formal proceedings, where appropriate.',
              'Such discussions will not prevent either party from seeking urgent relief or exercising a statutory right within the applicable limitation period.',
            ]},
            { id: 'contact', num: 46, title: 'Contact and Grievance Information', content: [
              'For booking enquiries, clarification of these Terms & Conditions, service-related concerns or formal complaints, please contact:',
              'KASHIR WATH \u2014 Legal Business/Proprietor Name: [Insert Full Legal Name]; Business Address: [Insert Complete Address]; Official Email: [Insert Email Address]; Telephone/WhatsApp: [Insert Contact Number]; Grievance Contact/Designation: [Insert Name or Designation]; Grievance Email: [Insert Grievance Email if different]; Website: [Insert Official Website URL].',
              'Please include your booking reference, travel dates and a concise description of your enquiry or complaint so that we can identify the relevant booking and respond appropriately.',
            ]},
          ].map((section) => (
            <RevealOnScroll key={section.id}>
              <div className="legal-section" id={section.id}>
                <span className="legal-section-number">Section {section.num}</span>
                <h2>{section.title}</h2>
                {section.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </RevealOnScroll>
          ))}

          {/* Important Customer Notice */}
          <RevealOnScroll>
            <div className="legal-section">
              <h2>Important Customer Notice</h2>
              <p>Before confirming a journey, please read the quotation, inclusions, exclusions, payment schedule, Cancellation &amp; Refund Policy, Modification &amp; Rescheduling Policy and the relevant safety policies.</p>
              <p>Please raise any questions about accommodation, room configuration, vehicle type, group size, meals, accessibility, religious-site access, permits or special experiences before making payment.</p>
              <p>A transparent booking begins with clear expectations.</p>
              <p>KASHIR WATH aims to create thoughtfully planned journeys through Kashmir while communicating the practical limitations, responsibilities and conditions that apply to travel.</p>
            </div>
          </RevealOnScroll>

          {/* Footer */}
          <RevealOnScroll>
            <div className="legal-footer">
              <p className="legal-brand">KASHIR WATH</p>
              <p className="legal-tagline">Soulful Journeys Through Kashir</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
