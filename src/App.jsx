import { useEffect, cookies, i18n, useTranslation } from "@/utils/Imports";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Dropdown_Lang from "@/components/Dropdown_Lang";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import ForgetPassword from "./pages/ForgetPassword";
import Order from "./pages/order/Order";
import Profile from "./pages/profile/Profile";
import Home from "./pages/Home/Home";
import NavbarWithMegaMenu from "./components/NavbarWithMegaMenu";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import DeleteOrder from "./components/DeleteOrder";
import EditOrder from "./components/EditOrder";
import ViewOrders from "./components/ViewOrders";
import MyFooter from "./components/MyFooter";

function App() {
  // const lang = cookies.get("i18next") || "en";

  // useEffect(() => {
  //   window.document.dir = i18n.dir();
  // }, [lang]);

  return (
    <>
      <BrowserRouter future={{ v7_relativeSplatPath: true }}>
        <header>
          <NavbarWithMegaMenu />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/user/profile" element={<Profile />}>
            <Route path="delete-order" element={<DeleteOrder />} />{" "}
            <Route path="edit-order" element={<EditOrder />} />{" "}
            <Route path="view-orders" element={<ViewOrders />} />
            <Route path="new-order" element={<Order />} />
          </Route>
        </Routes>
        <footer>
          <MyFooter/>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
