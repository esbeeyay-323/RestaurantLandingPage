import { useState, type KeyboardEvent } from "react";
import { menuItems, menuTabs } from "../Data/MenuItems";
import menuSteakImage from "../assets/menu-steak-dark.jpg"

type ActiveCategory = (typeof menuTabs)[number]["id"];

function Menu() {
  const [activeCategory, setActiveCategory] =
    useState<ActiveCategory>("all");

  const categoryTabs = menuTabs.filter((tab) => tab.id !== "all");
  const visibleCategories =
    activeCategory === "all"
      ? categoryTabs
      : categoryTabs.filter((tab) => tab.id === activeCategory);

  const selectCategory = (category: ActiveCategory) => {
    setActiveCategory(category);
  };

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    tabIndex: number,
  ) => {
    const lastIndex = menuTabs.length - 1;
    let nextIndex: number | undefined;

    if (event.key === "ArrowRight") nextIndex = (tabIndex + 1) % menuTabs.length;
    if (event.key === "ArrowLeft") nextIndex = (tabIndex - 1 + menuTabs.length) % menuTabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = lastIndex;

    if (nextIndex === undefined) return;

    event.preventDefault();
    const tabs = event.currentTarget
      .closest('[role="tablist"]')
      ?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    const nextTab = tabs?.[nextIndex];

    nextTab?.focus();
    nextTab?.click();
  };

  return (
    <main className="menu-stage dark-surface">
        <img
            className="menu-food-image"
            src={menuSteakImage}
            alt=""
            aria-hidden="true"
            width="1024"
            height="1536"
            decoding="async"
          />

      <div className="menu-paper" aria-hidden="true" />
      <div className="menu-burn-detail" aria-hidden="true" />

      <div className="menu-content">
        <div className="menu-body px-[clamp(1rem,3vw,4rem)] pb-[clamp(2rem,4vw,6rem)]">
          <header className="menu-intro mt-12 lg:mt-16">
            <p className="menu-eyebrow font-body font-semibold uppercase text-ember-600">
              Wood-fired dining
            </p>

            <h1 className="menu-title mt-2 font-display font-medium text-ink-900">
              From the Fire
            </h1>

            <p className="menu-lede mt-4 max-w-3xl font-body text-ink-600">
              Honest ingredients and plates made for sharing.
            </p>
          </header>

          <div className="flex flex-1 flex-col gap-8">
            <nav
              aria-label="Menu categories"
              className="menu-category-nav mt-10 overflow-x-auto border-b border-[rgba(77,50,29,0.2)] lg:mt-12"
            >
              <ul
                className="flex w-max min-w-full gap-6 lg:gap-8"
                role="tablist"
                aria-label="Choose a menu category"
              >
                {menuTabs.map((tab, tabIndex) => {
                  const isActive = activeCategory === tab.id;

                  return (
                    <li key={tab.id} role="presentation">
                      <button
                        id={`menu-tab-${tab.id}`}
                        type="button"
                        role="tab"
                        aria-controls="menu-category-panel"
                        aria-selected={isActive}
                        tabIndex={isActive ? 0 : -1}
                        onClick={(event) => {
                          selectCategory(tab.id);
                          event.currentTarget.scrollIntoView({
                            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                              ? "auto"
                              : "smooth",
                            block: "nearest",
                            inline: "center",
                          });
                        }}
                        onKeyDown={(event) => handleTabKeyDown(event, tabIndex)}
                        className={`menu-category-tab font-body font-semibold uppercase ${
                          isActive
                            ? "menu-category-tab--active"
                            : "text-ink-600 hover:text-ink-900"
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
              key={activeCategory}
              id="menu-category-panel"
              role="tabpanel"
              aria-labelledby={`menu-tab-${activeCategory}`}
              tabIndex={0}
              className={`menu-category-panel mt-10 grid grid-cols-1 gap-y-12 lg:mt-14 lg:gap-x-16 lg:gap-y-16 ${
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
                    <h2 className="menu-section-title font-display font-semibold text-ink-900">
                      {category.label}
                    </h2>

                    {itemsInCategory.map((item) => (
                      <article
                        className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b border-[rgba(77,50,29,0.2)] py-4"
                        key={item.id}
                      >
                        <div className="min-w-0 pt-1">
                          <h3 className="menu-item-title font-display font-semibold text-ink-900">
                            {item.name}
                          </h3>
                          <p className="menu-item-description mt-1 font-body text-ink-600">
                            {item.description}
                          </p>
                        </div>

                        <p className="menu-item-price whitespace-nowrap pt-1 font-body font-semibold text-ink-900">
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

          <p className="menu-allergy-note mt-14 text-center font-body text-ink-600 lg:mt-16">
            Please inform your server of any allergies or dietary requirements.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Menu;
