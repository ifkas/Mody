"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/utils/supabase/client";

// Components
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Snippet } from "@nextui-org/snippet";
import { Button } from "@nextui-org/button";
import Toast from "@/components/UI/toast/toast";

export default function UserModals({ refreshTrigger }: { refreshTrigger: number }) {
  const [modals, setModals] = useState<{ id: any; title: string; body: string; access_token: string }[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const fetchModals = useCallback(async () => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      const { data, error } = await supabase.from("modals").select("id, title, body, access_token").eq("user_id", user.id);
      if (data) setModals(data);
    }
  }, []);

  useEffect(() => {
    fetchModals();
  }, [fetchModals, refreshTrigger]);

  const handleDelete = async (id: string) => {
    const supabase = createClient();
    const { error } = await supabase.from("modals").delete().eq("id", id);
    if (!error) {
      fetchModals();
      setToastMessage("Modal has been deleted successfully.");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } else {
      console.error("Error deleting modal:", error);
      setToastMessage("Error deleting modal. Please try again.");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <div>
      {showToast && (
        // <Toast message={toastMessage} type={toastMessage.includes("Error") ? "error" : "success"} onClose={() => setShowToast(false)} />
        <Toast message={toastMessage} type="error" onClose={() => setShowToast(false)} />
      )}
      <div className="grid grid-cols-3 gap-4">
        {modals.map((modal) => (
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
              <div className="flex flex-col gap-2">
                <div className="flex-wrap ">
                  <Snippet hideSymbol>
                    <pre className="text-sm whitespace-pre-wrap break-all">
                      {`<script src="${process.env.NEXT_PUBLIC_SITE_URL}/api/modal/${modal.id}?token=${modal.access_token}"></script>`}
                    </pre>
                  </Snippet>
                </div>
                <div className="flex justify-between mt-2">
                  {/* <Button color="primary" onClick={() => onEdit(modal)}>
                    Edit
                  </Button> */}
                  <Button color="danger" onClick={() => handleDelete(modal.id)}>
                    Delete
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
