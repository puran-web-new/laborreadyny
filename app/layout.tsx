import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Labor Ready NY Inc | Construction Staffing",
  description:
    "Labor Ready NY Inc provides reliable construction staffing, dispatch, payroll support, and workforce solutions across NYC and the tri-state area.",
  openGraph: {
    title: "Labor Ready NY Inc | Construction Staffing",
    description:
      "Labor Ready NY Inc provides reliable construction staffing, dispatch, payroll support, and workforce solutions across NYC and the tri-state area.",
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
