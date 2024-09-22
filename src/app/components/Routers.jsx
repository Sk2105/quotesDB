"use client"
import React from 'react'
import routes from './model/Route'
import { useRouter } from 'next/router';
import Link from 'next/link'


export default function Routers() {
    return (
        <div name='Route' className='w-full h-fit p-16 flex justify-center items-center flex-col'>
            <div className='w-full p-4 h-fit flex justify-center items-center'>
                <h1 className='text-3xl  text-black font-serif border-b-4 border-red-500'>Routes</h1>
            </div>
            {
                routes.map(r => {

                    return (
                        <RouteCard route={r} key={r.name} />
                    )

                })
            }
        </div>
    )
}

function RouteCard({ route }) {

    console.log(route);

    return (
        <div className={`w-full h-fit grid  grid-cols-2 place-items-center border border-black `}>
            <h1 className='text-xl text-center p-2 w-full h-full font-semibold text-black border-r-2 border-black'>
                {route.name}
            </h1>

            <div className="w-full flex justify-center items-center flex-col">
                <h1 className='text-[16px] cursor-pointer w-full p-2 text-center '>
                    Click here - <Link className='text-blue-600' href={route.link}>https://localhost:3000 {route.route}</Link>
                </h1>
                {
                    route.query && route.query.map(q => {
                        return (
                            <div key={q.name} className='w-full border-t-[1px] border-black/50 p-2 h-fit flex justify-center items-center'>
                                <h1 className='text-[14px] font-bold text-center text-black'>
                                    {q.name} - <span className='text-gray-600 text-sm font-normal'>{q.description}</span>
                                </h1>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}
