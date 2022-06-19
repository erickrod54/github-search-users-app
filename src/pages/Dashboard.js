import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';

/**Github-search-users app version 16 - 'Dashboard' 
 * Component - Features:
 * 
 *      --> Uncommenting 'Navbar' Componnet in order to 
 *          get enought space and visualize the error.
 * 
 * 
 * Notes: here we can see rendered the components and start
 * modeling them.
 * 
 * Navbar Component is uncommented on this version in order
 * to get enought space and visualize the error
*/

const Dashboard = () => {
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
