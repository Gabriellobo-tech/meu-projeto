import { Check, Plus, Play, X } from 'lucide-react'

export default function MovieModal({ movie, onClose, inList, onToggleList }) {
  if (!movie) return null

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <section className="movie-modal" role="dialog" aria-modal="true" aria-label={`Detalhes de ${movie.title}`}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar"><X /></button>
        <div className="modal-hero" style={{ backgroundImage: `linear-gradient(0deg, #111114 0%, transparent 60%), url(${movie.backdrop})` }}>
          <div className="modal-title-wrap">
            <h2>{movie.title}</h2>
            <div className="modal-actions">
              <button className="btn btn-primary"><Play size={19} fill="currentColor" /> Assistir</button>
              <button className="round-button" onClick={() => onToggleList(movie.id)} aria-label="Alternar minha lista">
                {inList ? <Check /> : <Plus />}
              </button>
            </div>
          </div>
        </div>
        <div className="modal-body">
          <div>
            <div className="meta-row">
              <strong>{movie.match}% relevante</strong>
              <span>{movie.year}</span>
              <span className="age-badge">{movie.rating}</span>
              <span>{movie.duration}</span>
            </div>
            <p>{movie.description}</p>
          </div>
          <aside>
            <p><span>Gêneros:</span> {movie.genres.join(', ')}</p>
            <p><span>Projeto:</span> Interface demonstrativa para portfólio</p>
          </aside>
        </div>
      </section>
    </div>
  )
}
