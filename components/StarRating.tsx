import {useMemo} from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

interface StarRatingProps{
    rating: number
}

const StarRating: React.FC<StarRatingProps> = ({rating}) => {
    const starCount = 5

    const starRating = useMemo(()=>{
        return Array(starCount)
        .fill(0)
        .map((_, index) =>
            Math.round(rating) >= index + 1? (
                <AiFillStar key={index} style={{color: "orange"}}/>
            ):(
                <AiOutlineStar key={index} style={{color: "orange"}}/>
            ))
    },[rating])

  return (
    <div className='flex items-center mt-1'>{starRating}<span className='text-xs ml-1'>{rating}</span></div>
  )
}

export default StarRating