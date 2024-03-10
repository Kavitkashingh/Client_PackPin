import React from 'react'
import img from '../assets/pizza.png'
import imgs from '../assets/pizzah.png'


const Feature = () => {

    return (
        // <div className=' grid grid-cols-5 xs:grid-cols-1 w-[100%] m-2 flex-wrap mx-auto justify-center items-center bg-[#d9d9d9] h-[450px]'>
        <div className='w-[85%] xs:w-full justify-center mx-auto overflow-hidden py-5 '>

        <div className='grid grid-cols-5 xs:pb-20 gap-1 gap-y-5 sm:grid-cols-2 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md-lg:grid-cols-3 2xl:grid-cols-4 p-1'>

            <div className='h-[257px] xs:h-[150px] rounded-l-2xl xs:pl-0 xs:w-[110%] w-[105%]  grid pl-5 grid-cols-2 w-auto  bg-white items-center justify-center mt-[2rem]'>
                <div className='h-[126px] xs:h-[70px] xs:w-[70px] w-[126px] rounded-full bg-slate-400 ml-3  '><img className='sm:w-full   bg-slate-400 rounded-full' src={img} alt="product images" /></div>
                <div className='h-[126px] xs:h-[70px] xs:w-[70px] w-[126px] rounded-full bg-slate-400 ml-3  '><img className='sm:w-full   bg-slate-400 rounded-full' src={img} alt="product images" /></div>
            </div>

            <div className='h-[257px] xs:h-[150px] w-[108%] xs:pl-0   grid pl-5 grid-cols-2 w-auto  bg-white items-center justify-center mt-[2rem]'>
                <div className='h-[126px] xs:h-[70px] xs:w-[70px] w-[126px] rounded-full bg-slate-400 ml-3  '><img className='sm:w-full   bg-slate-400 rounded-full' src={img} alt="product images" /></div>
                <div className='h-[126px] xs:h-[70px] xs:w-[70px] w-[126px] rounded-full bg-slate-400 ml-3  '><img className='sm:w-full   bg-slate-400 rounded-full' src={img} alt="product images" /></div>
            </div>
            

            <div className='h-[397px] xs:h-[250px] w-auto bg-white flex-wrap mx-auto justify-center items-center rounded-xl  text-center'>
                <div className='relative overflow-hidden p-2'>
                    <img className='sm:w-full xs:h-[170px] xs:w-[170px] w-[264px] h-[291px] bg-slate-400 rounded-xl' src={img} alt="product images" />
                </div>
                <span >Name</span><br/>
                <span>Product</span>
            </div>
            <div className='h-[397px] xs:h-[250px] w-auto bg-white flex-wrap mx-auto justify-center items-center rounded-xl  text-center'>
                <div className='relative overflow-hidden p-2'>
                    <img className='sm:w-full xs:h-[170px] xs:w-[170px] w-[264px] h-[291px] bg-slate-400 rounded-xl' src={img} alt="product images" />
                </div>
                <span >Name</span><br/>
                <span>Product</span>
            </div>
            <div className='h-[397px] xs:h-[250px] w-auto bg-white flex-wrap mx-auto justify-center items-center rounded-xl  text-center'>
                <div className='relative overflow-hidden p-2'>
                    <img className='sm:w-full xs:h-[170px] xs:w-[170px] w-[264px] h-[291px] bg-slate-400 rounded-xl' src={img} alt="product images" />
                </div>
                <span >Name</span><br/>
                <span>Product</span>
            </div>
        </div>
        </div>
    )
}

export default Feature
