import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';

/**Github-search-users app version 1 - 'Dashboard' 
 * Component - Features:
 * 
 *      --> Importing and Placing all the Components
 *          for 'Dashboard' Page.
 * 
 * 
 * Notes: here we can see rendered the components and start
 * modeling them.
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
