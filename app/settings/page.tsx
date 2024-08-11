import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import SettingsForm from "@/components/SettingsForm";
import { User as SupabaseUser } from "@supabase/auth-js";

interface ExtendedUser extends SupabaseUser {
  user_metadata: {
    name: string;
    email: string;
  };
}

export default async function SettingsPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Ensure user_metadata includes name and email
  const extendedUser: ExtendedUser = {
    ...user,
    user_metadata: {
      name: user.user_metadata.name || "",
      email: user.user_metadata.email || "",
    },
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="p-6">
          <h1 className="text-xl font-bold mb-6">Your settings</h1>
          <SettingsForm user={extendedUser} />
        </div>
      </div>
    </div>
  );
}
