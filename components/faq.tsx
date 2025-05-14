"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What file formats do you deliver?",
    answer:
      "I typically deliver digital art in high-resolution PNG and JPEG formats. For projects requiring layered files, I also provide PSD or similar editable formats upon request.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "My standard process includes two rounds of revisions after the initial concept is approved. Additional revisions can be arranged if needed.",
  },
  {
    question: "What is your typical turnaround time?",
    answer:
      "Turnaround time varies depending on project complexity. Simple illustrations may take 3-5 days, while more detailed pieces can take 1-2 weeks. I'll provide a specific timeline when discussing your project.",
  },
  {
    question: "Do you offer commercial usage rights?",
    answer:
      "Yes, I offer various licensing options depending on your needs. We'll discuss usage rights during the project briefing to ensure you receive the appropriate license for your intended use.",
  },
  {
    question: "What information do you need to get started?",
    answer:
      "To begin, I need a clear description of what you're looking for, including subject matter, style preferences, intended use, and any reference images that might help communicate your vision. The more detailed information you provide, the better I can bring your idea to life.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              COMMON <span className="text-gray-400">QUESTIONS</span>
            </h2>
            <p className="mt-4 text-gray-400">Answers to frequently asked questions about my digital art services</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-white/10 bg-white/5 overflow-hidden backdrop-blur-sm"
              >
                <button
                  className="flex w-full items-center justify-between p-6 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-medium">{faq.question}</h3>
                  <ChevronDown className={`h-5 w-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
