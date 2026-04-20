'use client';

import { useMemo, useState } from 'react';

export type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQSection({
  heading,
  description,
  faqs,
}: {
  heading: string;
  description?: string;
  faqs: FAQItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const schema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }),
    [faqs],
  );

  return (
    <section className="guide-faq">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <h2>{heading}</h2>
      {description ? <p className="guide-faq-description">{description}</p> : null}
      <div className="guide-faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <article key={faq.question} className="guide-faq-item">
              <button
                type="button"
                className="guide-faq-question"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{faq.question}</span>
                <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen ? <p className="guide-faq-answer">{faq.answer}</p> : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
