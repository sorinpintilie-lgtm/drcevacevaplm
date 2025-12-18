'use client'

import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    // Prevent easy copying from console
    const handleContextMenu = (e: Event) => e.preventDefault()
    const handleSelectStart = (e: Event) => e.preventDefault()
    const handleCopy = (e: Event) => e.preventDefault()
    const handleCut = (e: Event) => e.preventDefault()
    const handlePaste = (e: Event) => e.preventDefault()
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Windows/Linux shortcuts
      if (e.key === 'F12' ||
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          (e.ctrlKey && e.shiftKey && e.key === 'J') ||
          (e.ctrlKey && e.shiftKey && e.key === 'C') ||
          (e.ctrlKey && e.key === 'U') ||
          // Mac shortcuts
          (e.metaKey && e.altKey && e.key === 'I') ||
          (e.metaKey && e.shiftKey && e.key === 'J') ||
          (e.metaKey && e.shiftKey && e.key === 'C') ||
          (e.metaKey && e.altKey && e.key === 'C') ||
          (e.ctrlKey && e.key === 'U')) {
        e.preventDefault()
      }
    }

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('selectstart', handleSelectStart)
    document.addEventListener('copy', handleCopy)
    document.addEventListener('cut', handleCut)
    document.addEventListener('paste', handlePaste)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('selectstart', handleSelectStart)
      document.removeEventListener('copy', handleCopy)
      document.removeEventListener('cut', handleCut)
      document.removeEventListener('paste', handlePaste)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
      <Header onOpenBooking={() => setIsModalOpen(true)} />
      <main id="top">
        <Hero onOpenBooking={() => setIsModalOpen(true)} />
        <Services />
        <Team />
        <Contact />
      </main>
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}