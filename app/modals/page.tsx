import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import ModalEditor from "./components/ModalEditor";

export default async function Page() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: modals } = await supabase.from("modals").select();

  return (
    <>
      {/* <HeaderTwo /> */}
      <div className="-mt-24 pb-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="sr-only">Page title</h1>
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
            <ModalEditor />

            {/* Right column */}
            {/* <div className="grid grid-cols-1 gap-4 lg:col-span-2">
              <section aria-labelledby="section-1-title">
                <h2 className="sr-only" id="section-1-title">
                  Section title
                </h2>
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mt-10 mb-6">Your modals</h3>
                    <UserModals />
                  </div>
                </div>
              </section>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
