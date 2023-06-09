import "./globals.css"

import { Metadata } from "next"
import { Inter } from "next/font/google"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
// import localFont from 'next/font/local';
import { Toaster } from "@/components/ui/toaster"
import { TailwindIndicator } from "@/components/tailwind-indicator"

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" })

// const fontHeading = localFont({
//   src: '../assets/fonts/CalSans-SemiBold.woff2',
//   variable: '--font-heading',
// });

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Client management",
    "Project management",
    "Team collaboration",
    "Billing automation",
    "Workflow automation",
    "Business efficiency",
    "Project tracking",
    "Client communication",
    "Task management",
    "Time tracking",
    "Invoicing",
    "CRM",
    "Team productivity",
    "Business growth",
    "Streamline operations",
  ],
  authors: [
    {
      name: "Cliently Team",
      url: "https://cliently.xyz",
    },
  ],
  creator: "sattwyk",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [`${siteConfig.url}/og.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@sattwyk",
  },
  icons: {
    icon: `${siteConfig.url}/favicon.ico`,
    shortcut: [
      `${siteConfig.url}/favicon-16x16.png`,
      `${siteConfig.url}/favicon-32x32.png`,
    ],
    apple: `${siteConfig.url}/apple-touch-icon.png`,
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
} satisfies Metadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
          // fontHeading.variable
        )}
      >
        {/* <ThemeProvider attribute='class' defaultTheme='system' enableSystem> */}
        {children}
        {/* <Analytics /> */}
        <Toaster />
        <TailwindIndicator />
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
