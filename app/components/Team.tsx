export default function Team() {
  return (
    <section className="section" id="echipa">
      <div className="container">
        <div className="sectionTitle">
          <div>
            <h2>Echipa noastră</h2>
            <p>Profesioniști dedicați sănătății zâmbetului tău.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px', marginTop: '18px' }}>
          <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius2)', padding: '16px', background: 'var(--card)', boxShadow: '0 10px 28px rgba(15,23,42,.06)' }}>
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', marginBottom: '12px' }}>
              <img 
                src="/portrait-of-senior-male-dentist-with-dental-instru-2025-01-16-22-34-30-utc.jpg" 
                alt="Dr. Andrei Popescu - Implantologie" 
                style={{ width: '100%', height: '240px', objectFit: 'cover' }}
              />
            </div>
            <h3 style={{ margin: '0 0 6px', fontSize: '16px' }}>Dr. Andrei Popescu</h3>
            <p style={{ margin: '0', color: 'var(--muted)', fontSize: '13px' }}>Specialist Implantologie</p>
            <p style={{ margin: '8px 0 0', color: 'var(--muted2)', fontSize: '12px' }}>10+ ani experiență în implantologie și chirurgie orală</p>
          </div>

          <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius2)', padding: '16px', background: 'var(--card)', boxShadow: '0 10px 28px rgba(15,23,42,.06)' }}>
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', marginBottom: '12px' }}>
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                alt="Dr. Mihai Ionescu - Estetică dentară" 
                style={{ width: '100%', height: '240px', objectFit: 'cover' }}
              />
            </div>
            <h3 style={{ margin: '0 0 6px', fontSize: '16px' }}>Dr. Elena Ionescu</h3>
            <p style={{ margin: '0', color: 'var(--muted)', fontSize: '13px' }}>Specialist Estetică Dentară</p>
            <p style={{ margin: '8px 0 0', color: 'var(--muted2)', fontSize: '12px' }}>Expert în fațete dentare și albire profesională</p>
          </div>

          <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius2)', padding: '16px', background: 'var(--card)', boxShadow: '0 10px 28px rgba(15,23,42,.06)' }}>
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', marginBottom: '12px' }}>
              <img 
                src="/dentist-standing-in-the-clinic-in-a-medical-profes-2025-04-15-18-15-51-utc.jpg" 
                alt="Dr. Mihai Georgescu - Ortodonție" 
                style={{ width: '100%', height: '240px', objectFit: 'cover' }}
              />
            </div>
            <h3 style={{ margin: '0 0 6px', fontSize: '16px' }}>Dr. Mihai Georgescu</h3>
            <p style={{ margin: '0', color: 'var(--muted)', fontSize: '13px' }}>Specialist Ortodonție</p>
            <p style={{ margin: '8px 0 0', color: 'var(--muted2)', fontSize: '12px' }}>Specialist în corectarea poziției dinților și alinierea maxilarului pentru un zâmbet sănătos și armonios</p>
          </div>
        </div>
      </div>
    </section>
  )
}