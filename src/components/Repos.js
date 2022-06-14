import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

/**Github-search-users app version 6 - 'Repos' js 
 * file - Features:
 * 
 *      --> Placing 'chartData' in order to directly
 *          work with the 'repos' data. 
 * 
 * Notes: This Component contain all the props 
 * related with the repos. 
 * 
 * So first i test the data, then i start to set'ExampleChart' 
 * to display the 'repos' data previously tested  
 * 
 * In this version any modification on the data will reflect
 * on the 'chartComponent'
 * */
const Repos = () => {
  
  const { repos } = React.useContext(GithubContext)

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
        <ExampleChart data={ chartData }/>
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
