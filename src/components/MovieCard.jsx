import { Play, Plus, Check } from 'lucide-react'

export default function MovieCard({ movie, onOpen, inList, onToggleList }) {
  return (
    <article className="movie-card" tabIndex="0" onClick={() => onOpen(movie)} onKeyDown={(e) => e.key === 'Enter' && onOpen(movie)}>
      <img src={movie.poster} alt={`Capa de ${movie.title}`} loading="lazy" />
      <div className="card-overlay">
        <h3>{movie.title}</h3>
        <div className="card-meta">
          <span>{movie.match}% relevante</span>
          <span>{movie.year}</span>
          <span>{movie.rating}</span>
        </div>
        <div className="card-actions">
          <button className="mini-play" onClick={(e) => { e.stopPropagation(); onOpen(movie) }} aria-label={`Abrir ${movie.title}`}><Play size={16} fill="currentColor" /></button>
          <button className="mini-outline" onClick={(e) => { e.stopPropagation(); onToggleList(movie.id) }} aria-label="Alternar minha lista">
            {inList ? <Check size={16} /> : <Plus size={16} />}
          </button>
        </div>
      </div>
    </article>
  )
}
