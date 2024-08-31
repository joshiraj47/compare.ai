import {Deal} from "./Deal";

export const DealsFeed = ({deals}) => {
    return (
        <>
            {
                deals?.map(deal => (
                    <div className='relative'>
                        <Deal key={deal.pid} deal={deal}/>
                    </div>

                ))
            }
        </>
    )
}
