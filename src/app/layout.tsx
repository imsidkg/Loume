import type { Metadata } from "next";
import localFont from "next/font/local";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider"

const manrope = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loume",
  description: "Record and share videos with anyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body className={`${manrope.className} bg-[#171717]`}> 
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          </body>
    </html>
    </ClerkProvider>
  );
}
