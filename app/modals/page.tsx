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

  return (
    <>
      <h1 className="sr-only">Build your modal</h1>
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
        <ModalEditor />
      </div>
    </>
  );
}
