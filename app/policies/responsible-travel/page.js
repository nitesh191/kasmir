import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import LegalNav from '@/components/LegalNav'

export const metadata = {
  title: 'Responsible Travel Policy',
  description:
    'Our commitment to responsible, culturally sensitive and environmentally conscious travel through Kashmir.',
}

export default function ResponsibleTravelPolicy() {
  return (
    <>
      <PageHero
        image="/images/hero.jpg"
        label="Policies"
        title="Responsible Travel Policy"
        subtitle="Travel with respect. Explore with understanding. Leave the places we visit with their dignity intact."
        breadcrumbs={[
          { label: 'Policies', href: '/policies' },
          { label: 'Responsible Travel' },
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
                At KASHIR WATH, we believe that Kashmir is more than a destination to be visited.
                It is a living cultural landscape shaped by its mountains, rivers, sacred places,
                communities, traditions, history and collective memories. This policy explains our
                commitment to responsible, culturally sensitive and environmentally conscious travel.
              </p>
            </div>
          </RevealOnScroll>

          {/* TOC */}
          <RevealOnScroll>
            <div className="legal-toc">
              <h4>Contents</h4>
              <ol>
                <li><a href="#philosophy">Our Philosophy of Responsible Travel</a></li>
                <li><a href="#local-communities">Respect for Local Communities and Cultural Diversity</a></li>
                <li><a href="#kp-heritage">Respect for Kashmiri Pandit Heritage and Sacred Geography</a></li>
                <li><a href="#religious-practices">Respect for Religious Practices and Sacred Sites</a></li>
                <li><a href="#environmental">Environmental Responsibility</a></li>
                <li><a href="#natural-landscapes">Responsible Conduct Around Rivers, Lakes, Waterfalls and Mountain Terrain</a></li>
                <li><a href="#local-businesses">Supporting Local Businesses and Communities</a></li>
                <li><a href="#food-hospitality">Food, Hospitality and Local Customs</a></li>
                <li><a href="#photography">Photography, Filming and Digital Content</a></li>
                <li><a href="#historical-accuracy">Historical Accuracy and Cultural Interpretation</a></li>
                <li><a href="#heritage-research">Responsible Heritage Research and Attribution</a></li>
                <li><a href="#wildlife">Wildlife and Animal Welfare</a></li>
                <li><a href="#purchasing">Responsible Purchasing and Cultural Artefacts</a></li>
                <li><a href="#behaviour">Responsible Behaviour by Travellers</a></li>
                <li><a href="#shared-commitment">Responsible Travel Is a Shared Commitment</a></li>
                <li><a href="#practical-limitations">Practical Limitations</a></li>
                <li><a href="#other-policies">Relationship with Other Policies</a></li>
                <li><a href="#contact">Contact</a></li>
              </ol>
            </div>
          </RevealOnScroll>

          {/* Section 1 */}
          <RevealOnScroll>
            <div className="legal-section" id="philosophy">
              <span className="legal-section-number">Section 1</span>
              <h2>Our Philosophy of Responsible Travel</h2>
              <p>
                At KASHIR WATH, we believe that Kashmir is more than a destination to be visited. It is a living cultural landscape shaped by its mountains, rivers, sacred places, communities, traditions, history and collective memories.
              </p>
              <p>
                Our journeys are designed to encourage meaningful engagement with Kashir through its natural beauty, cultural heritage, spiritual traditions and local experiences.
              </p>
              <p>
                We recognise that responsible travel requires more than visiting places respectfully. It involves understanding local sensitivities, protecting the environment, respecting community dignity, acknowledging cultural heritage and making informed choices throughout the journey.
              </p>
              <p>
                KASHIR WATH is committed to promoting thoughtful, culturally sensitive and environmentally conscious travel, subject to the nature of each itinerary, the availability of responsible local services and the practical conditions prevailing at the destination.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 2 */}
          <RevealOnScroll>
            <div className="legal-section" id="local-communities">
              <span className="legal-section-number">Section 2</span>
              <h2>Respect for Local Communities and Cultural Diversity</h2>
              <p>
                Kashmir is home to communities with distinct cultural, linguistic, religious and social traditions.
              </p>
              <p>KASHIR WATH encourages travellers to:</p>
              <ul>
                <li>Treat local residents, workers, guides, hosts and service providers with courtesy and dignity.</li>
                <li>Respect local customs, dress expectations, religious practices and community-specific sensitivities.</li>
                <li>Avoid intrusive questions about personal experiences, religious identity, political views, displacement, conflict or other sensitive subjects.</li>
                <li>Seek permission before photographing individuals, private homes, community gatherings or personal belongings.</li>
                <li>Avoid treating local communities as tourist attractions or expecting residents to explain or perform their cultural identities for visitors.</li>
                <li>Follow reasonable instructions from local authorities, site administrators, religious institutions and authorised personnel.</li>
              </ul>
              <p>
                Cultural curiosity should be exercised with sensitivity. Travellers are welcome to learn, ask appropriate questions and engage meaningfully, while recognising that no individual is obliged to share personal or community experiences.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 3 */}
          <RevealOnScroll>
            <div className="legal-section" id="kp-heritage">
              <span className="legal-section-number">Section 3</span>
              <h2>Respect for Kashmiri Pandit Heritage and Sacred Geography</h2>
              <p>
                KASHIR WATH places particular emphasis on documenting, interpreting and facilitating access to Kashmiri Pandit heritage, sacred geography, historical memory and living traditions.
              </p>
              <p>
                Our heritage-focused journeys may include temples, traditional neighbourhoods, religious landmarks, historical locations, cultural landscapes and places associated with the history and experiences of the Kashmiri Pandit community.
              </p>
              <p>
                We recognise that some places carry deep spiritual, historical and emotional significance, including memories of displacement, interrupted traditions and the continuing relationship between a community and its ancestral homeland.
              </p>
              <p>Travellers participating in such journeys are expected to:</p>
              <ul>
                <li>Approach sacred and heritage sites with dignity and respect.</li>
                <li>Follow the rules of temples, shrines, religious institutions and other site administrators.</li>
                <li>Respect restrictions on entry, photography, rituals, offerings and access to particular areas.</li>
                <li>Avoid disturbing worshippers, local residents or ongoing religious activities.</li>
                <li>Refrain from damaging, removing, marking or otherwise interfering with historical structures, artefacts or religious objects.</li>
                <li>Avoid presenting personal interpretations, disputed historical accounts or community narratives as universally accepted facts.</li>
                <li>Respect the privacy and dignity of individuals who share personal or family histories.</li>
              </ul>
              <p>
                Access to a religious or historical location is never guaranteed merely because it appears in an itinerary. Access may depend on permissions, security conditions, local administration, site rules and prevailing circumstances.
              </p>
              <p>
                KASHIR WATH does not claim ownership over Kashmir&apos;s collective heritage, religious traditions, historical facts or community identity. Our responsibility is to present original research, carefully curated experiences and heritage interpretation with appropriate attribution and respect for the rights of others.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 4 */}
          <RevealOnScroll>
            <div className="legal-section" id="religious-practices">
              <span className="legal-section-number">Section 4</span>
              <h2>Respect for Religious Practices and Sacred Sites</h2>
              <p>
                Religious and spiritual experiences must be approached with humility and without imposing expectations on local communities or religious institutions.
              </p>
              <p>Travellers should:</p>
              <ul>
                <li>Observe applicable dress codes and entry requirements.</li>
                <li>Remove footwear wherever required.</li>
                <li>Follow instructions regarding photography, mobile phones, offerings and participation in rituals.</li>
                <li>Avoid entering restricted areas or interrupting prayers and ceremonies.</li>
                <li>Seek permission before participating in a ritual or photographing a religious activity.</li>
                <li>Respect the right of individuals to practise their faith without interference.</li>
              </ul>
              <p>
                KASHIR WATH does not guarantee access to any particular shrine, temple, religious ceremony, priest, ritual or religious authority unless the specific arrangement has been expressly confirmed in writing.
              </p>
              <p>
                Participation in religious activities remains subject to the rules and discretion of the relevant institution or authorised persons.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 5 */}
          <RevealOnScroll>
            <div className="legal-section" id="environmental">
              <span className="legal-section-number">Section 5</span>
              <h2>Environmental Responsibility</h2>
              <p>
                Kashmir&apos;s mountains, forests, rivers, lakes, wetlands, meadows and other natural environments require careful protection.
              </p>
              <p>KASHIR WATH encourages travellers to minimise their environmental footprint by:</p>
              <ul>
                <li>Avoiding littering and carrying waste back to designated disposal points where necessary.</li>
                <li>Avoiding single-use plastics where practical alternatives are available.</li>
                <li>Using water and electricity responsibly.</li>
                <li>Staying on designated trails and permitted access routes.</li>
                <li>Avoiding damage to vegetation, meadows, orchards, forests and fragile landscapes.</li>
                <li>Refraining from feeding, disturbing, chasing or attempting to handle wildlife.</li>
                <li>Avoiding the collection of plants, stones, fossils, artefacts or other natural or historical materials where prohibited or inappropriate.</li>
                <li>Following local rules governing protected areas, forests, lakes, rivers and wildlife habitats.</li>
              </ul>
              <p>
                Travellers must not enter restricted, environmentally sensitive or protected areas without the necessary permission.
              </p>
              <p>
                Environmental conditions and access restrictions may change. KASHIR WATH may modify or omit an activity where it reasonably considers that the activity would create an unacceptable environmental, legal or safety risk.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 6 */}
          <RevealOnScroll>
            <div className="legal-section" id="natural-landscapes">
              <span className="legal-section-number">Section 6</span>
              <h2>Responsible Conduct Around Rivers, Lakes, Waterfalls and Mountain Terrain</h2>
              <p>
                Kashmir&apos;s natural landscapes may include rivers, streams, lakes, waterfalls, steep slopes, meadows, mountain roads and uneven walking routes.
              </p>
              <p>
                These locations may present risks that are not always apparent from photographs or general destination descriptions.
              </p>
              <p>Travellers should:</p>
              <ul>
                <li>Remain within designated or locally permitted visitor areas.</li>
                <li>Avoid approaching unstable edges, fast-flowing water, slippery rocks or unsecured viewpoints.</li>
                <li>Never enter water unless the activity is expressly permitted and appropriate safety arrangements are in place.</li>
                <li>Avoid swimming, boating, trekking or other activities where conditions or authorisations make them unsafe or prohibited.</li>
                <li>Inform the tour operator or designated local representative before undertaking any optional activity that takes them away from the planned route.</li>
                <li>Follow local authority instructions and any closures or warnings.</li>
              </ul>
              <p>
                The inclusion of a river, waterfall, meadow, viewpoint or mountain location in an itinerary does not constitute a representation that every part of that location is safe to access.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 7 */}
          <RevealOnScroll>
            <div className="legal-section" id="local-businesses">
              <span className="legal-section-number">Section 7</span>
              <h2>Supporting Local Businesses and Communities</h2>
              <p>
                Where reasonably practicable and consistent with quality, safety, availability and the agreed itinerary, KASHIR WATH seeks to work with local accommodation providers, drivers, guides, artisans, food establishments and other service providers.
              </p>
              <p>
                We recognise the importance of local knowledge and the contribution of local communities to meaningful travel experiences.
              </p>
              <p>Our approach may include:</p>
              <ul>
                <li>Working with suitable local suppliers.</li>
                <li>Introducing travellers to local crafts, traditions, cuisine and cultural experiences where appropriate.</li>
                <li>Encouraging respectful interactions with artisans and community members.</li>
                <li>Communicating reasonable service expectations to suppliers.</li>
                <li>Considering local expertise when evaluating routes, access conditions and cultural sensitivities.</li>
              </ul>
              <p>
                Local sourcing is subject to availability, commercial terms, service standards, safety requirements and other operational considerations. KASHIR WATH does not represent that every component of every journey is locally owned, locally sourced or community-operated.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 8 */}
          <RevealOnScroll>
            <div className="legal-section" id="food-hospitality">
              <span className="legal-section-number">Section 8</span>
              <h2>Food, Hospitality and Local Customs</h2>
              <p>
                Food is an important part of cultural understanding. However, food preferences, dietary restrictions, religious requirements and hospitality practices vary between travellers and service providers.
              </p>
              <p>
                Travellers should communicate dietary requirements, allergies, medical restrictions and other relevant needs before booking.
              </p>
              <p>
                KASHIR WATH will communicate confirmed requirements to relevant suppliers where practicable. Special meals, specific ingredients, separate kitchen arrangements or particular preparation methods remain subject to supplier confirmation.
              </p>
              <p>
                Travellers should respect local hospitality practices and avoid making derogatory comments about local food, traditions or customs.
              </p>
              <p>
                Where a specific dietary arrangement is essential for medical or religious reasons, travellers should obtain written confirmation before relying on it.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 9 */}
          <RevealOnScroll>
            <div className="legal-section" id="photography">
              <span className="legal-section-number">Section 9</span>
              <h2>Photography, Filming and Digital Content</h2>
              <p>
                KASHIR WATH encourages photography that respects people, places and cultural context.
              </p>
              <p>
                Travellers must not assume that a publicly accessible place is automatically open to unrestricted photography or filming.
              </p>
              <p>Before taking photographs or recording videos, travellers should consider:</p>
              <ul>
                <li>Whether photography is permitted at the location.</li>
                <li>Whether the subject has consented to being photographed.</li>
                <li>Whether the image could expose private information or create a safety or security concern.</li>
                <li>Whether filming could interfere with worship, local activities or the privacy of residents.</li>
                <li>Whether drone use, commercial filming or professional photography requires specific authorisation.</li>
              </ul>
              <p>
                Travellers must comply with applicable law, local restrictions and site-specific rules.
              </p>
              <p>
                KASHIR WATH&apos;s own use of photographs, videos, testimonials or identifiable traveller content is subject to applicable law and any required consent or permissions. A traveller&apos;s participation in a tour does not, by itself, constitute consent to use their image or personal information for marketing.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 10 */}
          <RevealOnScroll>
            <div className="legal-section" id="historical-accuracy">
              <span className="legal-section-number">Section 10</span>
              <h2>Historical Accuracy and Cultural Interpretation</h2>
              <p>
                KASHIR WATH seeks to present Kashmir&apos;s history, sacred geography and cultural traditions through original research, careful interpretation and responsible storytelling.
              </p>
              <p>
                Historical subjects may involve different sources, traditions, scholarly interpretations and community memories. Where appropriate, we aim to distinguish between documented historical information, religious traditions, oral accounts, interpretive perspectives and matters that remain disputed or uncertain.
              </p>
              <p>
                We do not intend to misrepresent communities, appropriate another person&apos;s research or present an unverified account as an established fact.
              </p>
              <p>
                Historical and cultural information published on our website is provided for general educational and travel-planning purposes. It should not automatically be treated as a substitute for specialist academic, archival, legal or religious advice.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 11 */}
          <RevealOnScroll>
            <div className="legal-section" id="heritage-research">
              <span className="legal-section-number">Section 11</span>
              <h2>Responsible Heritage Research and Attribution</h2>
              <p>
                KASHIR WATH may publish original destination guides, heritage research, temple histories, cultural articles, photographs, maps, itineraries and other editorial material.
              </p>
              <p>
                We aim to acknowledge sources and respect applicable intellectual property rights.
              </p>
              <p>
                We do not claim exclusive ownership of historical facts, traditional knowledge, public-domain material, geographical information or cultural practices merely because these subjects appear in our publications.
              </p>
              <p>
                Travellers, researchers, publishers and other operators should distinguish between the underlying historical subject and the original expression, photographs, research compilation, editorial structure or other protected material created by KASHIR WATH or its licensors.
              </p>
              <p>
                Requests to reproduce or commercially use protected content should be directed to KASHIR WATH. Any permitted use remains subject to applicable law and the terms of the relevant licence or permission.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 12 */}
          <RevealOnScroll>
            <div className="legal-section" id="wildlife">
              <span className="legal-section-number">Section 12</span>
              <h2>Wildlife and Animal Welfare</h2>
              <p>
                Travellers should observe wildlife from an appropriate distance and avoid activities that cause distress or injury to animals.
              </p>
              <p>
                KASHIR WATH discourages the harassment, feeding, capturing, handling or exploitation of wildlife for entertainment or photographs.
              </p>
              <p>
                Where animal-related activities are proposed by third-party providers, their suitability will depend on applicable law, animal welfare considerations, safety standards and the actual arrangements available.
              </p>
              <p>
                Travellers should not participate in an activity that violates applicable wildlife protection rules or involves obvious mistreatment of animals.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 13 */}
          <RevealOnScroll>
            <div className="legal-section" id="purchasing">
              <span className="legal-section-number">Section 13</span>
              <h2>Responsible Purchasing and Cultural Artefacts</h2>
              <p>
                Travellers are encouraged to support genuine local artisans and lawful businesses.
              </p>
              <p>
                They should exercise care when purchasing antiques, religious artefacts, wildlife products, archaeological objects or items represented as historically significant.
              </p>
              <p>
                KASHIR WATH does not authorise the removal, purchase, export or transport of any item in violation of applicable law.
              </p>
              <p>
                Travellers are responsible for complying with applicable restrictions concerning protected wildlife products, antiquities, cultural property, customs declarations and export permissions.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 14 */}
          <RevealOnScroll>
            <div className="legal-section" id="behaviour">
              <span className="legal-section-number">Section 14</span>
              <h2>Responsible Behaviour by Travellers</h2>
              <p>
                Every participant contributes to the quality and safety of a shared travel experience.
              </p>
              <p>Travellers are expected to:</p>
              <ul>
                <li>Treat fellow participants, staff, drivers, guides, hosts and residents respectfully.</li>
                <li>Follow reasonable safety instructions.</li>
                <li>Avoid harassment, intimidation, discrimination, violence and disruptive conduct.</li>
                <li>Respect accommodation rules and other guests&apos; privacy.</li>
                <li>Avoid entering another person&apos;s room or private area without permission.</li>
                <li>Refrain from damaging property or interfering with the work of local service providers.</li>
                <li>Comply with applicable law and legitimate directions issued by competent authorities.</li>
              </ul>
              <p>
                KASHIR WATH may take reasonable steps, consistent with applicable law and the circumstances, where a traveller&apos;s conduct threatens safety, disrupts the group, damages property or seriously compromises the experience of others.
              </p>
              <p>
                Any decision to restrict participation, arrange alternative transport or discontinue assistance will depend on the circumstances, contractual terms, available alternatives and applicable law. Refunds, additional costs and other consequences will be determined under the applicable booking and cancellation terms and relevant legal requirements.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 15 */}
          <RevealOnScroll>
            <div className="legal-section" id="shared-commitment">
              <span className="legal-section-number">Section 15</span>
              <h2>Responsible Travel Is a Shared Commitment</h2>
              <p>
                KASHIR WATH can communicate expectations, curate experiences, select suppliers and encourage responsible conduct. However, responsible tourism depends on the cooperation of travellers, suppliers, local communities, site administrators and public authorities.
              </p>
              <p>
                We cannot independently control the conduct of every visitor, resident, supplier or third party.
              </p>
              <p>
                We welcome constructive feedback that may help improve the cultural sensitivity, environmental responsibility and quality of our journeys.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 16 */}
          <RevealOnScroll>
            <div className="legal-section" id="practical-limitations">
              <span className="legal-section-number">Section 16</span>
              <h2>Practical Limitations</h2>
              <p>
                Responsible travel measures may be affected by weather, road conditions, local restrictions, supplier availability, security advisories, public authority instructions and other circumstances beyond our reasonable control.
              </p>
              <p>
                We will make reasonable efforts, within the scope of our confirmed arrangements, to communicate material changes and consider appropriate alternatives where practicable.
              </p>
              <p>
                Nothing in this policy guarantees a particular environmental outcome, community interaction, cultural encounter, site access or supplier practice unless expressly confirmed as part of a booking.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 17 */}
          <RevealOnScroll>
            <div className="legal-section" id="other-policies">
              <span className="legal-section-number">Section 17</span>
              <h2>Relationship with Other Policies</h2>
              <p>This Responsible Travel Policy should be read together with KASHIR WATH&apos;s applicable:</p>
              <ul>
                <li>Booking and Payment Policy;</li>
                <li>Cancellation and Refund Policy;</li>
                <li>Travel &amp; Safety Policy;</li>
                <li>Terms and Conditions;</li>
                <li>Privacy Policy; and</li>
                <li>Website Disclaimer &amp; Intellectual Property Policy.</li>
              </ul>
              <p>
                Where a specific booking document contains a confirmed itinerary or service arrangement, that document should be read together with the applicable policies. Nothing in this policy is intended to remove or limit a right or obligation that cannot lawfully be excluded.
              </p>
            </div>
          </RevealOnScroll>

          {/* Section 18 */}
          <RevealOnScroll>
            <div className="legal-section" id="contact">
              <span className="legal-section-number">Section 18</span>
              <h2>Contact</h2>
              <p>
                For questions, feedback or concerns relating to responsible travel, cultural heritage or environmental practices, please contact:
              </p>
              <p>
                KASHIR WATH<br />
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
                Travel with respect. Explore with understanding. Leave the places we visit with their dignity intact.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
