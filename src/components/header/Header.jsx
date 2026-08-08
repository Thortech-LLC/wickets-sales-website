import logo from "/logo-text.png";

function Header({ isDark, onToggleTheme }) {
  return (
    <header className="hero reveal delay-1">
      <button
        type="button"
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? "Light mode" : "Dark mode"}
      </button>
      <img
        src={logo}
        alt="Wickets Sales"
        className="hero-logo"
        style={{ borderRadius: "7.5px" }}
      />
      <p className="eyebrow">Wickets Sales</p>
      <h1>Become a Wicket</h1>
      <p className="hero-copy">
        Apply your skills and build a career that will generate
        you generational wealth.
      </p>
    </header>
  );
}

export default Header;
