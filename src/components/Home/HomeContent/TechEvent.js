import React from 'react'
import event from '../../../images/event.png'

function TechEvent() {
  return (
    <div className='techEvent-container'>        
        <div className='techEvent-container-content'>
            <h1>About the Event</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a 
                type specimen book.
            </p>
        </div>
        <img className='event-img' src={event} />
    </div>
  )
}

export default TechEvent