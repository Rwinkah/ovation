export default function Hero() {
  //closest bg-gradient
  //bg-gradient-to-t from-green-400 to-cyan-900

  return (
    <section className="flex flex-col items-center justify-center w-fit h-fit bg-vector-one bg-top bg-contain bg-no-repeat relative py-32">
      <img
        src="assets/images/hero/hero1.png"
        alt=""
        className="absolute hero-img-top-left left-72 top-[70px]"
      />

      <img
        src="assets/images/hero/hero2.png"
        alt=""
        className="absolute right-72 top-[72px] hero-img-top-right"
      />

      <img
        src="assets/images/hero/hero3.png"
        alt=""
        className="absolute left-40 bottom-[190px] hero-img-bottom-left"
      />

      <img
        src="assets/images/hero/hero4.png"
        alt=""
        className="absolute right-40 bottom-[190px] hero-img-bottom-right"
      />

      <p className="text-base text-[#C1FE17] py-[6.5px] px-4 rounded-[20px] border border-[#828774] flex items-center gap-3 bg-custom-gradient mb-10">
        <img
          src="assets/images/Cone.png"
          alt="logo"
          className="w-[25px] h-[25px]"
        />
        THE LEADING NFT SOCIAL PLATFORM
      </p>

      <p className="text-primary-foreground font-heading text-5xl text-center w-[60%] mb-3 leading-[60px] hero-header">
        Explore and Earn NFTs with Personalised Portfolios
      </p>

      <p className="text-[22px] leading-9 w-[40%] text-center mb-10 hero-description">
        The only web3 social platform offering intelligent profiles,
        personalised portfolios, and a blockchain-enabled UI for a unified NFT
        experience.
      </p>

      <button className="bg-[#CFF073] py-[12px] px-[16px] text-sm text-[#0B0A10] font-semibold rounded-[50px] flex items-center gap-1">
        Launch App
        <img
          src="assets/images/hero/arrow-top-right.png"
          alt=""
          className="h-5 w-5 hidden small-device"
        />
      </button>
    </section>
  )
}
