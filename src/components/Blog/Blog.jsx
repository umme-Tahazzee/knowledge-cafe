import { LuBookmarkPlus } from "react-icons/lu";

const Blog = ({blog, handleAddToBookMark}) => {
 const {cover, author, 
   author_img, title, hashtags, reading_time, posted_date}
    = blog
  return (
    <div className=''>
       <div className='mb-10'>
          <img  className='h-[200px] w-full mb-8 rounded-lg ' src={cover} alt="" />
           <div className='flex justify-between'>         
            <div className='flex' >
              <img className='w-12'  src={author_img} alt={author} />
             <div className='ml-6 '>
                 <h3 className="font-bold text-xl">{author}</h3>
                 <p>{posted_date}</p>
             </div>
            </div>
            {/* reading section  */}
            <div className="">
              <span>{reading_time} min read</span>
              <button  
               onClick={handleAddToBookMark}             
               className='ml-2  text-xl text-gray-500'><LuBookmarkPlus /></button>
            </div>
         </div>
         <h2 className='text-xl mt-4 font-bold'>{title}</h2>
         <p>
          {
            hashtags.map((hash, idx) => <span key={idx}> <a className='text-gray-400 gap-[10px]' href=''> #{hash} </a> </span> )
          }
         </p>
         <button    
         className='border-b-2 text-blue-400 mt-6 text-sm '>Mark As Read</button>
       </div>
    </div>
  )
}

export default Blog