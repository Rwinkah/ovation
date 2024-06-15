/* eslint-disable @next/next/no-img-element */
import { generateRandomString } from '@/lib/helper-func'

export default function InfoCards() {
  return (
    <section className="container w-[70%] grid grid-cols-2 gap-x-5 gap-y-12 py-20 info-card">
      {moreCards.map((card, index) => (
        <div
          className="gradient-container bg-opacity-50 rounded-[20px] p-[1px] max-w-[602px] relative"
          key={generateRandomString()}
        >
          <div
            className={`p-[10px] flex flex-col items-center rounded-[20px] bg-card-gradient h-full py-10 info-card-ctn ${card.forSmallerScreens ? 'pr-0' : ''}`}
          >
            <img
              className="rounded-lg p-[8px] w-auto h-[295px] large-screen"
              src={card.imgSrc}
              alt=""
            />

            <img
              className={`rounded-lg p-[8px] hidden small-device ${card.forSmallerScreens ? 'ml-[15.75%] w-[90%]' : ''}`}
              src={card.smallSreenImage}
              alt=""
            />

            <div className="flex flex-col px-[6px] gap-3 mt-20 info-card-det-ctn">
              <p
                className={`text-white text-lg md:text-2xl font-medium text-center ${card.forSmallerScreens ? 'pr-[10px]' : ''}`}
              >
                {card.header}
              </p>

              <p
                className={`text-sm md:text-xl text-center ${card.forSmallerScreens ? 'pr-[10px]' : ''}`}
              >
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
    header: 'Social Media',
    description:
      'Users will be enabled to have more meaningful interactions, the ability to create unique posts, recognise post contributions, and filtering.',
    imgSrc: 'assets/images/info/info1-3x.png',
    smallSreenImage: 'assets/images/info/info1-sm.png',
    forSmallerScreens: false,
  },
  {
    header: 'Personalised Portfolio',
    description:
      'Through blockchain interoperability, and an NFT centric UI/UX, users have one pane into their NFT portfolio, notoriety, and social notoriety.',
    imgSrc: 'assets/images/info/info2-3x.png',
    smallSreenImage: 'assets/images/info/info2-sm.png',
    forSmallerScreens: false,
  },
  {
    header: 'Earn $OVA',
    description:
      'Earn $OVA tokens in a variety of ways: Sharing NFTs, Earning badges, Drawing engagement, Interacting on the platform, Owning a Genesis NFT',
    imgSrc: 'assets/images/info/info3-3x.png',
    smallSreenImage: 'assets/images/info/exp.png',
    forSmallerScreens: false,
  },
  {
    header: 'Discover collections',
    description:
      'Discover NFT collections by genre, ranking, trending, and other metrics. Users are recommended collections based upon their interests and NFT portfolio.',
    imgSrc: 'assets/images/info/info4-3x.png',
    smallSreenImage: 'assets/images/info/info-4sm.png',
    forSmallerScreens: true,
  },
]
