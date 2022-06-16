import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

/**Github-search-users app version 12 - 'Repos' js 
 * file - Features:
 * 
 *      --> Placing 'Doughnut2D' Component. 
 * 
 * Notes: the code in the 'Wrapper' is related with the 
 * code in the 'Pie3D' chart about the 'relative' width. 
 * 
 * */
const Repos = () => {
  
  const { repos } = React.useContext(GithubContext)

  /**building 'total' prop totalize and calculate
   * most popular language*/
  let Languages = repos.reduce((total,item) => {
    
    const { language } = item;

    if (!language) return total;
    /**if there is not this instnce */
    if (!total[language]) {
    /**then create the instance with the value of 1 */
    
    /**this object is created to set dynamicly values
     * to the chart*/
      total[language] = {label:language, value: 1};
    } else {
      /**if there is already created, just acummulate */
      total[language] = {...total[language], value: total[language].value + 1 };
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

  console.log('turning the languages object back into an Array ==>', LanguagesArray)

  /**i can se the result acummulating the 
   * languages from all the repos */
  console.log('reduce resulting total of every language ==> ',Languages)

  /**here i modifify the data */
  const chartData = [
  {
    "label": "HTML",
    "value": "13"
  },
  {
    "label": "CSS",
    "value": "100"
  },
  {
    "label": "javaScript",
    "value": "80"
  },
]
  
  //console.log('this is provided on Repos ==>',repos )

  return(
    <section className='section'>
      <Wrapper className='section-center'>
        {/**<ExampleChart data={ chartData }/> */}
        {/**here i drilled the array '' */}
          <Pie3D data={LanguagesArray}/>
          {/**this divs separates the charts*/}
        <div></div>
          {/**here i place the 'Doughnut2D' Component */}
          <Doughnut2D data={chartData}/>
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
