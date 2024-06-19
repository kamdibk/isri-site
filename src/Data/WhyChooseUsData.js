import { FaChartLine, FaRegHandshake  } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";
import { GoLaw } from "react-icons/go";
import { TbCertificate } from "react-icons/tb";
import { GiPlayerTime } from "react-icons/gi";

const iconSize = 55;
// const iconColor = "rgb(7, 89, 127)"
const iconColor = "#800000"


export const WhyChooseUsData = [
    {
        id: 1,
        icon: <FaChartLine size={iconSize} color={iconColor} className="rotate-icon"/>,
        heading:"Meet Your Revenue Goal",
        description:"Real business results for companies with the goal of growing revenue"
    },
    {
        id: 2,
        icon: <Ri24HoursFill  size={iconSize} color={iconColor} className="rotate-icon"/>,
        heading:"Less Than 24 Hours Guaranteed Response",
        description:"Professionals known for fastest turnaround time"
    },
    {
        id: 3,
        icon: <TbCertificate  size={iconSize} color={iconColor} className="rotate-icon"/>,
        heading:"ISO 9001:2015 Certified",
        description:"Customer Satisfaction is our top priority"
    },
    {
        id: 4,
        icon: <FaRegHandshake   size={iconSize} color={iconColor} className="rotate-icon"/>,
        heading:"We Listen, We Learn, Understand, Then Build",
        description:"Designs & develops experiences that help you innovate and grow"
    },
    {
        id: 5,
        icon: <GoLaw  size={iconSize} color={iconColor} className="rotate-icon"/>,
        heading:"Dedicated Client Advocacy",
        description:"Special Team to focus on customers' success"
    },
    {
        id: 6,
        icon: <GiPlayerTime  size={iconSize} color={iconColor} className="rotate-icon"/>,
        heading:"Handle Tight Deadlines",
        description:"We are known to meet short notice deadlines"
    },
]