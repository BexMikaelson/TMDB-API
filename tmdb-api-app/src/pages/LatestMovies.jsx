
import { useQuery } from 'react-query'
import { getLatestMoviesPage } from '../api/axios'
import { useState } from 'react'
import NewMovies from './NewMovies'
import PageButton from '../components/PageButton'

const latestMovies = () => {
    const [page, setPage] = useState(1)

    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData,
    } = useQuery(['/movie', page], () => getLatestMoviesPage(page), {
        keepPreviousData: true
    })

    if (isLoading) return <p>Loading Users...</p>

    if (isError) return <p>Error: {error.message}</p>

    const content = data.data?.map(movie => <NewMovies key={movie.id} movie={movie} />)

    const lastPage = () => setPage(10)

    const firstPage = () => setPage(1)

    const pagesArray = Array(10).fill().map((_, index) => index + 1)

    const nav = (
        <nav className="nav-ex2">
            <button onClick={firstPage} disabled={isPreviousData || page === 1}>&lt;&lt;</button>
            { isPreviousData}
            {pagesArray.map(pg => <PageButton key={pg} pg={pg} setPage={setPage} />)}
            <button onClick={lastPage} disabled={isPreviousData || page === 10}>&gt;&gt;</button>
        </nav>
    )

    return (
        <>
		<h1>Lates Movies</h1>
            <div>
                {data.results?.map(movie => <NewMovies key={movie.title} movie={movie}/> )}
            </div>
        
            {nav}
            {isFetching && <span className="loading">Loading...</span>}
            {content}
        </>
    )
}
export default latestMovies