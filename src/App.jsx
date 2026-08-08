import { useEffect, useState } from "react";
import ContactForm from "./components/contact_form/ContactForm.jsx";
import Header from "./components/header/Header.jsx"

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <div className="page-shell">
      <Header
        isDark={isDark}
        onToggleTheme={() => setTheme(isDark ? "light" : "dark")}
      />
      <main className="content-grid">
        
        {/* <section
          className="card schedule-card reveal delay-2"
          aria-labelledby="schedule-heading"
        >
          <div className="section-head">
            <h2 id="schedule-heading">Pick an Appointment Time</h2>
            <p>
              Use the scheduler below to book directly with Joe. Times are shown
              in your local timezone.You can also connect with us on Instagram.
            </p>
          </div>

          <div className="iframe-wrap">
            <iframe
              src="https://calendly.com/wicketsales1"
              title="Schedule an appointment with Joe"
              loading="lazy"
            />
          </div>
        </section> */}
        <ContactForm />

        <section
          className="card contact-card reveal delay-3"
          aria-labelledby="contact-heading"
        >
          <div className="contact-list" role="list">
            {/* <a
              role="listitem"
              href="mailto:wicketssales1@gmail.com"
              className="contact-item"
            >
              wicketssales1@gmail.com
            </a>
            <a role="listitem" href="tel:+12087476716" className="contact-item">
              +1 (208) 747-6716
            </a>
            <a
              role="listitem"
              href="https://www.linkedin.com/in/joe-torman-371809237/"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              LinkedIn Profile
            </a> */}
            <a
              role="listitem"
              href="https://www.instagram.com/wicketsnation/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              Instagram
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}