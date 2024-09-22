"use client"
import React from 'react'
import beautify from 'js-beautify';
export default function GuidePage() {

    const options = { indent_size: 2, space_in_empty_paren: true }

    const dataObj ={
        id: 5,
        quote: "The future belongs to the competent. Get good, get better, be the best!",
        author: "Albert Einstein",
        category: "Motivational"
    }

    const dataJson = JSON.stringify(dataObj)

    const data = [
        {
            id: 5,
            quote: "The future belongs to the competent. Get good, get better, be the best!",
            author: "Albert Einstein",
            category: "Motivational"
        },
        {
            id: 6,
            quote: "The future belongs to the competent. Get good, get better, be the best!",
            author: "Albert Einstein",
            category: "Motivational"
        },
        {
            id: 7,
            quote: "The future belongs to the competent. Get good, get better, be the best!",
            author: "Albert Einstein",
            category: "Motivational"
        }
    ]

    const allQuotesData = JSON.stringify(data)

    return (
        <div name="Guide" className='w-full h-fit p-16 flex items-center justify-center flex-col'>
            <h1 className='text-3xl  font-serif p-2 border-b-4 border-red-500'>API Endpoints Guide</h1>


            <h1 className='w-full text-xl p-4'>
                <p className='font-bold text-2xl mt-2 pb-2 border-b-2 border-black'>Get Random Quote</p>
                <p className='pb-2 pt-2'>
                    This endpoint returns a random quote from the database.
                </p>
                <pre className='w-full mt-2 bg-black rounded-xl text-white p-4 '>
                    <code className=' w-full bg-black rounded-xl text-white'>
                        {"fetch(\"http://localhost:3000/api/random\")\n\t\t.then(res => res.json())\n\t\t.then(data => console.log(data))"}
                    </code>
                </pre>
                Output :
                <pre className='w-full bg-black rounded-xl text-white p-4 '>

                    <code className=' w-full bg-black rounded-xl text-white  '>
                        {
                            beautify(dataJson, options)
                        }
                    </code>
                </pre>

            </h1>
            <h1 className='text-xl p-4 w-full'>

                <p className='font-bold text-2xl mt-2 pb-2 border-b-2 border-black'>Get All Quotes</p>

                <p className='pb-2 pt-2'>
                    This endpoint returns all quotes from the database.
                </p>
                <pre className='w-full mt-2 bg-black rounded-xl text-white p-4 '>
                    <code className=' w-full bg-black rounded-xl text-white  '>
                        {"fetch(\"http://localhost:3000/api/quotes\")\n\t\t.then(res => res.json())\n\t\t.then(data => console.log(data))"}
                    </code>
                </pre>
                Output :
                <pre className='w-full bg-black rounded-xl text-white p-4 '>
                    <code className=' w-full bg-black rounded-xl text-white  '>
                        {
                            beautify(allQuotesData, options)
                        }
                    </code>
                </pre>



            </h1>


        </div>
    )
}
