import { NavLink } from "react-router-dom"

export const Brand = ({className}: {
  className?: string
 
}) => (
  <NavLink to="/" viewTransition
    className={`${className}`}
  >
    Ember <span className="text-ember-500">&amp;</span> Oak
  </NavLink>
)


// Old nav

//   <header className="w-full sticky top-0 shadow-sm items-center p-6 bg-[radial-gradient(ellipse_at_30%_85%,rgba(184,67,46,0.35),transparent_55%),
//             radial-gradient(ellipse_at_75%_15%,rgba(189,147,84,0.12),transparent_50%)] bg-[#1c1712] flex justify-between lg:hidden">
//                     <Brand className="justify-self-start font-display text-[clamp(1.4rem,1.75vw,3.5rem)] 
//                     font-semibold uppercase tracking-[0.14em] text-bone-50"/>
//                     <MyDrawer className={""}/>
//                 </header>
//                 <div className="hidden top-0 sticky shadow-xl scheme-dark p-6 bg-black lg:flex">
//                 <DesktopHeader NavClassName="text-bone-50" className = "hidden w-full grid-cols-[1fr_auto_1fr] items-center lg:grid"/>
//                 </div>
