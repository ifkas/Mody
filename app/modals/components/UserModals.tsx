"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

// Components
import { Code } from "@nextui-org/code";

export default function UserModals() {
  const [modals, setModals] = useState<{ id: any; title: any; access_token: any }[]>([]);

  useEffect(() => {
    async function fetchModals() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase.from("modals").select("id, title,access_token").eq("user_id", user.id);
        if (data) setModals(data);
      }
    }
    fetchModals();
  }, [modals]);

  return (
    <div>
      {modals.map((modal) => (
        <div key={modal.id}>
          <h3>{modal.title}</h3>
          <Code color="secondary" size="sm" className="whitespace-pre-wrap">
            {" "}
            {`<script src="${process.env.NEXT_PUBLIC_SITE_URL}/api/modal/${modal.id}?token=${modal.access_token}"></script>`}
          </Code>
        </div>
      ))}
    </div>
  );
}
