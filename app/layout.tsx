import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Puran Accounting & Tax Solution Lab NEXUS Platform | Launching Soon",
  description:
    "Puran Accounting & Tax Solution Lab NEXUS Platform is under construction. We will be back soon with a polished premium dashboard experience.",
  openGraph: {
    title: "Puran Accounting & Tax Solution Lab NEXUS Platform | Launching Soon",
    description:
      "Puran Accounting & Tax Solution Lab NEXUS Platform is under construction. We will be back soon with a polished premium dashboard experience.",
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
