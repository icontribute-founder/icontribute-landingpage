import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import Accordion from './Accordion';
import fetchFAQs from '../queries/FAQ';

import '../css/FAQBlock.css';

const FAQBlock = () => {
  const [ faqItems, setFaqItems ] = useState([]);

  useEffect(() => {
    fetchFAQs(setFaqItems);
  }, []);

  const faqAccordions = faqItems.map((item, i) => {
    return (
      <Accordion
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
                }
              }
            }}
          >
            {item.answer}
          </Markdown>
        }
        key={i}
      />
    );
  });

  return (
    <div data-aos="fade-up" className="FAQBlock-container">
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
