// import React from 'react'
// import Background from '../components/Background'
// import TeamsNav from '../components/TeamNav'
// import Board from '../components/Card'
// import cardData from '../Data/MainBoardMembers'

// function MainBoard() {
//   const groupedByPosition = cardData.reduce((acc, data) => {
//     data.members.forEach(member => {
//       const memberWithPosition = { ...member, position: data.position }
//       if (!acc[data.position]) {
//         acc[data.position] = []
//       }
//       acc[data.position].push(memberWithPosition)
//     })
//     return acc
//   }, {})

//   return (
//     <div className="min-h-screen">
//       <Background />
//       <div className="container mx-auto flex justify-center pt-32 pb-2">
//         <TeamsNav />
//       </div>
//       <h1 className="text-center text-white text-5xl font-bold mb-14">Main Board</h1>
//       <div className="container mx-auto px-4">
//         {Object.entries(groupedByPosition).map(([position, members], posIndex) => (
//           <div key={posIndex} className="mb-14">
//             <h2 className="text-center text-white text-2xl mb-6">{position}</h2>
//             <div className="flex flex-wrap justify-center gap-6">
//               {members.map((member, memberIndex) => (
//                 <div key={memberIndex} className="w-full sm:w-1/2 lg:w-1/3 flex justify-center mb-10">
//                   <Board
//                     name={member.name}
//                     post={member.position}
//                     imageUrl={member.profilePic}
//                     socialLinks={member.socialHandles}
//                     quote={member.quote}
//                     showQuote={true}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default MainBoard;


import React from 'react'
import TeamsNav from '../components/TeamNav'
import Board from '../components/Card'
import cardData from '../Data/MainBoardMembers'

function MainBoard() {
  const groupedByPosition = cardData.reduce((acc, data) => {
    data.members.forEach(member => {
      const memberWithPosition = { ...member, position: data.position }
      if (!acc[data.position]) {
        acc[data.position] = []
      }
      acc[data.position].push(memberWithPosition)
    })
    return acc
  }, {})

  return (
    <div className="min-h-scree">
   
      <div className="container mx-auto flex justify-center pt-36 pb-10">
        <TeamsNav />
      </div>
      <h1 className="text-center bg-heading-bg text-transparent bg-clip-text text-5xl font-bold mb-14">Main Board</h1>
      <div className="container mx-auto px-4">
        {Object.entries(groupedByPosition).map(([position, members], posIndex) => (
          <div key={posIndex} className="mb-14">
            <h2 className="text-center bg-gradient-to-r from-blue-700  to-blue-400 text-transparent bg-clip-text font-bold text-3xl mb-6">{position}</h2>
            <div className="flex flex-wrap justify-center gap-10">
              {members.map((member, memberIndex) => (
                <Board
                  key={memberIndex}
                  name={member.name}
                  post={member.position}
                  imageUrl={member.profilePic}
                  socialLinks={member.socialHandles}
                  quote={member.quote}
                  showQuote={true}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainBoard;

