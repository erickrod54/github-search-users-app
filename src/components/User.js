import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Followers from './Followers';
/**Github-search-users app version 3 - 'User' js file - 
 * Features:
 * 
 *      --> Importing and Placing 'Card' Component.
 * 
 *      --> Importing and Placing 'Followers' Component.
 * 
 * 
 * Notes: This component is going to set styles for both 
 * Components, 'Card' Component -will have content for 
 * the user-, and 'Followers' Component -will have 
 * content for followers-
 *  */

const User = () => {
  return(
    <section className='section'>
      <Wrapper className='section-center'>
        <Card />
        <Followers />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;

export default User;
