import { Brand } from "./Brand";
import MyDrawer from "./Drawer";

const navigationItems = ["Menu", "Reservations", "About", "Gallery", "Contact"]

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
    font-semibold uppercase tracking-[0.14em] text-bone-50" />

    <nav aria-label="Primary navigation">
      <ul
        className={`flex gap-[clamp(1.25rem,1.5vw,2.5rem)] 
            font-body text-[clamp(0.75rem,0.65vw,1.25rem)] font-medium uppercase tracking-[0.06em] ${NavClassName}`}
      >
        {navigationItems.map((item) => (
          <li key={item}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </nav>

    <div aria-hidden="true" />
  </header>
)
