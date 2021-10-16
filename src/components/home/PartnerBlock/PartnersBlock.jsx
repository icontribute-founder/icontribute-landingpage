import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { fetchBackers, fetchPartners } from "../../../queries/Partners";
import "./PartnersBlock.css";

const PartnersBlock = () => {
  const [backers, setBackers] = useState([]);
  const [partners, setPartners] = useState([]);

  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    fetchBackers(setBackers);
    fetchPartners(setPartners);
  }, []);

  const { t } = useTranslation();

  return (
    <div className="partners-container">
      <h2 className="partners-header">{t("partners-header")}</h2>
      <p className="partners-desc">{t("partners-desc")}</p>
      <div data-aos="fade-up" className="partners">
        <div className="long-logos">
          {partners.map((partner, i) => {
            if (partner.isLongBanner)
              return <img alt={partner.name} src={partner.logo.url} key={i} />;
            return null;
          })}
        </div>
        <div
          onClick={() => setViewMore((c) => !c)}
          className="viewMoreLess"
          style={{
            display: viewMore ? "none" : "flex",
          }}
        >
          View More
        </div>
        <div
          style={{ display: !viewMore ? "none" : "" }}
          data-aos="fade-up"
          className="small-logos"
        >
          {partners.map((partner, i) => {
            if (!partner.isLongBanner) {
              return (
                <div className="small-logo" key={i}>
                  <img alt={partner.name} src={partner.logo.url} />
                </div>
              );
            }
            return null;
          })}
        </div>
        <div
          onClick={() => setViewMore((c) => !c)}
          className="viewMoreLess"
          style={{
            display: !viewMore ? "none" : "flex",
          }}
        >
          View Less
        </div>
      </div>
      <h2 className="fade-up partners-header backed-by-header">
        {t("backed-by-header")}
      </h2>
      <div data-aos="fade-up" className="backers">
        {backers.map((backer, i) => (
          <img
            className="backer"
            alt={backer.name}
            src={backer.logo.url}
            key={i}
          />
        ))}
      </div>
      {/* <a className="hollow-yellow">LEARN MORE</a> */}
    </div>
  );
};

export default PartnersBlock;
