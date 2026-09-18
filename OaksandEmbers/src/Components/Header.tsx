import { NavLink } from "react-router-dom";
import { Brand } from "./Brand";
import MyDrawer from "./Drawer";
import { navigationItems } from "../Data/NavigationItems";

interface classNameProps  {
    className : string;
    NavClassName :string;
}

interface MobileHeaderProps {
  className: string;
  DrawerClassName: string;
  BrandClassName?: string;
}

export const MobileHeader = ({ className, DrawerClassName, BrandClassName }: MobileHeaderProps) => (
  <header className={className}>
    {BrandClassName && <Brand className={BrandClassName} />}
    <MyDrawer className={DrawerClassName} />
  </header>
)

export const DesktopHeader = ({className, NavClassName}:classNameProps) => (
  <header
    className={`${className}`}
  >
    <Brand className="justify-self-start font-display text-[clamp(1.4rem,1.75vw,3.5rem)] 
    font-medium uppercase tracking-[0.14em] text-bone-50" />

    <nav aria-label="Primary navigation">
      <ul
        className={`primary-nav flex gap-[clamp(0.75rem,1vw,1.5rem)] font-body ${NavClassName}`}
      >
        {navigationItems.map((item) => (
          <li key={item.to}>
            <NavLink
              viewTransition
              className={({ isActive }) =>
                `desktop-nav-link ${isActive ? "desktop-nav-link--active" : ""}`
              }
              end={item.to === "/"}
              to={item.to}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>

    <div aria-hidden="true" />
  </header>
)
