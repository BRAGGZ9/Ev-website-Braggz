import './Navbar.css'


const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-logo'><a href='#'>EV-olution</a></div>
        <ul className='Navbar'>
          <li>Home</li>
          <li>Explore</li>
          <li >About</li>
          <li className='nav-contact'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar
