import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'
import './App.css'
import LatestMovies from './pages/LatestMovies'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/latestmovies/" element={<LatestMovies/>} />
				<Route path="*" element={<NotFound />} />
				<Route path="*" element={<NotFound />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
