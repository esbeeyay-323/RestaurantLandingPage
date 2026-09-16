import { useState } from "react";
import { menuItems, menuTabs } from "../Data/MenuItems";
import { DesktopHeader, MobileHeader } from "../Components/Header";
import menuSteakImage from "../assets/menu-steak-dark.png"

type ActiveCategory = (typeof menuTabs)[number]["id"];

function Menu() {
  const [activeCategory, setActiveCategory] =
    useState<ActiveCategory>("all");

  const categoryTabs = menuTabs.filter((tab) => tab.id !== "all");
  const visibleCategories =
    activeCategory === "all"
      ? categoryTabs
      : categoryTabs.filter((tab) => tab.id === activeCategory);

  return (
    <main className="menu-stage">
        <img
            className="menu-food-image"
            src={menuSteakImage}
            alt=""
            aria-hidden="true"
          />

      <div className="menu-paper" aria-hidden="true" />
      <div className="menu-burn-detail" aria-hidden="true" />

      <div className="menu-content">
        <div className="menu-header-shell">
          <MobileHeader
            className="menu-glass-header fixed inset-x-0 top-0 z-30 flex w-full items-center justify-between p-3 lg:hidden"
            DrawerClassName="brightness-0"
            BrandClassName="font-display text-[clamp(1.2rem,4vw,1.6rem)] font-semibold uppercase tracking-[0.14em] text-ink-900"
          />
          <DesktopHeader NavClassName="text-ink-900" className="menu-glass-header fixed inset-x-0 top-0 z-30 hidden w-full grid-cols-[1fr_auto_1fr] items-center p-8 lg:grid" />
        </div>

        <div className="menu-body px-[clamp(1rem,3vw,4rem)] pb-[clamp(2rem,4vw,6rem)]">
          <header className="mt-14 lg:mt-24">
            <p className="font-body text-[clamp(0.6875rem,0.65vw,1.25rem)] font-semibold uppercase tracking-[0.18em] text-ember-600">
              Wood-fired dining
            </p>

            <h1 className="mt-2 font-display text-[clamp(3rem,6vw,10rem)] font-medium leading-[0.9] tracking-tight text-ink-900">
              From the Fire
            </h1>

            <p className="mt-5 max-w-3xl font-body text-[clamp(0.875rem,0.85vw,1.5rem)] leading-[1.7] text-ink-600">
              Honest ingredients and plates made for sharing.
            </p>
          </header>

          <div className="flex flex-1 flex-col gap-8">
            <nav
              aria-label="Menu categories"
              className="mt-10 overflow-x-auto border-b border-[rgba(77,50,29,0.2)] lg:mt-12"
            >
              <ul className="flex w-max min-w-full gap-6 lg:gap-8">
                {menuTabs.map((tab) => {
                  const isActive = activeCategory === tab.id;

                  return (
                    <li key={tab.id}>
                      <button
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setActiveCategory(tab.id)}
                        className={`border-b-2 pb-3 font-body text-[clamp(0.75rem,0.75vw,1.25rem)] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
                          isActive
                            ? "border-ember-600 text-ember-600"
                            : "border-transparent text-ink-600 hover:text-ink-900"
                        }`}
                      >
                        {tab.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div
              className={`mt-10 grid grid-cols-1 gap-y-12 lg:mt-14 lg:gap-x-16 lg:gap-y-16 ${
                activeCategory === "all" ? "lg:grid-cols-2" : "lg:grid-cols-1"
              }`}
            >
              {visibleCategories.map((category) => {
                const itemsInCategory = menuItems.filter(
                  (item) => item.category === category.id,
                );

                return (
                  <section
                    className="min-w-0 border-t border-[rgba(43,33,24,0.65)] pt-3"
                    key={category.id}
                  >
                    <h2 className="font-display text-[clamp(1.875rem,2.6vw,5rem)] font-semibold leading-none text-ink-900">
                      {category.label}
                    </h2>

                    {itemsInCategory.map((item) => (
                      <article
                        className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b border-[rgba(77,50,29,0.2)] py-4"
                        key={item.id}
                      >
                        <div className="min-w-0 pt-1">
                          <h3 className="font-display text-[clamp(1.125rem,1.25vw,2.25rem)] font-semibold leading-tight text-ink-900">
                            {item.name}
                          </h3>
                          <p className="mt-1 font-body text-[clamp(0.8rem,0.85vw,1.4rem)] leading-[1.55] text-ink-600">
                            {item.description}
                          </p>
                        </div>

                        <p className="whitespace-nowrap pt-1 font-body text-[clamp(0.8rem,0.85vw,1.4rem)] font-semibold tracking-[0.04em] text-ink-900">
                          <span className="mr-1 text-[0.75em] tracking-[0.08em] text-ink-600">
                            GHS
                          </span>
                          {item.price}
                        </p>
                      </article>
                    ))}
                  </section>
                );
              })}
            </div>
          </div>

          <p className="mt-14 text-center font-body text-[clamp(0.6875rem,0.65vw,1.125rem)] leading-[1.5] text-ink-600 lg:mt-20">
            Please inform your server of any allergies or dietary requirements.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Menu;
