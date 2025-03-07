import getCompany from "@/api/getCompany";
import Footer from "@/components/PageElements/Footer";
import Navbar from "@/components/PageElements/Navbar";
import config from "@/config/env_config";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fcs: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fluidChatSettings: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fluidSettings: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Spreedly: any;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    showCartCount: Function;
  }
}

type PageProps = Readonly<{
  children: React.ReactNode;
  params: Record<string, string>;
}>;

export default async function RootLayout(props: PageProps) {
  const params = await props.params;

  const { children } = props;

  const { affiliateSlug } = params;
  const company = await getCompany();

  return (
    <html lang="en">
      <head>
        <Script id="fluid-widget-boot" strategy="beforeInteractive">
          {`
          window.fcs = {api_url_host: '${config.apiHost}', affiliate: { credit: '${affiliateSlug}' }};
          (function(){ var f_ws = document.createElement('script'); f_ws.async = true; f_ws.src = '${config.widgetHost}'; x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(f_ws,x); })();
        `}
        </Script>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link
          rel="icon"
          href={company.logo_url || "https://cdn.fluid.app/favicon-16x16.png"}
        />
      </head>
      <body className={`${inter.className} h-screen`}>
        <Navbar params={params} company={company} />
        {children}
        <Footer params={params} company={company} />
      </body>
    </html>
  );
}

export async function generateMetadata({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params,
}: PageProps): Promise<Metadata> {
  const company = await getCompany();
  const headersList = await headers();

  const name = company?.name || "company.name";
  return {
    title: name,
    openGraph: {
      title: name,
      url: `${headersList.get("x-url")}`,
      images: [
        {
          url: company.logo_url
            ? company.logo_url
            : "https://placehold.co/800x600",
          width: 800,
          height: 600,
          alt: `${name} logo`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      images: [
        {
          url: "https://placehold.co/800x600",
          width: 800,
          height: 600,
          alt: `${name} logo`,
        },
      ],
    },
  };
}
