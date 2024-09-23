"use client"
import React from 'react'
import beautify from 'js-beautify';
export default function GuidePage() {

    const options = { indent_size: 2, space_in_empty_paren: true }

    const dataObj = {
        id: 5,
        quote: "...",
        author: "Albert Einstein",
        category: "Motivational"
    }

    const dataJson = JSON.stringify(dataObj)

    const data = [
        {
            id: 5,
            quote: "...",
            author: "Albert Einstein",
            category: "Motivational"
        },
        {
            id: 6,
            quote: "...",
            author: "Albert Einstein",
            category: "Motivational"
        },
        {
            id: 7,
            quote: "...",
            author: "Albert Einstein",
            category: "Motivational"
        }
    ]

    const allQuotesData = JSON.stringify(data)

    return (
        <div name="Guide" className='w-full h-fit p-4 sm:p-6 md:p-8 xl:p-16 flex items-center justify-center flex-col'>
            <h1 className='text-xl text-center sm:text-2xl md:text-2xl xl:text-3xl  font-serif p-2 border-b-4 border-red-500'>API Endpoints Guide</h1>


            <h1 className='w-full text-xl p-4'>
                <p className='font-bold text-[16px] sm:text-[18px] md:text-[18px] xl:text-xl mt-2 pb-2 border-b-2 border-black'>Get Random Quote</p>
                <p className='pb-2 pt-2'>
                    This endpoint returns a random quote from the database.
                </p>
                <div className="w-full flex bg-black rounded-xl justify-center items-center flex-col overflow-x-scroll md:overflow-hidden">
                    <pre className='w-full mt-2 text-2xl text-white p-4 '>
                        <code className='w-full  text-white'>
                            {"fetch(\"https://quotes-db.vercel.app/api/random\")\n\t\t.then(res => res.json())\n\t\t.then(data => console.log(data))"}
                        </code>
                    </pre>
                </div>

                Output :
                <div className="w-full overflow-x-scroll md:overflow-hidden bg-black rounded-xl">
                    <pre className='w-full rounded-xl text-white p-4 '>

                        <code className=' w-full bg-black text-white  '>
                            {
                                beautify(dataJson, options)
                            }
                        </code>
                    </pre>
                </div>


            </h1>
            <h1 className='text-xl p-4 w-full'>

                <p className='font-bold  text-[16px] sm:text-[18px] md:text-[18px] xl:text-xl text-2xl mt-2 pb-2 border-b-2 border-black'>Get All Quotes</p>

                <p className='pb-2 pt-2'>
                    This endpoint returns all quotes from the database.
                </p>
                <div className="w-full flex bg-black rounded-xl justify-center items-center flex-col overflow-x-scroll md:overflow-hidden">
                <pre className='w-full mt-2 text-white p-4 '>
                    <code className=' w-full text-white  '>
                        {"fetch(\"https://quotes-db.vercel.app/api/quotes\")\n\t\t.then(res => res.json())\n\t\t.then(data => console.log(data))\n\t\t.catch(err => console.log(err))"}
                    </code>
                </pre>
                </div>
                
                <p className=' text-xl mt-2 pb-2 text-gray-500'>Output :</p>
                <div className="w-full flex justify-center items-center bg-black rounded-xl flex-col overflow-x-scroll md:overflow-hidden">
                <pre className='w-full text-white p-4 '>
                    <code className=' w-full  text-white  '>
                        {
                            beautify(allQuotesData, options)
                        }
                    </code>
                </pre>
                </div>
                



            </h1>


        </div>
    )
}
