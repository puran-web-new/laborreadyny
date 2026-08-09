import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Puran Accounting & Tax Solution Lab | Website Under Construction",
  description:
    "Puran Accounting & Tax Solution Lab is building the NEXUS Platform, a modern client experience for accounting, tax, and service information.",
  openGraph: {
    title: "Puran Accounting & Tax Solution Lab | Website Under Construction",
    description:
      "Puran Accounting & Tax Solution Lab is building the NEXUS Platform, a modern client experience for accounting, tax, and service information.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
