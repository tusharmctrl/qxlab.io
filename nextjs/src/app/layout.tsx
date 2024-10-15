import "@/styles/globals.css";
import "@/styles/loader.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import UrqlProvider from "@/urql/provider";
import { Suspense } from "react";
import PageLoader from "@/components/comman/PageLoader";
import { HeaderFooter } from "@/components/comman/HeaderFooter";

const description =
  "Revolutionize your digital experience with QXLab.io's AI-powered insights. Instantly measure and improve your website’s performance with over 300 industry-specific data points, and explore how our expert consultancy services can transform your business.";

export const metadata: Metadata = {
  title: "QxLab.io",
  description: description,
  icons: [{ rel: "icon", url: "/favicon.ico" }]
};

export type LayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <UrqlProvider>
            <Suspense fallback={<PageLoader />}>
              <HeaderFooter>{children}</HeaderFooter>
            </Suspense>
          </UrqlProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
