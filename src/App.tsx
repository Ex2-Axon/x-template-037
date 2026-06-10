import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="relative min-h-screen flex flex-col p-6 md:p-12 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary blur-[120px] rounded-full animate-pulse-soft" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent blur-[120px] rounded-full animate-pulse-soft" />
      </div>

      <header className="z-10 mb-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
          <span className="font-heading text-xs tracking-[0.4em] text-primary">CHRONO-ARBOR PROTOCOL</span>
        </div>
        <span className="text-[10px] font-heading text-muted tracking-widest">v1.37.0</span>
      </header>

      <main className="z-10 grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto w-full">
        <section className="md:col-span-8 bento-card relative group overflow-hidden min-h-[400px] flex flex-col justify-end">
          <img src={heroImg} className="absolute top-0 right-0 w-96 h-96 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700 pointer-events-none" alt="" />
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">SYMBIOTIC<br/>DATAFLOW</h1>
            <p className="text-xl font-light text-text/80 max-w-xl">Witness the convergence of living systems and computational logic.</p>
          </div>
        </section>

        <section className="md:col-span-4 bento-card flex flex-col items-center justify-center text-center group">
          <div className="mb-8 p-6 rounded-full bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform">
            <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          </div>
          <button onClick={() => setCount(c => c + 1)} className="bg-primary text-background px-10 py-4 rounded-2xl font-bold hover:shadow-[0_0_30px_rgba(59,204,155,0.5)] transition-all active:scale-95">
            ENGAGE ECO-NETWORK ({count})
          </button>
        </section>

        <section className="md:col-span-4 bento-card">
          <h2 className="font-bold text-accent mb-6 tracking-widest text-sm uppercase">Core Stack</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-background/40 rounded-2xl border border-white/5">
              <img src={viteLogo} className="w-8 h-8" alt="" />
              <span className="text-xs font-bold">VITE</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-background/40 rounded-2xl border border-white/5">
              <img src={reactLogo} className="w-8 h-8 animate-spin-slow" alt="" />
              <span className="text-xs font-bold">REACT</span>
            </div>
          </div>
        </section>

        <section className="md:col-span-8 bento-card">
          <h2 className="font-bold text-primary mb-6 tracking-widest text-sm uppercase">Global Access</h2>
          <div className="flex flex-wrap gap-4">
            {['GitHub', 'Discord', 'X.com', 'Bluesky'].map(link => (
              <a key={link} href="#" className="px-6 py-3 rounded-xl bg-background/40 border border-white/5 hover:border-primary/40 hover:text-primary transition-all text-sm font-medium">
                {link}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="z-10 mt-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4 opacity-40">
        <p className="text-[10px] font-bold tracking-[0.5em]">© 2026 MICROTRONIC. BIOPHILIC DESIGN.</p>
        <div className="flex gap-8 text-[10px] font-bold tracking-widest">
          <span>OXYGEN: 21%</span>
          <span>STABILITY: NOMINAL</span>
        </div>
      </footer>
    </div>
  )
}
export default App
