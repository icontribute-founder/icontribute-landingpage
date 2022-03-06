import React, { useEffect } from "react";
import ReactGA from "react-ga";
import "../terms/privacypolicy.css";

const HomeScreen = () => {
  useEffect(() => {
    document.title = "iContribute - Privacy Policy V2 (February 2022)";
    ReactGA.pageview(window.location.hash.substring(1)); // substring excludes the hash "#"
  }, []);

  return (
    <div>
      <div id="page_1">
        <div className="privacy-title">Privacy Policy</div>
        <p className="ft0">
          1. Our Policy <span className="ft0">​</span>
        </p>
        <p className="ft1">
          Using the Internet poses threats to the security and privacy of everyone 
          involved. iContribute (“<b>iContribute</b>”, “<b>we</b>”, “<b>our</b>”, “<b>us</b>”) is committed to 
          protecting personal information by following responsible information-handling 
          practices in line with privacy laws. iContribute uses modern information and 
          communication technologies to support our activities. Please take a few moments
          to review this privacy policy (herein referred to as the “Privacy Policy”),
          which applies to our website,<a id="links" href="https://icontribute.community" target="_blank"> https://icontribute.community </a>
          (the “<b>Website</b>”), 
          our mobile app (the “<b>iContribute Mobile App</b>” or the “<b>App</b>”), and related products 
          (collectively, with the Website and the iContribute Mobile App, referred to as
          the “<b>Services</b>”). The Services are designed to connect youth with local and 
          virtual volunteer engagement opportunities.
        </p>
        <p className="ft1">
          In this Privacy Policy, those who create an account on the iContribute Mobile 
          App are called “<b>Members</b>”. In this Privacy Policy, users of the Services, 
          whether they are Members or casual browsers of the Website, are called “<b>Users</b>” 
          or “<b>you</b>”.
        </p>
        <p className="ft0">2. Personal Information</p>
        <p className="ft1">
          “<b>Personal Information</b>” means information that: (a) can identify an 
          individual directly; or (b) is information about an identifiable individual, 
          whether that information or opinion is true or not or recorded in a 
          material form or not, but does not include business contact information 
          that is used solely for the purpose of communicating or facilitating 
          communication with an individual in relation to their employment, business, 
          or profession.
        </p>
        <p className="ft0">3.	Agreeing to the Terms of our Privacy Policy</p>
        <p className="ft1">
          Our Privacy Policy outlines our collection and processing of your Personal 
          Information. The Personal Information collected is used for providing and 
          improving the Service. By accessing and or using the Services, or by registering
          as a Member, you agree to the terms in this Privacy Policy, meaning you 
          expressly consent to our information handling practices in accordance with 
          this Privacy Policy. The Services will not use or share your information 
          with anyone except as described in this Privacy Policy.
        </p>
        <p className="ft1">
          This Privacy Policy is incorporated into and subject to our Terms and 
          Conditions (the “<b>Terms and Conditions</b>”) 
          <a id="links" href="https://icontribute.community/#/privacy"> (https://icontribute.community/#/privacy)</a>. 
          The terms used in this Privacy Policy have the same definitions as our Terms 
          and Conditions found below.
        </p>
        <p className="ft1">
          You have the right to withdraw your consent from us collecting and using your 
          Personal Information, but this may limit our ability to provide you with our Services, 
          if applicable.
        </p>
        <p className="ft0">4. What Personal Information is Collected?</p>
        <p className="ft1">
          The primary purpose for our collection of Personal Information is to 
          provide the Services and features expected from us by our Users. We 
          only collect Personal Information about you that we consider necessary 
          for achieving the normal operation of our Services. iContribute will 
          not sell any Personal Information collected. 
        </p>
        <p className="ft1">
          The type of Personal Information that may be collected includes, but is 
          not limited to:
        </p>
        <p className="ft1">
          <ol type="a">
            {/* <li> */}
              <b>a) Contact information</b>: this information allows us to identify you 
              as well as send you materials. It lets us communicate with you regarding 
              instructions and requests. Typical contact information we may collect 
              includes name, email address, postal code, and school; <br></br>
            {/* </li> */}
            {/* <li> */}
              <b> b) Marketing and communications information</b> includes communication preferences
              and your preferences in receiving marketing from us and third parties; <br></br>
            {/* </li> */}
            {/* <li> */}
              <b>c) Profile information</b>: includes your username and password, your 
              interests, preferences, feedback, and survey responses; <br></br>
            {/* </li> */}
            {/* <li> */}
              <b>d) Device information</b>: this includes information like device type, 
              device identifier, IP address, MAC address, location, operating system, 
              duration of use, user behaviour, length of time spent on the services, 
              frequency of use, and information that you allow us to receive through 
              device settings that you turn on (access to your GPS location, camera, 
              or photo libraries); and <br></br>
            {/* </li> */}
            {/* <li> */}
              <b>e) </b>Other information you voluntarily provide to us, our volunteers, our 
              employees, or our contractors. 
            {/* </li> */}
          </ol>
        </p>
        <p className="ft0">5.	How Do We Collect Personal Information? </p>
        <p className="ft1">
         Personal Information may be collected in a number of ways, including through our Services, in person, by mail, and by email. We collect your information when you create an account with us or when you contact us. 
        </p>
        <p className="ft1">
          In general, you can browse the Website without telling us who you are or revealing any Personal Information about yourself. Once you become a Member, we require certain Personal Information from you in order to fulfill Service features and functionality, verify your identity, and provide a safe experience. Personal Information collected includes, but is not limited to, identifying information, contact information, preferences and settings, and other attributes that will be indicated to you at the time of collection.
        </p>
          
        <p className="ft1">
          You do not have to use the Services if you do not want to disclose your Personal Information. You have the right to refuse providing us with Personal Information by disengaging from the feature or offering that is making the request. By choosing not to become a Member, and by not engaging with any offerings wherein information is specifically requested, we consider you an anonymous User.
        </p>
          
        <p className="ft1">
        We automatically gather information about your navigational behaviour and your mobile device, such as your device operating system. We only use this information for internal research to better understand the needs and interests of our Users, assess our growth, get insight on demographics, and improve the overall quality and integrity of our community. We do not collect cookies through our Services.
        </p>
          
          {/* use text underline CSS styling  */}
        <p className="ft1"> 
          We use third-party metric and analytic services on certain pages or features of the Services to help us understand and analyse visitor traffic, measure the promotional effectiveness and efficacy of our features, offerings, and marketing campaigns. We also use these tools to identify pitfalls, shortcomings, and areas of our operations in need of improvement, and to view the overall performance and ranking of our online presence. These tools might store Cookies on your device at their discretion. We sometimes use surveys or other forms provided by a third party. It is possible that when engaged, the third-party provider might collect information or store a cookie. We never explicitly provide information that we have collected about you to any third-parties. We recognize your right to employ the use of programs that may block our use of any third-party tools.
        </p>
        <p className="ft0">6.	How Do We Use Your Personal Information?</p>
        <p className="ft1">
          We collect and use personal information for reasons like:
        </p>
        <p className="ft1">
          <ul>
            <li>
              <b>a) Fulfillment of direct volunteer registration</b>: to fulfill registrations you have completed through us;
            </li>
            <li>
              <b>b) Members</b>: in general, information you enter on the iContribute Mobile App is available to other persons (whether they are staff members or others), to whom you give access to your account, or to whom you give access to the information through the normal operation of the Services;
            </li>
            <li>
              <b>c) Business and website operations</b>: to administer and protect our business and the Services, including troubleshooting, data analysis, testing, system maintenance, support, reporting, and hosting of data;
            </li>
            <li>
              <b>d) Marketing and advertising</b>: to improve our marketing and promotional efforts, to analyze Service usage, to improve our content and product offerings, and to customize the iContribute Mobile App’s content, layout, and Services. Doing so helps us improve the Services and better tailor the Services to meet your needs, in order to provide you with a smooth, efficient, safe, and customized experience while using the Services. We may also administer surveys, contests, draws, raffles, offer tailored content, and other promotional materials to you based on your interests;
            </li>
            <li>
              <b>e) Regulatory requirements</b>: complying generally with all laws and applicable regulatory requirements;
            </li>
            <li>
              <b>f) Subsidiaries, affiliates, and service providers</b>: we may from time to time use the services of affiliates, subsidiaries, and unrelated service providers in the operation of the iContribute Mobile App, and may disclose personal information to them in the course of our use of their services. For example, we may use the services of third-party hosting companies to host the operation of the iContribute Mobile App. This may involve the hosting of data, including Personal Information, on servers operated by those hosting companies. We take care to use only service providers that we believe are reputable and able to live up to our and your expectations, including about the handling of confidential information;
            </li>
            <li>
              <b>g) Feedback and outreach</b>: on occasion we use email addresses or other contact information to contact our Members to ask them for their input on our Services, to forward to them media opportunities, and provide them with updates on their activity with the Services; and
            </li>
            <li>
              <b>h) Business development and market research</b>: we use data to understand demographics, interests, usage patterns, and other characteristics of Members and to track and analyze trends and patterns.
            </li>
          </ul>

          <p className="ft1">We will obtain your consent before proceeding with any other purpose not identified in this Privacy Policy.</p>
          
          <p className="ft1">iContribute may disclose your Personal Information (a) to any governmental authority as part of an investigation to determine our compliance with any applicable law, rule, or regulation (including privacy laws, rules, and regulations); (b) in response to a court order, subpoena, discovery request, or other lawful judicial or administrative proceeding; (c) as otherwise required under any applicable law, rule, or regulation; and (d) in good faith, to protect or defend the rights or property of iContribute and other Members.</p>
          
          <p className="ft1">In the instances described above, we may be required to share your Personal Information with or without your consent. In limited circumstances, we may be legally prohibited from advising you that your information was shared in this way.</p>
          
          <p className="ft1">Except as otherwise expressly included in this Privacy Policy, this document only addresses the use and disclosure of Personal Information we collect from you. Since we do not control the information use, collection or disclosure policies of third parties, you are subject to their privacy policies. We encourage you to ask questions before you disclose your Personal Information to others.</p>
        </p>
        <p className="ft0">7.	Consent for Marketing Purposes</p>
        <p className="ft1">
          By subscribing to the Services, you consent to receive news and offers related to the Services and your selected preferences. iContribute newsletters, updates, and reports are sent electronically. If you no longer wish to receive these services, you may cancel your subscription at any time.
        </p>
        <p className="ft1">
          Our email marketing is permission based. If you received mail from iContribute, it is because you have selected it as an option through the Services and have consented to the terms of this Privacy Policy. You may unsubscribe at any time by clicking the unsubscribe link at the bottom of each email. 
        </p>
        <p className="ft0">8.	Making Changes to Your Account </p>
        <p className="ft1">
          Members can review and change their Personal Information on the iContribute Mobile App. To review and update your Personal Information to ensure it is accurate, you may log in to your account to make the changes, or you may contact us at <a id="links" href="mailto:icontribute.founder@gmail.com">icontribute.founder@gmail.com</a>.
        </p>
        <p className="ft0">9.	Account Deletion</p>
        <p className="ft1">
          When a Member chooses to close an account, we will remove your information from our systems. This will ensure that there are no further mailings directed towards the cancelled Member. Furthermore, if you wish to have us delete all your data held on our servers, please contact us at <a id="links" href="mailto:icontribute.founder@gmail.com">icontribute.founder@gmail.com</a>. We will strive to delete all data within 48 hours of processing.
        </p>
        <p className="ft0">10. Personal Information and Data Security</p>
        <p className="ft1">
          The iContribute team members who have access to personal data will respect the confidentiality of Personal Information. We value your trust and strive to use commercially reasonable means to ensure all data collected, including Personal Information, is protected and secure against unauthorised access, alteration, or deletion. Login information is encrypted on account creation and is guarded by Google Firebase providers. However, no method of transmission over the Internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
        </p>
        <p className="ft1">
          We encourage all individuals to keep watch for communications that are suspicious and report any suspicious activity to us as soon as possible. More information about security is available in our Terms and Conditions.
        </p>
        <p className="ft1">  
          The Services may contain links to external websites. If you click on a third-party link, you will be directed to that website. Note that these external sites are not operated by the Service. Therefore, we strongly advise you to review the privacy policy of these websites. We do not control or assume responsibility of the content, terms, privacy policies, or practices of any third-party sites or services.
        </p>
        <p className="ft1">  
          The terms and conditions of third-party service providers used by the iContribute Mobile App include, but are not limited to:
        </p>
        <p className="ft1">
          <ol type="i">
            <li><a id="links" href="https://policies.google.com/terms" target="_blank">GOOGLE PLAY SERVICES</a></li>
            <li><a id="links" href="https://firebase.google.com/terms/analytics" target="_blank">GOOGLE ANALYTICS FOR FIREBASE</a></li>
          </ol>
        </p>
        <p className="ft0">11.	Governing Law</p>
        <p className="ft1">
          This Privacy Policy and all related matters shall be interpreted and construed in accordance with the laws of the Province of Ontario and the applicable federal laws of Canada. 
        </p>
        <p className="ft0">12.	Intended Use</p>
        <p className="ft1">
          iContribute’s Services are hosted in Canada and are intended for individuals located within Canada. If you choose to use the Services from other regions of the world with laws governing data collection and use that may differ from Canadian law, please note that you are transferring your Personal Information outside of those regions to Canada for storage and processing.
        </p>
        <p className="ft0">13.	Children’s Privacy</p>
        <p className="ft1">
        In order to use the Services, Members must be either i) at least 13 years of age; or ii) enrolled in grade 9. We do not knowingly collect Personal Information from individuals under the age of 13. In the case we discover a child under 13 has provided us with Personal Information, we will immediately delete this from our servers. If you are a parent or guardian who discovers that your child has provided us with their Personal Information, please contact the iContribute team so that we can take the necessary steps to remove the Personal Information and delete the account.
        </p>
        <p className="ft0">14.	Changes to This Privacy Policy</p>
        <p className="ft1">
        iContribute may update our Privacy Policy from time to time. You are advised to review this page periodically for any changes. We will notify users of any changes by posting the latest Privacy Policy on this page.
      </p>
      <p className="ft1">
        This policy is effective as of 2022-02-10.
      </p>
      <p className="ft1">
        If you have any questions or concerns about this Privacy Policy, please contact our team at:
        <a id="links" href="mailto:icontribute.founder@gmail.com">icontribute.founder@gmail.com</a>.
      </p>
      </div>


      <div id="page_1">
        <div className="privacy-title">Terms & Conditions</div>
      </div>
      </div>
  );
};

export default HomeScreen;
