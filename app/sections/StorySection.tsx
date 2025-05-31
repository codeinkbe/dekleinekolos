import React from 'react'
import SectionHeader from '@/components/SectionHeader';

export default function StorySection() {
  return (
    <div className='section-container bg-bg-secondary'>
      <SectionHeader title={storyHeader.title} description={storyHeader.description} />
    </div>
  )
}

const storyHeader = {
  title: "Story",
  description: "THE LITTLE COLOSSUS is a third-person, single-player stealth game set in a world scorched by a deadly day-night cycle. Humanity's only hope is to walk—ceaselessly—chasing twilight across the globe. At the heart of this endless movement lies the Isthmus: a narrow strip of land, which serves as humanity's bottleneck. Here, humanity shows its worst side: stampedes, theft and violence run rampant here.\n\n To escape the horrors of the Isthmus, a small group of outcasts break away, following the uncertain leadership of At’lar, a flawed cartographer who claims he knows an alternate route. But the story is not told through the eyes of the travellers. You play as a silent, weak creature—a baby colossus, long thought extinct. At`lar has stolen an egg from your nest. You are the only one who hatched. And now, you pursue the travellers across the wastes, hoping to rescue your unborn sibling before it’s cooked over a fire."
}