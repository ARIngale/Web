import React from 'react'
import TeamsNav from '../components/TeamNav';
import Board from '../components/Card'
import Background from '../components/Background';
import cardData from '../Data/ExecutiveBoardMembers'
import { h1 } from 'framer-motion/client';

function ExecutiveBoard() {
  
  const groupedByPosition = cardData.reduce((acc, data) => {
    data.members.forEach(member => {
      const memberWithPosition = { ...member, position: data.position };
      if (!acc[data.position]) {
        acc[data.position] = [];
      }
      acc[data.position].push(memberWithPosition);
    });
    return acc;
  }, {});

  return (
    <div>
      <Background />
      <div className="container flex justify-center pt-32 pb-2 w-screen">
        <TeamsNav />
      </div>
      <h1 className='text-center text-white text-5xl font-bold'>Executive Board</h1>
      <div className="container flex flex-col gap-10 w-screen justify-center p-4">
        {Object.keys(groupedByPosition).map((position, posIndex) => (
          <div key={posIndex} className="flex flex-wrap justify-center gap-3 w-full">
            <h1 className='w-screen text-center text-white text-2xl'>{position}</h1>
            {groupedByPosition[position].map((member, memberIndex) => (
              
              <div key={memberIndex} className="flex justify-center w-full sm:w-1/2 lg:w-1/4 mb-10">
                
                <Board
                  name={member.name}
                  post={member.position}  
                  imageUrl={member.profilePic}
                  socialLinks={member.socialHandles}
                  showQuote={false}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );


};


export default ExecutiveBoard;