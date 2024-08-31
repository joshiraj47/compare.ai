import {Carousel} from "react-responsive-carousel";
import Image from "next/image";

export const Banner = ({deals}) => {
    return (
        <div className='relative'>
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                interval={5000}

            >
                {
                    deals?.slice(0, 10).map(deal => (
                        <div key={deal.deal_id} >
                            <img loading='lazy' src={deal.deal_photo} alt='image'/>
                        </div>

                    ))
                }
            </Carousel>

        </div>
    )
}


