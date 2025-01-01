import type { Metadata } from "next";

import { DM_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ReactQueryProvider from "@/lib/ReactQueryProvider";
import { ReduxProvider } from "@/redux/provider";

const manrope = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loume",
  description: "Share AI powered videos with your friends.",
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
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <ReduxProvider>
              
            <ReactQueryProvider>
              {children}
              <Toaster />
            </ReactQueryProvider>
            </ReduxProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
