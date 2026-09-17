import { Link } from "react-router-dom";
import { navigationItems } from "../Data/NavigationItems";

export const SiteFooter = () => (
  <footer className="site-footer">
    <div className="site-footer__inner">
      <div className="site-footer__identity">
        <p className="site-footer__eyebrow">Ember &amp; Oak</p>
        <address>
          12 Ember Lane, Osu, Accra
          <a href="tel:+233200000000">+233 20 000 0000</a>
        </address>
      </div>

      <nav className="site-footer__nav" aria-label="Footer navigation">
        <ul>
          {navigationItems.map((item) => (
            <li key={item.label}>
              <Link to={item.to} viewTransition>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="site-footer__fine-print">
        <span>&copy; {new Date().getFullYear()} Ember &amp; Oak</span>
        <span className="site-footer__credit">Powered by <strong>SBA</strong></span>
      </div>
    </div>
  </footer>
);
