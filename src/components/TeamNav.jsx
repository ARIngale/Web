import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TeamsNav = () => {
  return (
    <StyledWrapper>
      <div className="button-container flex flex-col lg:flex-row">
        <button className="button">
        <Link
          to="/board/main"
        >
          Main Board
        </Link>
          
        </button>
        <button className="button">
        <Link
          to="/board/executive"
        >
          Executive Board
        </Link>
          
        </button>
        
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button-container {
    display: flex;
    background: #0A93C4;
    width: 100%;
    
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    
  }

  .button {
    outline: 0 !important;
    border: 0 !important;
    // width: 40px;
    // height: 40px;
    padding: 10px 20px;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: all ease-in-out 0.3s;
    cursor: pointer;
  }

  .button:hover {
    transform: translateY(-3px);
  }

  .icon {
    font-size: 20px;
  }`;

export default TeamsNav;
