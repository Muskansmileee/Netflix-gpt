import React from 'react'

const GptSearchBar = () => {
  return (
    <div className="pt-52">
        <form className="pl-96" onSubmit={e => e.preventDefault()}>

            <input className="border border-black w-1/2 py-3 pl-2 rounded-md focus:border-black-500 focus:outline-none" 
            type="text" placeholder="What would you like to watch today?"/>

            <button className="bg-red-500 p-3 ml-2 rounded-md text-white">
                Search
            </button>

        </form>
    </div>
  )
}

export default GptSearchBar