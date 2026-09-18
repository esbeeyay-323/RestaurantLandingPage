import { Outlet } from "react-router-dom";
import { SiteFooter } from "../Components/SiteFooter";

const FooterLayout = () => (
  <div className="site-page-shell">
    <Outlet />
    <SiteFooter />
  </div>
);

export default FooterLayout;
