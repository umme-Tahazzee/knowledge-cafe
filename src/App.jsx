import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import BookMarks from './components/BookMarks/BookMarks';
import { useState } from "react";
import SpendTime from './components/SpendTime/SpendTime';

function App() {
  const [bookmarks, setBookMarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookMark = blog => {
      const newBookMarks = [...bookmarks, blog]
      setBookMarks(newBookMarks)  
  }

  const handleMarkAsRead = (id, time) => {
      const newReadingTime = readingTime + time 
      setReadingTime(newReadingTime) 
      //remove the read blog from book marks
      console.log('remove bookmark', id);
      const remainingBooKmarks = bookmarks.filter(bookmark => bookmark.id !== id)
      setBookMarks(remainingBooKmarks)

  }
  


  return (
    <>    
     <Header />
      <div className="md:flex justify-center max-w-7xl mx-auto pt-10">
        <Blogs 
        handleAddToBookMark={handleAddToBookMark}
        handleMarkAsRead={handleMarkAsRead} />
        
        <BookMarks bookmarks={bookmarks}
        readingTime={readingTime} />
      </div>
     
    </>
  );
}

export default App;
