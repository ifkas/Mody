"use client";

// Components
import { Button } from "@nextui-org/button";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Footer from "@/components/Footer";

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
        "Nope!  Creating your modal with Mody is a breeze. Just choose from the available options to customize your text and colors, make it exit-intent or not. Plus, we're constantly adding new features with every update, making it even easier to create stunning modals.",
    },
    {
      question: "What can I customize?",
      answer: `Our platform offers extensive customization options for your modals. You can personalize:\n
        • Appearance: Choose custom background colors, button colors, and text colors to match your brand.
        • Content: Craft your own titles, body text, and button labels.
        • Behavior: Set modals to appear on exit intent or after a specified time.
        • Interaction: Configure action buttons with custom links or closing behavior.
        • Confirmation: Choose whether to show confirmation buttons or a simple close option.\n
        All these options are easily adjustable through our user-friendly interface, allowing you to create modals that perfectly align with your website's design and goals.`,
    },
  ];
  return (
    <>
      <header className="bg-gray-100 min-h-screen flex flex-col mb-12">
        <nav className="flex justify-between items-center p-6 w-5/6 mx-auto">
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
      <section>
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-4xl font-bold mb-6">How it works?</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Create engaging modals for your website in just three simple steps. Our user-friendly platform makes it easy to design,
              customize, and implement exit-intent modals that convert visitors into customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="bg-white p-12 shadow-md">
              {/* <div className="w-12 h-12 text-2xl font-bold rounded-xl bg-indigo-100 mb-4 justify-center items-center flex ">1</div> */}
              <div className="w-12 h-12 text-2xl font-bold rounded-xl bg-indigo-100 mb-4 justify-center items-center flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold mb-2">Create your modal</h3>
              <p className="text-gray-600 mb-4">
                Design your perfect modal using our intuitive interface. Customize colors, text, and behavior to match your brand and goals.
                Choose from various options including exit-intent triggers and confirmation buttons.
              </p>
              <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-800">
                Start designing →
              </a>
            </div>

            <div className="bg-white p-12 shadow-md">
              <div className="w-12 h-12 text-2xl font-bold rounded-xl bg-indigo-100 mb-4 justify-center items-center flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Preview and publish</h3>
              <p className="text-gray-600 mb-4">
                See your modal in action with our live preview feature. Make any necessary adjustments, then publish your modal with a
                single click. Our system generates a unique script for your modal automatically.
              </p>
              <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-800">
                Learn about publishing →
              </a>
            </div>

            <div className="bg-white p-12 shadow-md">
              <div className="w-12 h-12 text-2xl font-bold rounded-xl bg-indigo-100 mb-4 justify-center items-center flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Add to your website</h3>
              <p className="text-gray-600 mb-4">
                Simply copy the generated script and paste it into your website's HTML. Your modal will now appear based on your chosen
                settings, helping to engage visitors and boost conversions with no additional coding required.
              </p>
              <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-800">
                Integration guide →
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col mx-auto justify-center items-center my-20">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <section className="w-3/6 py-12 px-4 sm:px-6 lg:px-8">
          <Accordion variant="splitted">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} aria-label={faq.question} title={faq.question} className="bg-white border rounded-lg px-4 py-2">
                <p className="whitespace-pre-line">{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </section>
      <Footer />
      <script src="https://mody-orcin.vercel.app/api/modal/45?token=d98428c4-60d5-401d-94d5-7dec3a66b720"></script>
    </>
  );
}
