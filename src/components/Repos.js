import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

/**Github-search-users app version 4 - 'Repos' js 
 * file - Features:
 * 
 *      --> Destructuring 'repos' on 'GithubContext'.
 * 
 *      --> Importing and Placing the 'ExampleChart'
 *          in order to start working on charts.
 * 
 *      --> Wrapping with 'Wrapper' Style Component
 *          the 'ExampleChart' to style it.
 * 
 * Notes: This Component contain all the props 
 * related with the repos. 
 * 
 * So first i test the data, then i start to set
 * 'ExampleChart' to display the 'repos' data previously
 * tested  
 * */
const Repos = () => {
  
  const { repos } = React.useContext(GithubContext)
  
  console.log('this is provided on Repos ==>',repos )

  return(
    <section className='section'>
      <Wrapper className='section-center'>
        <ExampleChart />
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
