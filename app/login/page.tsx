import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";

export default function Login({ searchParams }: { searchParams: { message: string } }) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/modals");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login?message=Check email to continue sign in process");
  };

  return (
    <div className="flex items-center justify-center bg-red">
      <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"> */}
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>
        <form className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input className="rounded-md px-4 py-2 bg-inherit border mb-6" name="email" placeholder="you@example.com" required />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input className="rounded-md px-4 py-2 bg-inherit border mb-6" type="password" name="password" placeholder="••••••••" required />
          <SubmitButton
            formAction={signIn}
            className="bg-indigo-700 text-white rounded-md px-4 py-2 text-foreground mb-2"
            pendingText="Signing In..."
          >
            Sign In
          </SubmitButton>
          <SubmitButton
            formAction={signUp}
            className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
            pendingText="Signing Up..."
          >
            Sign Up
          </SubmitButton>
          {searchParams?.message && <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">{searchParams.message}</p>}
        </form>
      </div>
    </div>
  );
}
