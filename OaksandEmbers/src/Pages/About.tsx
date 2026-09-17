import aboutOriginStory from "../assets/about-origin-story.jpg";
import { teamMembers } from "../Data/WebData";
import { Link } from "react-router-dom";

const values = [
  {
    title: "Live Fire",
    description:
      "Everything on the menu passes over charcoal or wood at some point. No shortcuts, no gas flame standing in for smoke.",
  },
  {
    title: "Local First",
    description:
      "Vegetables from Madina market, fish off the Jamestown boats, spices ground the same morning they're used.",
  },
  {
    title: "Long Tables",
    description:
      "Portions are built for sharing. Pull up a chair — we'll bring another one.",
  },
];


const About = () => {
   return (
    <>
    <main className="dark-surface-solid min-h-dvh flex flex-col w-full max-w font-about-body">
            <section className="about-hero-panel pt-24.5 w-full items-center justify-center flex flex-col  gap-6">
                    <div className="p-15 w-full max-w-160 lg:p-24">
                        <p className="text-center font-about-body text-[12px] uppercase tracking-[2.5px] text-[#b8432e]">our story</p>
                        <h1 className="text-center font-about-display text-[clamp(38px,5vw,58px)] font-medium leading-[1.1] text-[#f5efe4]">Built Around a Fire</h1>
                        <p className="text-center font-about-body text-[17px] leading-[1.65] text-[#a99d8b]"> Ember & Oak started with one steel-drum grill, one family recipe, and a belief that the best food comes from patience, not shortcuts.</p>
                    </div>
            </section>


            <section className="paper-surface w-full flex flex-col gap-6">
                    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-center lg:gap-12 lg:p-24">
                       <figure className="relative mx-auto aspect-3/2 w-full max-w-125 overflow-hidden lg:mx-0 lg:aspect-4/5 lg:max-w-108.5 lg:shrink-0">
                            <img
                                 src={aboutOriginStory}
                                 alt="Chef tending ribs over a steel-drum charcoal grill"
                                 width="1536"
                                 height="1024"
                                 loading="lazy"
                                 decoding="async"
                                 className="h-full w-full object-cover object-center"
                            />
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/65 to-transparent" />
                            <figcaption className="absolute bottom-5 left-5 font-about-body text-[13px] italic text-[#a99d8b]">
                                Osu, 2015 — the original drum grill
                            </figcaption>
                       </figure>
                       <div className="mx-auto w-full max-w-125 space-y-5 lg:mx-0 lg:max-w-[52ch]">
                            <h2 className="max-w-[24ch] font-about-display text-[32px] font-medium leading-[1.2] text-[#2a2019] lg:max-w-[16ch]">
                                From One Drum Grill to a Neighbourhood Table
                            </h2>
                            <p className="max-w-[52ch] text-left font-about-body text-[16px] leading-[1.7] text-[#7d7264]">
                                In 2015, Chef Kwame Owusu set up a single charcoal 
                                grill outside his family's compound in Osu, 
                                cooking pepper-marinated ribs the way his grandmother taught him — slow, 
                                over open coals, with nothing to hide behind.
                                Word spread faster than the smoke did. 
                                Within a year, the drum grill became a kitchen, 
                                the kitchen became a dining room, and the neighbours who 
                                used to queue on the sidewalk now have a table waiting for them.
                            </p>
                       </div>
                    </div>
            </section>

            <section className="dark-surface-solid w-full p-6 lg:py-24">
                <h2 className="mb-14 pt-6 text-center font-about-display text-[32px] font-medium text-[#f5efe4] lg:pt-0">How we cook</h2>

                <div className=" mx-auto grid w-full max-w-6xl grid-cols-1
                    border-y border-[#3B362F]
                    divide-y divide-[#3B362F]

                    lg:grid-cols-3
                    lg:border-b-0
                    lg:divide-x lg:divide-y-0">
                    {values.map(value => (
                        <article className="py-7 lg:px-8 lg:py-8" key={value.title}>
                            <h3 className="mt-7 font-about-display text-[19px] font-medium text-[#bd9354]">{value.title}</h3>

                            <p className="w-full font-about-body text-[14.5px] leading-[1.7] text-[#a99d8b]">{value.description}</p>
                        </article>
                    ))}
                </div>

                <div className="my-24 w-full flex justify-center items-center">
                    <p className="w-full text-center flex flex-col gap-2">
                        <span className="font-about-display text-[clamp(22px,2.6vw,30px)] font-normal italic leading-[1.4] text-[#f5efe4]">"A grill doesn't rush. Neither do we."</span>
                        <span className="font-about-body text-[13px] tracking-[0.6px] text-[#a99d8b]">Kwame Owusu, Founder & Head Chef</span>
                    </p>
                </div>

            </section>

            <section className="paper-surface w-full p-6 lg:py-24">
                  <h2 className="mb-14 pt-6 text-center font-about-display text-[32px] font-medium text-[#2a2019] lg:pt-0">Who's behind the Grill</h2>

                  <div className="w-full grid grid-cols-1 place-items-center gap-6 lg:grid-cols-3">
                    {
                        teamMembers.map(member => (
                            <div key={member.initial} className="flex flex-col justify-center items-center gap-6">
                                <div className="h-20 w-20 rounded-[999px] flex justify-center items-center border border-[#b8432e]">
                                        <span className="font-about-display text-[22px] uppercase text-[#b8432e]">{member.initial}</span>
                                </div>

                                    <h3 className="flex flex-col justify-center items-center gap-0.5">
                                        <span className="font-about-display text-[19px] font-medium text-[#2a2019]">{member.name}</span>
                                        <span className="font-about-body text-[12px] uppercase tracking-[1px] text-[#7d7264]">{member.role}</span>
                                    </h3>
                            </div>
                        ))
                    }

                 </div> 
            </section>

                        <section className="about-cta-panel w-full px-6 py-24 lg:py-26">
                            
                        <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-5 text-center">
                            <h2 className="max-w-[13ch] font-about-display text-[clamp(30px,4vw,44px)] font-medium text-[#f5efe4] lg:max-w-none">
                                Come Taste It Yourself
                            </h2>

                            <p className="max-w-[31ch] font-about-body text-[16px] text-[#a99d8b] lg:max-w-none">
                                Best enjoyed with people you like and time to spare.
                            </p>

                            <div className="mt-4 grid w-full max-w-48 grid-cols-1 gap-4 md:max-w-96 md:grid-cols-2 md:gap-4">
                                <Link
                                    to="/menu"
                                    viewTransition
                                    className="flex h-12 items-center justify-center border border-[#bd9354] px-5 font-about-body text-[12px] font-medium uppercase tracking-[1.6px] text-[#bd9354] transition-colors hover:bg-[#bd9354]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bd9354]"
                                >
                                    View the menu
                                </Link>
                                <Link
                                    to="/reservations"
                                    viewTransition
                                    className="flex h-12 items-center justify-center border border-[#c74431] bg-[#c74431] px-5 font-about-body text-[12px] font-semibold uppercase tracking-[1.6px] text-[#f5efe4] transition-colors hover:border-[#b8432e] hover:bg-[#b8432e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e65a3a]"
                                >
                                    Reserve a table
                                </Link>
                            </div>
                        </div>

                        </section>

    </main>
    </>
   )
}

export default About;
