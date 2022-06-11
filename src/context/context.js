import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

/**Github-search-users app version 2 - 'context' js file - 
 * Features:
 * 
 *      --> Building states in order to use the 'mockData'
 * 
 *      --> Providing 'data' states 'githubUser', 'repos',
 *          and 'followers' 
 * 
 * 
 * Notes: 'mockData' can be customized checking the readme 
 * for further approach in this matter.
 * 
 * The data states are provided in order to build info
 * component -component previously tested with a 'hello'
 * value- */

/**invoking 'React.createContext()' i have access to
 * Provider and Consumer method*/
const GithubContext = React.createContext()


const GithubProvider = ({ children }) => {
    /**here i build the states */
    const [ githubUser, setGithubUser ] = useState(mockUser);
    const [ repos, setRepos ] = useState(mockRepos);
    const [ followers, setFollowers ] = useState(mockFollowers)

    /**here i provided as values */
    return <GithubContext.Provider 
            value={{
                githubUser,
                repos,
                followers
            }}>{children}
    </GithubContext.Provider>
}

export {GithubProvider, GithubContext}

