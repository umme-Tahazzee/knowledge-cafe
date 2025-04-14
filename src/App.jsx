import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import BookMarks from './components/BookMarks/BookMarks';

function App() {
  return (
    <>
      <Header />
      <main className="md:flex">
        <Blogs />
        <BookMarks/>
      </main>
    </>
  );
}

export default App;
