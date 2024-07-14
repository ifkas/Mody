"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export default function SettingsForm({ user }) {
  const [name, setName] = useState(user.user_metadata.name || "");
  const [email, setEmail] = useState(user.user_metadata.email || "");
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      data: { email: email, name: name },
    });

    if (error) {
      alert("Error updating user information");
    } else {
      alert("User information updated successfully");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-4">
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <Input label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <Button type="submit" color="primary" isLoading={loading}>
        {loading ? "Updating..." : "Update Settings"}
      </Button>
    </form>
  );
}
