import {
  BiHomeSmile,
  BiCategoryAlt,
  BiBookReader,
  BiBriefcase,
  BiPhoneCall,
} from "react-icons/bi";

const navLinks = [
  { id: 1, name: "خانه", path: "/", icon: <BiHomeSmile /> },
  { id: 2, name: "دسته بندی", path: "/category", icon: <BiCategoryAlt /> },
  { id: 3, name: "بلاگ", path: "/work", icon: <BiBookReader /> },
  {
    id: 4,
    name: "همکاری با دیجی تلنت",
    path: "/not-completed",
    icon: <BiBriefcase />,
  },
  { id: 5, name: "تماس با ما", path: "/contact-us", icon: <BiPhoneCall /> },
];

export default navLinks;
