import React from 'react';
import Accordion from './Accordion';

import '../css/FAQBlock.css';

const FAQBlock = () => {
  return (
    <div data-aos="fade-up" className="FAQBlock-container">
      <h2 className="FAQBlock-header">Questions?</h2>
      <p className="FAQBlock-disc">
        Send us your questions{' '}
        <a className="FAQBlock-link" href="mailto:icontribute.founder@gmail.com">
          here
        </a>. We are always ready to help you.
      </p>
      <div className="FAQBlock-accordions">
        <Accordion
          title="What is iContribute?"
          content="<p>
          iContribute is a not for profit startup organization that connects students to local volunteer
          opportunities.
        </p>
        <p>
          <em>Mission Statement:</em>:
        </p>
        <p>
          Our goal is to foster community involvement amongst youth. The iContribute platform connects high school
          and university students to volunteer opportunities in their area. We have partnered with registered
          charities, non-profit organizations, and community organizations to present volunteer opportunities to
          students so that they can make an impact in their local communities.
        </p>"
        />
        <Accordion
          title="Who can volunteer through iContribute?"
          content="<p>Anyone over the age of 13 can volunteer through iContribute! We are currently focusing our efforts on the Ottawa community because that is where our co-founding team began their journey. Once we gain traction, we look forward to expanding to neighboring cities.</p>"
        />
      </div>
    </div>
  );
};

export default FAQBlock;
