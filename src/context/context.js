import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

/**Github-search-users app version 15 - 'context' js file - 
 * Features:
 * 
 *      --> Building states for 'request' and 'loading'.
 * 
 *      --> Building 'checkRequest' using axios library
 *          to get the data back from the API.
 * 
 *      --> Building 'useEffect' to invoke 'checkRequest'
 *          once the app is loaded.     
 * 
 * Notes: In next version i'll pull the 'data' 
 * destructuring it and start to work on it on detail
 * 
 * */

/**invoking 'React.createContext()' i have access to
 * Provider and Consumer method*/
const GithubContext = React.createContext()


const GithubProvider = ({ children }) => {
    /**here i build the states */
    const [ githubUser, setGithubUser ] = useState(mockUser);
    const [ repos, setRepos ] = useState(mockRepos);
    const [ followers, setFollowers ] = useState(mockFollowers)

    /**here i request 'loading' */
    const [ request, setRequest ] = useState(0);
    /**loading state */
    const [ loading, setLoading ] = useState(false);
    
    /**this will check for the rate limit -the request
     * number - reference to README github API-*/
    const checkRequest = () => {
        axios(`${rootUrl}/rate_limit`)
        .then((data) => { console.log('resulting promise data request from the API ==>', data)})
        .catch((err) => console.log(err))
    }

    /**Once the app is loaded i check for requests */
    useEffect(() => {
        checkRequest()
    },[])

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

