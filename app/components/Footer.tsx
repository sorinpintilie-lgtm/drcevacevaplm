export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footerGrid">
          <div>
            <a className="logo" href="#top" aria-label="CLINICA DENTARA DR. GHEORGHIADE">
              <div style={{ fontWeight: 700, letterSpacing: '.08em', fontSize: '18px', lineHeight: '1.1' }}>
                <div>CLINICA DENTARA</div>
                <div>DR. GHEORGHIADE</div>
              </div>
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
            <span style={{ color: 'var(--muted2)', fontSize: '12px' }}>Powered by</span>
            <a href="https://sky.ro" target="_blank" rel="noopener noreferrer">
              <img src="/skyro_logo_wide.png" alt="Skyro Logo" style={{ height: '32px' }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}