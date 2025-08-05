import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: 'How often should I visit the dentist?',
    answer:
      'We recommend visiting every 6 months for a routine check‑up and cleaning, unless advised otherwise by your dentist.',
  },
  {
    question: 'Do you accept dental insurance?',
    answer:
      'Yes—we accept most major dental insurance plans. Please contact us if you have any questions about your specific provider.',
  },
  {
    question: 'At what age should my child see a dentist?',
    answer:
      'The American Academy of Pediatric Dentistry recommends a first visit by their first birthday or within six months of the first tooth coming in.',
  },
  {
    question: 'How do I schedule an appointment?',
    answer:
      'You can book online via our website, call our office directly, or email us at appointments@yourclinic.com.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section">
      <div className="faq-section-container">
        {/* LEFT */}
        <div className="faq-section-left">
          <p className="faq-section-label">FAQs</p>
          <h1 className="faq-section-title">
            You Asked,<br /> We<span className="faq-span"> Answered!</span>
          </h1>
          <p className="faq-section-subtitle">
            Explore our most asked questions to feel fully informed in your dental journey.
          </p>
        </div>

        {/* RIGHT */}
        <div className="faq-section-right">
          <ul className="faq-section-list">
            {faqData.map((item, idx) => (
              <li
                key={idx}
                className={
                  openIndex === idx
                    ? 'faq-section-item open'
                    : 'faq-section-item'
                }
              >
                <button
                  className="faq-section-question"
                  aria-expanded={openIndex === idx}
                  onClick={() => toggle(idx)}
                >
                  <span>{item.question}</span>
                  <span className="faq-section-icon">
                    {openIndex === idx ? '−' : '+'}
                  </span>
                </button>
                <div className="faq-section-answer">
                  {item.answer}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
