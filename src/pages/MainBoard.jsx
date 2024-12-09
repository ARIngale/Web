import React from 'react'
import Background from '../components/Background';
import TeamsNav from '../components/TeamNav';
import Board from '../components/Card'
import cardData from '../Data/MainBoardMembers'

function MainBoard() {

  return (
    <div>
        <Background />
        <div className="container flex justify-center pt-32 pb-10 w-screen"><TeamsNav /></div>
        
    
        <h1 className='text-center text-white text-6xl font-bold'>Main Board</h1>
        <div className="container flex gap-14 w-screen justify-center p-10 flex-wrap">
            
        {cardData.map((data, index) => (
        data.members.map((member, memberIndex) => (
          <Board
            key={`${index}-${memberIndex}`}
            name={member.name}
            post={data.position}
            imageUrl={member.profilePic}
            socialLinks={member.socialHandles}
          />
        ))
      ))}
      
    </div>
      
    </div>
  );
};


export default MainBoard;

