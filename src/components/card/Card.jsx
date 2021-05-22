import React from 'react'

const Card = (props) => {
   return (
      <div>
         <button onClick={()=>props.history.goBack()}className='back-btn'>BACK</button>
      </div>
   )
}

export default Card
