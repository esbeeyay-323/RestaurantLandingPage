import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PageLayout from "./Pages/PageLayout";
import FooterLayout from "./Pages/FooterLayout";
import NotFound from "./Pages/NotFound";
import {
  loadAboutPage,
  loadContactPage,
  loadGalleryPage,
  loadHomePage,
  loadMenuPage,
  loadReservationsPage,
  preloadAllRoutes,
  preloadRoute,
} from "./routeLoaders";

const HomePage = lazy(loadHomePage);
const Menu = lazy(loadMenuPage);
const Reservations = lazy(loadReservationsPage);
const About = lazy(loadAboutPage);
const Gallery = lazy(loadGalleryPage);
const Contact = lazy(loadContactPage);

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Ember & Oak | Wood-Fired Dining in Accra",
    description:
      "Gather around the fire for wood-grilled food, warm hospitality, and good company at Ember & Oak in Osu, Accra.",
  },
  "/menu": {
    title: "Menu | Ember & Oak",
    description:
      "Explore Ember & Oak's wood-fired menu of grills, seafood, shared plates, desserts, and cocktails.",
  },
  "/reservations": {
    title: "Reservations | Ember & Oak",
    description:
      "Request a table at Ember & Oak, a fire-led dining room in Osu, Accra.",
  },
  "/about": {
    title: "Our Story | Ember & Oak",
    description:
      "Discover the people, local ingredients, and live-fire cooking behind Ember & Oak.",
  },
  "/gallery": {
    title: "Gallery | Ember & Oak",
    description:
      "Step inside Ember & Oak through scenes from the hearth, dining room, bar, and table.",
  },
  "/contact": {
    title: "Contact | Ember & Oak",
    description:
      "Find Ember & Oak in Osu, Accra, or send the team a portfolio-demo enquiry.",
  },
};

const PageMetadata = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] ?? {
      title: "Page Not Found | Ember & Oak",
      description: "The requested Ember & Oak page could not be found.",
    };

    document.title = metadata.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", metadata.description);
  }, [pathname]);

  return null;
};

const RouteLoader = () => (
  <div className="route-loader" role="status" aria-live="polite">
    <span className="route-loader__mark" aria-hidden="true" />
    <span>Preparing the table</span>
  </div>
);

const RoutePreloader = () => {
  useEffect(() => {
    const preloadLinkedRoute = (event: Event) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");

      if (!link || link.origin !== window.location.origin) return;
      preloadRoute(link.pathname);
    };

    document.addEventListener("pointerover", preloadLinkedRoute, { passive: true });
    document.addEventListener("focusin", preloadLinkedRoute);
    document.addEventListener("touchstart", preloadLinkedRoute, { passive: true });

    const preloadTimer = window.setTimeout(preloadAllRoutes, 1200);

    return () => {
      window.clearTimeout(preloadTimer);
      document.removeEventListener("pointerover", preloadLinkedRoute);
      document.removeEventListener("focusin", preloadLinkedRoute);
      document.removeEventListener("touchstart", preloadLinkedRoute);
    };
  }, []);

  return null;
};

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <PageMetadata />
      <RoutePreloader />
      <Suspense fallback={<RouteLoader />}>
        <div className="route-transition-shell" key={pathname}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route element={<PageLayout />}>
              <Route path="/menu" element={<Menu />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route element={<FooterLayout />}>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </Suspense>
    </>
  );
}

export default App;
