import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import FAQAccordion from '../FAQAccordion/FAQAccordion';
import fetchFAQs from '../../../queries/FAQ';

import './FAQBlock.css';

const FAQBlock = () => {
  const [ faqItems, setFaqItems ] = useState([]);
  const [ idxOfOpenedAccordion, setIdxOfOpenedAccordion ] = useState(-1); // if idx = -1, then no Accordions are opened

  useEffect(() => {
    fetchFAQs(setFaqItems);
  }, []);

  const faqAccordions = faqItems.map((item, idx) => {
    return (
      <FAQAccordion
        key={idx}
        idx={idx}
        isOpen={idx === idxOfOpenedAccordion}
        setIdxOfOpenedAccordion={setIdxOfOpenedAccordion}
        title={item.question}
        content={
          // the following converts the markdown into JSX
          <Markdown
            options={{
              overrides: {
                a: {
                  props: {
                    className: 'FAQBlock-link'
                  }
                },
                blockquote: {
                  props: {
                    className: 'FAQBlock-quote'
                  }
                }
              }
            }}
          >
            {item.answer}
          </Markdown>
        }
      />
    );
  });

  return (
    <div data-aos="fade-up" className="FAQBlock">
      <h2 className="FAQBlock-header">Questions?</h2>
      <p className="FAQBlock-disc">
        Send us your questions{' '}
        <a className="FAQBlock-link" href="mailto:icontribute.founder@gmail.com">
          here
        </a>. We are always ready to help you.
      </p>
      <div className="FAQBlock-accordions">{faqAccordions}</div>
    </div>
  );
};

export default FAQBlock;
