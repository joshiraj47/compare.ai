import '../styles/Deal.css';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {StarRating} from "./utils/StarRating";
import Image from "next/image";
import Currency from 'react-currency-formatter';

export const Deal = ({deal, maxRating = 5}) => {
    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-5 border rounded-md blurred-borders'>
            {
                deal.isSponsored &&
                <div className='absolute left-0 top-0 text-xs italic !bg-[#002F36] h-[28px] flex items-center p-2 border rounded-tl-md sponsor text-yellow-400'>
                    <span>Sponsored</span>
                </div>
            }
            <div className='mt-2'>
                <Carousel
                    autoPlay={false}
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    interval={5000}

                >
                    {
                        deal.images?.map(image => (
                            <div key={deal.itemId}>
                                <Image objectFit='contain' width={200} height={200} loading={'lazy'} className='!w-[230px] !h-[230px]' src={image} alt='image' />
                            </div>

                        ))
                    }
                </Carousel>
            </div>

            <h4 className='my-3 text-sm font-semibold line-clamp-2' title={deal.title}>{deal.title}</h4>

            <div className='flex flex-row items-center'>
                <StarRating rating={deal.rating.average} />
                <span className='text-gray-400 text-xs'>({deal.rating.count})</span>
            </div>

            <div className='flex items-center my-1'>
                <div className='text-lg font-semibold'>
                    <Currency quantity={deal.price} currency="INR"/>
                </div>
                {
                    deal.price !== deal.mrp &&
                    <div className='text-sm pl-2 text-gray-500 line-through'>
                        <Currency quantity={deal.mrp} currency="INR"/>
                    </div>
                }
            </div>
            <button className='mt-auto button'>Compare</button>
        </div>
    )
}
