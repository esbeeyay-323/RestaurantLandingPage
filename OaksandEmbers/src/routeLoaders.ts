export const loadHomePage = () => import("./Pages/HomePage");
export const loadMenuPage = () => import("./Pages/Menu");
export const loadReservationsPage = () => import("./Pages/Reservations");
export const loadAboutPage = () => import("./Pages/About");
export const loadGalleryPage = () => import("./Pages/Gallery");
export const loadContactPage = () => import("./Pages/Contact");

const routeLoaders: Record<string, () => Promise<unknown>> = {
  "/": loadHomePage,
  "/menu": loadMenuPage,
  "/reservations": loadReservationsPage,
  "/about": loadAboutPage,
  "/gallery": loadGalleryPage,
  "/contact": loadContactPage,
};

const pendingLoads = new Map<string, Promise<unknown>>();

export const preloadRoute = (pathname: string) => {
  const normalizedPath = pathname !== "/" ? pathname.replace(/\/$/, "") : pathname;
  const loader = routeLoaders[normalizedPath];

  if (!loader) return;

  if (!pendingLoads.has(normalizedPath)) {
    pendingLoads.set(normalizedPath, loader());
  }

  return pendingLoads.get(normalizedPath);
};

export const preloadAllRoutes = () => {
  Object.keys(routeLoaders).forEach(preloadRoute);
};
