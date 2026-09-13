import { site } from "@/lib/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: site.sameAs,
    knowsAbout: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "NestJS",
      "Full-stack engineering",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
