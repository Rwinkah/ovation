export default function Extendedpartners() {
  const extendedPartners = [
    {
      imgSrc: 'assets/images/extended/extended1.png',
      name: 'Polygon village',
      position: 'Polygon community',
      hasBackground: true,
    },
    {
      imgSrc: 'assets/images/extended/extended2.png',
      name: 'MetaFarmer',
      position: 'Agri-tech Solana DAO',
      hasBackground: false,
    },
    {
      imgSrc: 'assets/images/extended/extended3.png',
      name: 'Tommy Trillfigger',
      position: 'NFT Artist / Musician',
      hasBackground: false,
    },
    {
      imgSrc: 'assets/images/extended/extended4.png',
      name: 'Erenxdolu',
      position: 'Lens Influencer',
      hasBackground: false,
    },
    {
      imgSrc: 'assets/images/extended/extended5.png',
      name: 'Polygon Alliance',
      position: 'Polygon community',
      hasBackground: false,
    },
    {
      imgSrc: 'assets/images/extended/extended6.png',
      name: 'SID',
      position: 'NFT Artist',
      hasBackground: false,
    },
    {
      imgSrc: 'assets/images/extended/extended7.png',
      name: 'Cenk',
      position: 'Twitter Influencer',
      hasBackground: false,
    },
    {
      imgSrc: 'assets/images/extended/extended8.png',
      name: 'GenK',
      position: 'Community of Polygon Aritists',
      hasBackground: false,
    },
    {
      imgSrc: 'assets/images/extended/extended9.png',
      name: 'Chika Corp',
      position: 'NFT Utility Project',
      hasBackground: false,
    },
    {
      imgSrc: 'assets/images/extended/extended10.png',
      name: 'Arlo',
      position: 'NFT Artist / Illistrator',
      hasBackground: false,
    },
    {
      imgSrc: 'assets/images/extended/extended11.png',
      name: 'MhiztaLOEL',
      position: 'Twitter Influencer',
      hasBackground: false,
    },
    {
      imgSrc: 'assets/images/extended/extended12.png',
      name: 'Mochi Circle',
      position: 'Web3 Marketing',
      hasBackground: false,
    },
  ]

  return (
    <section className="flex flex-col w-full items-center justify-center h-fit py-20">
      <p className="font-heading text-5xl font-medium text-center text-white section-header">
        JOIN US AS A PARTNER
      </p>

      <div className="grid grid-cols-2 gap-6 w-[70%] mt-20 extended-partners-det-ctn">
        <p className="text-white font-bold text-3xl font-heading">
          Over 100 launch partners have already joined us on our journey
        </p>

        <div className="flex flex-col gap-9">
          <p className="text-2xl font-semibold tracking-[-0.87px]">
            Are you ready to build your community on Ovation before anyone
            else?, Are you ready to build your community on Ovation before
            anyone else? Are you ready to build your community on Ovation before
            anyone else?
          </p>

          <button className="text-sm py-[18px] px-[22px] rounded-[50px] bg-button w-fit text-buttonTextColor">
            Join us as a patner
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-x-10 gap-y-[20px] w-[75%] mt-20 extended-partners-partners-ctn">
        {extendedPartners.map((partner, index) => (
          <div className="flex flex-col items-center" key={index}>
            <img
              className={`rounded-full h-[200px] w-[200px] ${partner.hasBackground ? 'bg-white' : ''}`}
              src={partner.imgSrc}
              alt="Partner Display Picture"
            />
            <p className="text-white text-xl font-medium partners-name">
              {partner.name}
            </p>
            <p className="text-sm">{partner.position}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
