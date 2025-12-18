'use client'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)
    
    // Demo success message
    const help = form.querySelector('.help') as HTMLElement
    if (help) {
      help.textContent = 'Mulțumim! Mesajul tău a fost trimis (demo).'
      help.style.color = '#0f766e'
    }
    
    form.reset()
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="sectionTitle">
          <div>
            <h2>Contact</h2>
            <p>Minimal, clar: locație, program, telefon și un formular scurt.</p>
          </div>
        </div>

        <div className="contactGrid">
          <div className="panel">
            <h3>Detalii</h3>
            <div className="kv">
              <div className="kvRow"><b>Telefon:</b> 0766863223 / 0757101077</div>
              <div className="kvRow"><b>Email:</b> programari@drgheorghiade.ro</div>
              <div className="kvRow"><b>Adresă Craiova:</b> Str. Caracal bl. 29 sc. B ap. 3</div>
              <div className="kvRow"><b>Adresă Preajba:</b> Str. Capsunilor 11 zona Selgros</div>
            </div>
          </div>

          <div className="panel">
            <h3>Trimite un mesaj</h3>
            <form className="form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Nume" autoComplete="name" required />
              <input type="tel" name="phone" placeholder="Telefon" autoComplete="tel" required />
              <input type="email" name="email" placeholder="Email (opțional)" autoComplete="email" />
              <textarea name="message" placeholder="Cu ce te putem ajuta?" required></textarea>
              <button className="btn btnPrimary" type="submit">Trimite</button>
              <div className="help"></div>
            </form>
          </div>
        </div>

        <div style={{ marginTop: '12px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        </div>
      </div>
    </section>
  )
}