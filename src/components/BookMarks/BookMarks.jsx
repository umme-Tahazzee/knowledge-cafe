import React from 'react'
import Bookmark from './../Bookmark/Bookmark';


const BookMarks = ({bookmarks, readingTime}) => {
  
  return (
     <>
       <div className="md:w-1/3  p-5 ml-4 mt-2 pt-4 rounded-2xl ">
       <div className='bg-sky-100 rounded-lg mb-4'> <h3 className='text-xl font-semibold p-2'>Spent time on read :  {readingTime}</h3> </div>
         <h1 className='text-xl text-white bg-slate-500 rounded-lg p-2  text-center font-bold'>BookMark Blog: {bookmarks.length} </h1>
                {
                   bookmarks.map(marks => <Bookmark key={marks.id} marks={marks}/> )
                }
      </div>
     </>
  )
}

export default BookMarks