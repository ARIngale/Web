import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  .parent {
    width: 20vmax;
    height: 30vmax;
    perspective: 1000px;
  }

  @media (max-width: 768px) {  
    .parent {
        width: 100%;
        height: 57vmax;
    }
}

  .card {
    width: 100%;
    height: 90%;
    border: 4px solid yellow;
    border-radius: 50px;
    background: #0A93C4;
    transition: all 0.5s ease-in-out;
    transform-style: preserve-3d;
    box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px, rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
  }

  .content {
    padding: 2vmin;
    transform: translate3d(0, 0, 26px);
    height: 90%;
  }

    .content img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-radius: 45px;
    border: 4px solid white;
    }

    @media (max-width: 768px) { 
    .content{
    width: 100%;
    padding: 3vmin;
    }
    .content img {
        border : 2px solid white;
    }
    .card{
        width: 100%;
        }
    }

  .content .title {
    display: block;
    text-align: center;
    color: white;
    font-weight: 900;
    font-size: 3vmin;
  }

  .content .text {
    display: block;
    text-align: center;
    color: white;
    font-size: 15px;

  }

  .quote {
  background: linear-gradient(to right, #fffc00, #ffffff);
  -webkit-background-clip: text;
  color: transparent;
}

  @media (max-width: 768px) {
    .content .title {
        font-size: 5.5vmin;
}
  }

  .bottom {
    padding: 10px 12px;
    transform-style: preserve-3d;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate3d(0, 0, 26px);
  }

  .bottom .social-buttons-container {
    display: flex;
    gap: 10px;
    transform-style: preserve-3d;
  }

  .bottom .social-buttons-container .social-button {
    color:white;
    fill:black;
    width: 30px;
    aspect-ratio: 1;
    padding: 5px;
    background: rgb(255, 255, 255);
    border-radius: 50%;
    border: none;
    display: grid;
    place-content: center;
    box-shadow: rgba(5, 71, 17, 0.5) 0px 7px 5px -5px;
  }

  .bottom .social-buttons-container .social-button:first-child {
    transition: transform 0.2s ease-in-out 0.4s, box-shadow 0.2s ease-in-out 0.4s;
  }

  .bottom .social-buttons-container .social-button:nth-child(2) {
    transition: transform 0.2s ease-in-out 0.6s, box-shadow 0.2s ease-in-out 0.6s;
  }

  .bottom .social-buttons-container .social-button:nth-child(3) {
    transition: transform 0.2s ease-in-out 0.8s, box-shadow 0.2s ease-in-out 0.8s;
  }

  .bottom .social-buttons-container .social-button .svg {
    width: 15px;
    fill:#0ab9e8;
  }

  .bottom .social-buttons-container .social-button:hover {
    background: black;
  }

  .bottom .social-buttons-container .social-button:hover .svg {
    fill: white;
  }

  .bottom .social-buttons-container .social-button:active {
    background: rgb(255, 234, 0);
  }

  .bottom .social-buttons-container .social-button:active .svg {
    fill: black;
  }

  .parent:hover .card {
    transform: rotate3d(1, 1, 0, 30deg);
    box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px, rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
  }

  .parent:hover .card .bottom .social-buttons-container .social-button {
    transform: translate3d(0, 0, 50px);
    box-shadow: rgba(5, 71, 17, 0.2) -5px 20px 10px 0px;
  }
  `
const Board = ({ name, post, imageUrl, socialLinks, quote, showQuote }) => {
  return (
    <StyledWrapper>
      <div className="parent">
        <div className="card ">
          <div className="content">
            <img src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"  />
            <span className="title">{name}</span>
            <span className="text">{post}</span>
            {showQuote ? <p className="quote italic text-center mt-2">"{quote}"</p> : null}
          </div>
          <div className="bottom">
            <div className="social-buttons-container">
              <a href={socialLinks.linkedIn} target="_blank" rel="noopener noreferrer" className="social-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="svg"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-335A53.26 53.26 0 1 1 53.12 59 53.28 53.28 0 0 1 53.84 113zm394.24 335h-92.68V302.4c0-34.8-12.46-58.6-43.55-58.6-23.75 0-37.92 15.95-44.15 31.38-2.28 5.54-2.84 13.3-2.84 21v151H174V148.9h92.68v39.18c12.28-18.92 34.2-45.95 83.44-45.95 60.92 0 106.68 39.82 106.68 125.34zm0 0z" />
                </svg>
              </a>
              
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8c63.6 0 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186c-39.6 0-71.9-32.3-71.9-71.9s32.3-71.9 71.9-71.9 71.9 32.3 71.9 71.9-32.3 71.9-71.9 71.9zm146.4-194.3c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9s12-26.9 26.9-26.9c14.8.1 26.9 12 26.9 26.9zM398.8 96H49.2C21.8 96 0 117.8 0 145.2v259.6C0 394.2 21.8 416 49.2 416h349.6c27.4 0 49.2-21.8 49.2-49.2V145.2c0-27.4-21.8-49.2-49.2-49.2zM224.1 338c-63.5 0-114.9-51.3-114.9-114.9 0-63.5 51.3-114.9 114.9-114.9 63.5 0 114.9 51.3 114.9 114.9 0 63.5-51.4 114.9-114.9 114.9z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>

 
  );
};

export default Board;

