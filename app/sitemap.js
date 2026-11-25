import {
  jammuLayers,
  jammuCollections,
  beyondDestinations,
  beyondJourneys,
} from '@/lib/beyondKashirData'

export default function sitemap() {
  const baseUrl = 'https://kashirwath.com'
  const now = new Date()

  const staticRoutes = [
    '',
    '/discover',
    '/discover/more-than-a-destination',
    '/discover/a-civilisation',
    '/discover/kashir-vatista',
    '/discover/kashir-sutra',
    '/discover/kashir-vaas',
    '/discover/kashir-ritu',
    '/discover/kashir-ghar-panun',
    '/panun-kashir',
    '/panun-kashir/sacred-kashir',
    '/panun-kashir/return-to-roots',
    '/panun-kashir/next-generation',
    '/panun-kashir/remembering-kashir',
    '/experiences',
    '/experiences/heritage-history',
    '/experiences/sacred-spiritual',
    '/experiences/culture-traditions',
    '/experiences/food-culinary',
    '/experiences/arts-crafts',
    '/experiences/nature',
    '/experiences/slow-kashmir',
    '/journeys',
    '/journeys/private',
    '/journeys/small-group',
    '/journeys/family',
    '/journeys/tailor-made',
    '/journeys/premium',
    '/journal',
    '/about',
    '/about/philosophy',
    '/about/founder',
    '/about/story',
    '/about/promise',
    '/about/why-kashir-wath',
    '/plan-your-journey',
    '/contact',
    '/faqs',
    '/policies',
    '/terms',
    '/privacy',
    '/beyond-kashir',
    '/beyond-kashir/jammu',
    '/beyond-kashir/ladakh',
    '/beyond-kashir/journeys',
  ]

  const jammuPillarRoutes = [...jammuLayers, ...jammuCollections].map(
    (p) => `/beyond-kashir/jammu/${p.slug}`
  )
  const destinationRoutes = beyondDestinations.map(
    (d) => `/beyond-kashir/destinations/${d.slug}`
  )
  const journeyRoutes = beyondJourneys.map(
    (j) => `/beyond-kashir/journeys/${j.slug}`
  )

  return [
    ...staticRoutes,
    ...jammuPillarRoutes,
    ...destinationRoutes,
    ...journeyRoutes,
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/beyond-kashir') ? 0.85 : 0.8,
  }))
}
