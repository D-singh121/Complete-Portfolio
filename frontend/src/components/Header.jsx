import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
// import { NavLink, Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <header className='px-[8%] py-2 flex justify-between w-[100%] shadow-xl  h-[10vh] ' >
        <div className='text-4xl pt-1 opacity-95 cursor-pointer'>
          {/* <Link to="/">
            DC
          </Link> */}
          <a href='/'>DC</a>
        </div>
        <nav className='flex justify-between gap-5 pt-3 opacity-95'>
          <ul className='list-none flex flex-grow flex-shrink gap-7 pr-16 text-lg cursor-pointer'>
           {/* this is for router-dom   */}
            {/* <NavLink to='/'> Home</NavLink>
            <NavLink to='/techstack'> Tech Stack</NavLink>
            <NavLink to='/projects'> Projects</NavLink>
            <NavLink to='/contact'> Contact</NavLink>
            <NavLink to='/about'> About</NavLink> */}
            <a href='/'>Home</a>
            <a href='#techstack'>Tech Stack</a>
            <a href='#projects'> Projects</a>
            <a href='#contact'>Contact</a>

          </ul>

          <div className='flex justify-between gap-2 opacity-85 cursor-pointer'>
            <a href='https://github.com/D-singh121'><GitHubIcon /></a>
            <a href='https://twitter.com/Dee_Singh121'><XIcon /></a>
            <a href='https://www.linkedin.com/in/devesh-choudhary-b25a01152/'><LinkedInIcon /></a>
            <a href='https://www.instagram.com/deesingh9851/'><InstagramIcon /></a>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;
