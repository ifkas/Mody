"use client";

// Components
import { Button } from "@nextui-org/button";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default async function Index() {
  const faqs = [
    {
      question: "Is this service free?",
      answer: "Yes! For now is completely free to use.",
    },
    {
      question: "How many modals I can create?",
      answer: "You can create up to 3 modals and use them on any website you need.",
    },
    {
      question: "Do I need to code?",
      answer:
        "Nope! Creating your modal with Mody is a breeze. Just choose from the available options to customize your text and colors, make it exit-intent or not. Plus, we're constantly adding new features with every update, making it even easier to create stunning modals.",
    },
    {
      question: "What can I customize?",
      answer:
        "You can customize various aspects including appearance, timing, targeting, and content of the pop-ups to suit your specific needs and brand.",
    },
  ];
  return (
    <>
      <header className="bg-gray-100 min-h-screen flex flex-col mb-12">
        <nav className="flex justify-between items-center p-6">
          <div className="flex items-center">
            {/* <img src="/your-logo.svg" alt="Your Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">Mody</span> */}
            <a className="flex" href="#">
              <span className="sr-only">Mody</span>
              <span>
                <svg fill="#3d5afe" height="42" viewBox="0 0 32 32" width="52" xmlns="http://www.w3.org/2000/svg">
                  <g id="Layer_2" data-name="Layer 2">
                    <path d="m27 4h-22a3 3 0 0 0 -3 3v16a3 3 0 0 0 3 3h17.764l5.789 2.9a1 1 0 0 0 1.447-.9v-21a3 3 0 0 0 -3-3zm-11 16h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm7-4h-14a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0-4h-14a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z" />
                  </g>
                </svg>
              </span>
              <span className="text-black text-3xl font-bold ml-2">Mody</span>
            </a>
          </div>
          <div className="space-x-4">
            <Button size="sm" color="primary">
              <a href="/login">Get Started</a>
            </Button>
          </div>
        </nav>

        {/* <main className="flex-grow flex flex-col items-center justify-center text-center px-4"> */}
        <main className="flex-grow flex flex-col items-center justify-center text-center pt-4">
          <h1 className="text-5xl font-bold mb-6">
            Turn your visitors into customers
            <br />
            <span className="text-blue-600">with exit-intent call modals</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Engage your audience with dynamic modals that capture attention at key moments, boosting interaction and driving conversions.
          </p>
          <div className="space-y-2 mb-8">
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-green-500 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Quick and easy no-code integration.</span>
            </div>
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-green-500 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Design and customize your own modals.</span>
            </div>
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-green-500 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Display your modals seamlessly on your website.</span>
            </div>
          </div>
          <Button size="lg" color="primary">
            <a href="login">Get Your Modal</a>
          </Button>
        </main>

        <div className="flex justify-center pb-8">
          <div className="bg-white rounded-full shadow-lg py-4 px-6 flex items-center">
            {/* <img src="/placeholder/40/40" alt="User" className="h-10 w-10 rounded-full mr-3" /> */}
            <div className="text-center">
              <p className="font-semibold">☝️ Test drive! ☝️</p>
              <p className="text-base text-gray-500">Try navigate out of this page</p>
            </div>
          </div>
        </div>
      </header>
      <section className="w-full flex flex-col mx-auto justify-center items-center">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <section className="w-full py-12 px-4 sm:px-6 lg:px-8 b">
          <Accordion variant="splitted">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} aria-label={faq.question} title={faq.question} className="bg-white border rounded-lg px-4 py-2">
                {faq.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </section>
      <script src="https://mody-orcin.vercel.app/api/modal/45?token=d98428c4-60d5-401d-94d5-7dec3a66b720"></script>
    </>
  );
}
