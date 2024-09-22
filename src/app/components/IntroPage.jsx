"use client"
import React from 'react'
import { Link } from 'react-scroll'
import { useEffect } from 'react'

export default function IntroPage() {
    const [quote, setQuote] = React.useState({})
    useEffect(() => {
        fetch("http://localhost:3000/api/random").then(res => res.json()).then(data => setQuote(data)).catch(err => console.log(err))

    }, [])


    return (
        <div className='w-full h-screen ps-8 pe-8'>

            <div className='w-full h-fit p-1 grid grid-cols-2 place-items-center'>

                <h1 className='text-xl font-semibold text-black'>Quotes<span className="text-red-600">DB</span></h1>

                <div className='w-full flex justify-center gap-4 items-center h-fit  '>
                    <NavItem title={"Route"} />
                    <NavItem title={"Guide"} />
                    <NavItem title={"About"} />
                </div>

            </div>

            <div className={`w-full h-fit grid place-items-center ${quote && quote.quote ? "grid-cols-2" : "grid-cols-1"}`}>


                <div className='w-[100wh] p-8 h-screen flex justify-center items-center flex-col'>


                    <h1 className='text-5xl text-center font-serif text-black'>Welcome to Quotes<span className='text-red-500'>DB API</span></h1>

                    <p className='text-gray-600 text-xl p-2 text-center'>
                        QuotesDB is a free online quotes API that provides you with a variety of quotes.

                        It includes features for filtering and generating random quotes, making it a user-friendly tool for accessing quotes programmatically.

                    </p>
                    <button className='text-white bg-red-500 px-4 py-2 mt-2 rounded-lg'><Link to="Route" spy={true} smooth={true} offset={-20} duration={500}>Get Started</Link></button>

                </div>


                {
                    (quote && quote.quote) ?
                        (
                            <div className='w-full h-fit ps-8 pe-8 flex justify-center items-center flex-col '>


                                <div className='w-[500px] h-[500px] p-8 rounded-full backdrop-blur-xl backdrop-brightness-125 bg-gray-500/20 flex justify-center items-center flex-col'>

                                    <h1 className="text-[14px] p-2 text-center  text-gray-600">Random Quote -</h1>
                                    <h1 className='text-3xl p-2 text-center font-serif text-black'>{quote.quote}</h1>

                                    <h1 className='text-xl p-2 text-center font-serif text-gray-800'>By - {quote.author}</h1>

                                </div>



                            </div>

                        )
                        : ""
                }

            </div>
        </div>
    )
}


function NavItem({ title }) {

    return (
        <div className='hover:underline cursor-pointer hover:text-black text-gray-700'><Link to={title} spy={true} smooth={true} offset={-20} duration={500}>{title}</Link></div>

    )
}