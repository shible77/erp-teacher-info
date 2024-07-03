import { NavLink } from "react-router-dom";
import { FaBars, FaUser, FaBook } from "react-icons/fa";
import { MdEventBusy, MdEvent } from "react-icons/md";
import { BiCalendarEvent, BiTask } from "react-icons/bi";
import { IoSchoolOutline } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { BsFileText } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <RiDashboardFill />,
  },
  {
    path: "/courses",
    name: "Courses",
    icon: <FaBook />,
  },
  {
    name: "Upcomings",
    icon: <MdEvent />,
    subRoutes: [
      {
        path: "/classes",
        name: "Classes",
        icon: <IoSchoolOutline />,
      },
      {
        path: "/evaluations",
        name: "Evaluations",
        icon: <BiTask />,
      },
    ],
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <FaUser />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

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
              <motion.h1
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="logo"
              >
                TeachersIMS
              </motion.h1>
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
                className="link"
                activeClassName="active"
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
        </section>
      </motion.div>

      <main style={{ width: isOpen ? "80%" : "90%" }}>{children}</main>
    </div>
  );
};

export default SideBar;
