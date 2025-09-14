import type { Metadata } from "next";
import { Staatliches } from "next/font/google";
import localFont from 'next/font/local'
import Header from "@/componets/layout/header";
import Footer from "@/componets/layout/footer";
import { SpeedInsights } from "@vercel/speed-insights/next" 
import "./globals.css"; 

const staatlichesSans = Staatliches({
  variable: "--font-staatliches",
  weight: ["400"],
  subsets: ["latin"],
});

const satoshi = localFont({
  src: '../font/satoshi-variable.woff2',
  variable: "--font-satoshi",
  display: "swap",
  weight: "300 400 500 700",
});
export const metadata: Metadata = {
  title: "Joydeep Banerji | Music Composer, Producer, Sound Designer & Animal Lover",
  description:
    "Official portfolio of Joydeep Banerji – music composer, producer, and sound designer. Explore original music, film scores, sound design projects, and his creative journey inspired by life and his Labrador, Enzo.",
  keywords: [
    "Joydeep Banerji",
    "Music Composer",
    "Music Producer",
    "Sound Designer",
    "Film Scoring",
    "Original Music",
    "Portfolio",
    "Sonic Architect",
    "Sound Design for Films",
    "Music Production",
    "Dog Dad",
    "Animal Lover",
    "Enzo Labrador",
    "Creative Journey"
  ],
  openGraph: {
    title:
      "Joydeep Banerji | Music Composer, Producer & Sound Designer",
    description:
      "Discover the world of Joydeep Banerji – a passionate music composer, producer, and sound designer. Explore his original compositions, sound design, and creative projects.",
    url: "https://joydeepbanerji.com",
    siteName: "Joydeep Banerji",
    type: "website",
    images: [
      {
        url: "https://joydeepbanerji.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Joydeep Banerji Music Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joydeep Banerji | Music Composer, Producer & Sound Designer",
    description:
      "Explore the official portfolio of Joydeep Banerji – composer, producer, and sound designer. Listen to original music, soundtracks, and sound design projects.",
    images: ["https://joydeepbanerji.com/og-image.jpg"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://joydeepbanerji.com",
  "name": "Joydeep Banerji | Music Composer & Producer",
  "description": "Official portfolio of Joydeep Banerji – music composer, producer, and sound designer. Explore original music, film scores, sound design projects, and his creative journey inspired by his Labrador, Enzo.",
  "inLanguage": "en",
  "publisher": {
    "@type": "Person",
    "name": "Joydeep Banerji",
    "url": "https://joydeepbanerji.com",
    "image": "https://joydeepbanerji.com/og-image.jpg",
    "sameAs": [
      "https://www.instagram.com/_tripolar/", 
      "https://open.spotify.com/artist/4kIsd6vtW4fxTPDMyNcLdC",
      "https://www.linkedin.com/in/joydeep-banerji-327581121/",
      "https://api.whatsapp.com/send?phone=919836739644&text=Hi Joydeep, I came across your work—would love to connect."
    ],
    "jobTitle": "Music Composer, Producer & Sound Designer",
    "knowsAbout": ["Music Composition", "Music Production", "Sound Design", "Film Scoring", "Audio Engineering"]
  },
  "mainEntity": {
    "@type": "Person",
    "name": "Joydeep Banerji",
    "url": "https://joydeepbanerji.com",
    "image": "https://joydeepbanerji.com/og-image.jpg",
    "description": "Joydeep Banerji is a music composer, producer, and sound designer creating original music, soundtracks, and audio experiences.",
    "worksFor": {
      "@type": "Organization",
      "name": "Independent Musician"
    }, 
    "sameAs": [
      "https://www.instagram.com/_tripolar/", 
      "https://open.spotify.com/artist/4kIsd6vtW4fxTPDMyNcLdC",
      "https://www.linkedin.com/in/joydeep-banerji-327581121/",
      "https://api.whatsapp.com/send?phone=919836739644&text=Hi Joydeep, I came across your work—would love to connect."
    ]
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/assets/banner/desktop.webp" type="image/webp" />
        <link rel="preload" as="image" href="/assets/banner/mobile.webp" type="image/webp" media="(max-width: 768px)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body
        className={`${staatlichesSans.variable} ${satoshi.variable} antialiased`}
      >
        <SpeedInsights />
        <Header />
        <main className="flex flex-col min-h-screen gap-3 lg:gap-6 px-3 md:px-6 pb-4 md:pb-6 bg-white relative z-[1] pt-20 md:pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
