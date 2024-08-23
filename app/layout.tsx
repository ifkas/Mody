import "./globals.css";
import { createClient } from "@/utils/supabase/server";

const defaultUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Mody - Modals for everyone and every app or website",
  description: "The fastest way to build optimized modals for your app or website",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en" className="bg-gray-100">
      <body className="h-full">
        <main className="min-h-full">{children}</main>
      </body>
    </html>
  );
}
