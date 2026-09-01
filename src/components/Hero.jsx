import { Info, Play, Plus, Check } from 'lucide-react'

export default function Hero({ movie, onDetails, inList, onToggleList }) {
  return (
    <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(5,5,7,.94) 0%, rgba(5,5,7,.65) 47%, rgba(5,5,7,.1) 72%), linear-gradient(0deg, #09090b 0%, transparent 32%), url(${movie.backdrop})` }}>
      <div className="hero-content">
        <span className="eyebrow">CINEWAVE ORIGINAL</span>
        <h1>{movie.title}</h1>
        <div className="meta-row">
          <strong>{movie.match}% relevante</strong>
          <span>{movie.year}</span>
          <span className="age-badge">{movie.rating}</span>
          <span>{movie.duration}</span>
        </div>
        <p>{movie.description}</p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={onDetails}><Play size={20} fill="currentColor" /> Assistir</button>
          <button className="btn btn-secondary" onClick={onDetails}><Info size={20} /> Mais informações</button>
          <button className="btn btn-ghost" onClick={onToggleList} aria-label={inList ? 'Remover da minha lista' : 'Adicionar à minha lista'}>
            {inList ? <Check size={21} /> : <Plus size={21} />}
          </button>
        </div>
      </div>
    </section>
  )
}
