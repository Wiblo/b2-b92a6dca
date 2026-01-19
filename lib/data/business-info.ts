export const businessInfo = {
  // Core business details
  name: "Golden Crust Bakery",
  tagline: "Freshly baked goodness every day",
  logo: "/logo.png",

  // Contact information
  phone: "+27 11 555 1234",
  phoneSecondary: "+27 82 555 6789", // Optional second phone number
  email: "hello@goldencrust.co.za",

  // Location
  address: {
    street: "45 Commissioner Street",
    area: "Maboneng Precinct", // Optional (e.g., "Building Name" or "Suite 100")
    city: "Johannesburg",
    state: "Gauteng",
    zip: "2094",
    country: "ZA",
  },

  // Optional: Coordinates for map and LocalBusiness schema
  geo: {
    latitude: -26.2041,
    longitude: 28.0473,
  },

  // Business hours
  hours: {
    monday: "6:00am - 6:00pm",
    tuesday: "6:00am - 6:00pm",
    wednesday: "6:00am - 6:00pm",
    thursday: "6:00am - 6:00pm",
    friday: "6:00am - 7:00pm",
    saturday: "7:00am - 5:00pm",
    sunday: "8:00am - 3:00pm",
  },

  // Social media profiles
  social: {
    facebook: "https://facebook.com/goldencrust",
    instagram: "https://instagram.com/goldencrustbakery",
    whatsapp: "https://wa.me/27825556789", // WhatsApp link with number
    // twitter: "https://twitter.com/yourpage",
    // linkedin: "https://linkedin.com/company/yourpage",
  },

  // Site metadata
  url: "https://goldencrust.co.za",
  description: "Artisan bakery in Johannesburg serving fresh breads, pastries, cakes, and coffee daily. Made with love and the finest ingredients.",
  priceRange: "$$", // $, $$, $$$, or $$$$

  // Schema.org types for JSON-LD structured data
  // Customize based on your business type. Common combinations:
  // - Chiropractor: ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness']
  // - Physical Therapist: ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness']
  // - Massage Spa: ['LocalBusiness', 'HealthAndBeautyBusiness', 'DaySpa']
  // - General Wellness: ['LocalBusiness', 'HealthAndBeautyBusiness']
  // - Acupuncture: ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness']
  schemaTypes: ['LocalBusiness', 'Bakery', 'FoodEstablishment'] as const,

  // Booking/appointment URL
  bookingUrl: "tel:+27115551234",

  // Google Maps configuration
  maps: {
    apiKey: "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
    // Location name for Google Maps searches
    locationName: "Golden Crust Bakery, Johannesburg",
  },
}

// Helper function to get formatted address for Google Maps
export function getGoogleMapsUrl() {
  const { street, city, state, zip } = businessInfo.address
  const query = encodeURIComponent(`${street}, ${city}, ${state} ${zip}`)
  return `https://maps.google.com/?q=${query}`
}

// Helper function to get tel: link
export function getPhoneLink(phoneNumber: string = businessInfo.phone) {
  return `tel:${phoneNumber.replace(/[^0-9+]/g, "")}`
}

// Helper function to get mailto: link
export function getEmailLink() {
  return `mailto:${businessInfo.email}`
}

// Helper function to get Google Maps embed URL
export function getGoogleMapsEmbedUrl() {
  const { street, city, state, zip } = businessInfo.address
  const { apiKey, locationName } = businessInfo.maps
  const query = encodeURIComponent(
    `${locationName},${street},${city},${state},${zip}`
  )
  return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}&zoom=15`
}

// Helper function to get Google Maps directions URL
export function getGoogleMapsDirectionsUrl() {
  const { street, city, state, zip } = businessInfo.address
  const { locationName } = businessInfo.maps
  const destination = encodeURIComponent(
    `${locationName},${street},${city},${state},${zip}`
  )
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`
}
