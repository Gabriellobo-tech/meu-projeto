import { Search, Bell, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar({ activePage, setActivePage, query, setQuery }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const go = (page) => {
    setActivePage(page)
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <button className="brand" onClick={() => go('home')} aria-label="Ir para início">
        CINE<span>WAVE</span>
      </button>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <button className={activePage === 'home' ? 'active' : ''} onClick={() => go('home')}>Início</button>
        <button className={activePage === 'search' ? 'active' : ''} onClick={() => go('search')}>Buscar</button>
        <button className={activePage === 'list' ? 'active' : ''} onClick={() => go('list')}>Minha lista</button>
      </nav>

      <div className="nav-actions">
        <label className="search-box">
          <Search size={18} />
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setActivePage('search')
            }}
            placeholder="Títulos, gêneros..."
            aria-label="Buscar títulos"
          />
        </label>
        <button className="icon-button" aria-label="Notificações"><Bell size={19} /></button>
        <div className="avatar" aria-label="Perfil">GL</div>
        <button className="menu-button" onClick={() => setMenuOpen((v) => !v)} aria-label="Abrir menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
