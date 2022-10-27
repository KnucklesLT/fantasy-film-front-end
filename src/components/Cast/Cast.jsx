import { useEffect } from 'react';
import * as movieService from '../../services/movieService'

const Cast = ({movieId, credits, setCredits}) => {

  // const [credits, setCredits] = useState([])

  useEffect(() => {
    const fetchCreditDetails = async () => {
      const resultData = await movieService.credits(movieId)
      setCredits(resultData)
    }
    fetchCreditDetails()
    
  }, [movieId])
  
  return (  
    <>
    {credits?.length ?
      credits.map( (cast,idx) => 
        {if(idx < 6) return <li key={cast.name}>{cast.character} played by {cast.name}</li>} 
      )
        :
        <li>No Cast</li>
      }
    </>
  );
}

export default Cast;