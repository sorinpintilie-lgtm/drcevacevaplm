'use client'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    
    // Demo success message
    const help = form.querySelector('.help') as HTMLElement
    if (help) {
      help.textContent = 'Mulțumim! Cererea de programare a fost înregistrată (demo).'
      help.style.color = '#0f766e'
    }
    
    form.reset()
    setTimeout(onClose, 900)
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="modalOverlay" 
      id="modalOverlay" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modalTitle"
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
    >
      <div className="modal">
        <div className="modalHeader">
          <button className="close" type="button" id="modalClose" aria-label="Închide" onClick={onClose}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="modalBody">
          <form className="form" id="bookingForm" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nume" autoComplete="name" required />
            <input type="tel" name="phone" placeholder="Telefon" autoComplete="tel" required />
            <input type="email" name="email" placeholder="Email (opțional)" autoComplete="email" />
            <input type="text" name="service" placeholder="Serviciu (ex: Implantologie)" />
            <textarea name="notes" placeholder="Detalii / preferințe (opțional)"></textarea>
            <div className="help"></div>
          </form>
        </div>

        <div className="modalFooter">
          <button className="btn btnGhost" type="button" id="modalCancel" onClick={onClose}>Anulează</button>
          <button className="btn btnPrimary" type="submit" form="bookingForm">Trimite</button>
        </div>
      </div>
    </div>
  )
}