import React from 'react'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const STAR_RATING = () => {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1

        return (
          <label>
            <input 
                type="radio" 
                name="rating" 
                value={ratingValue} 
                onClick={() => setRating(ratingValue)}
            />
            <FaStar 
                class="star" 
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                size={100}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
            />
          </label>
        )
      })}
      <p>The rating is {rating ?? 0}.</p>
    </div>
  )        
}

export default STAR_RATING