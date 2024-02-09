import React, { useState } from 'react'
import arrow from '../../../public/arrow-right-long.svg'
import github from '../../../public/github-icon.svg'
import Image from 'next/image'



export const Herosection = () => {
    return (
        <div className='w-full md:w-[60%] flex flex-col justify-center items-center' id='home'>
            <div className='w-full h-screen flex flex-col space-y-5 md:p-20 justify-center items-center'>
                <div className='text-center space-y-7 flex justify-center w-full flex-col'>
                    <h1 className='text-[40px] md:text-[50px] font-bold leading-tight tracking-widest'>It doesn’t matter what <span className='text-[#FFFF00]'>JS Framework</span> you work with.</h1>
                    <h2 className='text-lg font-normal'>Our boilerplates works with it <span className='text-[#91D2F7] hover:text-[25px] cursor-pointer'>out-of-the-box.</span></h2>
                </div>
                <div className='flex space-x-5'>
                    <button className='bg-[#FFFF00] text-black flex w-[150px] h-[37px] p-3 items-center justify-around font-bold hover:bg-[#d8d87f] rounded-sm' type="button">
                        Get Started
                        <div>
                            <Image src={arrow} alt="arrow" />

                        </div>
                    </button>

                    <button className='bg-black text-[#FFFF00] border-2 border-[#FFFF00] flex w-[150px] h-[37px] p-3 items-center justify-around font-bold hover:bg-[#d8d87f] hover:text-black rounded-sm' type="button">
                        See repo
                        <div>
                            <Image src={github} alt="arrow" />

                        </div>
                    </button>
                </div>
            </div>

            <div className=' w-full flex flex-col justify-center items-center space-y-5'>
                <h1 className='text-[16px] font-bold ' >Supported and backed by:</h1>
                <ul className='flex justify-evenly space-y-4 md:space-y-0 w-[85%] md:h-[200px] items-center flex-wrap'>
                    <li className='w-[199px] h-[74px] bg-[#D9D9D9] hover:bg-[#9d9898] text-black text-xl p-3 flex justify-center items-center font-bold'>
                        Lorem
                    </li>
                    <li className='w-[199px] h-[74px] bg-[#D9D9D9]  hover:bg-[#9d9898] text-black text-xl p-3 flex justify-center items-center font-bold'>
                        Ipsum
                    </li>
                    <li className='w-[199px] h-[74px] bg-[#D9D9D9] hover:bg-[#9d9898] text-black text-xl p-3 flex justify-center items-center font-bold'>
                        Dolor
                    </li>
                    <li className='w-[199px] h-[74px] bg-[#D9D9D9] hover:bg-[#9d9898] text-black text-xl p-3 flex justify-center items-center font-bold'>
                        Sit
                    </li>
                    <li className='w-[199px] h-[74px] bg-[#D9D9D9] hover:bg-[#9d9898] text-black text-xl p-3 flex justify-center items-center font-bold'>
                        Dolor
                    </li>
                    <li className='w-[199px] h-[74px] bg-[#D9D9D9] hover:bg-[#9d9898] text-black text-xl p-3 flex justify-center items-center font-bold'>
                        Sit
                    </li>
                    <li className='w-[199px] h-[74px] bg-[#D9D9D9] hover:bg-[#9d9898] text-black text-xl p-3 flex justify-center items-center font-bold'>
                        Lorem
                    </li>
                    <li className='w-[199px] h-[74px] bg-[#D9D9D9] hover:bg-[#9d9898] text-black text-xl p-3 flex justify-center items-center font-bold'>
                        Ipsum
                    </li>

                </ul>
                <h1 className='md:text-[32px] font-bold'>Less code. More product.</h1>
                <h2 className='w-full md:w-[50%] text-center text-[16px] font-normal tracking-wider'>By using our UI Kit, we make sure you only get to <span className='text-[#FFFF00]'>focus more</span> on the other things that matter.</h2>

            </div>

        </div>
    )
}


