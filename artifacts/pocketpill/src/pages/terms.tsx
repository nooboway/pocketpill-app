import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function TermsAndConditionsPage() {
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
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-12">Terms and Conditions</h1>
          
          <div className="prose prose-sm md:prose-base dark:prose-invert prose-headings:font-serif prose-headings:font-normal prose-a:text-primary max-w-none text-muted-foreground space-y-6">
            <p>We use some cookies to help improve your experience on this website. Here's some more info about what we do with information we collect.</p>

            <p>Welcome to the Pocketpill Website (the "site"). We operate a platform consisting of a website and mobile application ("platform"), together with supporting logistics and payment infrastructure, for the sale and purchase of pharmaceutical products in Nigeria ("territory").</p>

            <p>These terms and conditions apply to websites, services, software applications and networks that allows for the authorized upload, access, purchase, sale, sharing and distribution of medical products on the "Pocketpill Platform". These general terms and conditions shall apply to buyers and sellers on the platform and shall govern your use of the platform and related services. This website is owned and operated by Pocketpill Limited.</p>

            <p>For the purposes of this website, the terms of "Pocketpill" and the "Pocketpill Platform" apply to any site or mobile application owned and operated by Pocketpill, including pocketpill.co and the Pocketpill mobile applications (each an "App"). The term "we", "us", and "our" all refer to pocketpill.co</p>

            <p>The following Terms and Conditions for the Pocketpill Platform is a legal contract between You, either an individual user or a Corporate entity ("You" or, collectively, "Users"), and Pocketpill regarding Your use of the Pocketpill Platform. You are hereby advised to carefully read these terms and conditions before using our Website (the "Site"). By using the Pocketpill Site, as defined below, you agree to be bound by the terms and conditions. These Terms and Conditions fully govern the use of the Pocketpill Platform.</p>

            <p>Please read carefully the following Terms and Conditions. By registering for, Accessing, Browsing, Posting or Using the Pocketpill Platform, you acknowledge that you have read and understood, and agree to be bound by, the following Terms and Conditions, including any additional guidelines and future modifications (collectively, the "Terms"). If at any time you do not agree to these Terms, please immediately terminate your use of the Pocketpill platform.</p>

            <h2>Definition</h2>
            <p>"Website" means the web site located at the URL https://pocketpill.co and includes the entirety of both the Pocketpill Site.</p>

            <p>"Pocketpill Public Site" means that portion of the Website that is generally available for use by any person who by accessing the Website agrees to be bound by the Website terms and conditions.</p>

            <p>"User" means those persons and entities that have registered, signed in to the platform and assented to the terms of this Agreement. Also referred to as "Buyers" Or "Sellers ".</p>

            <p>"Pocketpill Website Services" mean functions on the Pocketpill Website that allow users to search for and access technical product documents of Product Suppliers; order product samples on line directly from such suppliers; and request direct technical assistance from those suppliers.</p>

            <p>"The Pharmacy" Or "Pharmacy" refers to pharmacies who are in partnership with Pocketpill.</p>

            <h2>Account Creation</h2>
            <p>Although visiting our website does not need an account, certain operations like ordering products, posting reviews, and others require you to set up an account with pocketpill.co.</p>

            <p>To set up an account, you will be required to give certain information about yourself in the required form on the platform.</p>

            <p>All information provided by you is protected by us. You represent and warrant that the information provided by you during the registration is accurate.</p>

            <p>pocketpill.co is not responsible for any damages or losses because of your failure to maintain the confidentiality of your account.</p>

            <p>Our pocketpill.co Account, Password and other details in the account are personal to you and you may not transfer your account to anyone else.</p>

            <h2>Conditions of Use</h2>
            <p>You must be of age 18 years or older to visit, use the website or app, avail of the services in any manner. By visiting or registering or availing of service from the website or app, you agree to this Agreement and warrant Pocketpill that you are 18 years or older in age and that you have the right, authority, and sanity to use the website or app and agree to abide by this Agreement.</p>

            <h2>Ordering</h2>
            <p>By placing an order through our Website, you enter into an agreement with Pocketpill with respect to the processing of that order and forwarding it to the Participating Pharmacy. If you are paying online, Pocketpill is also responsible for any returns or refunds. However, the Pharmacy remains responsible for the quality and delivery of your order. You agree to take particular care when providing us with your details and warrant that these details are accurate and complete at the time of ordering. You also warrant that the credit or debit card details that you provide are for your own credit or debit card and that you have sufficient funds to make the payment.</p>

            <h2>The Cookies We Set</h2>
            
            <h3>Account related cookies</h3>
            <p>If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.</p>

            <h3>Login related cookies</h3>
            <p>We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.</p>

            <h3>Email newsletters related cookies</h3>
            <p>This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.</p>

            <h3>Orders processing related cookies</h3>
            <p>This site offers payment facilities and some cookies are essential to ensure that your order is remembered between pages so that we can process it properly.</p>

            <h3>Surveys related cookies</h3>
            <p>From time to time we offer user surveys and questionnaires to provide you with interesting insights, helpful tools, or to understand our user base more accurately. These surveys may use cookies to remember who has already taken part in a survey or to provide you with accurate results after you change pages.</p>

            <h3>Forms related cookies</h3>
            <p>When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</p>

            <h3>Site preferences cookies</h3>
            <p>In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</p>

            <h2>Third Party Cookies</h2>
            <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>

            <p>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</p>
            <p>For more information on Google Analytics cookies, see the official Google Analytics page.</p>

            <p>Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content. These cookies may track things such as how long you spend on the site or pages you visit which helps us to understand how we can improve the site for you.</p>

            <p>From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most.</p>

            <p>As we sell products it's important for us to understand statistics about how many of the visitors to our site actually make a purchase and as such this is the kind of data that these cookies will track. This is important to you as it means that we can accurately make business predictions that allow us to monitor our advertising and product costs to ensure the best possible price.</p>

            <p>We may use adverts to offset the costs of running this site and provide funding for further development. The behavioural advertising cookies used by this site are designed to ensure that we provide you with the most relevant adverts where possible by anonymously tracking your interests and presenting similar things that may be of interest.</p>

            <p>Several partners advertise on our behalf and affiliate tracking cookies simply allow us to see if our customers have come to the site through one of our partner sites so that we can credit them appropriately and where applicable allow our affiliate partners to provide any bonus that they may provide you for making a purchase.</p>

            <p>We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work the social media sites may set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.</p>

            <h2>More Information</h2>
            <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>

            <p>However if you are still looking for more information then you can contact us through one of our preferred contact methods:</p>

            <p>Email: <a href="mailto:support@pocketpill.co">support@pocketpill.co</a></p>
          </div>
        </div>
      </main>
    </div>
  );
}
