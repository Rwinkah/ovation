export default function InfoCards() {
  const moreCards = [
    {
      header: 'Social Media',
      description:
        'Users will be enabled to have more meaningful interactions, the ability to create unique posts, recognise post contributions, and filtering.',
      imgSrc: 'assets/images/info/info1-3x.png',
    },
    {
      header: 'Personalised Portfolio',
      description:
        'Through blockchain interoperability, and an NFT centric UI/UX, users have one pane into their NFT portfolio, notoriety, and social notoriety.',
      imgSrc: 'assets/images/info/info2-3x.png',
    },
    {
      header: 'Earn $OVA',
      description:
        'Earn $OVA tokens in a variety of ways: Sharing NFTs, Earning badges, Drawing engagement, Interacting on the platform, Owning a Genesis NFT',
      imgSrc: 'assets/images/info/info3-3x.png',
    },
    {
      header: 'Discover collections',
      description:
        'Discover NFT collections by genre, ranking, trending, and other metrics. Users are recommended collections based upon their interests and NFT portfolio.',
      imgSrc: 'assets/images/info/info4-3x.png',
    },
  ]

  return (
    <section className="w-[70%] grid grid-cols-2 gap-x-[20px] gap-y-12 py-20 more-section">
      {moreCards.map((card, index) => (
        <div
          className="p-[10px] flex flex-col items-center rounded-[20px] bg-card-gradient border h-fit py-10 info-card"
          key={index}
        >
          <img
            className="rounded-lg p-[8px] w-auto h-[295px]"
            src={card.imgSrc}
            alt=""
          />

          <div className="flex flex-col px-[6px] py-5 gap-3 mt-20">
            <p className="text-white text-2xl font-medium text-center">
              {card.header}
            </p>

            <p className="text-xl text-center">{card.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
