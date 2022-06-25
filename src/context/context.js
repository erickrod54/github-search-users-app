import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

/**Github-search-users app version 18 - 'context' js file - 
 * Features:
 * 
 *      --> Building 'url' to access to the 'repos' of
 *          the searched profile.
 * 
 *      --> Building 'url' to access to the 'followers' of
 *          the searched profile.      
 * 
 * Notes: these links below are the reference to build the
 * 'urls' for 'repos' and followers, the full reference is
 * the README file:  
 * 
 *  [Repos](https://api.github.com/users/john-smilga/repos?per_page=100)
 *  
 * [Followers](https://api.github.com/users/john-smilga/followers)
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
    const [ isLoading, setIsloading ] = useState(false);

    /**here is the state for error */
    const [ error, setError ] = useState({
        show: false,
        msg: ''
    }) 


    const searchGithubUser = async(user) => {
        //toggleError
        /**here is set loading to true */
        setIsloading(true)

        const response = await axios(`${rootUrl}/users/${user}`)
        .catch(err => console.log(err))

        console.log('The user i get from the API ==>', response)

        if (response) {
            setGithubUser(response.data)
            const { login, followers_url } = response.data;

            /**url for 'repos' */
            
            /**i use axios and build the 'url', once is
             * i get the data i set it into the state value*/
            axios(`${rootUrl}/users/${login}/repos?per_page=100`)
            .then(response => setRepos(response.data))
            
            /**url for 'followers' */

            /**i use axios and build the 'url', once is
             * i get the data i set it into the state value*/
            axios(`${followers_url}?per_page=100`)
            .then(response => setFollowers(response.data))
        }else{
            toggleError(true, 'there is no user with that username')
        }
        /**at the end of the previous block
         * i invoke 'checkRequest()' and pass again
         * 'setIsLloading' to 'false'
         */
        checkRequest();
        setIsloading(false)
    }

    /**this will check for the rate limit -the request
     * number - reference to README github API-*/
    const checkRequest = () => {
        axios(`${rootUrl}/rate_limit`)
        .then(({data}) => { 

            let {
                rate: { remaining },
            } = data;

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
                error,
                searchGithubUser,
                isLoading,
            }}>{children}
    </GithubContext.Provider>
}

export {GithubProvider, GithubContext}

