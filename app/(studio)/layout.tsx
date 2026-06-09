/**
 * Root layout for the Sanity Studio route group.
 *
 * The Studio renders full-screen and manages its own chrome, so this layout
 * deliberately omits the site header and side rails — it provides only the
 * minimal <html>/<body> wrapper Next.js requires for a root layout.
 */
export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
