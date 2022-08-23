{/*"https://api.themoviedb.org/3/movie/popular?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US&page=1"*/}
import {useQuery} from 'react-query';

import PopularMovie from "./PopularMovie"

function Component() {
	// Fetcher function
	const getPopularMovies = async () => {
		const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US&page=1");
		return res.json();
	};
	// Using the hook
	const {data, error, isLoading} = useQuery('popularMovies', getPopularMovies);
	// Error and Loading states
	if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;
	// Show the response if everything is fine
    console.log(data.results)
	return (
		<div>
			<h1>Popular Movies</h1>
			<div>
                {data.results.map(movie => <PopularMovie key={movie.title} movie={movie}/> )}
            </div>

			

			
            
		</div>

		
	);
}
   
  
  export default Component;