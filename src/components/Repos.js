import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

/**Github-search-users app version 14 - 'Repos' js 
 * file - Features:
 * 
 *      --> Placing 'Column3D' Component.
 * 
 *      --> Placing 'Bar3D' Component.
 * 
 *      --> Building functionality for 'Column3D'.
 * 
 *      --> Building functionality for 'Bar3D'.  
 * 
 * Notes: for now this components has been placed with
 * the dummy data - chartData - 
 * 
 * The functionality for 'Column3D' first i build the
 * 'stars' object then having this object with the props
 * 'label' and 'value' same props that 'Column3D' needs
 * i use 'Object' method to make 'starsArray' and display
 * it on the 'Column3D' graph.
 * 
 * The functionality for 'Bar3D' is created based on 
 * 'Column3D' functionality
 * 
 * in this version the 'chartData' dummy data is no 
 * longer needed because this data was only to provide
 * a reference to create 'Column3D' and 'Bar3D' with
 * props base on 'label' and 'value'
 * */
const Repos = () => {
  
  const { repos } = React.useContext(GithubContext)

  /**building 'total' prop totalize and calculate
   * most popular language*/
  let Languages = repos.reduce((total,item) => {
    
    /**i destructure the stars */
    const { language, stargazers_count } = item;

    if (!language) return total;
    /**if there is not this instnce */
    if (!total[language]) {
    /**then create the instance with the value of 1 */
    
    /**this object is created to set dynamicly values
     * to the chart, i add the 'stars' prop*/
      total[language] = {label:language, value: 1, 
        stars: stargazers_count};
    } else {
      /**if there is already created, just acummulate,
       * i add the stars, even if is '0' */
      total[language] = {...total[language], 
      value: total[language].value + 1,
      stars: total[language].stars + stargazers_count,
    };
    }


    return total;
  }, {})

  /**turning the 'languages' object back into an Array 
   * sorting by from top value to the low value 
   * taking a slice of '5' languages if the profile 
   * has it*/
  let LanguagesArray = Object.values(Languages).sort((a,b) => {
    return b.value - a.value
  }).slice(0, 5);

  /** stars for 'Column3D' and forks  for 'Bar3D' 
   * functionality */

  /**'total' represent the acummulative result and 
   * item every 'item'*/
  let { stars, forks } = repos.reduce((total, item) => {
    const { stargazers_count, name, forks } = item;

    /**here i dynamicly create the object */
    total.stars[stargazers_count] = {label:name, value: stargazers_count}
    
    /**here i dynamicly create the object */
    total.forks[forks] = { label: name, value: forks}
    return total;
  }, {
    stars:{}, forks:{}
  })

  //console.log('The stars object returned for Column3D (object with label and value props) ==>',stars)

  /**here i turned the 'stars' object into an Array and
   * reordered using 'reverse' to get the values 
   * top-down*/
  const starsArray = Object.values(stars)
  .slice(-5).reverse()

  //console.log('The stars object turned into an array ==>', starsArray)

  /**here i make the same with "forks" */
  const forksArray = Object.values(forks)
  .slice(-5).reverse()

  /**Now i add the 'stars' calculation here */
  /**the difference is that i map and overwrite
   * the value with 'item.stars'*/

  /**'item.stars' is the value that the chart needs' */
  let MostStarsArray = Object.values(Languages).sort((a,b) => {
    return b.stars - a.stars;
  }).map((item) => {
    return {...item, value: item.stars}
  }).slice(0, 5);

  //console.log('turning the languages object back into an Array for stars==>', MostStarsArray)

  //console.log('turning the languages object back into an Array ==>', LanguagesArray)

  /**i can se the result acummulating the 
   * languages from all the repos */
 // console.log('reduce resulting total of every language ==> ',Languages)

 
  
  //console.log('this is provided on Repos ==>',repos )

  return(
    <section className='section'>
      <Wrapper className='section-center'>
        {/**<ExampleChart data={ chartData }/> */}
        {/**here i drilled the array '' */}
          <Pie3D data={LanguagesArray}/>
          {/**this divs separates the charts*/}
  
        {/**here i place the 'Column3D' Component
         * and pass the 'starsArray' data built*/}
          <Column3D data={starsArray}/>

          {/**here i place the 'Doughnut2D' Component */}
          <Doughnut2D data={MostStarsArray}/>

         {/**here i place the 'Bar3D' Component */}
          <Bar3D data={forksArray}/>
       
        <div></div>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  /**this makes a grid template
  * in the measure that i am adding
  * charts they into this template
  * */
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
 
  /**this block is related with the responsiveness
  * '!important' flags to avoid dealing with inline
  * 'css' ( because 'fusioncharts' is a third-party ) 
  * */
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
 
`;

export default Repos;
