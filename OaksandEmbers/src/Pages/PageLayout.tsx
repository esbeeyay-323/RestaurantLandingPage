import { Outlet } from "react-router-dom";
import { DesktopHeader, MobileHeader } from "../Components/Header";
import { SiteFooter } from "../Components/SiteFooter";

const PageLayout = () => (
  <div className="site-page-shell">
    <MobileHeader
      className="site-header fixed inset-x-0 top-0 z-30 flex h-24.5 w-full items-center justify-between p-6 lg:hidden"
      DrawerClassName="brightness-0 invert"
      BrandClassName="font-display text-[clamp(1.35rem,4vw,1.75rem)] font-medium uppercase tracking-[0.14em] text-bone-50"
    />
    <DesktopHeader
      NavClassName="text-bone-50"
      className="site-header fixed inset-x-0 top-0 z-30 hidden h-24.5 w-full grid-cols-[1fr_auto_1fr] items-center p-6 lg:grid"
    />

    <Outlet />
    <SiteFooter />
  </div>
);

export default PageLayout;
