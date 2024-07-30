import "./globals.css";
import Header from "@/components/Header";
import HeaderTwo from "@/components/HeaderTwo";
import Footer from "@/components/Footer";
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
  } = (await supabase.auth.getUser()) || { data: { user: null } as { user: any } };

  return (
    <html lang="en" className="bg-gray-100 text-foreground">
      <body className="h-full">
        <main className="min-h-full">
          {user ? <HeaderTwo /> : <Header />}
          <div className={`${user ? "-mt-24" : ""} pb-8`}>
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">{children}</div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
