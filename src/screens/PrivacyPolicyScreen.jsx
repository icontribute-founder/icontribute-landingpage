import React, { useEffect } from "react";
import ReactGA from "react-ga";
import "../terms/privacypolicy.css";

const HomeScreen = () => {
  useEffect(() => {
    document.title = "iContribute - Privacy Policy";
    ReactGA.pageview(window.location.hash.substring(1)); // substring excludes the hash "#"
  }, []);

  return (
    <div>
      <div id="page_1">
        <div className="privacy-title">Privacy Policy</div>
        <p className="ft1">
          iContribute is committed to protecting personal information by
          following responsible <nobr>information-handling</nobr> practices in
          line with privacy laws. iContribute uses modern information and
          communication technologies to support our activities. This policy
          (herein referred to as the “Privacy Policy”) applies to the
          iContribute Mobile App. which is designed to connect youth with local
          engagement opportunities (herein referred to as “the Service”).
        </p>
        <p className="ft1">
          If you choose to use the Service, then you agree to the collection and
          use of information in this Privacy Policy. The Personal Information
          collected is used for providing and improving the Service. The Service
          will not use or share your information with anyone except as described
          in this Privacy Policy.
        </p>
        <p className="ft1">
          The terms used in this Privacy Policy have the same definitions as our
          Terms and Conditions found below.
        </p>
        <p className="ft0">
          Information Collection and Use <span className="ft0">​</span>
        </p>
        <p className="ft1">
          For a better experience, our Service may require you to provide us
          with a username, email and postal code (herein referred to as
          “Personal Information”). The Service uses <nobr>third-party</nobr>{" "}
          services that may collect information used to identify you. The
          Service cannot be held liable for any damages or harm that may come to
          you if you choose to use this app. If a user decides to terminate
          their service, this service will take up to 48 hours to process.
          Thereafter, all user data will be erased and their account will be
          closed.
        </p>
        <p className="ft0">Confidentiality , Security , and User Privacy</p>
        <p className="ft1">
          The Service team members who have access to personal data will respect
          the confidentiality of Personal Information. We value your trust in
          providing your Personal Information, thus we are striving to use
          commercially acceptable means of protecting it. Login information is
          encrypted on account creation and is guarded by Firebase providers.
          However, no method of transmission over
          the internet, or method of electronic storage is 100% secure and
          reliable, and we cannot guarantee its absolute security.
        </p>
        <p className="ft1">
          Information we obtain from your device include: i) data from device
          settings; and ii) information that you allow us to receive through
          device settings that you turn on (access to your GPS location, camera,
          or photo libraries). This information will only be used to better our
          services.
        </p>
        <p className="ft0">Information Sharing</p>
        <p className="ft1">
          The Service team will not sell any information collected. Information
          that is collected will only be used to provide the Service. In the
          event that the Service is acquired, all collected information will be
          transferred to the acquirer.
        </p>
        <p className="ft0">Inappropriate Content and Abusive Users</p>
        <p className="ft1">
          Within the iContribute platform, there is a no tolerance policy for
          objectionable content or abusive users. Objectionable content
          includes, but is not limited to: <br />
        </p>
        <p className="ft1">(i)
          sexually explicit materials;
          obscene, defamatory, libelous, slanderous, violent and/or unlawful
          content or profanity (iii) content that infringes on the rights of
          any third party, including copyright, trademark, privacy, publicity,
          or other personal or proprietary right. Any user can flag content
          that they deem objectionable for review. Content will be moderated
          by iContribute to ensure the timely removal of any or all
          objectionable content. Objectionable content will be removed within
          24 hours of reporting and review. User accounts which have been
          confirmed responsible for posting objectionable content will be
          ejected and will not have access to the iContribute app.
        </p>
        <p className="ft0">Links to Other Sites</p>
        <p className="ft1">
          This Service may contain links to external sites. If you click on a
          <nobr>third-party</nobr> link, you will be directed to that site. Note
          that these external sites are not operated by the Service. Therefore,
          we strongly advise you to review the Privacy Policy of these websites.
          We do not control or assume responsibility of the content, Privacy
          Policies, or practices of any <nobr>third-party</nobr> sites or
          services.
        </p>
        <p className="ft0">Children’s Privacy</p>
        <p className="ft1">
          The Service is not meant for anyone under the age of 13. We do not
          knowingly collect personally identifiable information from children
          under the age of 13. In the case that we discover that a child under
          13 has provided us with Personal Information, we will immediately
          delete this from our servers. If you are a parent or guardian who
          discovers that your child has provided us with their Personal
          Information, please contact the iContribute team so that we can take
          the necessary steps to remove the Personal Information.
        </p>
        <p className="ft0">Changes to This Privacy Policy</p>
        <p className="ft1">
          iContribute may update our Privacy Policy from time to time. Thus, you
          are advised to review this page periodically for any changes. We will
          notify users of any changes by posting the latest Privacy Policy on
          this page.
        </p>
        <p className="ft3">
          This policy is effective as of <nobr>2022-01-24.</nobr>
        </p>
        <p className="ft1">
          If you have any questions or concerns about this Privacy Policy,
          please contact our team at: icontribute.founder@gmail.com.
        </p>

      </div>
      <div id="page_1">
        <div className="privacy-title">Terms & Conditions</div>
        <p className="ft1">
          By downloading or using the Service, these terms will automatically apply to
          you. Please read them carefully before using the app.
        </p>
        <p className="ft1">
          You are not allowed to copy or modify the app, any part of the app, or
          our trademarks in any way. You are not allowed to attempt to extract
          the source code of the app, and you also should not translate the app
          into other languages or make derivative versions. The app and all
          trademarks, copyright, database rights, and other intellectual
          property rights related to it still belong to the Service.
        </p>
        <p className="ft1">
          The iContribute team is committed to ensuring that the app is as
          useful and efficient as possible. For that reason, we reserve the
          right to make changes to the app or to charge for its services. We
          will not charge you for the app or its services without making it very
          clear to you exactly what you’re paying for.{" "}
          <span className="ft13">[NB1]</span>​ We
          <span className="ft14">​ </span>will not charge you without your
          consent.
        </p>
        <p className="ft1">
          The iContribute app stores and processes personal data that you have
          provided to us, in
          order to provide the <span className="ft16">[NB2]</span>​ Service
          <span className="ft17">​ </span>. It is your responsibility to keep
          your phone and access
        </p>
      
      <p className="ft1">
        to the app secure. We therefore recommend that you do not jailbreak or
        root your phone, which is the process of removing software
        restrictions and limitations imposed by the official operating system
        of your device. It could make your phone vulnerable to
        malware/viruses/malicious programs, compromise your phone’s security
        features and it could mean that the iContribute app won’t work
        properly or at all.
      </p>
      <p className="ft1">
        The iContribute App uses <nobr>third-party</nobr> services that
        declare their own Terms and Conditions.
      </p>
      <p className="ft1">
        Link to Terms and Conditions of <nobr>third-party</nobr> service
        providers used by the app:
      </p>
      <p className="p25 ft11">
        <a href="https://policies.google.com/terms" className="links">
          <span className="ft20">Google Play Services</span>
        </a>
      </p>
      <p className="p26 ft11">
        <a href="https://firebase.google.com/terms/analytics" className="links">
          <span className="ft20">Google Analytics for Firebase</span>
        </a>
      </p>
      <p className="ft1">
        iContribute will not take responsibility for user-side technical
        limitations. Certain functions of the app will require the app to have
        an active internet connection. The connection can be{" "}
        <nobr>Wi-Fi,</nobr> or provided by your mobile network provider, but
        iContribute cannot take responsibility for the app not working at full
        functionality if you don’t have access to <nobr>Wi-Fi</nobr> or
        cellular data.
      </p>
      <p className="ft1">
        If you are using the app outside of an area with <nobr>Wi-Fi,</nobr>{" "}
        you should remember that your terms of the agreement with your mobile
        network provider will still apply when using cellular data. As a
        result, you may be charged by your mobile provider for the cost of
        data for the duration of your connection while accessing the app, or
        other
        <nobr>third-party</nobr> charges. In using the app, you are accepting
        responsibility for any such charges, including roaming data charges if
        you use the app outside of your home territory (i.e. region or
        country) without turning off data roaming. If you are not the bill
        payer for the device on which you are using the app, please be aware
        that we assume that you have received permission from the bill payer
        for using the app.
      </p>
      <p className="ft1">
        When you are using the app, it is important to bear in mind that
        although we aim to ensure that information displayed on the app is
        updated and correct at all times, we do rely on
        <nobr>third-parties</nobr> to provide information to us so that we can
        make it available to you. iContribute accepts no liability for any
        direct or indirect loss that you experience as a result of relying on
        the functionality of the app.
      </p>
      <p className="ft1">
        We may periodically update the app. The app is currently available on
        Android & iOS; the requirements for both systems (and for any
        additional systems we decide to extend the availability of the app to)
        may change, and you will need to download the updates if you want to
        keep using the app. iContribute does not promise that it will always
        update the app so that it is relevant to you and/or works with the
        Android & iOS version that you have installed on your device. We may
        also wish to stop providing the app and may terminate use of it at any time without giving notice of termination
        to you. Unless we tell you otherwise, upon any termination, (a) the
        rights and licenses granted to you in these terms will end; (b) you
        must stop using the app, and (if needed) delete it from your device.
      </p>
      <p className="p32 ft10">Changes to This Terms and Conditions</p>
      <p className="ft1">
        iContribute may update our Terms and Conditions from time to time.
        Thus, you are advised to review this page periodically for any
        changes. iContribute will notify you of any changes by posting the new
        Terms and Conditions on this page.
      </p>
      <p className="ft1">
        These terms and conditions are effective as of <nobr>2022-01-24</nobr>
      </p>
      <p className="ft1">
        If you have any questions or suggestions about these Terms and
        Conditions, please contact us at: icontribute.founder@gmail.com.
      </p>
      </div>
    </div>
  );
};

export default HomeScreen;
