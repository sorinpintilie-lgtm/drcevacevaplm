'use client'

interface HeroProps {
  onOpenBooking: () => void
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="hero" aria-label="Video hero">
      <img 
        className="heroVideo" 
        src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
        alt="Modern dental clinic interior" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div className="heroOverlay" aria-hidden="true"></div>

      <div className="heroContent">
        <div className="container">
          <div className="heroInner">
            <div className="kicker">
              <i></i> Stomatologie modernă • Tratamente personalizate • Rezultate naturale
            </div>

            <h1 className="heroTitle">Zâmbete sănătoase, tratamente fără compromisuri.</h1>

            <p className="heroSubtitle">
              Echipa CLINICII DENTARE DR. GHEORGHIADE îți oferă un plan clar, tehnologie modernă și o experiență calmă, de la prima vizită până la rezultat.
            </p>

            <div className="heroBtns">
              <button className="btn btnPrimary btnPrimaryOnVideo" type="button" onClick={onOpenBooking}>
                Programează-te
              </button>
              <a className="btn btnOnVideo" href="#servicii">Vezi serviciile</a>
            </div>

            <div className="heroTrust" aria-label="Beneficii">
              <div className="trustItem">
                <div className="check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20 7L10 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                Medici cu experiență
              </div>
              <div className="trustItem">
                <div className="check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20 7L10 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                Tratamente personalizate
              </div>
              <div className="trustItem">
                <div className="check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20 7L10 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                Tehnologie modernă
              </div>
              <div className="trustItem">
                <div className="check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20 7L10 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                Mediu sigur & confortabil
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scrollHint" aria-hidden="true">
        <div className="scrollPill">Derulează pentru servicii ↓</div>
      </div>
    </section>
  )
}