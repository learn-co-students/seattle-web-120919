import React, { Fragment } from 'react'

const Sushi = ({name, img_url, id, price, eatSushi, eaten}) => {
  // const eatSushi = () => {

  // }
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => eatSushi(id, price)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          eaten ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi