import profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <header className=' flex justify-between p-4 mx-4 text-center border-b-1 '>
       <h2 className='text-2xl font-bold' >Knowledge Cafe</h2>
       <img src={profile} alt="" />
    </header>
  )
}

export default Header