import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Emerald Electricals offers trusted electrical services for residential and commercial properties in Hyderabad. Contact us for inspections, installations, and repairs."
      />
      <meta
        name="keywords"
        content="Electrical services Hyderabad, residential electrical, commercial electrical, wiring, electrical inspection, Emerald Electricals"
      />
      <meta name="author" content="Emerald Electricals" />
      <link rel="icon" href="/images/logo.jpg" type="image/jpg"/>
      <title>
        Residential Electrician in Hyderabad&quot; or &quot;Commercial
        Electrical Services Hyderabad
      </title>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
