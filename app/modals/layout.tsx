import { createClient } from "@/utils/supabase/server";

// Components
import HeaderTwo from "@/components/HeaderTwo";
import Footer from "@/components/Footer";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <HeaderTwo />
      <div className="-mt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">{children}</div>
      </div>
      <Footer />
    </>
  );
}
