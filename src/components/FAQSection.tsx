import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Organize 2.0?",
    answer: "Organize 2.0 is our latest product with a modern and intuitive way to optimize, value, and manage your equity and corporate structure for everyone on your team.",
  },
  {
    question: "What are the main features of Organize 2.0?",
    answer: "Key features include corporate structure management, equity workflows, template automation, scenario modelling, and the ability to collaborate with your law firms.",
  },
  {
    question: "Who is Organize 2.0 built for?",
    answer: "Organize is designed from the ground up for the most dedicated, resourceful and resilient African startup teams at various stages of growth.",
  },
  {
    question: "What if my startup has entities in several African countries and Delaware?",
    answer: "Organize supports multi-entity management across different jurisdictions, making it easy to manage your corporate structure regardless of where your entities are located.",
  },
  {
    question: "How secure is the platform for managing sensitive equity and legal data?",
    answer: "We employ enterprise-grade security measures to protect your sensitive data, including encryption at rest and in transit, regular security audits, and compliance with industry standards.",
  },
  {
    question: "How do I get my existing data into Organize 2.0?",
    answer: "Our team will help you migrate your existing data into Organize. We support imports from various formats and can work with your existing documentation.",
  },
  {
    question: "Can Organize 2.0 support alternative financing options like SAFE notes or venture debt?",
    answer: "Yes, Organize supports various financing instruments including SAFE notes, convertible notes, venture debt, and traditional equity rounds.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 relative light bg-[hsl(0,0%,98%)]">
      <div className="container">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[hsl(225,30%,10%)] mb-4">
            Ready to learn more?
          </h2>
          <p className="text-lg text-[hsl(220,10%,45%)]">
            Here's what most founders want to know.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-[hsl(220,15%,90%)] rounded-xl px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-[hsl(225,30%,10%)] hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(220,10%,45%)] pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
