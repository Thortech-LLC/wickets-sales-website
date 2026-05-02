export default function App() {
  return (
    <div className="page-shell">
      <header className="hero reveal delay-1">
        <p className="eyebrow">Wickets Sales Site</p>
        <h1>Schedule Time With Joe</h1>
        <p className="hero-copy">
          Book a quick intro meeting to discuss your background, goals, and next
          steps with our hiring team.
        </p>
      </header>

      <main className="content-grid">
        <section className="card schedule-card reveal delay-2" aria-labelledby="schedule-heading">
          <div className="section-head">
            <h2 id="schedule-heading">Pick an Appointment Time</h2>
            <p>
              Use the scheduler below to book directly with Joe. Times are shown
              in your local timezone.
            </p>
          </div>

          <div className="iframe-wrap">
            <iframe
              src="https://calendly.com/wicketsales1"
              title="Schedule an appointment with Joe"
              loading="lazy"
            />
          </div>
        </section>

        <section className="card contact-card reveal delay-3" aria-labelledby="contact-heading">
          <div className="section-head">
            <h2 id="contact-heading">Contact</h2>
            <p>
              Have a question before booking? Reach out and we will get back to
              you soon.
            </p>
          </div>

          <div className="contact-list" role="list">
            <a role="listitem" href="mailto:joe@wickets.example" className="contact-item">
              wicketssales1@gmail.com
            </a>
            <a role="listitem" href="tel:+15550123456" className="contact-item">
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
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}