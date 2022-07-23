import { VscDashboard, VscCheckAll } from "react-icons/vsc";
import { GiBookPile, GiNotebook, GiArmorUpgrade } from "react-icons/gi";
import { MdOutlineQuiz } from "react-icons/md";

export const routes = {
  student: [
    {
      title: "Dashboard",
      path: "/student/dashboard",
      icon: <VscDashboard />,
    },
    {
      title: "Courses",
      path: "/student/courses",
      icon: <GiBookPile />,
    },
    {
      title: "Quizes",
      path: "/student/quizes",
      icon: <MdOutlineQuiz />,
    },
    {
      title: "Assesments",
      path: "/student/assesments",
      icon: <VscCheckAll />,
    },
    {
      title: "Exams",
      path: "/student/exams",
      icon: <GiNotebook />,
    },
    {
      title: "Grades",
      path: "/student/grades",
      icon: <GiArmorUpgrade />,
    },
  ],
  instructor: [
    {
      title: "Dashboard",
      path: "/instructor/dashboard",
    },
    {
      title: "Courses",
      path: "/instructor/courses",
    },
  ],
  proctor: [
    {
      title: "Dashboard",
      path: "/proctor/dashboard",
    },
    {
      title: "Set Up",
      path: "/proctor/setup",
    },
  ],
};
