import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

/**Github-search-users app version 16 - 'context' js file - 
 * Features:
 * 
 *      --> Destructuring 'remaining' prop from 'data'.
 * 
 *      -->  Building the state for 'error'    
 * 
 * Notes: In next this version i pull out the 'data' 
 * destructuring it and start to work on it on detail
 *
 * The error state is an 'object key' of 'show' and 'msg'
 * props to handle if will show based so far on the 
 * 'remaining' requests and deliver the messages 
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
    /**here is the state for error */
    const [ error, setError ] = useState({
        show: false,
        msg: ''
    }) 
    /**this will check for the rate limit -the request
     * number - reference to README github API-*/
    const checkRequest = () => {
        axios(`${rootUrl}/rate_limit`)

        /**here i destrucure remaining */
        .then(({data}) => {
            /**from 'data' i destructure 'remaining' */ 
            let {
                rate: { remaining },
            } = data;

            /**i set request to the value of remaining 
             * requests*/
            setRequest(remaining)
            console.log('the remaining request value  from data ===>', remaining)
            if (remaining === 0) {
                toggleError(
                    true, 
                    'sorry, you have exceeded your hourly rate limit!')
            }
        })
        .catch((err) => console.log(err))
    }

    /**here i build 'toggleError' to handle
     * the error -i set some default values-*/
    function toggleError( show = false, msg = '') {
        setError({ show, msg})
    }
    /**Once the app is loaded i check for requests */
    useEffect(() => {
        checkRequest()
    },[])

    /**here i provided props as values */
    return <GithubContext.Provider 
            value={{
                githubUser,
                repos,
                followers,
                request,
                error
            }}>{children}
    </GithubContext.Provider>
}

export {GithubProvider, GithubContext}

