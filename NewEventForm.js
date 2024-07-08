// input larga onChange eventi berialdi.
import './NewEventForm.css'
import { useState } from 'react'



function NewEventForm() {

    const [title, setTitle] = useState()
    const [date, setDate] = useState()

    const resetInputs =()=> {
        setTitle('')
        setDate('')
    }
  return (
    <form className='new-event-form'>
        <label>
            <span>Event title: </span>
            <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title}/>
        </label>
        <label >
            <span>Event date: </span>
            <input type='date' onChange={(e)=>setDate(e.target.value)} value={date}/>
        </label>
        <br />
        <button onClick={resetInputs} type='button'>reset</button>
        <p>title {title}</p>
        <p>date: {date }</p>
        <button>submit</button>
    </form>
  )
}

export default NewEventForm
