import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://avadigitalmarketing.example.com"),
  title: "AVA | Digital Marketing Agency in Alappuzha & Kerala | High-Growth Strategies",
  description:
    "AVA is a premier digital marketing agency based in Alappuzha, Kerala: SEO, Google & Meta ads, social media, and high-converting websites. You own your ad accounts. Free growth plan.",
  keywords: [
    "AVA Digital Marketing",
    "Digital Marketing Agency in Alappuzha",
    "Digital Marketing Company Alappuzha",
    "SEO Agency Alappuzha",
    "Digital Marketing Agency in Kerala",
    "Digital Marketing Company Kerala",
    "SEO Agency Kerala",
    "Performance Marketing Kerala",
    "Social Media Marketing Kerala",
    "Google Ads Kerala",
    "Digital Marketing Agency Kochi",
  ],
  authors: [{ name: "AVA Digital Marketing" }],
  creator: "AVA Digital Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avadigitalmarketing.example.com",
    title: "AVA | Digital Marketing Agency in Alappuzha & Kerala",
    description:
      "AVA is an Alappuzha-based digital marketing agency in Kerala focusing on calls, leads, and sales. Get a free growth plan from our team.",
    siteName: "AVA Digital Marketing",
    images: [
      {
        url: "/images/growth-dashboard.jpg",
        width: 1254,
        height: 1254,
        alt: "AVA Digital Marketing Performance Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AVA | Digital Marketing Agency in Alappuzha & Kerala",
    description:
      "AVA is an Alappuzha-based digital marketing agency in Kerala focusing on calls, leads, and sales. Get a free growth plan from our team.",
    images: ["/images/growth-dashboard.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased overflow-x-hidden selection:bg-lime-300 selection:text-slate-950 flex flex-col">
        {children}
      </body>
    </html>
  );
}
