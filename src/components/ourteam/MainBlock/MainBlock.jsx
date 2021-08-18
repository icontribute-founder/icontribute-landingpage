import React from "react";
import { useTranslation } from "react-i18next";
import "./MainBlock.css";

const MainBlock = () => {
  const { t } = useTranslation();
  return (
    <div data-aos="fade-up" className="watermark-text-container">
      <h1 className="watermark-main">{t("watermark-main")}</h1>
      <p className="watermark-text">
        To increase community involvement and help students experience the
        physical, psychological, and professional benefits of volunteering, we
        founded iContribute in 2020. iContribute’s mission is to foster
        community involvement amongst youth, first starting in Ottawa, Canada.
        iContribute’s IOS and Android apps make hundreds of in-person and
        virtual volunteer opportunities more discoverable, more tailored, and
        more flexible. Since its founding in the summer of 2020, iContribute has
        partnered with over 35 non-profits organizations including local
        communities such as the Ottawa Food Bank and the Ottawa Dementia
        Society, to larger organizations like the Salvation Army and Habitat for
        Humanity. We completed our pilot launch in February 2021 and have since
        grown from 50 registered users to over 600. Our team also gained the
        approval of the Ottawa-Carleton District School Board and piloted our
        app with 2 local high schools, reaching over 1,500 students, in the
        Spring of 2021. To increase community involvement and help students
        experience the physical, psychological, and professional benefits of
        volunteering, we founded iContribute in 2020. iContribute’s mission is
        to foster community involvement amongst youth, first starting in Ottawa,
        Canada. iContribute’s IOS and Android apps make hundreds of in-person
        and virtual volunteer opportunities more discoverable, more tailored,
        and more flexible. Since its founding in the summer of 2020, iContribute
        has partnered with over 35 non-profits organizations including local
        communities such as the Ottawa Food Bank and the Ottawa Dementia
        Society, to larger organizations like the Salvation Army and Habitat for
        Humanity. We completed our pilot launch in February 2021 and have since
        grown from 50 registered users to over 600. Our team also gained the
        approval of the Ottawa-Carleton District School Board and piloted our
        app with 2 local high schools, reaching over 1,500 students, in the
        Spring of 2021. To increase community involvement and help students
        experience the physical, psychological, and professional benefits of
        volunteering, we founded iContribute in 2020. iContribute’s mission is
        to foster community involvement amongst youth, first starting in Ottawa,
        Canada. iContribute’s IOS and Android apps make hundreds of in-person
        and virtual volunteer opportunities more discoverable, more tailored,
        and more flexible. Since its founding in the summer of 2020, iContribute
        has partnered with over 35 non-profits organizations including local
        communities such as the Ottawa Food Bank and the Ottawa Dementia
        Society, to larger organizations like the Salvation Army and Habitat for
        Humanity. We completed our pilot launch in February 2021 and have since
        grown from 50 registered users to over 600. Our team also gained the
        approval of the Ottawa-Carleton District School Board and piloted our
        app with 2 local high schools, reaching over 1,500 students, in the
        Spring of 2021.
      </p>
    </div>
  );
};

export default MainBlock;
