// icons
import { AiOutlineSolution } from "react-icons/ai";
import { GiTeamIdea } from "react-icons/gi";
import { MdOutlineSettingsSuggest,MdDashboardCustomize, MdOutlineSecurity  } from "react-icons/md";
import { FaProjectDiagram, FaCreativeCommonsRemix, FaBalanceScaleLeft  } from "react-icons/fa";
import { GrUserExpert, GrUserSettings} from "react-icons/gr";
import { Ri24HoursFill,RiSecurePaymentFill  } from "react-icons/ri";
import { IoExpand } from "react-icons/io5";
import { TbSettingsCog  } from "react-icons/tb";
import { LiaUserShieldSolid } from "react-icons/lia";
import { BsPersonFillGear,BsWindowStack } from "react-icons/bs";
import { LuClipboardCheck } from "react-icons/lu";

const iconSize = 55;
const iconColor = "rgb(7, 89, 127)";

const routesConfig = {
  services: [
    {
      path: "services/software-development",
      content: {
        heading: "Software Development Services",
        heroImageLink: "/img/software-development.jpg",
        headPoints: [
          "Software Solution and Service Provider for over Two Decades.",
          "Team of Highly Experienced Software Developers on all latest technologies.",
          "Software Solutions for all Industry Verticals.",
          "Software Development using Agile and Waterfall.",
          "Dedicated Project Managers and Account Manager.",
          "We deliver the source code to let you have complete control.",
          "24 Hours query responses guaranteed.",
        ],
        quote: {
          quote:
            "Software is a great combination between artistry and engineering.",
          quoter: "Bill Gates",
        },
        whyUs: [
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Solutions",
            reason:
              "We have been providing cutting-edge and customized software solutions since our founding in 2000. We have assisted 13000+ clients across the globe in streamlining their operations through our expert software product development services.",
          },
          {
            icon: <GiTeamIdea size={iconSize} color={iconColor} />,
            heading: "Knowledge and Expertise ",
            reason:
              "Our team has extensive knowledge of various industries, allowing us to create industry-specific software applications that bring significant value to your organization.",
          },
          {
            icon: (
              <MdOutlineSettingsSuggest size={iconSize} color={iconColor} />
            ),
            heading: "Customized Solutions ",
            reason:
              "We specialize in developing custom software solutions for businesses of all sizes. Our team is comprised of experienced programmers who are known for their outstanding consulting services and for writing clean code.",
          },
          {
            icon: <FaProjectDiagram size={iconSize} color={iconColor} />,
            heading: "Proactive Approach ",
            reason:
              "We understand your requirement first and then provide you best solution to achieve your unique business idea.",
          },
          {
            icon: <GrUserExpert size={iconSize} color={iconColor} />,
            heading: "Experienced Team",
            reason:
              "Our team of developers are highly experienced in latest technologies and can help you achieve the maximum scalability by developing solution as per the latest industry standards and relevance.",
          },
          {
            icon: <Ri24HoursFill size={iconSize} color={iconColor} />,
            heading: "24/7 Support ",
            reason:
              "SynapseIndia team is always known for its availability and great customer support. Our team of highly professional developers is always available 24/7 to promptly address any queries.",
          },
        ],
      },
    },
    {
      path: "services/ecommerce-solutions",
      content: {
        heading: "eCommerece Ssolutions",
        heroImageLink: "/img/ecommerce-solutions.jpg",
        headPoints: [
          "100% Secure Online Stores",
          "Payment Gateway Integration Expert",
          "E-Commerce Solutions powered by AI/AR and blockchain to double your business revenue.",
          "Awarded Shopping Cart Development Company.",
          "e-commerce platform featuring omnichannel integration, personalized shopping experiences, and automated marketing.",
        ],
        quote: {
          quote:
            '"Good websites get applause, Great websites get business." - So, if you want to create a great e-commerce website, it`s important to hire experts who have the knowledge and experience to develop and manage it effectively. ',
          quoter: "Paul Cookson, a digital marketing expert, and author",
        },
        whyUs: [
          {
            icon: <FaCreativeCommonsRemix size={iconSize} color={iconColor} />,
            heading: "Advanced E-commerce Technology",
            reason:
              "Our e-commerce solutions feature a user-friendly interface that is easy to navigate, combined with advanced technology such as AR and VR that can help improve the overall customer experience and increase engagement.",
          },
          {
            icon: <GrUserSettings size={iconSize} color={iconColor} />,
            heading: "Personalization at Scale",
            reason:
              "We use AI and machine learning to provide personalized experiences for your customers, at scale. Our e-commerce solutions can help you deliver personalized recommendations, tailored content, and customized promotions, enhancing customer engagement and loyalty.",
          },
          {
            icon: <IoExpand size={iconSize} color={iconColor} />,
            heading: "Scalable and Flexible Architecture",
            reason:
              "Our e-commerce solutions are built on a scalable and flexible architecture that can handle high traffic volumes and accommodate future growth. We use cloud computing and microservices to ensure that your e-commerce platform is always up-to-date and easily expandable.",
          },
          {
            icon: <TbSettingsCog size={iconSize} color={iconColor} />,
            heading: "Multichannel Integration",
            reason:
              "Our e-commerce solutions can be seamlessly integrated with your social media channels and third-party marketplaces, providing a truly multichannel experience for your customers. Our solutions can help you manage your inventory and sales across multiple channels, improving visibility and control over your entire e-commerce operation.",
          },
          {
            icon: <RiSecurePaymentFill  size={iconSize} color={iconColor} />,
            heading: "Secure and Reliable Payment Processing",
            reason:
              "Our e-commerce solutions use the latest encryption and tokenization technologies to ensure secure and reliable payment processing. We support multiple payment options, including mobile payments and digital wallets, providing a seamless checkout experience for your customers.",
          },
          {
            icon: <MdDashboardCustomize  size={iconSize} color={iconColor} />,
            heading: "Intuitive Content Management System",
            reason:
              "Our user-friendly content management system manages and updates clients' e-commerce websites effortlessly. We create and publish product listings, promotional banners, blog posts, and other content without any technical expertise.",
          },
        ],
      },
    },
    {
      path: "services/mobile-apps-development",
      content: {
        heading: "Mobile apps development",
        heroImageLink: "/img/mob.jpg",
        headPoints: [
          "High-quality, custom-built mobile apps for businesses of all sizes",
          "Payment Gateway Integration Expert",
          "Cutting-edge technology that covers most app platforms",
          "Experienced team of mobile app developers",
          "Affordable pricing and transparent process with source code delivered at end",
        ],
        quote: {
          quote:
            "In my opinion, the future of mobile is the future of everything.",
          quoter: "Matt Galligan, Co-founder of Circa",
        },
        whyUs: [
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Advanced E-commerce Technology",
            reason:
              "Our e-commerce solutions feature a user-friendly interface that is easy to navigate, combined with advanced technology such as AR and VR that can help improve the overall customer experience and increase engagement.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Personalization at Scale",
            reason:
              "We use AI and machine learning to provide personalized experiences for your customers, at scale. Our e-commerce solutions can help you deliver personalized recommendations, tailored content, and customized promotions, enhancing customer engagement and loyalty.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Scalable and Flexible Architecture",
            reason:
              "Our e-commerce solutions are built on a scalable and flexible architecture that can handle high traffic volumes and accommodate future growth. We use cloud computing and microservices to ensure that your e-commerce platform is always up-to-date and easily expandable.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Multichannel Integration",
            reason:
              "Our e-commerce solutions can be seamlessly integrated with your social media channels and third-party marketplaces, providing a truly multichannel experience for your customers. Our solutions can help you manage your inventory and sales across multiple channels, improving visibility and control over your entire e-commerce operation.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Secure and Reliable Payment Processing",
            reason:
              "Our e-commerce solutions use the latest encryption and tokenization technologies to ensure secure and reliable payment processing. We support multiple payment options, including mobile payments and digital wallets, providing a seamless checkout experience for your customers.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Intuitive Content Management System",
            reason:
              "Our user-friendly content management system manages and updates clients' e-commerce websites effortlessly. We create and publish product listings, promotional banners, blog posts, and other content without any technical expertise.",
          },
        ],
      },
    },
    {
      path: "services/cloud-solution",
      content: {
        heading: "Cloud Solutions",
        heroImageLink: "/img/mob.jpg",
        headPoints: [
          "Comprehensive Cloud Solution provider.",
          "Expertise and Experience in designing and implementing cloud solutions.",
          "Scalable and Flexible solutions.",
          "Pay only for the resources you need.",
          "Launch New products and Services faster.",
        ],
        quote: {
          quote:
            'The cloud is the great equalizer... it`s not about having the biggest or most expensive data center anymore, it`s about how quickly you can scale up and down." ',
          quoter: "Werner Vogels, CTO of Amazon",
        },
        whyUs: [
          {
            icon: <LiaUserShieldSolid size={iconSize} color={iconColor} />,
            heading: "Reliability",
            reason:
              "Our cloud computing services are highly reliable, with guaranteed uptime and 24/7 support to ensure that your business operations are always up and running",
          },
          {
            icon: <FaBalanceScaleLeft  size={iconSize} color={iconColor} />,
            heading: "Scalability",
            reason:
              "We offer flexible and scalable cloud computing solutions that can easily accommodate your changing business needs. With our services, you can scale up or down your computing resources based on your requirements.",
          },
          {
            icon: <MdOutlineSecurity  size={iconSize} color={iconColor} />,
            heading: "Security",
            reason:
              "We take the security of your data very seriously and offer robust security features to protect your sensitive information. Our cloud computing services include advanced encryption, multi-factor authentication, and regular security audits to ensure that your data is safe from cyber threats.",
          },
          {
            icon: <BsPersonFillGear size={iconSize} color={iconColor} />,
            heading: "Expertise",
            reason:
              "Our team is well equipped with the latest cloud technologies, including multi-cloud environments, serverless computing, and containerization. We have the knowledge and skills to develop customized cloud solutions that are powered by cutting-edge technology.",
          },
          {
            icon: <BsWindowStack size={iconSize} color={iconColor} />,
            heading: "Customization",
            reason:
              "We understand the unique requirements and preferences of each organization when it comes to cloud computing solutions. We provide highly configurable cloud solutions that cater to our client's unique requirements. Our team works directly with you to understand your business goals and issues, whether you run a major organization or a startup.",
          },
          {
            icon: <LuClipboardCheck size={iconSize} color={iconColor} />,
            heading: "Compliance",
            reason:
              "We place a high priority on compliance and follow all applicable laws and industry standards to protect the security and integrity of your data in the cloud. With our secure cloud solutions, you can feel confident knowing that your private data is protected because they are made to comply with strict regulations like GDPR, HIPAA, and PCI-DSS.",
          },
        ],
      },
    },
    {
      path: "services/website-development",
      content: {
        heading: "Website Development company",
        heroImageLink: "/img/mob.jpg",
        headPoints: [
          "13,000+ Websites Delivered",
          "Hire Certified Website Developers",
          "20 Years of experience in Website Making",
          "Empowering Small, Medium & Large Enterprises",
          "We deliver the source code, to give you complete control",
        ],
        quote: {
          quote: "Simplicity is the ultimate sophistication.",
          quoter: "Leonardo Da Vinci",
        },
        whyUs: [
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Understand Business Requirements",
            reason:
              "Together, you and our team of skilled developers will build a unique website that is suited to your unique business requirements.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Agile Methodologies",
            reason:
              "Your website must make use of the most recent web technology to stay competitive as technology advances quickly. Our team of professionals will quickly choose the best website development tool and make sure your project is finished in accordance with industry standards.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Top-Notch Client Contentment",
            reason:
              "Our website design services assist clients in rising to the top of their respective industries. 85% of our clients from different industries have used our services to effectively accomplish their business goals.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Modernize Technologies",
            reason:
              "The technologies we use to develop your dream website are state of the art and most modern in terms of functionalities and usability.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Innovative Design Approach",
            reason:
              "Our team of talented designers creates visually attractive and captivating websites that attract visitors with creative flare and user-centric design principles. We make sure that your website stands out from the competition, clearly conveys your brand identity, and draws in your target audience by emphasizing innovation and creativity.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Comprehensive Support and Maintenance",
            reason:
              "We understand that launching a website is just the beginning of your online journey. Our technical team works on regular updates and security patches. We also troubleshoot and provide technical assistance to address any issues or concerns you may have, allowing you to focus on running your business while we take care of your website's maintenance needs.",
          },
        ],
      },
    },
    {
      path: "services/cms-solutions",
      content: {
        heading: "Cms Solutions",
        heroImageLink: "/img/mob.jpg",
        headPoints: [
          "Streamline your content management with our powerful CMS solution.",
          "Easy to customize your website's functionality and features.",
          "Save time and resources with our secure and reliable CMS platform.",
          "Get valuable insights into your website's performance with our CMS solution.",
        ],
        quote: {
          quote:
            "A CMS should provide you with the tools to create, manage, and distribute your content effectively, without requiring you to become a technology expert.",
          quoter: "Mark Boulton, Designer and Art Director",
        },
        whyUs: [
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Innovative Solutions",
            reason:
              "We are constantly exploring new technologies and techniques to create innovative solutions that help our clients stand out in a crowded online marketplace.  ",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Scalable and Flexible",
            reason:
              "Our CMS solution is scalable and flexible, allowing you to easily add new features and functionality as your business grows and evolves.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Content Collaboration",
            reason:
              "Our CMS solution enables content collaboration among team members, providing a centralized platform for content creation and management.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Integration with Third-Party Services",
            reason:
              "Our CMS solution seamlessly integrates with a wide range of third-party services, such as social media platforms, payment gateways, and marketing automation tools, to streamline your workflow and enhance your website's functionality.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "SEO-friendly",
            reason:
              "Our CMS solution is optimized for search engines, ensuring that your website is easily discoverable by your target audience.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "User-friendly Interface and Admin Panel",
            reason:
              "We prioritize user experience and usability in every CMS solution we develop. Our team focuses on creating intuitive user interfaces and user-friendly admin panels. With our user-centric approach, you can efficiently manage your website and ensure a seamless experience for your visitors.",
          },
        ],
      },
    },
    {
      path: "services/crm-solutions",
      content: {
        heading: "CRM Development Company",
        heroImageLink: "/img/mob.jpg",
        headPoints: [
          "Automate repetitive task, freeing up your effort to focus on other tasks.",
          "Real-time data and insights into your customer interaction.",
          "Fully customizable and scalable solution.",
          "High value customer support and service for your business.",
          "Effective Collaboration on customer data.",
          "Easy to implement and use.",
        ],
        quote: {
          quote:
            "CRM is all about building relationships with your customers. The technology is just a tool that helps you do that more effectively.",
          quoter: "Paul Greenberg",
        },
        whyUs: [
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Expertise",
            reason:
              "Our stays up-to-date with the latest CRM technologies, including cloud-based solutions, artificial intelligence, and automation. We have the knowledge and skills to develop customized CRM solutions that are powered by cutting-edge technology.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Customized CRM Solutions",
            reason:
              "We take a customized approach to CRM development, tailoring our services to meet the unique needs and goals of each client. Our team will work closely with you to understand your business processes and requirements, and design a CRM solution that fits your specific needs.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Integration with Other Systems",
            reason:
              "We understand that a CRM system doesn't exist in isolation. That's why we have expertise in integrating CRM solutions with other systems, including marketing automation, sales automation, and customer service software. This ensures that your CRM system is fully integrated with your other business processes and tools.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "User-Friendly Design",
            reason:
              "We believe that a CRM system should be easy to use and intuitive for all users. That's why we prioritize user-friendly design in our CRM development process, creating systems that are not only powerful but also easy to navigate and use.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Data Security and Privacy",
            reason:
              "We understand the importance of data security and privacy for our clients. That's why we have robust security measures in place to protect your data from unauthorized access, breaches, and other threats. We also ensure that our CRM systems are fully compliant with all relevant data privacy regulations.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Comprehensive Support and Maintenance",
            reason:
              "We provide comprehensive support and maintenance services to ensure the continued success of your CRM solution. With proactive monitoring and timely assistance, we ensure that your CRM solution remains optimized, secure, and aligned with your business objectives.",
          },
        ],
      },
    },
    {
      path: "services/web-design",
      content: {
        heading: "Web Design Services",
        heroImageLink: "/img/mob.jpg",
        headPoints: [
          "Mobile-first and responsive designs.",
          "Comprehensive SEO and online marketing strategies.",
          "Up-to-date with latest design trends and technologies",
          "Great user experience",
          "Web design to meet all business requirement.",
        ],
        quote: {
          quote:
            "Design is not just what it looks like and feels like. Design is how it works",
          quoter: "Steve Jobs",
        },
        whyUs: [
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Interactive Design",
            reason:
              "We specialize in developing interactive websites that engage users and create memorable experiences. We use technologies such as WebGL, Three.js, and A-Frame to create immersive 3D experiences, as well as animations and other interactive elements",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Speed Optimization",
            reason:
              "We optimize website loading times to ensure that our clients' websites load quickly and provide a seamless user experience. We use technologies such as AMP (Accelerated Mobile Pages) and CDNs (Content Delivery Networks) to reduce page loading times and improve website performance.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Integration with Third-party Applications",
            reason:
              "We understand that businesses rely on a variety of third-party applications to run their operations, which is why we specialize in integrating websites with third-party applications such as Salesforce, HubSpot, and Mailchimp. We use technologies such as API (Application Programming Interface) integration and webhooks to ensure seamless integration with third-party applications.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Customized & Responsive Design",
            reason:
              "Our web design services are tailored to meet the unique needs of each business. We use the latest design technologies, such as Adobe XD and Figma, to create custom designs that are visually stunning, easy to use, and optimized for both desktop and mobile devices.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Team",
            reason:
              "Our team of experienced designers and developers work together to deliver websites and mobile applications that are both beautiful and functional.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Dedicated Support and Maintenance",
            reason:
              "We provide ongoing support and maintenance services to ensure that your website remains secure, up-to-date, and optimized for performance. Our team holds proactive monitoring and timely assistance to ensure your website continues to deliver results and support your business goals.",
          },
        ],
      },
    },
    {
      path: "services/hire-developer",
      content: {
        heading: "Hire Dedicated Developers",
        heroImageLink: "/img/mob.jpg",
        headPoints: [
          "Expertise in a wide range of programming languages and tools.",
          "Experienced and skilled developers with a proven track record of success.",
          "Flexible hiring models to fit your unique needs and budget.",
          "Dedicated project managers for effective communication and quality control.",
          "Proven development process for delivering high-quality, scalable, and maintainable software solutions.",
        ],
        quote: {
          quote:
            '"The best developer is the one who can not only write good code but also communicate well, work collaboratively, and continuously learn and improve."',
          quoter: "Simon Allardice",
        },
        whyUs: [
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Expertise in Agile Methodology",
            reason:
              "Our developers are experienced in working with Agile methodology, allowing us to deliver software solutions in a more iterative and collaborative manner, resulting in faster time-to-market and better quality output.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Focus on User-Centric Design",
            reason:
              "Our developers focus on user-centric design to ensure that the software solution is intuitive, easy to use, and meets the needs of end-users, resulting in better user engagement and adoption.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Expertise in Diverse Industries",
            reason:
              "Our developers have experience working with clients across various industries, including healthcare, finance, e-commerce, education, and more, and are equipped with the knowledge and skills needed to create tailored solutions for each sector.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Flexible Hiring Model",
            reason:
              "We offer competitive pricing for our development services, and our flexible hiring models allow clients to choose an engagement model that fits their budget and project requirements.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Transparent and Timely Communication",
            reason:
              "We believe in open and transparent communication with our clients, providing regular updates on project progress and addressing any concerns or questions promptly to ensure a smooth development process.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Time Zone Advantage",
            reason:
              "With a significant overlap in working hours, communication and collaboration between clients and developers in India are seamless and efficient. Real-time communication channels such as video conferencing, instant messaging, and project management tools enable effective collaboration, ensuring that project timelines are met and objectives are achieved without delays.",
          },
        ],
      },
    },
    {
      path: "services/ride-booking",
      content: {
        heading: "Ride Booking Solutions",
        heroImageLink: "/img/mob.jpg",
        headPoints: [
          "Streamline your content management with our powerful CMS solution.",
          "Easy to customize your website's functionality and features.",
          "Save time and resources with our secure and reliable CMS platform.",
          "Get valuable insights into your website's performance with our CMS solution.",
        ],
        quote: {
          quote:
            '"Good websites get applause, Great websites get business." - So, if you want to create a great e-commerce website, it`s important to hire experts who have the knowledge and experience to develop and manage it effectively. ',
          quoter: "Bill Gates",
        },
        whyUs: {
          icon: <hr />,
          heading: "",
          reason: "",
        },
      },
    },
    {
      path: "services/gaming-solution",
      content: {
        heading: "Game Development Services",
        heroImageLink: "/img/mob.jpg",
        headPoints: [
          "Customized game development that caters to the unique needs of our clients.",
          "Cross-platform gaming that maximizes audience reach and accessibility.",
          "Expert game engine development for high-quality, optimized games.",
          "Cutting-edge technologies, such as AI and VR, that create immersive gaming experiences.",
          "A team of experienced game developers that combines creativity with technical expertise to deliver outstanding results.",
        ],
        quote: {
          quote:
            '"Gaming technology has the potential to revolutionize industries beyond just entertainment, from education to healthcare and beyond."',
          quoter: "Frank Azor",
        },
        whyUs: [
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Experienced Team",
            reason:
              "Our team of developers and designers have years of experience in the latest including Unity and AR.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Customized Solutions",
            reason:
              "We work closely with our clients to understand their unique needs and develop customized solutions that meet their specific requirements.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Cross-Platform Expertise",
            reason:
              "We specialize in developing games that can be played across multiple platforms, from PCs to mobile devices and consoles.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Cutting-Edge Technologies",
            reason:
              "We stay up-to-date with the latest gaming technologies, including artificial intelligence, virtual reality, and more, to create immersive experiences that push the boundaries of what is possible.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Commitment to Quality",
            reason:
              "We are dedicated to delivering high-quality games that exceed our clients' expectations. We use the latest tools and techniques to ensure that our games are optimized for performance, reliability, and user engagement.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Proven Track Record",
            reason:
              "Our portfolio of completed projects showcases our diverse capabilities and demonstrates our ability to deliver high-quality, innovative gaming experiences that captivate audiences and drive engagement. When you choose our gaming solutions, you can trust that you're partnering with a team that is committed to your success and dedicated to delivering exceptional results.",
          },
        ],
      },
    },
    {
      path: "services/ai-ml",
      content: {
        heading: "AI & Machine Learning Solutions",
        heroImageLink: "/img/mob.jpg",
        headPoints: [
          "Predictive maintenance in business processes/operations.",
          "Enhanced and Engaging Customer experience.",
          "Analyze large volumes of data and identify security threats.",
          "Driving Innovation by powering next generation product and services.",
          "Enable a data driven business strategy.",
        ],
        quote: {
          quote:
            "Artificial intelligence is one of the most profound things we`re working on as humanity. It has the potential to fundamentally change the way we live, work and communicate with each other. ",
          quoter: "Sundar Pichai",
        },
        whyUs: [
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Expertise",
            reason:
              "Our team of AI/ML experts has a wealth of experience in developing and implementing AI/ML solutions for businesses of all sizes. We can provide customized solutions tailored to your specific needs and help you achieve your business goals faster.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Cost Savings",
            reason:
              "By using our AI/ML solutions, businesses can realize cost savings, as it can automate repetitive tasks, reduce the need for human labor, and increase efficiency and productivity.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Personalized Solutions",
            reason:
              "Our AI/ML solutions can provide personalized solutions to users based on their specific needs and preferences, helping businesses create a more engaging and personalized customer experience.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Better Customer Experience",
            reason:
              "Our AI/ML solutions can help you improve the customer experience by providing personalized recommendations, predicting customer needs, and responding to inquiries in real-time. This can lead to higher customer satisfaction rates, increased loyalty, and ultimately, more revenue for your business.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Innovation",
            reason:
              "We believe that AI/ML solutions like ChatGPT are driving innovation across industries, enabling businesses to create new products and services that were previously impossible. By choosing us as your AI/ML solutions provider, you can stay ahead of the curve and continue to innovate in your respective field.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Advanced Technologies and Tools",
            reason:
              "Our advanced algorithm models and powerful development framework tools empower the power of AI and ML to unlock valuable insights, automate tasks, and drive actionable intelligence for your business. Our team keeps track of the latest trends and developments in AI and ML to ensure that our solutions are always at the forefront of innovation.",
          },
        ],
      },
    },
    {
      path: "services/robotic-process-automation",
      content: {
        heading: "RPA Services",
        heroImageLink: "/img/mob.jpg",
        headPoints: [
          "Increase Efficiency by automating repetitive tasks.",
          "Improve accuracy by reducing manual errors to achieve reliable data.",
          "Faster response time with overall better user experience.",
          "Easy Integration with existing systems.",
          "Rapid ROI by automating daily task and reducing cost.",
        ],
        quote: {
          quote:
            "Robotic Process Automation is not about replacing humans, it`s about enabling them to focus on what humans do best: creative, problem-solving work.",
          quoter: "Chris Huff",
        },
        whyUs: [
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Expertise",
            reason:
              "We have a team of experienced RPA professionals with in-depth knowledge of the latest RPA technologies and best practices.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Customization",
            reason:
              "We offer customized RPA solutions tailored to meet the specific needs of your business, ensuring maximum efficiency and ROI.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Scalability",
            reason:
              "Our RPA solutions can be easily scaled up or down as your business needs change, making them an ideal long-term solution.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Reliability",
            reason:
              "Our RPA solutions are designed and implemented with the highest level of quality and reliability, ensuring consistent and accurate results.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Support",
            reason:
              "We provide comprehensive support throughout the entire RPA implementation process, from initial consultation to ongoing maintenance and support, ensuring a seamless and successful implementation.",
          },
          {
            icon: <AiOutlineSolution size={iconSize} color={iconColor} />,
            heading: "Performance and Quality",
            reason:
              "We focus on industry best practices and quality standards throughout the development process to ensure that our solutions meet the highest levels of performance, reliability, and scalability. Our team conducts thorough testing and validation to identify and address any issues or bugs, ensuring that your RPA solutions deliver accurate results and optimal performance in real-world scenarios.",
          },
        ],
      },
    },
  ],
  industries: [
    {
      path: "industries/medical-and-healthcare",
      content: "this is sample content",
    },
    {
      path: "industries/education",
      content: "this is sample content",
    },
    {
      path: "industries/banking-and-finance",
      content: "this is sample content",
    },
    {
      path: "industries/media-and-entertainment",
      content: "this is sample content",
    },
    {
      path: "industries/retial-and-wholesale",
      content: "this is sample content",
    },
    {
      path: "industries/customer-products",
      content: "this is sample content",
    },
    {
      path: "industries/travel",
      content: "this is sample content",
    },
    {
      path: "industries/real-estate",
      content: "this is sample content",
    },
    {
      path: "industries/automotive",
      content: "this is sample content",
    },
  ],
};
export default routesConfig;
