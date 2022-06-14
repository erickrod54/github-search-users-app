import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

/**Github-search-users app version 8 - 'Repos' js 
 * file - Features:
 * 
 *      -->Commenting 'ExampleChart' - (is reference
 *        to build the charts).
 * 
 *      -->Placing 'Pie3D' Component in order to
 *         display the new chart.
 * 
 *      --> Reducing on 'repos' data -accesing test- 
 * 
 * Notes: In this version i build a test just to know
 * that i'm accessing the object properly.
 * */
const Repos = () => {
  
  const { repos } = React.useContext(GithubContext)

  /**applying reduce on repos is to calculate a  
   * 'total' -the total that i want is 'the most
   * language used' or 'popular' by the github-user 
   * searched-*/
  let Languages = repos.reduce((total,item) => {
    console.log('this is Repo > reduce ( test for each iteration - i made like this to test that i can access every object) ==>',item);
    return total;
  }, {})

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
  
  console.log('this is provided on Repos ==>',repos )

  return(
    <section className='section'>
      <Wrapper className='section-center'>
        {/**<ExampleChart data={ chartData }/> */}
        <Pie3D data={chartData}/>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

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
