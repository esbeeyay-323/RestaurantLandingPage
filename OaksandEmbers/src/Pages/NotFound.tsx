import { Brand } from "../Components/Brand";

const NotFound = () => {
  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.assign("/");
  };

  return (
    <main className="not-found-page dark-surface min-h-dvh overflow-hidden">
      <header className="not-found-header">
        <a href="/" aria-label="Ember and Oak home">
          <Brand className="font-display text-[clamp(1.25rem,2vw,1.75rem)] font-medium uppercase tracking-[0.14em] text-bone-50" />
        </a>

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
            <a href="/">Return home</a>
            <button type="button" onClick={goBack}>Go back</button>
          </div>
        </div>
      </section>

      <footer className="not-found-footer">
        <span>404 · Page not found</span>
        <span>Fire · Flavour · Good company</span>
      </footer>
    </main>
  );
};

export default NotFound;
