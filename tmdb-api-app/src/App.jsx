import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'
import './App.css'
import LatestMovies from './pages/LatestMovies'
import MostPopularMovies from './pages/MostPopularMovies'
import TopMovies from './pages/TopMovies'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/latestMovies/" element={<LatestMovies/>} />
				<Route path="/mostPopularMovies" element={<MostPopularMovies />} />
				<Route path="/topMovies" element={<TopMovies/>} />
				
			</Routes>
		</div>
	)
}

export default App
