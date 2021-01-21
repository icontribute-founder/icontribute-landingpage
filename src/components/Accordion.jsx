import React, { useState, useRef, useEffect } from 'react';
import Chevron from './Chevron';

import '../css/Accordion.css';

function Accordion(props) {
  const [ setActive, setActiveState ] = useState(props.isOpen ? 'active' : '');
  const [ setHeight, setHeightState ] = useState('0px');
  const [ setRotate, setRotateState ] = useState('accordion__icon');

  useEffect(
    () => {
      if (props.isOpen) {
        setActiveState('active');
        setHeightState(`${content.current.scrollHeight}px`);
        setRotateState('accordion__icon rotate');
      } else {
        setActiveState('');
        setHeightState('0px');
        setRotateState('accordion__icon');
      }
    },
    [ props.isOpen ]
  );

  const content = useRef(null);

  function toggleAccordion() {
    if (props.isOpen) {
      props.setIdxOfOpenedAccordion(-1);
    } else {
      props.setIdxOfOpenedAccordion(props.idx);
    }
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        <Chevron className={`${setRotate}`} width={20} height={20} fill={'#026896'} />
      </button>
      <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
        <div className="accordion__text">{props.content}</div>
      </div>
    </div>
  );
}

export default Accordion;
