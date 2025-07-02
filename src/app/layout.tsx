import type { Metadata } from "next";
import { Staatliches } from "next/font/google";
import localFont from 'next/font/local'
import Header from "@/componets/layout/header";
import Footer from "@/componets/layout/footer";
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
  title: "Joydeep Banerji | Music Composer, Producer & Animal Lover",
  description: "Hey there! I’m Joydeep Banerji—a musician, composer, producer, and full-time animal lover. Before all the notes and noise, I’m a human being who finds inspiration in life and my Labrador, Enzo. Explore my portfolio, music, and creative journey.",
  keywords: [
    "Joydeep Banerji",
    "Music Composer",
    "Music Producer",
    "Sonic Architect",
    "Animal Lover",
    "Dog Dad",
    "Portfolio",
    "Original Music",
    "Sound Design",
    "Enzo Labrador"
  ],
  openGraph: {
    title: "Joydeep Banerji | Music Composer, Producer & Animal Lover",
    description: "Discover the creative world of Joydeep Banerji—music composer, producer, sonic architect, and devoted animal lover. Explore original music, sound design, and more.",
    // url: "https://your-website-url.com",
    type: "website",
    // images: [
    //   {
    //     url: "https://your-website-url.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Joydeep Banerji Portfolio",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joydeep Banerji | Music Composer, Producer & Animal Lover",
    description: "Explore the music and creative journey of Joydeep Banerji—composer, producer, and animal lover.",
    // images: ["https://your-website-url.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${staatlichesSans.variable} ${satoshi.variable} antialiased`}
      >
        <Header />
        <main className="flex flex-col min-h-screen gap-6 px-3 md:px-6 pb-4 md:pb-6 bg-white relative z-[1] pt-20 md:pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
