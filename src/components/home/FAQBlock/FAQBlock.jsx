import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import FAQAccordion from "../FAQAccordion/FAQAccordion";
import fetchFAQs from "../../../queries/FAQ";
import "./FAQBlock.css";
import i18n from "i18next";

import { useMediaQuery } from "react-responsive";
import { MOBILE_SCREEN_SIZE } from "../../../constants/MediaQueries";
import { useTranslation } from "react-i18next";

const FAQBlock = () => {
  const { t } = useTranslation();
  const [faqItems, setFaqItems] = useState([]);
  const [idxOfOpenedAccordion, setIdxOfOpenedAccordion] = useState(-1); // if idx = -1, then no Accordions are opened
  const isMobile = useMediaQuery({ maxWidth: MOBILE_SCREEN_SIZE });

  useEffect(() => {
    fetchFAQs(setFaqItems);
  }, [i18n.language]);

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
                    className: "FAQBlock-link",
                  },
                },
                blockquote: {
                  props: {
                    className: "FAQBlock-quote",
                  },
                },
              },
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
      <h2 className="FAQBlock-header">{t("FAQBlock-header")}</h2>
      {isMobile ? (
        <div>
          <p className="FAQBlock-desc">
            {t("FAQBlock-desc-1.1")}
            <a
              className="FAQBlock-link"
              href="mailto:icontribute.founder@gmail.com"
            >
              {t("FAQBlock-link")}
            </a>
            .
          </p>
          <p className="FAQBlock-desc">{t("FAQBlock-desc-1.2")}</p>
        </div>
      ) : (
        <p className="FAQBlock-desc">
          {t("FAQBlock-desc-1.1")}
          <a
            className="FAQBlock-link"
            href="mailto:icontribute.founder@gmail.com"
          >
            {t("FAQBlock-link")}
          </a>
          . {t("FAQBlock-desc-1.2")}
        </p>
      )}
      <div className="FAQBlock-accordions">{faqAccordions}</div>
    </div>
  );
};

export default FAQBlock;
