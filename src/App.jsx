import { useEffect, useMemo, useState } from 'react'
import { Search, Heart } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MovieRow from './components/MovieRow'
import MovieCard from './components/MovieCard'
import MovieModal from './components/MovieModal'
import { featuredMovie, movies, rows } from './data/movies'

function App() {
  const [activePage, setActivePage] = useState('home')
  const [query, setQuery] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [myList, setMyList] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cinewave-list')) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('cinewave-list', JSON.stringify(myList))
  }, [myList])

  const toggleList = (id) => {
    setMyList((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
  }

  const rowData = rows.map(([title, ids]) => ({
    title,
    items: ids.map((id) => movies.find((movie) => movie.id === id)).filter(Boolean),
  }))

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return movies
    return movies.filter((movie) => [movie.title, movie.description, ...movie.genres].join(' ').toLowerCase().includes(term))
  }, [query])

  const savedMovies = movies.filter((movie) => myList.includes(movie.id))

  return (
    <div className="app-shell">
      <Navbar activePage={activePage} setActivePage={setActivePage} query={query} setQuery={setQuery} />

      {activePage === 'home' && (
        <main>
          <Hero movie={featuredMovie} onDetails={() => setSelectedMovie(featuredMovie)} inList={myList.includes(featuredMovie.id)} onToggleList={() => toggleList(featuredMovie.id)} />
          <div className="rows-wrap">
            {rowData.map(({ title, items }) => (
              <MovieRow key={title} title={title} movies={items} onOpen={setSelectedMovie} myList={myList} onToggleList={toggleList} />
            ))}
          </div>
        </main>
      )}

      {activePage === 'search' && (
        <main className="page-content">
          <div className="page-title"><Search size={25} /><div><h1>Buscar</h1><p>{query ? `Resultados para “${query}”` : 'Digite um título, gênero ou palavra-chave.'}</p></div></div>
          <div className="movie-grid">
            {filtered.map((movie) => <MovieCard key={movie.id} movie={movie} onOpen={setSelectedMovie} inList={myList.includes(movie.id)} onToggleList={toggleList} />)}
          </div>
          {filtered.length === 0 && <div className="empty-state">Nenhum título encontrado.</div>}
        </main>
      )}

      {activePage === 'list' && (
        <main className="page-content">
          <div className="page-title"><Heart size={25} /><div><h1>Minha lista</h1><p>Seus títulos salvos ficam neste navegador.</p></div></div>
          {savedMovies.length ? (
            <div className="movie-grid">
              {savedMovies.map((movie) => <MovieCard key={movie.id} movie={movie} onOpen={setSelectedMovie} inList onToggleList={toggleList} />)}
            </div>
          ) : <div className="empty-state">Sua lista está vazia. Use o botão + para salvar filmes.</div>}
        </main>
      )}

      <footer><strong>CINEWAVE</strong><p>Projeto educacional de portfólio inspirado em interfaces de plataformas de streaming.</p><span>Feito com React + Vite.</span></footer>

      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} inList={selectedMovie ? myList.includes(selectedMovie.id) : false} onToggleList={toggleList} />
    </div>
  )
}

export default App
