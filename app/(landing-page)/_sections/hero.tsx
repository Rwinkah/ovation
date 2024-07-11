/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button'

export default function Hero() {
  //closest bg-gradient
  //bg-gradient-to-t from-green-400 to-cyan-900

  return (
    <section className="pt-32 pb-8 flex flex-col items-center justify-center w-fit h-fit bg-vector-one bg-top bg-contain bg-no-repeat relative ">
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

      <p className="text-[10px] leading-[15px] md:text-base text-[#C1FE17] py-[6.5px] px-4 rounded-[20px] border border-[#828774] flex items-center gap-3 bg-custom-gradient mb-10">
        <img
          src="assets/images/Cone.png"
          alt="logo"
          className="w-[14px] h-[14px] md:w-[25px] md:h-[25px]"
        />
        THE LEADING NFT SOCIAL PLATFORM
      </p>

      <p className="text-primary-foreground font-heading text-[30px] leading-[38px] md:text-5xl font-bold text-center w-[60%] mb-3 md:leading-[60px] hero-header">
        Explore and Earn NFTs with Personalised Portfolios
      </p>

      <p className="text-base md:text-[22px] md:leading-9 w-[40%] text-center mb-10 hero-description">
        The only web3 social platform offering intelligent profiles,
        personalized portfolios, and a blockchain-enabled UI for a unified NFT
        experience.
      </p>
      <Button>
        Launch App
        <img
          src="assets/images/hero/arrow-top-right.png"
          alt=""
          className="h-5 w-5 hidden small-device"
        />
      </Button>
    </section>
  )
}
