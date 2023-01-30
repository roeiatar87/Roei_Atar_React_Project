import {
  FaHome,
  FaSignOutAlt,
  FaSignInAlt,
  FaRegistered,
} from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { BsInfoSquareFill } from "react-icons/bs";

const HomePage = {
  displayName: `Home`,
  linkTo: "/home",
  icon: <FaHome style={{ marginRight: 10 }} />,
};

const AboutPage = {
  displayName: "About US",
  linkTo: "/about",
  icon: <BsInfoSquareFill style={{ marginRight: 10 }} />,
};

const simpleReg = {
  displayName: "Simple Registration",
  linkTo: "/simpleRegistration",
  icon: <FaRegistered style={{ marginRight: 10 }} />,
};
const businessReg = {
  displayName: "Business Registration",
  linkTo: "/businessRegistration",
  icon: <FaRegistered style={{ marginRight: 10 }} />,
};
const SignIn = {
  displayName: "Sign In",
  linkTo: "/signIn",
  icon: <FaSignInAlt style={{ marginRight: 10 }} />,
};
const MyTabs = {
  displayName: "My Tabs",
  linkTo: "/mytabs",
  icon: <MdBusinessCenter style={{ marginRight: 10 }} />,
};

const SignOut = {
  displayName: "Sign Out",
  linkTo: "/signout",
  icon: <FaSignOutAlt style={{ marginRight: 10 }} />,
};
const BusinessCard = {
  displayName: "Business Card Creation",
  linkTo: "/businessCardPage",
};
export const MenuForGuest = [
  HomePage,
  AboutPage,
  simpleReg,
  businessReg,
  SignIn,
];
export const MenuForBusiness = [HomePage, AboutPage, MyTabs, SignOut];
export const MenuForRegular = [HomePage, AboutPage, SignOut];
