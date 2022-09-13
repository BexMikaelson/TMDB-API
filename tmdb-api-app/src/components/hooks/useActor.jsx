import { QueryClient, useQuery} from 'react-query'
import axios from 'axios'

const fetchPeople = (person_id) => {
  
  return axios.get(`https://api.themoviedb.org/3/person/${person_id}?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US&include_adult=false&append_to_response=credits`)
}

export const usePeopleData = (person_id) =>{
    return useQuery(['person', person_id], fetchPeople(person_id))
}
export default fetchPeople