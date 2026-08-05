import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-[100dvh] bg-background flex flex-col selection:bg-primary/30">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40 py-4" aria-label="Site navigation">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl flex justify-between items-center">
          <Link href="/" className="flex items-center gap-1 md:gap-1.5 font-serif text-xl tracking-wide text-foreground">
            <img src="/logo.png" alt="Pocketpill" className="h-6 w-6 md:h-7 md:w-7 object-contain" />
            <span>Pocket<span className="text-primary italic">pill</span></span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            <ChevronRight className="w-3.5 h-3.5 rotate-180" aria-hidden="true" />
            <span>Back to site</span>
          </Link>
        </div>
      </nav>

      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-12">Privacy Policy</h1>
          
          <div className="prose prose-sm md:prose-base dark:prose-invert prose-headings:font-serif prose-headings:font-normal prose-a:text-primary max-w-none text-muted-foreground space-y-6">
            <p>
              This Privacy Policy explains how information is collected, used and disclosed by Pocketpill with respect to your access and use of our Services through our website located at <a href="https://pocketpill.co">https://pocketpill.co</a> and our mobile application (“App”). To make this Privacy Policy easier to read, the Site, our services and App are collectively called the “Services.” This Privacy Policy doesn’t apply to any third-party websites, services or applications that can be accessed through our Services.
            </p>
            <p>
              Any information that is collected is subject to the Privacy Policy in effect at the time such information is collected. We may, however, modify and revise our Privacy Policy from time-to-time. If we make any material changes to this policy, we will notify you of such changes by posting them on our website, through our Services or by sending you an email or other notification, and we will indicate when such changes will become effective. By continuing to access or use our Services after those changes become effective, you are agreeing to be bound by the revised policy.
            </p>

            <h2>Information You Provide</h2>
            <p>
              We will collect personal information from you (like your name, date of birth, email address, credit card information, phone number, and delivery address) when you register for an account, and, in order to provide you with the prescription delivery services, you will need to provide us with certain medical information such as your physician’s name and address, prescription information, medical history and a physical signed copy of the prescription (collectively, your “Personal Information”).
            </p>

            <h2>Note regarding children</h2>
            <p>
              We do not knowingly collect Personal Information from children. If we learn that we have collected Personal Information of a child under 13, we will take steps to delete such information from our files as soon as possible.
            </p>

            <h2>Note regarding international users</h2>
            <p>
              By providing us with your information, you are accepting and agreeing to that transfer.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect certain information that your mobile device sends when you use our Services, like a device identifier, user settings, as well as information about your use of our Services.
              We also collect certain information that your web browser sends when you visit our website, like the Internet Protocol (IP) address, browser, referring/exit pages and URLs, pages viewed, and other such information about your use of our Services. We use “cookies” – small data files – to collect this information, which allows us to identify your browser and to improve your use of our Services. You can reset your web browser to refuse all cookies or to indicate when a cookie is being sent, however, some features of our Services may not function properly if the ability to accept cookies is disabled.
            </p>

            <h2>Information Collected by Others</h2>
            <p>
              We may use Google Analytics or other analytics providers to help us understand the use of our Services. These providers will collect the information sent by your mobile device or browser, and their use of that information is governed by their applicable privacy policy.
            </p>

            <h2>How We Use the Information We Collect</h2>
            <p>
              We use the information we collect to provide our Services (or the information you request), including fulfilling your prescriptions and delivering them to you, to process and complete any transactions, to respond to inquiries, to personalize and improve our Services and your experiences when you use our Services, to monitor and analyze usage and trends of our Services, to send you administrative messages regarding the operation and use of our Services, and for any other purpose for which the information was collected.
            </p>

            <h2>Information We Share With Others</h2>
            <p>
              In order to fulfill and deliver your prescription, we may share your Personal Information with a third party pharmacy (“Pharmacy”). The Pharmacy will then use your Personal Information to fulfill your prescription. From the Pharmacy, we may receive your address, physician’s name, prescription information, prescription refill orders, and information on how to hand your prescription.
            </p>
            <p>
              Your information may be accessed and used by our service providers who are working with us in connection with the operation of our Services (these service providers may have access to your information but only to the extent necessary to perform services on our behalf and are obligated not to disclose that information or use it for any other purposes). We may share information about you if we are (or if we believe we are) required by law or legal process (such as a subpoena, warrant or court order), if we have to respond to a lawful request from legal authorities to disclose such information, or if we need to enforce or apply this Privacy Policy, our Terms or our other policies. We may transfer and/or provide information about our users in connection with an acquisition, sale of company assets, or other situation where user information would be transferred as one of our business assets.
            </p>

            <h2>Responding to Do Not Track Signals</h2>
            <p>
              Our Site does not have the capability to respond to “Do Not Track” signals received from various web browsers.
            </p>

            <h2>How to Access Your Information</h2>
            <p>
              If you would like us to delete Personal Information about you from our system, please contact us with a request that we delete your Personal Information from our database. We will use reasonable efforts to honor your request; however, we may retain an archived copy of your information as required by law and/or for record keeping purposes.
            </p>

            <h2>Security Measures We Take To Protect Your Information</h2>
            <p>
              We employ administrative, physical and electronic measures designed to protect your information from unauthorized access, however, despite these efforts, no security measures are perfect or impenetrable and no method of data transmission can be guaranteed against any interception or other type of misuse. In the event that your Personal Information is compromised as a result of a breach of security, we will promptly notify you if your Personal Information has been compromised, as required by applicable law.
            </p>

            <h2>Your Rights</h2>
            <p>When it comes to your health information, you have certain rights. This section explains your rights and some of our responsibilities to help you.</p>
            
            <ul>
              <li><strong>Get an electronic or paper copy of your medical record:</strong> You can ask to see or get an electronic or paper copy of your medical record and other health information we have about you. Ask us how to do this. We will provide a copy or a summary of your health information, usually within 30 days of your request. We may charge a reasonable, cost-based fee.</li>
              <li><strong>Ask us to correct your medical record:</strong> You can ask us to correct health information about you that you think is incorrect or incomplete. Ask us how to do this. We may say “no” to your request, but we’ll tell you why in writing within 60 days.</li>
              <li><strong>Request confidential communications:</strong> You can ask us to contact you in a specific way (for example, home or office phone) or to send mail to a different address. We will say “yes” to all reasonable requests.</li>
              <li><strong>Ask us to limit what we use or share:</strong> You can ask us not to use or share certain health information for treatment, payment, or our operations. We are not required to agree to your request, and we may say “no” if it would affect your care. If you pay for a service or health care item out-of-pocket in full, you can ask us not to share that information for the purpose of payment or our operations with your health insurer. We will say “yes” unless a law requires us to share that information.</li>
              <li><strong>Get a list of those with whom we’ve shared information:</strong> You can ask for a list (accounting) of the times we’ve shared your health information for six years prior to the date you ask, who we shared it with, and why. We will include all the disclosures except for those about treatment, payment, and health care operations, and certain other disclosures (such as any you asked us to make). We’ll provide one accounting a year for free but will charge a reasonable, cost-based fee if you ask for another one within 12 months.</li>
              <li><strong>Choose someone to act for you:</strong> If you have given someone medical power of attorney or if someone is your legal guardian, that person can exercise your rights and make choices about your health information. We will make sure the person has this authority and can act for you before we take any action.</li>
            </ul>

            <h2>Your Choices</h2>
            <p>
              For certain health information, you can tell us your choices about what we share. If you have a clear preference for how we share your information in the situations described below, talk to us. Tell us what you want us to do, and we will follow your instructions.
            </p>
            
            <p><strong>In these cases, you have both the right and choice to tell us to:</strong></p>
            <ul>
              <li>Share information with your family, close friends, or others involved in your care.</li>
              <li>Share information in a disaster relief situation.</li>
              <li>Include your information in a hospital directory.</li>
            </ul>
            <p>
              If you are not able to tell us your preference, for example if you are unconscious, we may go ahead and share your information if we believe it is in your best interest. We may also share your information when needed to lessen a serious and imminent threat to health or safety.
            </p>

            <p><strong>In these cases we never share your information unless you give us written permission:</strong></p>
            <ul>
              <li>Marketing purposes</li>
              <li>Sale of your information</li>
              <li>Most sharing of psychotherapy notes</li>
            </ul>

            <p><strong>In the case of fundraising:</strong></p>
            <ul>
              <li>We may contact you for fundraising efforts, but you can tell us not to contact you again.</li>
            </ul>

            <h2>Our Uses and Disclosures</h2>
            <p>How do we typically use or share your health information? We typically use or share your health information in the following ways.</p>
            
            <ul>
              <li><strong>Treat you:</strong> We can use your health information and share it with other professionals who are treating you.</li>
              <li><strong>Run our organization:</strong> We can use and share your health information to run our practice, improve your care, and contact you when necessary.</li>
              <li><strong>Bill for your services:</strong> We can use and share your health information to bill and get payment from health plans or other entities.</li>
            </ul>

            <h2>How else can we use or share your health information?</h2>
            <p>
              We are allowed or required to share your information in other ways - usually in ways that contribute to the public good, such as public health and research. We have to meet many conditions in the law before we can share your information for these purposes. For more information see: <a href="https://www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/index.html" target="_blank" rel="noopener noreferrer">www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/index.html</a>.
            </p>

            <h3>Help with public health and safety issues</h3>
            <p>We can share health information about you for certain situations such as:</p>
            <ul>
              <li>Preventing disease</li>
              <li>Helping with product recalls</li>
              <li>Reporting adverse reactions to medications</li>
              <li>Reporting suspected abuse, neglect, or domestic violence</li>
              <li>Preventing or reducing a serious threat to anyone’s health or safety</li>
            </ul>

            <h3>Do research</h3>
            <p>We can use or share your information for health research.</p>

            <h3>Comply with the law</h3>
            <p>We will share information about you if state or federal laws require it, including with the Department of Health and Human Services if it wants to see that we’re complying with federal privacy law.</p>

            <h3>Respond to organ and tissue donation requests</h3>
            <p>We can share health information about you with organ procurement organizations.</p>

            <h3>Work with a medical examiner or funeral director</h3>
            <p>We can share health information with a coroner, medical examiner, or funeral director when an individual dies.</p>

            <h3>Address workers’ compensation, law enforcement, and other government requests</h3>
            <p>We can use or share health information about you:</p>
            <ul>
              <li>For workers’ compensation claims</li>
              <li>For law enforcement purposes or with a law enforcement official</li>
              <li>With health oversight agencies for activities authorized by law</li>
              <li>For special government functions such as military, national security, and presidential protective services</li>
            </ul>

            <h3>Respond to lawsuits and legal actions</h3>
            <p>We can share health information about you in response to a court or administrative order, or in response to a subpoena.</p>

            <h2>Our Responsibilities</h2>
            <ul>
              <li>We are required by law to maintain the privacy and security of your protected health information.</li>
              <li>We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information.</li>
              <li>We must follow the duties and privacy practices described in this notice and give you a copy of it.</li>
              <li>We will not use or share your information other than as described here unless you tell us we can in writing. If you tell us we can, you may change your mind at any time. Let us know in writing if you change your mind.</li>
            </ul>

            <h2>Changes to the Terms of this Notice</h2>
            <p>
              We can change the terms of this notice, and the changes will apply to all information we have about you. The new notice will be available upon request, in our pharmacy.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
