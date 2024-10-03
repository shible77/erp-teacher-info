import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaUser,
  FaBook,
  FaExternalLinkAlt,
  FaRegCalendarCheck,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import {
  MdEventBusy,
  MdEvent,
  MdOpenInNew,
  MdEdit,
  MdMeetingRoom,
  MdAssignment,
  MdGroup,
  MdSchool,
  MdRecordVoiceOver,
} from "react-icons/md";
import { BiCalendarEvent, BiTask } from "react-icons/bi";
import { IoSchoolOutline } from "react-icons/io5";
import {
  RiDashboardFill,
  RiFileEditFill,
  RiExternalLinkLine,
} from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { BsFileText } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../resource/logo.jpeg"

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <RiDashboardFill />,
  },
  {
    name: "Records",
    icon: <MdEvent />,
    subRoutes: [
      {
        path: "/committee",
        name: "Exam Committee",
        icon: <MdGroup />,
      },
      {
        path: "/courses",
        name: "Courses",
        icon: <MdSchool />,
      },
      {
        path: "/meetings",
        name: "Meeting",
        icon: <MdRecordVoiceOver />,
      },
    ],
  },
  {
    name: "External Portal",
    icon: <RiExternalLinkLine />,
    subRoutes: [
      {
        path: "",
        name: "Editorial Management",
        icon: <RiFileEditFill />,
      },
      {
        path: "",
        name: "Leave management",
        icon: <BiCalendarEvent />,
      },
      {
        path: "",
        name: "Attendance Management",
        icon: <FaRegCalendarCheck />,
      },
      {
        path: "",
        name: "Exam Remuneration",
        icon: <FaMoneyCheckAlt />,
      },
      {
        path: "",
        name: "Meeting management",
        icon: <MdMeetingRoom />,
      },
      {
        path: "",
        name: "Result procession",
        icon: <MdAssignment />,
      },
    ],
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <FaUser />,
  },
];

const SideBar = ({ children, setIsLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate()
  const storedToken = sessionStorage.getItem("token");

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  const basePath = process.env.REACT_APP_API_BASE_URL
  const handleClick = () =>{
    sessionStorage.removeItem("token")
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <div className="main-container">
      <motion.div
        animate={{
          width: isOpen ? "16%" : "5%",

          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className={`sidebar `}
      >
        <div className="top_section">
          <AnimatePresence>
            {isOpen && (
              <motion.img
                src={Logo}
                alt="Logo"
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="logo"
              />
            )}
          </AnimatePresence>

          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <section className="routes">
          {routes.map((route, index) => {
            if (route.subRoutes) {
              return (
                <SidebarMenu
                  setIsOpen={setIsOpen}
                  route={route}
                  showAnimation={showAnimation}
                  isOpen={isOpen}
                  key={index}
                />
              );
            }

            return (
              <NavLink
                to={route.path}
                key={index}
                // className="link"
                // activeClassName="active"
                className={({ isActive }) =>
                  isActive ? "active link" : "link"
                }
              >
                <div className="icon">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            );
          })}
          <button type="button" class="btn btn-danger" onClick={handleClick}>Logout</button>
        </section>
      </motion.div>

      <main style={{ width: isOpen ? "80%" : "90%" }}>{children}</main>
    </div>
  );
};

export default SideBar;
