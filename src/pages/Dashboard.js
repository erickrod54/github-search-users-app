import React, { useContext } from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';

/**Github-search-users app version 17 - 'Dashboard' 
 * Component - Features:
 * 
 *      --> Destructuring 'isLoading' value
 *          to set a conditional rendering.
 * 
 *      --> Setting up in the conditional rendering
 *          the spinner 'loadingImage'.
 *
 * Notes: the 'isLoading' value is destructured from
 * the provider and with the conditional rendering 
 * i show search and navbar and the spinner
 * 
 * The spinner always has to has three attributes 
 *  'src', 'className'  and 'alt' 
*/

const Dashboard = () => {

  const { isLoading } = useContext(GithubContext)

  

  if (isLoading) {
    return(
      <main>
        <Navbar /> 
        <Search />  
        <img 
          src={loadingImage} 
          className='loading-img' 
          alt='loading'/>
      </main>
    )
  }

  return (
    <main>
      <Navbar /> 
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
