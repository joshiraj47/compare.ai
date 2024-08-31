import Image from "next/image";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

export const Header = () => {
    return (
        <header>

            <div className='flex items-center bg-amazon_blue p-1 flex-grow'>
                <div className='mt-2 mx-4 flex items-center flex-grow sm:flex-grow-0'>
                    <Image src='/app-logo.png' alt='image' width={90} height={40} className='cursor-pointer pt-1'/>
                </div>
                <div className='flex bg-yellow-400 hover:bg-yellow-500 items-center h-8 rounded-md flex-grow cursor-pointer'>
                    <input className='p-2 w-6 h-full flex-grow flex-shrink rounded-l-md focus:outline-none' type='text'/>
                    <MagnifyingGlassIcon className='h-12 p-4'/>
                </div>
                <div className='mx-4 text-white flex items-center text-xs space-x-4'>
                    <div className='link'>
                        <p>Hello Raj Joshi</p>
                        <p className='font-extrabold md:text-sm'>Accounts & Lists</p>
                    </div>
                    <div className='link relative flex-col items-center'>
                        <p>Saved</p>
                        <p className='font-extrabold md:text-sm'>Comparisons</p>
                        <span className='absolute top-0 left-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>0</span>
                    </div>
                </div>
            </div>


            <div></div>
        </header>
    )
}
