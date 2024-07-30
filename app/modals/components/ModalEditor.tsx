"use client";
import { useState } from "react";

// Helpers
import { getDarkerShade, isLightColor } from "@/utils/helpers/colorHelpers";

// Components
import ModalForm from "./ModalForm";
import UserModals from "./UserModals";

export default function ModalEditor() {
  const [title, setTitle] = useState("Deactivate account");
  const [body, setBody] = useState(
    "Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone."
  );
  const [buttonText, setButtonText] = useState("Deactivate");
  const [buttonLink, setButtonLink] = useState("");
  const [submitColor, setSubmitColor] = useState("#000000");
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [isExitIntent, setIsExitIntent] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleModalSubmit = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <>
      {/* Left column */}
      <div className="grid grid-cols-1 gap-4">
        <section aria-labelledby="section-2-title">
          <h2 className="sr-only" id="section-2-title">
            Section title
          </h2>
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-10">Tune your modal</h3>
              <ModalForm
                title={title}
                setTitle={setTitle}
                body={body}
                setBody={setBody}
                showConfirmation={showConfirmation}
                setShowConfirmation={setShowConfirmation}
                isExitIntent={isExitIntent}
                setIsExitIntent={setIsExitIntent}
                buttonText={buttonText}
                setButtonText={setButtonText}
                buttonLink={buttonLink}
                setButtonLink={setButtonLink}
                submitColor={submitColor}
                setSubmitColor={setSubmitColor}
                onSubmitSuccess={handleModalSubmit}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Preview */}
      <div className="grid grid-cols-1 gap-4 lg:col-span-2">
        <section aria-labelledby="preview-title">
          <h2 className="sr-only" id="preview-title">
            Preview
          </h2>
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Preview of the modal</h3>
              <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                      {title}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{body}</p>
                    </div>
                  </div>
                </div>
                {showConfirmation && (
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      style={{
                        backgroundColor: submitColor,
                        color: isLightColor(submitColor) ? "#000000" : "#ffffff",
                      }}
                      className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm hover:opacity-80 sm:ml-3 sm:w-auto"
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = getDarkerShade(submitColor))}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = submitColor)}
                    >
                      {buttonText}
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mt-10 mb-6">Your modals</h3>
              <UserModals refreshTrigger={refreshTrigger} />
              {/* Later will add here spinner and real time loading of the created modals */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
