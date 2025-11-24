import { ArrowRightIcon, CalendarIcon, ClockIcon } from 'lucide-react';
import {assets} from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => { 

  const navigate = useNavigate() //allow to navigate using javascript inside the component
  
  return( 
    <div className='flex flex-col items-start justify-center gap4
    px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")]
    bg-cover bg-center h-screen'>
      <img src={assets.marvelLogo} alt="" className='max-h-11 lg:h-11 mt-20'/>

      <h1 className='text-5xl md:text-[70px] md:leading-18 fon-semibold 
      max-w-110'>Defenders<br/> of the Cosmos</h1>
        <div className='flex items-center gap-4 text-gray-300'>
              <CalendarIcon className='w-4.5 h-4.5'/> 2025
        </div>
        <div className='flex items-center gap-4 text-gray-300'>
              <ClockIcon className='w-4.5 h-4.5'/> 1h 50m
        </div>
        <p className='max-w-md text-gray-300'>In a post-apocalyptic world where moving cities devour one another to survive, two people cross paths in London and attempt to uncover and stop a conspiracy.
        </p>
        <button onClick={()=> (navigate('/movies'), scrollTo(0,0))} className='flex items-center gap-1 px-6
        py-3 text-sm bg-[var(--color-primary-dull)] hover:bg-[var(--color-primary)] transition rounded-full '>
          Explore Movies
          <ArrowRightIcon className='w-5 h-5'/>
        </button>
    </div>
  )
}
export default HeroSection