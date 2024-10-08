import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>QuotesDB</title>
        <meta
          name="description"
          content="QuotesDB - A powerful backend API that gives users access to a large database of quotes from different authors and topics."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="f85BEYfO6CYzN9fsSxGbv3MGlc6n5xugvRR6gUB9zls"
        />
        <meta
          name="keywords"
          content="quotes, api, backend, database, random, quote, author, author, topic, quotesdb , free api , free quotes api,rest api , fake api"
        />
        <meta name="author" content="Sachin Kumar" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
