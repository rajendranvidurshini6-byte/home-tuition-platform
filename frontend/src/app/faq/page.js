"use client";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "How do I know if a teacher is verified?",
    a: "Every teacher on our platform goes through a strict verification process. We check their NIC, educational certificates, and conduct an interview. You can see a 'Verified' badge on their profile."
  },
  {
    q: "What happens if my child misses a live class?",
    a: "Don't worry! Every live class is recorded. If your child misses a class, the recorded video will be available in the LMS dashboard. We also send an instant WhatsApp alert to parents if a student is absent."
  },
  {
    q: "How does the payment system work?",
    a: "You can pay securely via PayHere using cards or eZ Cash. Once the payment is successful, the Zoom link and LMS access will be unlocked instantly for that month."
  },
  {
    q: "Is there a refund policy?",
    a: "Yes. We offer a money-back guarantee. If you are not satisfied after the first class, you can request a 100% refund."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-[var(--background-soft)] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[var(--navy-deep)] mb-4">Frequently Asked Questions</h1>
          <p className="text-[var(--text-light)]">Everything you need to know about our platform.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 font-bold text-[var(--navy-deep)] flex justify-between items-center hover:bg-gray-50 transition"
              >
                {faq.q}
                <span className="text-[var(--teal-primary)] text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-[var(--text-light)] text-sm leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/" className="btn-teal">Back to Home</Link>
        </div>

      </div>
    </div>
  );
}