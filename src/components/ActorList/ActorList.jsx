import styles from './ActorList.module.css'
import { useState } from 'react'

const ActorList = ({ actors, selectedCast, replaceActor }) => {

  const [letter, setLetter] = useState('')

  const alphabet = (
    <select name="letters" onChange={(e) => setLetter(e.target.value)}>
      <option value=''>None</option>
      <option value='A'>A</option>
      <option value='B'>B</option>
      <option value='C'>C</option>
      <option value='D'>D</option>
      <option value='E'>E</option>
      <option value='F'>F</option>
      <option value='G'>G</option>
      <option value='H'>H</option>
      <option value='I'>I</option>
      <option value='J'>J</option>
      <option value='K'>K</option>
      <option value='L'>L</option>
      <option value='M'>M</option>
      <option value='N'>N</option>
      <option value='O'>O</option>
      <option value='P'>P</option>
      <option value='Q'>Q</option>
      <option value='R'>R</option>
      <option value='S'>S</option>
      <option value='T'>T</option>
      <option value='U'>U</option>
      <option value='V'>V</option>
      <option value='W'>W</option>
      <option value='X'>X</option>
      <option value='Y'>Y</option>
      <option value='Z'>Z</option>
    </select>
  )

  const unfilteredList = (
    <>
      {actors.map(actor =>
        <span key={actor._id} className='card' style={{ 'width': '12rem', }} >
          <img styles={styles} src={actor?.photo} alt={`${actor.name}`} />
          <div className="card-body d-flex flex-column">
            <h3 className="card-title">{actor.name}</h3>
            {selectedCast && <button className='btn btn-primary' onClick={() => replaceActor(actor)}>Select</button>}
          </div>
        </span>
      )}
    </>
  )

  const filteredList = (
    <>
      {actors.map(actor =>
        actor.name.at(0) === letter &&
        <span key={actor._id} className='card' style={{ 'width': '12rem', }} >
          <img styles={styles} src={actor?.photo} alt={`${actor.name}`} />
          <div className="card-body d-flex flex-column">
            <h3 className="card-title">{actor.name}</h3>
            {selectedCast && <button className='btn btn-primary' onClick={() => replaceActor(actor)}>Select</button>}
          </div>
        </span>
      )}
    </>
  )

  if (actors.length > 0) {
    return (
      <section>
        <h3>Choose an actor/actor to swap</h3>
        {alphabet}
        <div>
          {letter ? filteredList : unfilteredList}
        </div>
      </section>
        
    )
  }

  return <h1>Loading Actors...</h1>

}

export default ActorList;