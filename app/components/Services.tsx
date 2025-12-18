export default function Services() {
  return (
    <section className="section" id="servicii">
      <div className="container">
        <div className="sectionTitle">
          <div>
            <h2>Servicii stomatologice complete</h2>
          </div>
        </div>

        <div className="cards" role="list">
          <article className="card" role="listitem">
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', marginBottom: '12px' }}>
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                alt="Dental implant procedure" 
                style={{ width: '100%', height: '160px', objectFit: 'cover' }}
              />
            </div>
            <div className="cardHeader">
              <div className="cardIcon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 3h6v4H9z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Implantologie</h3>
            </div>
            <p>Soluții sigure pentru dinți lipsă, plan de tratament personalizat și rezultate naturale.</p>
          </article>

          <article className="card" role="listitem">
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', marginBottom: '12px' }}>
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                alt="Dental aesthetics and smile design" 
                style={{ width: '100%', height: '160px', objectFit: 'cover' }}
              />
            </div>
            <div className="cardHeader">
              <div className="cardIcon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 20c4-2 12-2 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M6 11c0-4 2-7 6-7s6 3 6 7c0 5-2 9-6 9s-6-4-6-9Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Estetică dentară</h3>
            </div>
            <p>Zâmbete armonioase: albire, fațete, reconstrucții estetice, cu grijă pentru natural.</p>
          </article>

          <article className="card" role="listitem">
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', marginBottom: '12px' }}>
              <img 
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                alt="Orthodontic treatment with braces" 
                style={{ width: '100%', height: '160px', objectFit: 'cover' }}
              />
            </div>
            <div className="cardHeader">
              <div className="cardIcon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 7l-4 5 4 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 7l4 5-4 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Ortodonție</h3>
            </div>
            <p>Corectarea poziției dinților pentru funcționalitate, estetică și sănătate pe termen lung.</p>
          </article>

          <article className="card" role="listitem">
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', marginBottom: '12px' }}>
              <img 
                src="/dental-clinic-workers-with-a-patient-2024-10-16-08-17-47-utc-min.jpg" 
                alt="Endodontic root canal treatment" 
                style={{ width: '100%', height: '160px', objectFit: 'cover' }}
              />
            </div>
            <div className="cardHeader">
              <div className="cardIcon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 8h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M6 22c2-6 2-14 6-14s4 8 6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Endodonție</h3>
            </div>
            <p>Tratamente precise, confortabile și sigure, salvăm dintele atunci când se poate.</p>
          </article>

          <article className="card" role="listitem">
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', marginBottom: '12px' }}>
              <img 
                src="/young-female-dentist-in-dental-office-dentist-at-2025-03-15-16-02-16-utc-min.jpg" 
                alt="Dental prosthetics and crowns" 
                style={{ width: '100%', height: '160px', objectFit: 'cover' }}
              />
            </div>
            <div className="cardHeader">
              <div className="cardIcon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M7 20h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 4h6l1 8H8l1-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M8 12c0 5 2 8 4 8s4-3 4-8" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Protetică</h3>
            </div>
            <p>Refacerea zâmbetului cu lucrări protetice funcționale și estetice, adaptate fiecărui caz.</p>
          </article>

          <article className="card" role="listitem">
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', marginBottom: '12px' }}>
              <img 
                src="/doctor-orthodontist-playing-with-the-boy-in-the-de-2025-10-15-18-19-30-utc.jpg" 
                alt="Pediatric dentistry for children" 
                style={{ width: '100%', height: '160px', objectFit: 'cover' }}
              />
            </div>
            <div className="cardHeader">
              <div className="cardIcon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s7-4 7-10a7 7 0 0 0-14 0c0 6 7 10 7 10Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M10 11h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 9v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Pedodonție</h3>
            </div>
            <p>Grijă specială pentru copii: vizite blânde, acomodare și prevenție pe termen lung.</p>
          </article>
        </div>
      </div>
    </section>
  )
}