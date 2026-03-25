import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQ[];
  title?: string;
  description?: string;
  imageUrl?: string;
}

export default function FAQSection({
  faqs: customFaqs,
  title = "Looking for answers?",
  description = "Everything you need to know about our professional plumbing and heating services in Glasgow.",
  imageUrl = "/faq-upgrade.webp"
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const defaultFaqs: FAQ[] = [
    {
      question: "How quickly can you respond to emergency call-outs?",
      answer: "We offer 24/7 emergency plumbing and heating services across Glasgow. Our engineers aim to respond to emergency calls within 60-90 minutes, depending on your location and traffic conditions."
    },
    {
      question: "Are your engineers Gas Safe registered?",
      answer: "Yes, all our heating engineers are fully Gas Safe registered and hold relevant qualifications including City & Guilds and CIPHE certifications. We can provide copies of our Gas Safe certificates upon request."
    },
    {
      question: "Do you offer any guarantees on your work?",
      answer: "We provide a comprehensive 12-month workmanship guarantee on all installations and repairs. Additionally, all parts and equipment come with manufacturer warranties, and new boiler installations can include extended warranties of up to 10 years with certain brands."
    },
    {
      question: "How much does a new boiler installation cost?",
      answer: "Boiler installation costs vary depending on the type of boiler, property size, and complexity of the installation. Prices typically range from £1,800 to £3,500 including VAT. We offer free home surveys and written quotes with no obligation."
    },
    {
      question: "Do you provide landlord gas safety certificates?",
      answer: "Yes, we provide comprehensive landlord gas safety certificates (CP12) as required by law. We can also set up annual servicing contracts for landlords with multiple properties to ensure compliance and peace of mind."
    }
  ];

  const faqs = customFaqs || defaultFaqs;

  return (
    <section className="py-12 md:py-16 lg:py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 md:gap-12 px-4 md:px-8">
        <img
          className="max-w-sm w-full rounded-xl h-auto shadow-lg"
          src={imageUrl}
          alt="Upgrade services"
        />
        <div className="flex-1 w-full">
          <p className="text-primary text-sm font-medium">FAQ's</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mt-1">{title}</h2>
          <p className="text-sm md:text-base text-slate-600 mt-2 pb-4">
            {description}
          </p>

          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div
                className="border-b border-slate-200 py-4 cursor-pointer"
                key={index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm md:text-base font-medium text-slate-900 flex-1">
                    {faq.question}
                  </h3>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`flex-shrink-0 transition-all duration-500 ease-in-out ${openIndex === index ? "rotate-180" : ""}`}
                  >
                    <path
                      d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                      stroke="#1D293D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  className={`text-sm md:text-base text-slate-600 transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index
                      ? "opacity-100 max-h-[500px] translate-y-0 pt-4"
                      : "opacity-0 max-h-0 -translate-y-2"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
