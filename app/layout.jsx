import "../src/index.css";

export const metadata = {
  title: "Mohammed Mahjari – Full-Stack Engineer & Co-Founder",
  description:
    "Co-founded Sehrah reaching 12,000+ employers. Shipped at KACST and Ebra.ai. Top 200 of 3,000+ KAUST Cybersecurity. Ranked #1 graduation project.",
  keywords:
    "Mohammed Mahjari, محمد مهجري, Full-Stack Engineer, Co-Founder, React, Next.js, Laravel, Flask, Saudi Arabia, Portfolio, Sehrah, KACST",
  authors: [{ name: "Mohammed Mahjari" }],
  robots: "index, follow",
  openGraph: {
    title: "Mohammed Mahjari – Full-Stack Engineer & Co-Founder",
    description:
      "Co-founded Sehrah (12,000+ employers). Shipped at KACST & Ebra.ai. Top 200/3,000+ KAUST Cybersecurity. #1 graduation project.",
    url: "https://m7md.co",
    type: "profile",
    locale: "en_US",
    images: [{ url: "https://m7md.co/Image/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Mahjari – Full-Stack Engineer",
    description:
      "Co-founded Sehrah. Shipped at KACST & Ebra.ai. Top 200/3,000+ KAUST Cybersecurity.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
