import {MoonIcon, SunIcon} from '@heroicons/react/24/solid'
import { useEffect } from 'react';

const ToggleTheme = () => {

    const systemPreference =  window.matchMedia('(prefers-color-scheme: dark)').matches;

    useEffect(()=> {
        systemPreference && document.documentElement.classList.add('dark')
    })

    const toggle = () => {
        document.documentElement.classList.toggle('dark')
    }
    
    return ( 
        <div className='hidden sm:block'>
            <MoonIcon className='block h-8 text-gray-100 dark:hidden cursor-pointer' onClick={toggle}/>
            <SunIcon className='hidden h-8 text-gray-100 dark:block cursor-pointer' onClick={toggle}/>
        </div>
     );
}
 
export default ToggleTheme;