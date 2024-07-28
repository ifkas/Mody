import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import SettingsForm from "@/components/SettingsForm";

export default async function SettingsPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="p-6">
          <h1 className="text-xl font-bold mb-6">Your settings</h1>
          <SettingsForm user={user} />
        </div>
      </div>
    </div>
  );
}
