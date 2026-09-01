import MovieCard from './MovieCard'

export default function MovieRow({ title, movies, onOpen, myList, onToggleList }) {
  return (
    <section className="movie-row-section">
      <div className="section-heading">
        <h2>{title}</h2>
      </div>
      <div className="movie-row">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onOpen={onOpen}
            inList={myList.includes(movie.id)}
            onToggleList={onToggleList}
          />
        ))}
      </div>
    </section>
  )
}
