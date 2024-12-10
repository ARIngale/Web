import React from 'react'
import Background from '../components/Background';
import TeamsNav from '../components/TeamNav';
import Board from '../components/Card'
import cardData from '../Data/MainBoardMembers'

function MainBoard() {
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
      <h1 className='text-center text-white text-5xl font-bold'>Main Board</h1>
      <div className="container flex flex-col gap-14 w-screen items-center justify-center p-4">
        {Object.keys(groupedByPosition).map((position, posIndex) => (
          <div key={posIndex} className="flex flex-wrap justify-center gap-3 w-full">
            <h1 className='w-screen text-center text-white text-2xl'>{position}</h1>
            {groupedByPosition[position].map((member, memberIndex) => (
              <div key={memberIndex} className="flex items-center justify-center w-full sm:w-1/2 lg:w-1/3 mb-10">
                <Board
                  name={member.name}
                  post={member.position}  
                  imageUrl={member.profilePic}
                  socialLinks={member.socialHandles}
                  quote={member.quote}
                  showQuote={true}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};


export default MainBoard;

