import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/global/Header";
import SidebarsContainer from "@/components/global/SidebarsContainer";

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
      <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
        {/* Fixed Header */}
        <Header />

        {/* Sidebars (Di Stelle + Di Sogni) */}
        <SidebarsContainer />

        {/* Main Content Area */}
        <main
          style={{
            marginLeft: 'var(--sidebar-width)',
            marginRight: 'var(--sidebar-width)',
            marginTop: 'var(--header-height)',
            height: 'calc(100vh - var(--header-height))',
            overflow: 'clip',
            background: 'var(--cream)',
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
