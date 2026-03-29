import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/global/Header";
import SidebarsContainer from "@/components/global/SidebarsContainer";
import ScrollToTop from "@/components/global/ScrollToTop";

export const metadata: Metadata = {
  title: "Sentieri - Farm & Cultural Hub",
  description: "Situated among the vineyards, olive groves, and rolling hills of Loreto Aprutino, Abruzzo, Sentieri is where regenerative agriculture, art, ecology, and community come together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-auto lg:overflow-hidden" style={{ margin: 0, padding: 0 }}>
        <ScrollToTop />
        {/* Fixed Header */}
        <Header />

        {/* Sidebars (Di Stelle + Di Sogni) */}
        <SidebarsContainer />

        {/* Main Content Area */}
        <main
          className="overflow-y-auto lg:overflow-clip"
          style={{
            marginLeft: 'var(--sidebar-width)',
            marginRight: 'var(--sidebar-width)',
            marginTop: 'var(--header-total-height)',
            height: 'calc(100vh - var(--header-total-height))',
            background: 'var(--cream)',
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
