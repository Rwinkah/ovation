export default function MoreFromOvation() {
  const moreCards = [
    {
      description:
        'Ovation. The First NFT Superapp Working to Transform Your NFT Experience.',
    },
    {
      description:
        'Ovation. The First NFT Superapp Working to Transform Your NFT Experience.',
    },
    {
      description:
        'Ovation. The First NFT Superapp Working to Transform Your NFT Experience.',
    },
    {
      description:
        'Ovation. The First NFT Superapp Working to Transform Your NFT Experience.',
    },
    {
      description:
        'Ovation. The First NFT Superapp Working to Transform Your NFT Experience.',
    },
  ]

  return (
    <section className="container w-[75%] grid grid-cols-3 gap-x-[20px] gap-y-12 py-20 more-section">
      <div className="flex flex-col">
        <p className="font-heading text-white font-bold text-3xl section-header">
          More from ovation
        </p>

        <p className="text-xl font-medium tracking-[-0.87px] mb-8 section-description">
          Artists, projects, and enthusiasts can effortlessly
        </p>

        <button className="bg-button text-buttonTextColor py-[18px] px-[22px] text-sm w-fit rounded-[50px]">
          Browse articles
        </button>
      </div>

      {moreCards.map((card, index) => (
        <div
          className="p-[10px] flex flex-col rounded-[20px] bg-[#1C1D19] more-card"
          key={index}
        >
          <img
            className="rounded-lg p-[8px]"
            src="assets/images/more-3x.png"
            alt=""
          />

          <div className="flex flex-col px-[6px] py-5 gap-3">
            <p className="text-white text-base font-medium">
              {card.description}
            </p>

            <p className="text-lg">15/3/2023</p>
          </div>
        </div>
      ))}
    </section>
  )
}
