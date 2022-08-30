//hook för att få utt genres filmerna
const useGenres = (selectedGenres) => {
    if(selectedGenres.length < 1) return ""
    
    //få utt genres id och använder reduce för att få det specifika värdet/film.
    const GenreIds= selectedGenres.map((g)=> g.id)
    return GenreIds.reduce((acc,curr)=> acc + "," + curr)
}
 
export default useGenres;