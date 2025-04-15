

const Bookmark = ({marks}) => {

const {title} = marks

  console.log(title);
  
  return (
    <div className=" bg-slate-300 p-5 item-center rounded-lg mt-2  ">    
       <h5 className="text-black font-bold">{title}</h5>
    </div>
  )
}

export default Bookmark