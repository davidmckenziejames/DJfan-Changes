//import React from "react";
import * as React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Onboarding from "./pages/Onboarding/Onboarding";
import Settings from "./pages/Settings/Settings";
import Profile from "./pages/Profile/Profile";
import Product from "./pages/Product/Product";
import Checkout from "./pages/Checkout/Checkout";
import Feed from "./pages/Profile/Feed";
import WelcomeVIPoffer from "./pages/Messages/popupvip";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ProfileOffline from "./pages/ProfileOffline/ProfileOffline";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/roboto-mono/300.css";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/500.css";
import "@fontsource/roboto-mono/600.css";
import "@fontsource/roboto-mono/700.css";
import "./index.css";
import Signin from "./pages/Auth/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore/Explore";
import Billing from "./pages/Billing/Billing";
import theme from "./theme";
import "@fontsource/chakra-petch/300.css";
import "@fontsource/chakra-petch/400.css";
import "@fontsource/chakra-petch/500.css";
import "@fontsource/chakra-petch/600.css";
import "@fontsource/chakra-petch/700.css";
import { HelmetProvider } from "react-helmet-async";
import Privacy from "./pages/Legal/Privacy";
import Terms from "./pages/Legal/Terms";
import Cookies from "./pages/Legal/Cookies";
import Reviews from "./pages/Explore/Reviews";
import Speed from "./pages/Home/speed";
import Chat from "./pages/Messages/chat";
import Questions from "./pages/Explore/questions";
import TextQuestions from "./pages/Explore/textquestions";
import ParnterSignUp from "./pages/Messages/PartnerSignUp";
import Dashboard from "./pages/DJ/Dashboard";
import Inbox from "./pages/DJ/Inbox/Inbox";
import DMchat from "./pages/DJ/DM";
import NotificationsPage from "./pages/Settings/NotificationPage";
import ManageEvents from "./pages/DJ/ManageEvents";
import FanGuestlists from "./pages/Settings/FanGuestlists";
import GuestlistFlow from "./pages/DJ/GuestlistFlow";
import VIP from "./pages/Popup/VIP";
import VIPpage from "./pages/DJ/VIP/VIPpage";
import Demo from "./pages/Home/Demo";
import About from "./pages/Company/About";
import DemoConfirmation from "./pages/Company/Demo-Confirmation";
import SupportThankyous from "./pages/Auth/SupportThankyou";
import SupportThankyou from "./pages/Auth/SupportThankyou";
import Blog from "./pages/Blog/Blog";
import Venues from "./pages/Venues/Venues";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile/offline" element={<ProfileOffline />} />
            <Route path="/product" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/singlepost" element={<Explore />} />
            <Route path="/supportthankyou" element={<SupportThankyou />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/venues" element={<Venues />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>
);