export const About = () => {
    return (
        <div className='flex flex-col space-y-5 w-full  md:w-[80%] h-full md:h-screen justify-center items-center text-center md:text-left md:items-start' id='about'>
            <h1 className='text-[40px] font-bold'>About</h1>
            <p className='text-[14px] md:text-[16px] font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Cras pulvinar mattis nunc sed blandit libero volutpat. Odio ut enim blandit volutpat maecenas volutpat. Sapien eget mi proin sed libero enim. Amet facilisis magna etiam tempor. Facilisi cras fermentum odio eu feugiat pretium nibh. Nibh tellus molestie nunc non blandit. Integer enim neque volutpat ac tincidunt vitae semper quis. Gravida rutrum quisque non tellus. Et pharetra pharetra massa massa ultricies mi quis. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Eget sit amet tellus cras adipiscing enim eu turpis. Volutpat commodo sed egestas egestas fringilla. Dui accumsan sit amet nulla. Morbi quis commodo odio aenean sed adipiscing. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Interdum posuere lorem ipsum dolor. Dolor magna eget est lorem ipsum dolor. Nibh nisl condimentum id venenatis.</p>

            <p className='text-[14px] md:text-[16px] font-bold'>Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Mi bibendum neque egestas congue quisque egestas diam in arcu. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Arcu dictum varius duis at consectetur lorem. In nibh mauris cursus mattis molestie. Velit ut tortor pretium viverra suspendisse potenti nullam ac. Vivamus at augue eget arcu dictum varius. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Morbi quis commodo odio aenean sed adipiscing diam donec. Nullam vehicula ipsum a arcu. Arcu non odio euismod lacinia at. Odio tempor orci dapibus ultrices in iaculis.</p>

            <p className='text-[14px] md:text-[16px] font-bold'>Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Est velit egestas dui id. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Sed felis eget velit aliquet sagittis id consectetur. Consequat interdum varius sit amet mattis. Adipiscing elit pellentesque habitant morbi tristique. Elit eget gravida cum sociis natoque penatibus et magnis dis. Sit amet nisl purus in mollis nunc. In nulla posuere sollicitudin aliquam. Ut tortor pretium viverra suspendisse potenti. Facilisi etiam dignissim diam quis enim. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Pellentesque massa placerat duis ultricies lacus. Donec massa sapien faucibus et molestie. Ac turpis egestas sed tempus urna et pharetra. At lectus urna duis convallis convallis tellus. Egestas diam in arcu cursus euismod quis viverra. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel.</p>
        </div>
    )
}

export const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''

    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''

        })
    }

    return (
        <div className='flex flex-col w-full items-center md:w-[80%] h-full md:h-screen justify-center  space-y-5' id='contact'>
            <h1 className='text-[40px] font-bold flex justify-center md:justify-start w-full'>Contact</h1>
            <form className='flex flex-col justify-center items-center wofull md:w-[50%] space-y-5 p-4 ' onSubmit={handleSubmit}>
                <h1 className='text-[16px] font-bold'>Fill out this form to reach us.</h1>
                <div className='w-full flex justify-around'>
                    <input type="text" placeholder='First Name' value={formData.firstName} onChange={handleChange} name='firstName' className='w-[49%] text-black h-[46px] p-3 border-2 border-black' />
                    <input type="text" placeholder='Last Name' name='lastName' value={formData.lastName} onChange={handleChange} className='w-[49%] text-black h-[46px] p-3 border-2 border-black' />
                </div>
                <input type="email" placeholder='Email' value={formData.email} name='email' onChange={handleChange} className='w-[99%] text-black  h-[46px] p-3 border-2 border-black' />
                <input type="text" placeholder='Phone (optional)' name='phone' value={formData.phone} onChange={handleChange} className='w-[99%] text-black  h-[46px] p-3 border-2 border-black' />
                <textarea placeholder='Message' value={formData.message} name='message' onChange={handleChange} className='w-[99%] text-black  h-[128px] p-3 border-2 border-black' />
                <button className='bg-[#91D2F7] text-black flex w-[250px] h-[48px] p-3 items-center justify-around font-bold hover:bg-[#a0cde7] rounded-sm' type="submit">
                    Submit
                </button>
            </form>

        </div>
    )
}