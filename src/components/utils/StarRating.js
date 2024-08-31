import {StarIcon} from "@heroicons/react/16/solid";

export const StarRating = ({rating}) => {
    const fullStars = Math.floor(rating);
    return <div className='flex flex-row'>
        {/* Full stars */}
        {[...Array(fullStars)].map((_, index) => (
            <StarIcon key={`full-${index}`} className='text-yellow-500 h-5'/>
        ))}
    </div>
}
