import { AiOutlineCloud } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { BiBookContent } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";

const clr = "#07597F"
const size = 60;
export const OurservicesData = [
  {
    id:1,
    icon: <CgWebsite size={size} color={clr}  />,
    title: "Website Development",
    text: "Crafting responsive and dynamic web solutions using the latest front-end and back-end technologies for seamless user experiences and optimized performance.",
  },
  {
    id:2,
    icon: <GiArtificialIntelligence  size={size} color={clr}  />,
    title: "AI / ML",
    text: "Harnessing the power of artificial intelligence (AI) and machine learning (ML) algorithms to unlock valuable insights, automate processes, and drive data-driven decision-making.",
  },
  {
    id:3,
    icon: <FaMobileAlt  size={size} color={clr}  />,
    title: "Mobile App Devcelopment",
    text: "Crafting advanced mobile apps on iOS and Android, using both native and cross-platform frameworks for intuitive interfaces and enhanced functionality.",
  },
  {
    id:4,
    icon: <MdOutlineSettingsApplications  size={size} color={clr} />,
    title: "Software Development",
    text: "Developing custom software solutions tailored to your unique business needs, utilizing cutting-edge technologies and agile methodologies to drive efficiency and streamline operations",
  },
  {
    id:5,
    icon: <FiShoppingCart  size={size} color={clr} />,
    title: "eCommerce Development",
    text: "Secure and user friendly eCommerce websites and applications, integrating payment gateways, inventory management, and personalized shopping experiences, to drive online sales and business growth.",
  },
  {
    id:6,
    icon: <BiBookContent size={size} color={clr}  />,
    title: "CMS",
    text: "Delivering scalable CMS empowering businesses to manage and publish digital content easily, using platforms like WordPress, Drupal, or Joomla for robust solutions.",
  },
  {
    id:7,
    icon: <AiOutlineCloud  size={size} color={clr} />,
    title: "Cloud Solutions",
    text: "Leveraging cloud computing technologies, such as AWS or Microsoft Azure, to enable scalable infrastructure, data storage, and seamless application deployment for enhanced efficiency and scalability.",
  },
  {
    id:8,
    icon: <BsPeople  size={size} color={clr} />,
    title: "CRM",
    text: "Implementing CRM systems to centralize sales, marketing, and customer service processes, using platforms like Salesforce, Microsoft Dynamics, or HubSpot for seamless engagement.",
  },
];
