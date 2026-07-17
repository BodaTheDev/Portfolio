export default function SchemaData() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": "https://almeshwady.vercel.app/#person",
                "name": "Abdelrahman Ahmed Al-Meshwady",
                "alternateName": "Abdelrahman Al-Meshwady",
                "jobTitle": "Backend Engineer & Technical Project Manager",
                "description": "Specialist in high-concurrency Node.js engines, financial ledger integrity, and scalable distributed systems infrastructure.",
                "url": "https://almeshwady.vercel.app/",
                "sameAs": [
                    "https://www.linkedin.com/in/abdelrahman-al-meshwady/",
                    "https://github.com/BodaTheDev"
                ],
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Alexandria",
                    "addressCountry": "Egypt"
                },
                "hasOccupation": [
                    {
                        "@type": "Occupation",
                        "name": "Backend Engineer",
                        "description": "Architecting secure, event-driven infrastructures and high-concurrency engines."
                    },
                    {
                        "@type": "Occupation",
                        "name": "Technical Project Manager",
                        "description": "Leading cross-functional engineering teams and bridging business-technical gaps."
                    }
                ],
                "knowsAbout": [
                    "Node.js", "NestJS", "System Architecture", "PostgreSQL",
                    "Redis", "RabbitMQ", "Technical Project Management",
                    "WebRTC", "Scalable Infrastructure", "Docker", "ACID Transactions"
                ]
            },
            {
                "@type": "ProfessionalService",
                "@id": "https://almeshwady.vercel.app/#service",
                "name": "Abdelrahman Al-Meshwady Architecture Lab",
                "description": "Senior-level technical leadership and system design services.",
                "areaServed": {
                    "@type": "Country",
                    "name": "Worldwide"
                },
                "location": {
                    "@type": "Place",
                    "name": "Alexandria, Egypt"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "31.2001",
                    "longitude": "29.9187"
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
