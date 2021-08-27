import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../public/logo.png'
import Hamburger from '../../public/hamburger.svg'


const NavBar = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false)

    const toggleSidebar = () => {
        console.log('toggled')
        setSidebarToggle(!sidebarToggle)
    }

    return (
        <div>
            <div className='navbar flex h-24 text-xs items-center justify-between px-6 bg-blue-200 text-white'>
                <div className='space-x-4 flex items-center'>
                    <img className='h-12 w-auto' src={Logo} alt='SHG' />
                    <button className='hover:underline'>How it Works</button>
                    <button className='hover:underline'>Explore Lessons</button>
                    <button className='hover:underline'>Schools and Homes</button>
                    <button className='hover:underline'>Students</button>
                    <div className='relative'>
                        <input placeholder='Enter Code' className='bg-blue-200 py-2 px-2 border-2 border-white rounded-xl placeholder-white'/>
                        <svg className="h-5 w-5 absolute top-2 right-2 fill-current cursor-pointer" viewBox="0 0 20 20">
                            <path d="M12.522,10.4l-3.559,3.562c-0.172,0.173-0.451,0.176-0.625,0c-0.173-0.173-0.173-0.451,0-0.624l3.248-3.25L8.161,6.662c-0.173-0.173-0.173-0.452,0-0.624c0.172-0.175,0.451-0.175,0.624,0l3.738,3.736C12.695,9.947,12.695,10.228,12.522,10.4 M18.406,10c0,4.644-3.764,8.406-8.406,8.406c-4.644,0-8.406-3.763-8.406-8.406S5.356,1.594,10,1.594C14.643,1.594,18.406,5.356,18.406,10M17.521,10c0-4.148-3.374-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.147,17.521,10"></path>
                        </svg>
                    </div>
                    
                </div>
                <div className='space-x-4 flex items-center'>
                    <button className='px-6 py-2 border-2 hover:bg-blue-100 border-white rounded-full'>
                        <Link to='/quote'>Request a Quote</Link>
                    </button>
                    <button className='px-6 py-2 border-2 hover:bg-blue-100 border-white rounded-full'>
                        <Link to='/schedule-demo'>Schedule a Demo</Link>
                    </button>
                    <button className='px-6 py-2 border-2 hover:bg-green-500 border-white rounded-full'>
                        <Link to='/signup'>Sign Up for Free</Link>
                    </button>
                    <button className='px-6 py-2 border-2 bg-golden-100 hover:bg-golden-200 border-white rounded-full'>
                        <Link to='/signin'>Sign In</Link>
                    </button>
                    <button onClick={toggleSidebar}>
                        <img className='h-4' src={Hamburger} />
                    </button>
                </div>
            </div>
            <div className={`absolute h-screen w-1/5 top-0 right-0 px-6 py-8 bg-blue-200 bg-opacity-75 text-white text-xl space-y-4 ${sidebarToggle ? 'block' : 'hidden'}`}>
                <div className='flex justify-end py-2'>
                    <svg className='h-6 fill-current cursor-pointer' viewBox='0 0 20 20' onClick={toggleSidebar}>
                        <path d='M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z'></path>
                    </svg>
                </div>
                <div className='flex space-x-2'>
                    <svg className='h-6 fill-current' viewBox='0 0 20 20'>
                        <path d='M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589'></path>
                    </svg>
                    Singapore
                </div>
                <div className='pl-2'><Link to='/signin'>Sign In</Link></div>
                <div className='pl-2'><Link to='/signup'>Sign Up</Link></div>
                <div className='pl-2'><Link to='/pricing'>Pricing</Link></div>
                <div className='pl-2'><Link to='/blog'>Blog</Link></div>
            </div>
        </div>
    )
}


const Library = () => {
    return (
        <div className='min-h-screen flex flex-col '>
            <NavBar />
            <div className='flex-1 flex flex-row text-gray-100'>
                <div className='w-1/4 bg-gray-50 py-4 px-8 space-y-6'>
                    <div className='text-xl divide-y py-2 border-b-2 border-gray-100'>Search</div>
                    <div className='grid grid-cols-2 gap-4 pr-4'>
                        <div className='border-2 rounded-full border-bg-gray-100 text-center p-2 hover:bg-gray-100 hover:text-gray-50'>Lesson</div>
                        <div className='border-2 rounded-full border-bg-gray-100 text-center p-2 hover:bg-gray-100 hover:text-gray-50'>Activities</div>
                        <div className='border-2 rounded-full border-bg-gray-100 text-center p-2 hover:bg-gray-100 hover:text-gray-50'>Videos</div>
                    </div>
                    <div className='text-xl divide-y py-2 border-b-2 border-gray-100'>Subjects</div>
                    <div className='grid grid-cols-2 gap-4 pr-4'>
                        <div className='border-2 rounded-full border-bg-gray-100 text-center p-2 hover:bg-gray-100 hover:text-gray-50'>English</div>
                        <div className='border-2 rounded-full border-bg-gray-100 text-center p-2 hover:bg-gray-100 hover:text-gray-50'>Maths</div>
                        <div className='border-2 rounded-full border-bg-gray-100 text-center p-2 hover:bg-gray-100 hover:text-gray-50'>Science</div>
                    </div>
                </div>
                <div className='w-3/4'>
                    <div className='text-3xl text-center py-4 mx-auto'>SHG Library</div>
                    <div className='grid grid-cols-5 gap-x-2 gap-y-4 py-16 px-8'>
                        <div className=''>
                            <img src='https://zl6am32uq1z3zqjczf36sw6c-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/10290_pptd-744x1024.jpg' />
                            <div className='w-full text-center py-2'>Machine Learning</div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>

    )
}

export default Library
