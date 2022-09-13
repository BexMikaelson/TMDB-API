/*import { useParams } from 'react-router-dom'
import { usePeopleData } from '../components/hooks/useActor'
import ActorPage from './ActorPage'

export const ActorePage = () => {
  const { person_id } = useParams()
  const { isLoading, data, isError, error } = usePeopleData(person_id)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }
  return (
     
    <div>
        <div>Actor Page</div>
      {data.data.name} - {data.data.birthday}
     
    </div>
  )
}
export default ActorePage*/
import actorsPage from "./ActorsPage";

 

const ActorPage = () => {
    return ( 
        <div> 
            <p> {actor.name} </p>
        </div>
     );
}
 
export default ActorPage;
