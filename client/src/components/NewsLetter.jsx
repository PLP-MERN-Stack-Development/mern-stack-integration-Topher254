import React from 'react'

const NewsLetter = () => {
    return (
        <div className='flex flex-col items-center justify-center py-16'>
            <div className=' p-8 rounded-2xl shadow-sm shadow-black/40 flex justify-center flex-col items-center'>
                <h1 className='text-2xl font-semibold'>Never Miss a Blog !</h1>
                <p className='text-gray-800'>Subscribe to get updates of new blogs.</p>
                <form className="flex items-center justify-between max-w-2xl py-2">
                    <input
                        type="text"
                        placeholder="Enter your email"
                        required
                        className="border border-gray-400 outline-none w-full px-4 py-2 rounded-l-lg"
                    />
                    <button
                        type="submit"
                        className="bg-pink-500 px-6 py-2 text-white hover:bg-pink-600 transition-all cursor-pointer rounded-r-lg"
                    >
                        Subscribe
                    </button>
                </form>

            </div>
        </div>
    )
}

export default NewsLetter
