import React from 'react'
import Github from "../../../public/github.png"
import Linkedin from "../../../public/linkedin.png"
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div name="About" className='w-full p-4 sm:p-6 md:p-8 xl:p-16 h-fit flex justify-center items-center flex-col'>
      <h1 className='text-xl md:text-2xl xl:text-3xl font-bold p-2 border-b-4 border-red-500 font-serif'>About</h1>
      <p className='text-[16px] sm:text-[18px] text-center md:text-[20px] xl:text-xl p-2'>
        QuotesDB is a powerful backend API that gives users access to a large database of quotes from different authors and topics. Developers can use it to easily add inspiring and motivational quotes to their apps or websites. It includes features for filtering and generating random quotes, making it a user-friendly tool for accessing quotes programmatically.
      </p>

      <h1>
        Author - <a href="" className="font-bold">Sachin Kumar</a>
      </h1>


      <div className="w-full flex justify-center items-center p-2">
        Follow me on :-
        <a href="https://github.com/sk2105">
          <Image src={Github} alt="Github" className="w-8 h-8 m-2 hover:scale-110 duration-100 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/sachink91">
          <Image src={Linkedin} alt="Linkedin" className="w-8 h-8 m-2 hover:scale-110 duration-100 cursor-pointer" />
        </a>
      </div>

    </div>
  )
}
