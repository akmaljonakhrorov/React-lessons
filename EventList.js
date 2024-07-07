
// style import qilamiz
import style from './EventList.module.css'

function EventList({events, handleDelete}) {
  return (
    <div>{events.map((event)=>{
      return(
        <div className={style.card} key={event.id}>
          <h2>{event.title}</h2>
          <button onClick = {()=>handleDelete(event.id)}>delete</button> 
        </div>
      )
    })}</div>
  )
}

export default EventList;