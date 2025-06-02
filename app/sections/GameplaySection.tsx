import React from 'react'
import GameplayCard from '@/components/GameplayCard'
import SectionHeader from '@/components/SectionHeader'

export default function GameplaySection() {
  return (
    <div className='section-container'>
      <div className='flex flex-col items-center justify-center z-50 gap-20 w-full'>
        <SectionHeader title={gameplayHeader.title} description={gameplayHeader.description} align='left' />
        {gameplayCards.map((card, index) => (
          <GameplayCard 
            key={index}
            title={card.title} 
            description={card.description} 
            image={card.image} 
            alignment={card.alignment as 'left' | 'right'} 
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

const gameplayHeader = {
  title: "Gameplay",
  description: "Nullam eget nisl risus. Nullam aliquam, ligula eu consequat accumsan, mauris mauris mollis purus, vitae posuere nibh ligula in arcu. Donec cursus enim ut euismod aliquam. Nam in volutpat dui. Proin elementum varius vulputate. Ut a lorem sem. Quisque eu fermentum nunc, a rhoncus lorem. Nulla condimentum gravida arcu id aliquet. Mauris malesuada dignissim diam in pretium. Aenean sed mauris quis metus tempus volutpat. Donec fringilla tempus sodales."
}

const gameplayCards = [
  {
    title: "Sneak",
    description: "Use your small size to sneak past the travelers, eavesdrop on their conversations and try to retrieve your unborn sibling.",
    image: "/gameplayStealth.png",
    alignment: "left"
  },
  {
    title: "Explore",
    description: "Explore the harsh world of Arkus and meet its hardened, nomadic peoples.",
    image: "/gameplayExplore.png",
    alignment: "right"
  },
  {
    title: "Lure & Trap",
    description: "Lure At`lar and his party into traps to fight your battles for you.",
    image: "/gameplayLureTrap.png",
    alignment: "left"
  }
]