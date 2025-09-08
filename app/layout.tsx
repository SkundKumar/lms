import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import ConditionalNavbar from "@/components/ConditionalNavbar";
import DotGrid from "@/components/DotGrid";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Converso",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased`}>
        <div className="relative min-h-screen" >
      <div className="absolute inset-0 -z-10 ">
  <DotGrid
    dotSize={3}
    gap={18}
    baseColor="#FFFFFF"
    activeColor="#00000"
    proximity={160}
    shockRadius={200}
    shockStrength={5}
    resistance={850}
    returnDuration={1.5}
  />
</div>
        <ConditionalNavbar />
        {children}
        </div>
      </body>
    </html>
  );
}
