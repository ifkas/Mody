"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { HexColorPicker } from "react-colorful";

// Components
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";

export default function ModalForm({
  title,
  setTitle,
  body,
  setBody,
  buttonText,
  setButtonText,
  submitColor,
  setSubmitColor,
}: {
  title: string;
  setTitle: (title: string) => void;
  body: string;
  setBody: (body: string) => void;
  buttonText: string;
  setButtonText: (buttonText: string) => void;
  submitColor: string;
  setSubmitColor: (color: string) => void;
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "", backdrop: "", scriptTag: "" });

  const clearForm = () => {
    setTitle("");
    setBody("");
    setButtonText("");
    setSubmitColor("#000000");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/login");
      return;
    }

    const { count, error: countError } = await supabase.from("modals").select("id", { count: "exact" }).eq("user_id", user.id);

    if (count !== null && count >= 3) {
      setModalContent({
        title: "Limit Reached",
        backdrop: "opaque",
        body: "You've reached the maximum limit of 3 modals.",
        scriptTag: "",
      });
      setIsOpen(true);
      return;
    }

    const { data: accessTokenData, error: accessTokenError } = await supabase.rpc("generate_uuid");

    if (accessTokenError) {
      setModalContent({
        title: "Error",
        backdrop: "opaque",
        body: "Error generating access token",
        scriptTag: "",
      });
      setIsOpen(true);
      return;
    }

    const accessToken = accessTokenData;

    const { data, error } = await supabase
      .from("modals")
      .insert({ title, body, button: buttonText, user_id: user.id, access_token: accessToken, button_color: submitColor })
      .select()
      .single();

    if (error) {
      setModalContent({
        title: "Error",
        backdrop: "opaque",
        body: "Error submitting modal",
        scriptTag: "",
      });
    } else {
      const modalId = data.id;
      const scriptTag = `<script src="${process.env.NEXT_PUBLIC_SITE_URL}/api/modal/${modalId}?token=${accessToken}"></script>`;
      setModalContent({
        title: "Success",
        backdrop: "blur",
        body: "Modal submitted successfully.",
        scriptTag: scriptTag,
      });
      clearForm();
    }
    setIsOpen(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <Input isRequired type="text" variant="faded" size="sm" label="Title" value={title} onValueChange={setTitle} />
        </div>
        <div className="my-4">
          <label htmlFor="body">Body</label>
          <Textarea
            variant="faded"
            size="lg"
            label="Description"
            placeholder="Enter your description"
            className="w-full"
            value={body}
            onValueChange={setBody}
          />
        </div>
        <div>
          <label htmlFor="buttonText">Button Text</label>
          <Input isRequired type="text" variant="faded" size="sm" label="button text" value={buttonText} onValueChange={setButtonText} />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-6">Styling</h3>
        <div>
          <label htmlFor="submitColor" className="block text-sm font-medium text-gray-700 mb-2">
            Submit Button Color
          </label>
          <HexColorPicker color={submitColor} onChange={setSubmitColor} />
          <Input type="text" value={submitColor} onChange={(e) => setSubmitColor(e.target.value)} className="mt-2" />
        </div>
        <Button type="submit" color="secondary" className="mt-6">
          Submit Modal
        </Button>
      </form>

      <Modal
        backdrop={modalContent.backdrop as "opaque" | "blur" | "transparent" | undefined}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <ModalContent>
          <ModalHeader>{modalContent.title}</ModalHeader>
          <ModalBody>
            <p>{modalContent.body}</p>
            {modalContent.scriptTag && (
              <div>
                <p>Here's your script tag:</p>
                <code>{modalContent.scriptTag}</code>
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onPress={() => setIsOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
