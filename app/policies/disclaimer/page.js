import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import LegalNav from '@/components/LegalNav'

export const metadata = {
  title: 'Website Disclaimer & Intellectual Property Policy',
  description:
    'Website disclaimer, intellectual property, copyright, brand protection and content usage policy for Kashir Wath.',
}

export default function DisclaimerPolicy() {
  return (
    <>
      <PageHero
        image="/images/hero.jpg"
        label="Legal"
        title="Website Disclaimer & Intellectual Property Policy"
        subtitle="Our commitment to protecting original content, brand identity and Kashmir's cultural heritage."
        breadcrumbs={[
          { label: 'Policies', href: '/policies' },
          { label: 'Disclaimer & IP' },
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
                KASHIR WATH is a curated travel and heritage brand dedicated to presenting Kashmir
                through its landscapes, sacred geography, cultural traditions, historical narratives,
                living heritage and meaningful travel experiences. This Policy governs the use of the
                KASHIR WATH website, its published content, brand identity, original editorial
                material, curated travel presentations and other intellectual property.
              </p>
            </div>
          </RevealOnScroll>

          {/* TOC */}
          <RevealOnScroll>
            <div className="legal-toc">
              <h4>Contents</h4>
              <ol>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#business-identity">Business Identity and Legal Status</a></li>
                <li><a href="#ownership">Ownership of the Website and Intellectual Property</a></li>
                <li><a href="#copyright">Copyright Protection</a></li>
                <li><a href="#heritage-research">Protection of Original Heritage Research and Editorial Content</a></li>
                <li><a href="#brand-identity">Protection of Kashir Wath&apos;s Brand Identity</a></li>
                <li><a href="#travel-itineraries">Original Travel Itineraries and Curated Journey Presentations</a></li>
                <li><a href="#personal-use">Limited Permission for Personal and Non-Commercial Use</a></li>
                <li><a href="#prohibited-uses">Prohibited or Restricted Uses of Website Content</a></li>
                <li><a href="#commercial-use">Use by Travel Agencies, Tour Operators and Commercial Publishers</a></li>
                <li><a href="#visual-materials">Website Text, Photographs, Maps and Visual Materials</a></li>
                <li><a href="#historical-accuracy">Historical Accuracy, Cultural Interpretation and Editorial Limitations</a></li>
                <li><a href="#religious-info">Religious, Spiritual and Heritage Information</a></li>
                <li><a href="#travel-info">Travel Information, Availability and Service Disclaimer</a></li>
                <li><a href="#external-websites">External Websites and Third-Party Resources</a></li>
                <li><a href="#no-unauthorised">No Unauthorised Representation of Affiliation</a></li>
                <li><a href="#user-submissions">User Submissions and Permission to Use Submitted Material</a></li>
                <li><a href="#ai-extraction">Artificial Intelligence, Content Extraction and Automated Reproduction</a></li>
                <li><a href="#reporting">Reporting Copyright Infringement or Unauthorised Use</a></li>
                <li><a href="#remedies">Remedies for Unauthorised Use</a></li>
                <li><a href="#limitation">Limitation of Liability</a></li>
                <li><a href="#privacy-data">Privacy and Personal Data</a></li>
                <li><a href="#changes">Changes to This Policy</a></li>
                <li><a href="#governing-law">Governing Law and Jurisdiction</a></li>
                <li><a href="#contact">Contact Kashir Wath</a></li>
              </ol>
            </div>
          </RevealOnScroll>

          {/* Section 1 */}
          <RevealOnScroll>
            <div className="legal-section" id="introduction">
              <span className="legal-section-number">Section 1</span>
              <h2>Introduction</h2>
              <p>
                Welcome to KASHIR WATH.
              </p>
              <p>
                KASHIR WATH is a curated travel and heritage brand dedicated to presenting Kashmir through its landscapes, sacred geography, cultural traditions, historical narratives, living heritage and meaningful travel experiences.
              </p>
              <p>
                Our aim is to help travellers, families, researchers and culturally curious visitors discover Kashmir beyond conventional sightseeing through original editorial content, heritage documentation, destination guides, curated journeys and travel-related information.
              </p>
              <p>
                KASHIR WATH seeks to present Kashmir as a destination of profound historical, cultural, spiritual and geographical significance while encouraging informed, respectful and responsible travel.
              </p>
              <p>
                This Website Disclaimer &amp; Intellectual Property Policy governs the use of the KASHIR WATH website, its published content, brand identity, original editorial material, curated travel presentations and other intellectual property made available through our digital platforms.
              </p>
              <p>
                By accessing or using this website, visitors are expected to comply with this Policy and all applicable laws. Any use of website material must remain within the permissions granted by applicable law, the relevant rights holder or an express licence.
              </p>
              <p>
                Nothing in this Policy is intended to restrict lawful research, independent scholarship, legitimate criticism, fair dealing or any other activity permitted by applicable law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 2 */}
          <RevealOnScroll>
            <div className="legal-section" id="business-identity">
              <span className="legal-section-number">Section 2</span>
              <h2>Business Identity and Legal Status</h2>
              <p>
                KASHIR WATH is a travel and tour operating brand operated by a sole proprietorship business based in New Delhi, India.
              </p>
              <p>
                Brand Name: KASHIR WATH<br />
                Business Structure: Sole Proprietorship<br />
                Principal Place of Business: [Insert Complete Business Address], New Delhi, Delhi, India<br />
                Name of Proprietor: [Insert Full Legal Name]<br />
                Official Website: [Insert Official Website URL]<br />
                Official Business Email: [Insert Official Business Email]<br />
                Business Contact Number: [Insert Business Contact Number, if applicable]<br />
                GSTIN: [Insert GSTIN, if registered and applicable]
              </p>
              <p>
                KASHIR WATH is the brand under which the proprietorship business offers or promotes its travel-related services, heritage experiences and curated journeys.
              </p>
              <p>
                A sole proprietorship is not a separate legal entity distinct from its proprietor. Accordingly, the proprietor remains the person legally responsible for the business, subject to applicable law and the relevant contractual arrangements.
              </p>
              <p>
                Bookings, payments, invoices, customer communications and contractual obligations shall be governed by the actual identity of the business, the applicable booking confirmation and the relevant terms and conditions.
              </p>
              <p>
                The name KASHIR WATH is used as a brand identifier and does not, by itself, indicate that the business is incorporated as a company, limited liability partnership or other separate legal entity.
              </p>
              <p>
                If the business structure changes in the future, including conversion to or establishment of a Limited Liability Partnership (LLP), this section and other relevant website disclosures shall be updated to reflect the new legal identity, effective date and applicable registration details.
              </p>
              <p>
                Until such a change legally takes effect, KASHIR WATH shall not represent itself as an LLP or any other incorporated entity.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 3 */}
          <RevealOnScroll>
            <div className="legal-section" id="ownership">
              <span className="legal-section-number">Section 3</span>
              <h2>Ownership of the Website and Intellectual Property</h2>
              <p>
                The KASHIR WATH website contains original editorial material, travel-related content, brand elements and other materials created, commissioned, licensed or lawfully obtained for use by the business.
              </p>
              <p>
                Subject to applicable law, third-party rights, contractual arrangements and any expressly stated licence, KASHIR WATH or the relevant rights holder retains the rights it owns in such materials.
              </p>
              <p>These materials may include:</p>
              <ul>
                <li>Original articles, blogs, essays and editorial features.</li>
                <li>Historical and cultural research presented in original written form.</li>
                <li>Original destination guides and location descriptions.</li>
                <li>Curated travel itineraries, route descriptions and journey presentations.</li>
                <li>Original descriptions of sacred sites, temples, cultural landmarks and heritage destinations.</li>
                <li>Original photographs, illustrations, graphics, maps and visual compositions.</li>
                <li>Original website layouts, page designs and graphic elements.</li>
                <li>Brand names, logos, taglines and original brand messaging.</li>
                <li>Original text describing KASHIR WATH&apos;s travel experiences and services.</li>
                <li>Original downloadable guides, documents and digital publications.</li>
                <li>Original collections, compilations and editorial arrangements of information.</li>
                <li>Other copyrightable material and intellectual property lawfully owned or controlled by KASHIR WATH.</li>
              </ul>
              <p>
                The publication of material on a publicly accessible website does not automatically place that material in the public domain or authorise its unrestricted reproduction.
              </p>
              <p>
                No person or organisation may assume that website content is free to copy, republish, commercially exploit or redistribute merely because it can be accessed without payment.
              </p>
              <p>
                Nothing in this Policy transfers ownership of KASHIR WATH&apos;s intellectual property to a visitor, customer, competitor, travel agent, content publisher or commercial organisation.
              </p>
              <p>
                KASHIR WATH claims rights only over material and intellectual property that it owns or is legally entitled to use or protect. Third-party materials remain subject to the rights and licence conditions of their respective owners.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 4 */}
          <RevealOnScroll>
            <div className="legal-section" id="copyright">
              <span className="legal-section-number">Section 4</span>
              <h2>Copyright Protection</h2>
              <p>
                Unless otherwise indicated, original copyrightable content published by KASHIR WATH is intended to be protected under applicable copyright law, including the Copyright Act, 1957, as amended, where applicable.
              </p>
              <p>
                Copyright protection may apply to original literary works, photographs, illustrations, graphics, eligible maps, creative compilations and other copyrightable works.
              </p>
              <p>
                Copyright protection arises according to applicable law and does not depend solely on the display of a copyright notice.
              </p>
              <p>
                The following notice may be displayed on the website:
              </p>
              <p>
                © 2026 KASHIR WATH. All rights reserved in original content owned by KASHIR WATH, subject to applicable law and third-party rights.
              </p>
              <p>
                Copyright protection does not give KASHIR WATH exclusive ownership over historical facts, public-domain material, religious traditions, geographical locations, commonly known information or ideas that are not themselves protected by copyright.
              </p>
              <p>
                Protection applies to eligible original expression and other rights actually held by KASHIR WATH.
              </p>
              <p>
                Where material has been created by an independent writer, photographer, designer, developer or other contributor, ownership and permitted use shall be determined by applicable law and the relevant agreement or licence.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 5 */}
          <RevealOnScroll>
            <div className="legal-section" id="heritage-research">
              <span className="legal-section-number">Section 5</span>
              <h2>Protection of Original Heritage Research and Editorial Content</h2>
              <p>
                A central purpose of KASHIR WATH is to document and present Kashmir&apos;s cultural, historical, spiritual and geographical heritage through original editorial work.
              </p>
              <p>Our published content may cover:</p>
              <ul>
                <li>Ancient and historic temples of Kashmir.</li>
                <li>Kashmiri Pandit sacred geography and cultural memory.</li>
                <li>Historical settlements, neighbourhoods and pilgrimage destinations.</li>
                <li>Kashmir&apos;s rivers, springs, gardens and traditional water systems.</li>
                <li>Sacred traditions, festivals, rituals and community practices.</li>
                <li>Historical personalities, scholars, literary traditions and philosophical contributions.</li>
                <li>Traditional crafts, architecture, cultural practices and local heritage.</li>
                <li>Historical developments across different periods of Kashmir&apos;s history.</li>
                <li>District-wise heritage guides and destination research.</li>
                <li>Original travel narratives and curated cultural journeys.</li>
                <li>Lesser-known heritage destinations and their historical context.</li>
              </ul>
              <p>
                KASHIR WATH does not claim ownership over Kashmir&apos;s heritage, historical events, religious beliefs, traditional practices, community memories or facts established by reliable sources.
              </p>
              <p>
                However, subject to applicable law, the original wording, creative presentation, original photographs, illustrations, eligible research compilations and distinctive editorial arrangements created by or for KASHIR WATH may be protected.
              </p>
              <p>
                Visitors, publishers, competing tour operators and other organisations must not reproduce substantial protected portions of KASHIR WATH content, republish original articles or photographs, or reproduce protected creative arrangements without appropriate permission unless a lawful exception applies.
              </p>
              <p>
                The fact that a subject is historical, religious, cultural or publicly discussed does not automatically make every original article about that subject free to copy.
              </p>
              <p>
                KASHIR WATH respects Kashmir&apos;s shared cultural inheritance while protecting the original creative work through which that inheritance is researched, documented and presented.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 6 */}
          <RevealOnScroll>
            <div className="legal-section" id="brand-identity">
              <span className="legal-section-number">Section 6</span>
              <h2>Protection of Kashir Wath&apos;s Brand Identity</h2>
              <p>
                The name KASHIR WATH, its logo, tagline, brand presentation and other distinctive identifiers may distinguish the source of our travel services and editorial offerings.
              </p>
              <p>
                Depending on their nature and the rights established, these elements may be protected under applicable trademark, copyright, passing-off or other relevant laws.
              </p>
              <p>They may include:</p>
              <ul>
                <li>The KASHIR WATH brand name.</li>
                <li>The KASHIR WATH logo and original visual identity.</li>
                <li>The tagline &ldquo;Soulful Journeys Through Kashir&rdquo;.</li>
                <li>Original brand graphics and visual compositions.</li>
                <li>Original marketing copy and distinctive brand messaging.</li>
                <li>Original names and descriptions of travel experiences, where legally protectable.</li>
                <li>Other distinctive identifiers developed for the brand.</li>
              </ul>
              <p>
                Displaying a name or tagline on our website does not, by itself, establish that it is a registered trademark.
              </p>
              <p>
                Unless expressly stated, KASHIR WATH does not represent that every brand element is registered or that every use of a similar word or expression constitutes infringement.
              </p>
              <p>
                No third party may use KASHIR WATH&apos;s name, logo or brand presentation in a manner that falsely suggests affiliation, endorsement, sponsorship, authorisation or an official business relationship.
              </p>
              <p>
                Unauthorised use of our brand identity in advertisements, social media profiles, travel listings, brochures, websites or booking communications may be challenged where such use infringes rights held by KASHIR WATH or otherwise violates applicable law.
              </p>
              <p>
                Nothing in this clause prevents lawful descriptive, nominative or other permitted uses under applicable law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 7 */}
          <RevealOnScroll>
            <div className="legal-section" id="travel-itineraries">
              <span className="legal-section-number">Section 7</span>
              <h2>Original Travel Itineraries and Curated Journey Presentations</h2>
              <p>
                KASHIR WATH may develop and publish original travel itineraries, route descriptions, themed journeys, destination combinations, editorial travel concepts and curated presentations of Kashmir.
              </p>
              <p>
                These materials may reflect research, planning, destination knowledge, local coordination and original creative work.
              </p>
              <p>Examples may include:</p>
              <ul>
                <li>Sacred and cultural journeys through Kashmir.</li>
                <li>Kashmiri Pandit heritage trails.</li>
                <li>District-wise cultural explorations.</li>
                <li>Temple and pilgrimage itineraries.</li>
                <li>Nature-focused and slow-travel experiences.</li>
                <li>Multi-day curated travel programmes.</li>
                <li>Original thematic collections of destinations and experiences.</li>
              </ul>
              <p>
                KASHIR WATH does not claim exclusive ownership over geographical routes, public roads, destinations, temples, public attractions, ordinary travel arrangements or general ideas for combining destinations.
              </p>
              <p>
                Other tour operators may independently develop journeys involving the same public locations, subject to applicable law and third-party rights.
              </p>
              <p>
                However, unauthorised copying of substantial protected portions of KASHIR WATH&apos;s written itineraries, original descriptions, creative presentations, original maps, photographs, branded materials or eligible compilations may infringe the relevant rights.
              </p>
              <p>
                No person may reproduce a KASHIR WATH itinerary or branded travel presentation and falsely advertise it as an official KASHIR WATH product, authorised collaboration or original work of that person.
              </p>
              <p>
                Similarities in destinations or the general structure of independently developed journeys do not, by themselves, establish infringement.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 8 */}
          <RevealOnScroll>
            <div className="legal-section" id="personal-use">
              <span className="legal-section-number">Section 8</span>
              <h2>Limited Permission for Personal and Non-Commercial Use</h2>
              <p>
                Visitors may access the website for personal research, travel planning, educational reading and other lawful purposes.
              </p>
              <p>Unless a specific page states otherwise, visitors may:</p>
              <ul>
                <li>Read and refer to publicly accessible KASHIR WATH articles.</li>
                <li>Share links to KASHIR WATH webpages.</li>
                <li>Share short, appropriately attributed quotations where permitted by applicable law.</li>
                <li>Refer to published destination information for personal travel planning.</li>
                <li>Print or save a reasonable amount of content for personal, non-commercial reference, subject to applicable law and page-specific restrictions.</li>
              </ul>
              <p>
                This permission does not authorise systematic copying, reproduction of complete articles, commercial republication of original material or removal of ownership notices where prohibited.
              </p>
              <p>
                A link to a KASHIR WATH article is generally preferable to copying the article itself.
              </p>
              <p>
                Where a quotation is used lawfully, attribution should identify KASHIR WATH as the source and, where practicable, identify the original article or webpage.
              </p>
              <p>
                Attribution alone does not replace permission when permission is legally required.
              </p>
              <p>
                Nothing in this Policy restricts fair dealing, quotation, criticism, review, reporting or other uses permitted by applicable law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 9 */}
          <RevealOnScroll>
            <div className="legal-section" id="prohibited-uses">
              <span className="legal-section-number">Section 9</span>
              <h2>Prohibited or Restricted Uses of Website Content</h2>
              <p>
                Except where expressly authorised by KASHIR WATH, permitted by an applicable licence or allowed by law, no person may:
              </p>
              <ol>
                <li>Copy and republish complete KASHIR WATH articles or substantial protected portions of them on another website.</li>
                <li>Reproduce original blogs in commercial brochures, catalogues, newsletters or travel publications without the necessary rights.</li>
                <li>Copy original photographs, illustrations, graphics or other protected visual materials for commercial use without authorisation.</li>
                <li>Reproduce substantial portions of destination guides or original travel presentations and publish them as another operator&apos;s own work.</li>
                <li>Copy original content and make superficial changes to wording, headings or sentence order to present it misleadingly as independently created work.</li>
                <li>Remove, conceal or alter copyright notices, ownership statements or attribution where doing so violates applicable rights.</li>
                <li>Use KASHIR WATH&apos;s name, logo or branding to imply an unauthorised association or endorsement.</li>
                <li>Use protected content to create misleading advertisements, counterfeit promotional material or false booking communications.</li>
                <li>Systematically extract or reproduce substantial protected portions of website content or databases in a manner that infringes applicable rights.</li>
                <li>Use automated tools to reproduce protected content at scale where such use infringes copyright, violates applicable access conditions or otherwise breaches the law.</li>
                <li>Redistribute, sell or commercially licence protected KASHIR WATH content without the necessary rights.</li>
                <li>Present original content, photographs, research compilations or marketing materials as the work of another organisation without lawful authorisation.</li>
                <li>Incorporate protected content into another commercial website, travel portal, publication or digital product without the necessary permission.</li>
              </ol>
              <p>
                These restrictions apply only to the extent that the relevant material is protected, the relevant rights belong to or are lawfully controlled by KASHIR WATH, and the proposed use is not otherwise permitted by law.
              </p>
              <p>
                This section does not prohibit independent research, lawful reporting, legitimate criticism, fair dealing or independently created travel products based on public information.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 10 */}
          <RevealOnScroll>
            <div className="legal-section" id="commercial-use">
              <span className="legal-section-number">Section 10</span>
              <h2>Use by Travel Agencies, Tour Operators and Commercial Publishers</h2>
              <p>
                KASHIR WATH welcomes the lawful discussion and appreciation of Kashmir&apos;s cultural and historical heritage.
              </p>
              <p>
                However, our original editorial content and branded materials must not be treated as a free commercial content library.
              </p>
              <p>
                Other tour operators, travel agencies, destination-management companies, publishers, marketing agencies, tourism portals and commercial organisations must obtain appropriate permission before using protected KASHIR WATH materials in circumstances where permission is required.
              </p>
              <p>This includes:</p>
              <ul>
                <li>Republishing complete articles on competing websites.</li>
                <li>Using original photographs in travel advertisements.</li>
                <li>Reproducing destination guides in commercial publications.</li>
                <li>Incorporating protected editorial content into another company&apos;s paid travel products.</li>
                <li>Copying branded itinerary descriptions for use in competing brochures.</li>
                <li>Using our logo or brand name in a manner suggesting an official partnership.</li>
                <li>Reproducing substantial protected portions of original research compilations.</li>
              </ul>
              <p>
                Commercial organisations may independently discuss the same temples, destinations, historical events, routes or cultural subjects using their own original work and lawful sources.
              </p>
              <p>
                KASHIR WATH does not claim that public historical knowledge or generally available geographical information belongs exclusively to our brand.
              </p>
              <p>
                Commercial use of protected KASHIR WATH material requires prior written permission unless an applicable legal exception or existing licence authorises that use.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 11 */}
          <RevealOnScroll>
            <div className="legal-section" id="visual-materials">
              <span className="legal-section-number">Section 11</span>
              <h2>Website Text, Photographs, Maps and Visual Materials</h2>
              <p>
                Different types of material displayed on the website may be subject to different ownership and licensing arrangements.
              </p>
              <h3>11.1 Original Written Content</h3>
              <p>
                Original text written by or for KASHIR WATH may be protected by copyright, subject to applicable law and the relevant ownership arrangements.
              </p>
              <h3>11.2 Original Photographs</h3>
              <p>
                Photographs taken by KASHIR WATH or commissioned for it may be protected by copyright or other applicable rights. Ownership depends on the circumstances of creation, applicable law and any relevant agreement.
              </p>
              <p>
                A photograph must not be assumed to belong to KASHIR WATH merely because it appears on our website.
              </p>
              <h3>11.3 Licensed Photographs and Stock Images</h3>
              <p>
                Some images may be obtained under stock-image licences, written permissions or other lawful arrangements. Such images remain subject to the relevant third-party licence conditions. KASHIR WATH cannot grant rights it does not possess.
              </p>
              <h3>11.4 Maps and Geographic Information</h3>
              <p>
                Public geographical information, coordinates, road networks and place names are not automatically owned by KASHIR WATH. Where maps or mapping services are supplied by third parties, their terms, attribution requirements and licence conditions apply.
              </p>
              <p>
                Original map illustrations and eligible creative presentations may be protected separately.
              </p>
              <h3>11.5 Third-Party Logos and Trademarks</h3>
              <p>
                Names, logos and marks belonging to hotels, transport providers, institutions, religious organisations, publications and other third parties remain the property of their respective owners.
              </p>
              <p>
                Their appearance on our website does not necessarily imply endorsement, sponsorship or a formal partnership.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 12 */}
          <RevealOnScroll>
            <div className="legal-section" id="historical-accuracy">
              <span className="legal-section-number">Section 12</span>
              <h2>Historical Accuracy, Cultural Interpretation and Editorial Limitations</h2>
              <p>
                KASHIR WATH seeks to publish informative, responsible and well-considered content relating to Kashmir&apos;s history, culture, religious traditions and heritage.
              </p>
              <p>
                Historical and cultural subjects may involve differing interpretations, incomplete records, oral traditions, contested chronologies or variations between scholarly and community accounts.
              </p>
              <p>Accordingly:</p>
              <ul>
                <li>Historical information is presented for general educational and informational purposes.</li>
                <li>Interpretations may reflect the sources available at the time of publication.</li>
                <li>Oral traditions and religious beliefs may be identified as traditions or beliefs rather than presented as independently verified historical facts.</li>
                <li>Historical interpretations may be updated when new evidence or reliable information becomes available.</li>
                <li>Errors or omissions may occasionally occur despite reasonable editorial care.</li>
              </ul>
              <p>
                Unless a page expressly states otherwise, our articles should not be treated as academic peer-reviewed publications, legal advice, archaeological certification or definitive historical findings.
              </p>
              <p>
                Where practicable, important historical claims should be supported by reliable sources and relevant references.
              </p>
              <p>
                KASHIR WATH may correct, clarify, update or remove published material when reasonably necessary.
              </p>
              <p>
                Nothing in this disclaimer is intended to excuse knowingly misleading representations or to exclude liability that cannot lawfully be excluded.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 13 */}
          <RevealOnScroll>
            <div className="legal-section" id="religious-info">
              <span className="legal-section-number">Section 13</span>
              <h2>Religious, Spiritual and Heritage Information</h2>
              <p>
                KASHIR WATH may publish content relating to temples, sacred sites, pilgrimage traditions, religious festivals, rituals, historical beliefs and spiritual practices.
              </p>
              <p>
                Such content is provided for informational, cultural and travel-planning purposes.
              </p>
              <p>
                Descriptions of religious traditions do not necessarily constitute religious instructions, formal theological interpretations or authoritative statements on behalf of any temple, religious institution, priest, community organisation or spiritual authority.
              </p>
              <p>
                Visitors should independently confirm current temple timings, entry conditions, ritual arrangements, photography rules, local restrictions and other practical requirements before travelling.
              </p>
              <p>
                KASHIR WATH does not claim ownership over religious beliefs, prayers, mantras, traditional rituals, sacred places or community heritage merely by documenting or discussing them.
              </p>
              <p>
                Original written presentations, eligible photographs, illustrations and other protectable creative materials used to document these subjects may nevertheless be protected under applicable law.
              </p>
              <p>
                Where a tradition has multiple interpretations, our editorial presentation should not be understood as preventing respectful discussion or independent research.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 14 */}
          <RevealOnScroll>
            <div className="legal-section" id="travel-info">
              <span className="legal-section-number">Section 14</span>
              <h2>Travel Information, Availability and Service Disclaimer</h2>
              <p>
                The website may contain information about destinations, road conditions, travel durations, hotels, homestays, resorts, transport arrangements, seasonal experiences, religious sites and suggested itineraries.
              </p>
              <p>
                Such information is provided in good faith for general guidance.
              </p>
              <p>
                Travel information may change because of weather, traffic, road closures, administrative instructions, local events, seasonal conditions, supplier availability or other circumstances.
              </p>
              <p>
                Unless expressly confirmed in a booking agreement or written confirmation, publication of a destination, hotel, itinerary, price, photograph or service description does not by itself guarantee that the relevant service is available or included in a particular tour.
              </p>
              <p>
                Photographs are illustrative where indicated. Actual conditions, room categories, views, facilities, road conditions and seasonal appearances may differ.
              </p>
              <p>
                Travellers should rely on their applicable booking confirmation for the final details of the services purchased.
              </p>
              <p>
                Prices, inclusions, exclusions, departure dates and availability should be verified before a booking is finalised.
              </p>
              <p>
                Where KASHIR WATH makes a specific representation about a service, applicable consumer-protection requirements continue to apply.
              </p>
              <p>
                This section does not override the Booking Policy, Payment Policy, Cancellation Policy, Refund Policy or other applicable contractual terms.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 15 */}
          <RevealOnScroll>
            <div className="legal-section" id="external-websites">
              <span className="legal-section-number">Section 15</span>
              <h2>External Websites and Third-Party Resources</h2>
              <p>
                Our website may contain links to external websites, maps, publications, booking services, hotels, transport providers, public institutions or other third-party resources.
              </p>
              <p>
                These links may be provided to help visitors locate further information or relevant services.
              </p>
              <p>
                Unless expressly stated, a link does not mean that KASHIR WATH owns, operates, controls or endorses the linked website or every statement published on it.
              </p>
              <p>
                Third-party websites may change their content, terms, availability and privacy practices without notice.
              </p>
              <p>
                Visitors should review the relevant third party&apos;s terms, privacy policy and other applicable conditions before using its services.
              </p>
              <p>
                KASHIR WATH does not automatically adopt third-party material as its own editorial position merely by linking to it.
              </p>
              <p>
                Nothing in this section excludes responsibility that may arise under applicable law from KASHIR WATH&apos;s own acts, representations or contractual obligations.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 16 */}
          <RevealOnScroll>
            <div className="legal-section" id="no-unauthorised">
              <span className="legal-section-number">Section 16</span>
              <h2>No Unauthorised Representation of Affiliation</h2>
              <p>No person may falsely represent that they:</p>
              <ul>
                <li>Operate or officially represent KASHIR WATH.</li>
                <li>Are an authorised agent, employee, representative or partner of KASHIR WATH.</li>
                <li>Have permission to sell KASHIR WATH products or services.</li>
                <li>Are authorised to issue bookings, quotations, invoices or refunds on our behalf.</li>
                <li>Possess an official licence to reproduce protected KASHIR WATH content or brand identity.</li>
              </ul>
              <p>
                Unless independently confirmed through an official KASHIR WATH communication channel, any such representation should be treated with caution.
              </p>
              <p>
                Visitors should verify suspicious communications before making payments or sharing personal information.
              </p>
              <p>
                KASHIR WATH may take appropriate action against demonstrably fraudulent impersonation or unauthorised use of its brand where legally justified.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 17 */}
          <RevealOnScroll>
            <div className="legal-section" id="user-submissions">
              <span className="legal-section-number">Section 17</span>
              <h2>User Submissions and Permission to Use Submitted Material</h2>
              <p>
                Visitors may contact KASHIR WATH to submit enquiries, feedback, corrections, photographs, travel experiences, testimonials or other information.
              </p>
              <p>
                Submitting material does not automatically transfer ownership of that material to KASHIR WATH.
              </p>
              <p>
                Unless a separate agreement or clearly stated submission condition applies, the person submitting material remains responsible for ensuring that they have the necessary rights and permissions.
              </p>
              <p>
                By voluntarily submitting material for possible publication, a contributor may be asked to grant a specific written licence identifying the permitted uses, duration, attribution arrangements and any applicable compensation.
              </p>
              <p>
                KASHIR WATH will not assume that a private message, personal photograph or copyrighted work may be published commercially merely because it was sent to us.
              </p>
              <p>
                Personal data and submitted material will be handled in accordance with applicable law and our Privacy Policy.
              </p>
              <p>
                Testimonials and customer photographs should be published only where the necessary consent or other lawful basis exists.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 18 */}
          <RevealOnScroll>
            <div className="legal-section" id="ai-extraction">
              <span className="legal-section-number">Section 18</span>
              <h2>Artificial Intelligence, Content Extraction and Automated Reproduction</h2>
              <p>
                KASHIR WATH&apos;s original website content is intended to be published for lawful reading, research, travel planning and other authorised uses.
              </p>
              <p>
                Automated access, crawling, scraping, bulk extraction or reproduction of website content must comply with applicable law, relevant access conditions and valid third-party rights.
              </p>
              <p>
                No person may use automated systems to reproduce or republish substantial protected portions of KASHIR WATH content in circumstances that infringe our rights.
              </p>
              <p>
                This provision does not create rights that do not exist under applicable law or override lawful exceptions.
              </p>
              <p>
                It also does not automatically prohibit search-engine indexing or other legitimate automated activities that are permitted by law and applicable website access rules.
              </p>
              <p>
                KASHIR WATH may adopt appropriate technical measures, website instructions and access controls to protect its systems and content, subject to applicable law.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 19 */}
          <RevealOnScroll>
            <div className="legal-section" id="reporting">
              <span className="legal-section-number">Section 19</span>
              <h2>Reporting Copyright Infringement or Unauthorised Use</h2>
              <p>
                KASHIR WATH takes genuine reports of unauthorised reproduction and misleading use of its brand seriously.
              </p>
              <p>
                If you believe that content owned by or lawfully controlled by KASHIR WATH has been copied or used without permission, please contact us through the official contact details published on our website.
              </p>
              <p>To help us investigate, please provide:</p>
              <ol>
                <li>Your full name and contact details.</li>
                <li>Identification of the original KASHIR WATH material.</li>
                <li>The webpage, publication, advertisement or other location where the original material appears.</li>
                <li>The location of the allegedly infringing material, including a URL where available.</li>
                <li>An explanation of the alleged unauthorised use.</li>
                <li>Information establishing your authority to report the matter, if acting on behalf of the rights holder.</li>
                <li>Any supporting evidence reasonably available to you.</li>
              </ol>
              <p>
                Suggested Subject: Copyright or Intellectual Property Concern — KASHIR WATH
              </p>
              <p>
                We will review sufficiently detailed reports and may request further information where necessary.
              </p>
              <p>
                Depending on the circumstances and applicable law, we may seek removal or correction of infringing material, request an appropriate licence, contact the relevant platform or pursue other lawful remedies.
              </p>
              <p>
                Submitting a complaint does not automatically establish that infringement has occurred. Reports will be assessed on their merits.
              </p>
              <p>
                Knowingly false or misleading infringement allegations may themselves create legal risks.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 20 */}
          <RevealOnScroll>
            <div className="legal-section" id="remedies">
              <span className="legal-section-number">Section 20</span>
              <h2>Remedies for Unauthorised Use</h2>
              <p>
                Where KASHIR WATH reasonably believes that its legally protected rights have been infringed, it may consider appropriate remedies available under applicable law.
              </p>
              <p>Depending on the nature of the matter, these may include:</p>
              <ul>
                <li>Requesting removal or correction of disputed material.</li>
                <li>Requesting cessation of unauthorised commercial use.</li>
                <li>Seeking appropriate attribution where legally relevant and suitable.</li>
                <li>Negotiating a written licence or other authorised arrangement.</li>
                <li>Sending a formal legal notice through an authorised representative.</li>
                <li>Seeking an injunction or other appropriate relief from a competent court.</li>
                <li>Pursuing damages, an account of profits or other remedies where available and legally justified.</li>
                <li>Reporting suspected fraud or impersonation to the relevant platform or competent authority.</li>
              </ul>
              <p>
                Any action will depend on the rights involved, the evidence available, applicable legal exceptions and the circumstances of the alleged infringement.
              </p>
              <p>
                KASHIR WATH does not claim that every similarity, quotation, use of public information or reference to a shared destination constitutes infringement.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 21 */}
          <RevealOnScroll>
            <div className="legal-section" id="limitation">
              <span className="legal-section-number">Section 21</span>
              <h2>Limitation of Liability</h2>
              <p>
                To the extent permitted by applicable law, the website and its general informational content are provided for the purposes described in this Policy.
              </p>
              <p>
                KASHIR WATH does not warrant that every item of general website information will remain complete, current or suitable for every visitor&apos;s individual circumstances.
              </p>
              <p>
                Visitors should independently verify important travel, safety, legal, financial and operational information before relying on it.
              </p>
              <p>
                Nothing in this Policy excludes or limits any liability, statutory right, consumer remedy or obligation that cannot lawfully be excluded or limited under applicable law.
              </p>
              <p>
                Any contractual limitation relating to booked travel services must be interpreted together with the applicable booking terms and the law governing the transaction.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 22 */}
          <RevealOnScroll>
            <div className="legal-section" id="privacy-data">
              <span className="legal-section-number">Section 22</span>
              <h2>Privacy and Personal Data</h2>
              <p>
                This Policy concerns website disclaimers and intellectual property.
              </p>
              <p>
                The collection, use, storage, disclosure and protection of personal data are addressed separately in the KASHIR WATH Privacy Policy.
              </p>
              <p>
                Visitors should consult that document to understand how their personal information is handled.
              </p>
              <p>
                Where a person submits material containing identifiable information about another individual, they should ensure that they have the necessary authority or lawful basis to do so.
              </p>
              <p>
                KASHIR WATH will handle personal data in accordance with applicable legal requirements and its published privacy commitments.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 23 */}
          <RevealOnScroll>
            <div className="legal-section" id="changes">
              <span className="legal-section-number">Section 23</span>
              <h2>Changes to This Policy</h2>
              <p>
                KASHIR WATH may update this Policy to reflect changes in its website, business operations, content practices, intellectual property arrangements or applicable law.
              </p>
              <p>
                The latest version will be published on this page with an updated &ldquo;Last Updated&rdquo; date.
              </p>
              <p>
                Material changes should be communicated where required by applicable law or where otherwise reasonably appropriate.
              </p>
              <p>
                The revised Policy will apply in accordance with applicable law and relevant contractual requirements.
              </p>
              <p>
                Visitors are encouraged to review this page periodically.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 24 */}
          <RevealOnScroll>
            <div className="legal-section" id="governing-law">
              <span className="legal-section-number">Section 24</span>
              <h2>Governing Law and Jurisdiction</h2>
              <p>
                This Policy shall be interpreted in accordance with the laws of India, subject to applicable conflict-of-law rules and mandatory legal provisions.
              </p>
              <p>
                Subject to applicable law and the jurisdiction of competent courts, courts of competent jurisdiction in New Delhi, India, shall have jurisdiction over disputes arising from this Policy.
              </p>
              <p>
                Nothing in this clause restricts a consumer&apos;s right to approach a forum or authority that has jurisdiction under applicable law, or overrides any mandatory jurisdictional provision.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 25 */}
          <RevealOnScroll>
            <div className="legal-section" id="contact">
              <span className="legal-section-number">Section 25</span>
              <h2>Contact Kashir Wath</h2>
              <p>
                For copyright permissions, intellectual property concerns, requests to reproduce original material, suspected impersonation or questions relating to this Policy, please contact KASHIR WATH through the official contact details published on our website.
              </p>
              <p>
                Brand: KASHIR WATH<br />
                Website: [Insert Official Website URL]<br />
                Email: [Insert Official Business Email]<br />
                Proprietor: [Insert Full Legal Name]<br />
                Principal Place of Business: [Insert Complete Business Address], New Delhi, Delhi, India<br />
                Business Contact Number: [Insert Business Contact Number, if applicable]
              </p>
              <p>Please use a clear subject line, such as:</p>
              <ul>
                <li>Copyright Permission Request</li>
                <li>Intellectual Property Complaint</li>
                <li>Unauthorised Brand Use</li>
                <li>Request to Reproduce KASHIR WATH Content</li>
                <li>Website Disclaimer Enquiry</li>
              </ul>
              <p>We aim to review genuine enquiries within a reasonable period.</p>
            </div>
          </RevealOnScroll>

          {/* Footer */}
          <RevealOnScroll>
            <div className="legal-footer">
              <p className="legal-brand">KASHIR WATH</p>
              <p className="legal-tagline">Soulful Journeys Through Kashir</p>
              <p>
                Explore Kashmir. Respect its heritage. Acknowledge original work.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
