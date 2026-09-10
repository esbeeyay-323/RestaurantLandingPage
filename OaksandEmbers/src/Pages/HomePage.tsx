import mainHero from "../assets/flame-grilled-ribeye.jpg"
import { Brand } from "../Components/Brand"
import { DesktopHeader, MobileHeader } from "../Components/Header"


const heroLines = ["Fire.", "Flavour.", "Good Company."]

const actions = [
  { label: "Make a Reservation", variant: "ember" },
  { label: "Explore the Menu", variant: "brass" },
] as const

const buttonBaseClasses = [
  "button-breathe h-14 w-full cursor-pointer border px-6",
  "font-body text-[13px] font-semibold uppercase tracking-[0.14em]",
  "transition-colors duration-200 focus-visible:outline-2",
  "focus-visible:outline-offset-4 md:h-13",
].join(" ")

const buttonVariantClasses = {
  ember: [
    "button-breathe--ember border-ember-300 bg-ember-600 text-bone-50",
    "hover:bg-ember-500 focus-visible:outline-ember-300 active:bg-ember-600",
  ].join(" "),
  brass: [
    "button-breathe--brass border-brass-400 bg-transparent text-brass-200",
    "hover:border-brass-200 hover:bg-coal-800",
    "focus-visible:outline-brass-400 active:bg-coal-800",
  ].join(" "),
}

const HeroHeading = () => (
  <h1 className="mt-7 flex flex-col items-center font-display text-[clamp(2.35rem,12.5vw,3.5rem)] font-medium leading-[0.9] tracking-tight text-bone-50 md:text-[72px] lg:text-[clamp(6rem,5.5vw,9rem)]">
    {heroLines.map((line) => (
      <span className="hero-type-line" key={line}>
        {line}
      </span>
    ))}
  </h1>
)

const ActionButtons = ({ className }: { className: string }) => (
  <div className={className}>
    {actions.map(({ label, variant }) => (
      <button
        key={label}
        type="button"
        className={`${buttonBaseClasses} ${buttonVariantClasses[variant]}`}
      >
        {label}
      </button>
    ))}
  </div>
)

const HomePage = () => (
  <main className="flex min-h-dvh flex-col items-center bg-coal-950">
    <MobileHeader
      className="flex w-full justify-end p-3 lg:hidden"
      DrawerClassName="brightness-0 invert"
    />
    <DesktopHeader NavClassName="text-bone-50" className = "hidden w-full grid-cols-[1fr_auto_1fr] items-center p-8 lg:grid bg-coal-950" />

    <section className="flex w-full flex-col items-start gap-6 px-4 pb-3 pt-1 sm:px-6 lg:flex-1 lg:flex-row lg:items-center lg:justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-6 text-center">
        <Brand className="lg:hidden" />
        <HeroHeading />
        <ActionButtons className="hidden w-4/5 gap-6 lg:flex" />
      </div>

      <div className="flex w-full items-center justify-center">
        <img
          className="image-blend h-auto w-full lg:w-[clamp(32rem,35vw,100rem)] lg:max-w-full"
          src={mainHero}
          alt="Flame-grilled ribeye"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      <ActionButtons className="flex w-full flex-col gap-6 lg:hidden" />
    </section>
  </main>
)

export default HomePage
