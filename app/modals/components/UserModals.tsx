"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

// Components
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "next/image";
import Link from "next/link";
import { Code } from "@nextui-org/code";

export default function UserModals() {
  const [modals, setModals] = useState<{ id: any; title: string; body: string; access_token: string }[]>([]);

  useEffect(() => {
    async function fetchModals() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase.from("modals").select("id, title,body,access_token").eq("user_id", user.id);
        if (data) setModals(data);
      }
    }
    fetchModals();
    // }, [modals]);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {modals.map((modal) => (
          // <div key={modal.id}>
          //   <h3>{modal.title}</h3>
          //   <Code color="secondary" size="sm" className="whitespace-pre-wrap">
          //     {" "}
          //     {`<script src="${process.env.NEXT_PUBLIC_SITE_URL}/api/modal/${modal.id}?token=${modal.access_token}"></script>`}
          //   </Code>
          // </div>
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              {/* <Image alt="nextui logo" height={40} radius="sm" src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4" width={40} /> */}
              <div className="flex flex-col">
                <p className="text-md">{modal.title}</p>
                <p className="text-small text-default-500">nextui.org</p>
              </div>
            </CardHeader>
            <hr />
            <CardBody>
              <p>{modal.body}</p>
            </CardBody>
            <hr />
            <CardFooter>
              {/* <Link isExternal showAnchorIcon href="https://github.com/nextui-org/nextui">
              Visit source code on GitHub.
            </Link> */}
              <Code color="primary" size="sm" className="whitespace-pre-wrap">
                {" "}
                {`<script src="${process.env.NEXT_PUBLIC_SITE_URL}/api/modal/${modal.id}?token=${modal.access_token}"></script>`}S{" "}
              </Code>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
