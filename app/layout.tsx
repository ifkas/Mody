import "./globals.css";
import HeaderTwo from "@/components/HeaderTwo";

const defaultUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Mody - Modals for everyone and every app or website",
  description: "The fastest way to build optimized modals for your app or website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-gray-100 text-foreground">
      <body className="h-full">
        <main className="min-h-full">
          {" "}
          <HeaderTwo />
          {children}
        </main>
      </body>
    </html>
  );
}
