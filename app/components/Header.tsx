'use client'

import { useState } from 'react'

interface HeaderProps {
  onOpenBooking: () => void
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  const callNow = () => {
    window.location.href = 'tel:0766863223'
  }

  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          <a className="logo" href="#top" aria-label="CLINICA DENTARA DR. GHEORGHIADE">
            <div style={{ fontWeight: 700, letterSpacing: '.08em', fontSize: '16px', lineHeight: '1.1' }}>
              <div>CLINICA DENTARA</div>
              <div>DR. GHEORGHIADE</div>
            </div>
          </a>

          <nav className="links" aria-label="Meniu principal">
            <a href="#servicii">Servicii</a>
            <a href="#stomatologie-pediatrica">Stomatologie pediatrică</a>
            <a href="#tarife">Tarife</a>
            <a href="#faq">FAQ</a>
            <a href="#resurse">Resurse</a>
            <a href="#echipa">Echipa</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="actions">
            <button className="btn btnPrimary" type="button" onClick={onOpenBooking}>
              Programează-te
            </button>
            <button 
              className="hamburger" 
              type="button" 
              id="hamburger" 
              aria-label="Deschide meniul" 
              aria-expanded={isDrawerOpen}
              aria-controls="drawer"
              onClick={toggleDrawer}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>

        <div className="drawer" id="drawer" role="region" aria-label="Meniu mobil" style={{ display: isDrawerOpen ? 'block' : 'none' }}>
          <a href="#servicii" onClick={closeDrawer}>Servicii</a>
          <a href="#echipa" onClick={closeDrawer}>Echipa</a>
          <a href="#contact" onClick={closeDrawer}>Contact</a>
          <div className="drawerActions">
            <button className="btn btnGhost" type="button" onClick={callNow}>Sună</button>
            <button className="btn btnPrimary" type="button" onClick={onOpenBooking}>Programează-te</button>
          </div>
        </div>
      </div>
    </header>
  )
}