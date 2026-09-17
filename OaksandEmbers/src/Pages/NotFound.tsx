import { Link, useLocation, useNavigate } from "react-router-dom";
import { Brand } from "../Components/Brand";

const NotFound = () => {

  const navigate = useNavigate();
  const location = useLocation();


  const goBack = () => {
    if (location.key === "default") {
    navigate("/", { replace: true, viewTransition: true });
  } else {
    navigate(-1);
  }
  };

  return (
    <main className="not-found-page dark-surface min-h-dvh overflow-hidden">
      <header className="not-found-header">
          <Brand className="font-display text-[clamp(1.25rem,2vw,1.75rem)] font-medium uppercase tracking-[0.14em] text-bone-50" />
        

        <p aria-hidden="true">Osu · Accra</p>
      </header>

      <section className="not-found-content" aria-labelledby="not-found-title">
        <div className="not-found-code" aria-hidden="true">
          <span>4</span>
          <span className="not-found-ember">
            <i />
          </span>
          <span>4</span>
        </div>

        <div className="not-found-copy">
          <p className="not-found-kicker">The trail went cold</p>
          <h1 id="not-found-title">Nothing cooking here.</h1>
          <p>
            The page you were looking for has left the table. Let&apos;s get
            you back somewhere warm.
          </p>

          <div className="not-found-actions">
            <Link to="/" viewTransition>Return home</Link>
            <button type="button" onClick={goBack}>Go back</button>
          </div>
        </div>
      </section>

    </main>
  );
};

export default NotFound;
