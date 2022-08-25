import {useQuery} from 'react-query';

import TopMovie from './TopMovie'

function Components() {
	// Fetcher function
	const getTopMovies = async () => {
		const res = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US&page=1");
		return res.json();
	};
	// Using the hook
	const {data, error, isLoading} = useQuery('LatestMovies', getTopMovies);
	// Error and Loading states
	if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;
	// Show the response if everything is fine
    console.log(data.results)
	return (
		<div>
			<h1>Top Movies</h1>
			<div>
                {data.results.map(movie => <TopMovie key={movie.title} movie={movie}/> )}
            </div>

			

			
            
		</div>

		
	);
}
   
  
  export default Components;
