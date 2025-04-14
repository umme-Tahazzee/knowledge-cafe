import React from 'react'

const Blog = ({blog}) => {
 const {cover_pic,author_name,date,
   author_img, title, hashtags, reading_time, posted_date} = blog
  return (
    <div className=''>
       <div>
          <img  className='h-[200px] w-[300px]  ' src={cover_pic} alt="" srcset="" />
         <div className='flex justify-between'>
             
            <div className='flex' >
              <img className='w-12 h-[40px] rounded-full '  src={author_img} alt={author_name} />
             <div className='ml-6'>
                 <h3 className="text-2xl">{author_name}</h3>
                 <p>{posted_date}</p>
             </div>
            </div>
            {/* reading section  */}
            <div>
              <span>{reading_time} min read</span>
            </div>
         </div>
         <h2 className='text-[20px]'>{title}</h2>
         <p>
          {
            hashtags.map((hash, idx) => <span key={idx}> <a href=''> {hash} </a> </span> )
          }
         </p>
       </div>
    </div>
  )
}

export default Blog