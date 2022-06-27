import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

/**Github-search-users app version 19 - 'context' js file - 
 * Features:
 * 
 *      --> Refactoring axios data request with Promises 
 *          in order to get all data at the same time.     
 * 
 * Notes: the 'repos' and 'followers' data in previous
 * version are obtained in different times, thats why
 * comes Promises and axios implementation in this 
 * version to address that issue.
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

            /**using 'Promise.allSettled' once i get
             * the 'repo'-'followers' data back then i set
             * it only if is 'fulfilled'*/
            await Promise.allSettled([axios(`${rootUrl}/users/${login}/repos?per_page=100`), 
            axios(`${followers_url}?per_page=100`)])
            .then((results) => {
                const [ repos, followers ] = results;
                const status = 'fulfilled';
                
                if (repos.status === status) {
                    setRepos(repos.value.data)
                }
                if (followers.status === status) {
                    setFollowers(followers.value.data)
                }
                //console.log('the results after the Promise is all settled ==>', results)
            }).catch(err => console.log(err.value))
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

