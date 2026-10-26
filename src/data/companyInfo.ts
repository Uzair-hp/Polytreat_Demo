/**
 * Single source of truth for PolyTreat contact information used on the home page.
 * Values match the existing hardcoded values in src/app/page.tsx and src/components/SiteFooter.tsx.
 * Do not "clean up" any value — keep exact text including formatting.
 */

export const companyInfo = {
  email: "polyind2@gmail.com",
  phone: "+91 98202 35995",
  whatsappUrl: "https://wa.me/919820235995?text=Hi%20PolyTreat%2C%20I%27d%20like%20to%20discuss%20a%20product%20or%20site%20requirement.",
  whatsappLabel: "Chat with the team",
  officeAddress: "7-A Topiwala Building, Goregaon (West), Mumbai 400104",
} as const;