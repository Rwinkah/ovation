/* eslint-disable @next/next/no-img-element */
import { generateRandomString } from '@/lib/helper-func'
import CardTwo from '../_components/info-card/card-two'

export default function InfoCards() {
  return (
    <section className="container md:w-fit lg:w-[95%] grid md:grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-12 py-20 info-card">
      {moreCards.map((card) => (
        <div
          className="gradient-container bg-opacity-50 rounded-[20px] p-[1px] max-w-[602px] max-h-[684px] relative"
          key={generateRandomString()}
        >
          <div
            className={`flex flex-col items-center justify-center rounded-[20px] bg-card-gradient h-full py-10 info-card-ctn`}
          >
            <img
              className={`${card.hasComponent ? 'hidden' : 'flex'} rounded-lg ${card.isFullWidth ? 'w-auto h-auto' : 'w-[90%] h-auto'}`}
              src={card.imgSrc}
              alt=""
            />

            <div className={`w-full ${card.hasComponent ? 'flex' : 'hidden'}`}>
              {card.component}
            </div>

            <div className="flex flex-col gap-3 mt-10 info-card-det-ctn px-[10px]">
              <p
                className={`text-white text-lg md:text-2xl font-medium text-center`}
              >
                {card.header}
              </p>

              <p className={`text-sm md:text-xl text-center`}>
                {card.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
const moreCards = [
  {
    header: 'Intelligent Profiles',
    description:
      'Showcase your NFT collections with intelligent profiles that highlight your unique notoriety, favorite NFTs, sales, experience, and more',
    imgSrc: '/assets/images/info/stats.png',
    component: null,
    hasComponent: false,
    isFullWidth: false,
  },
  {
    header: 'Earn Badges',
    description:
      'Gain recognition and rewards by earning badges as you highlight experience, sales, and showcase your NFTs.',
    imgSrc: '/assets/images/info/card-2.png',
    component: <CardTwo />,
    hasComponent: true,
    isFullWidth: false,
  },
  {
    header: 'Discover',
    description:
      'Easily discover and connect with other users through the discover page, featuring top profiles and badges.',
    imgSrc: '/assets/images/info/card-3.png',
    component: null,
    hasComponent: false,
    isFullWidth: false,
  },
  {
    header: 'Future Features Teaser',
    description: 'Stay tuned for exciting new features!',
    imgSrc: '/assets/images/info/card-4.png',
    component: null,
    hasComponent: false,
    isFullWidth: true,
  },
]
