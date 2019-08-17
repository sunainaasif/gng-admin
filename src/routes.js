/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Products",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Add School Products",
    rtlName: "طباعة",
    icon: BubbleChart,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Add Health & Beauty",
    rtlName: "إخطارات",
    icon: BubbleChart,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Add Apparels",
    rtlName: "ملف تعريفي للمستخدم",
    icon: BubbleChart,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Add Pharmacy",
    rtlName: "الرموز",
    icon: BubbleChart,
    component:Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Add & Grocery",
    rtlName: "خرائط",
    icon: BubbleChart,
    component: Maps,
    layout: "/admin"
  },
  
  // {
  //   path: "/rtl-page",
  //   name: "Add Home Appliances",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: BubbleChart,
  //   component: RTLPage,
  //   layout: "/rtl"
  // },
  {
    path: "/upgrade-to-pro",
    name: "Add Home Appliances",
    rtlName: "التطور للاحترافية",
    icon: BubbleChart,
    component: UpgradeToPro,
    layout: "/admin"
  }
];

export default dashboardRoutes;
