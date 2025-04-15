import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import BookMarks from './components/BookMarks/BookMarks';
import { useState } from "react";

function App() {
  const [bookmarks, setBookMarks] = useState([])

  const handleAddToBookMark = blog => {
      const newBookMarks = [...bookmarks, blog]
      setBookMarks(newBookMarks)  
  }

  return (
    <>    
     <Header />
      <div className="md:flex justify-center max-w-7xl mx-auto pt-10">
        <Blogs handleAddToBookMark={handleAddToBookMark} />
        <BookMarks bookmarks={bookmarks} />
      </div>
     
    </>
  );
}

export default App;
