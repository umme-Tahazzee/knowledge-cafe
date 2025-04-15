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

  const handleMarkAsRead = time => {
      const newReadingTime = readingTime + time
      setReadingTime(newReadingTime)
     
      
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
