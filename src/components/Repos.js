import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

/**Github-search-users app version 9 - 'Repos' js 
 * file - Features:
 * 
 *      --> Reducing on 'repos' -second test to
 *          depurate data- 
 * 
 *      --> Building 'total' prop for each language
 *          dynamicly.
 * 
 * Notes: in this version i am depurating 'null'
 * values from every 'language' prop  and creating
 * the 'total' prop to totalize the languages by this
 * version in total i'm setting a dummy value '30'
 * to check in that the 'prop' in fact was created.
 * 
 * */
const Repos = () => {
  
  const { repos } = React.useContext(GithubContext)

  /**building 'total' prop for each language 
   * dynamicly-*/
  let Languages = repos.reduce((total,item) => {
    /**i destructure from the iteration the 
     * 'language' prop */
    const { language } = item;
    /**with this condition i got rid of
     * the 'null' values*/
    if (!language) return total;
    console.log('from each iteration i got the language of each repo ==>',language);

    /**this way i create the language 'prop' to
     * totalize dynamicly in every object -so
     * if i have more languages they will add
     * dynamicly-*/
    total[language] = 30;
    console.log('this is total', total)


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
