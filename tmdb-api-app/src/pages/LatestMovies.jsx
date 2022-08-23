
import {useQuery} from 'react-query';

import NewMovies from './NewMovies'

function Components() {
	// Fetcher function
	const getLatestMovies = async () => {
		const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US&page=1");
		return res.json();
	};
	// Using the hook
	const {data, error, isLoading} = useQuery('LatestMovies', getLatestMovies);
	// Error and Loading states
	if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;
	// Show the response if everything is fine
    console.log(data.results)
	return (
		<div>
			<h1>Latest Movies</h1>
			<div>
                {data.results.map(movie => <NewMovies key={movie.title} movie={movie}/> )}
            </div>

			

			
            
		</div>

		
	);
}
   
  
  export default Components;
