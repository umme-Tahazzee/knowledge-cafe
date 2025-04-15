import React from 'react'
import Bookmark from './../Bookmark/Bookmark';


const BookMarks = ({bookmarks}) => {
  
  return (
     <>
       <div className="md:w-1/3  p-5 ml-4 mt-2 pt-4 rounded-2xl ">
         <h1 className='text-xl text-green-500 text-center font-bold'>BookMark Blog: {bookmarks.length} </h1>
                {
                   bookmarks.map(marks => <Bookmark key={marks.id} marks={marks}/> )
                }
      </div>
     </>
  )
}

export default BookMarks