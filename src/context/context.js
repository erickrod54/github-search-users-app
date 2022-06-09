import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

/**Github-search-users app version 1 - 'context' js file - 
 * Features:
 * 
 *      --> Building 'GihubContext'.
 * 
 *      --> Building 'GithubProvider'.
 * 
 * 
 * Notes: In previous projects i have been wrapping directly 
 * the whole app with the Provider, this case will be 
 * different because the logic in it 
 * 
 * the consumer will be use by implementing 'useContext' hook
*/

/**invoking 'React.createContext()' i have access to
 * Provider and Consumer method*/
const GithubContext = React.createContext()

//Provider, Consumer - GithubContext.Provider

/**i won't wrap directly the whole app with the provider,
 * in order to add more logic, that's why i keep it in a
 * separate variable 'GithubProvider'*/
const GithubProvider = ({ children }) => {
    return <GithubContext.Provider value={'hello'}>{children}
    </GithubContext.Provider>
}

export {GithubProvider, GithubContext}

