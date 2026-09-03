import mainHero from "../assets/flame-grilled-ribeye.jpg"
import MyDrawer from "../Components/Drawer"
const HomePage = () => {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-coal-950">
        <header className="w-full p-3 flex justify-end lg:invisible">
            <MyDrawer/>
        </header>
      <section className="flex w-full flex-col items-start gap-6 p-6 pb-3 pt-1">
        <div className="w-full flex items-center flex-col justify-center text-center">
            <h1 className="font-display text-[23px] font-semibold uppercase tracking-[0.14em] text-bone-50 md:text-[30px]">
              Ember <span className="text-ember-500">&amp;</span> Oak
            </h1>
            <div className="mt-7 flex flex-col font-display text-[56px] font-medium leading-[0.9] tracking-[-0.025em] text-bone-50 md:text-[72px] lg:text-[96px]">
                <span>Fire.</span>
                <span>Flavour.</span>
                <span>Good Company.</span>
            </div>

        </div>
        
      <div className="w-full flex items-center justify-center">
        <img
          className="image-blend h-auto w-150 max-w-full"
          src={mainHero}
          alt="Flame-grilled ribeye"
          decoding="async"
          fetchPriority="high"
        />
    </div>  
        <div className="w-full flex flex-col gap-6">
            <button
              type="button"
              className="h-14 w-full cursor-pointer border border-ember-300 bg-ember-600 px-6 font-body text-[13px] font-semibold uppercase tracking-[0.14em] text-bone-50 transition-colors duration-200 hover:bg-ember-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember-300 active:bg-ember-600 md:h-13"
            >
              Make a Reservation
            </button>
            <button
              type="button"
              className="h-14 w-full cursor-pointer border border-brass-400 bg-transparent px-6 font-body text-[13px] font-semibold uppercase tracking-[0.14em] text-brass-200 transition-colors duration-200 hover:border-brass-200 hover:bg-coal-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass-400 active:bg-coal-800 md:h-13"
            >
              Explore the Menu
            </button>
        </div>
        
      </section>
    </main>
  )
}

export default HomePage
