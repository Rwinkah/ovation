/* eslint-disable @next/next/no-img-element */
import { generateRandomString } from '@/lib/helper-func'

export default function Features() {
  return (
    <section className="container flex flex-col items-center gap-10 py-8 md:gap-20 md:py-16 mt-24 md:mt-20">
      <div>
        <h2 className="text-center font-bold font-heading text-primary-foreground text-[40px] leading-[50px]">
          Ovation makes NFTs easier.
        </h2>
        <p className="text-center font-medium text-2xl tracking-[-0.87px] mt-2">
          Imagine if X, Opensea, and Discord had a web3 baby- that would be us.
        </p>
      </div>
      <div className="flex justify-between items-center flex-wrap gap-6  md:gap-12 ">
        {features.map((feature) => (
          <div
            className="flex flex-col py-3 items-center w-full md:w-[370px]"
            key={generateRandomString()}
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-14 h-14 mb-6"
            />
            <h6 className="text-2xl text-center font-bold font-heading">
              {feature.title}
            </h6>
            <p className="text-xl text-center font-light">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

const features = [
  {
    title: 'NFTs Enthusiast',
    description:
      'With our app, you can easily  easily complete the loan application process at home.',
    icon: '/assets/images/icons/f1.png',
  },
  {
    title: 'Wallets',
    description:
      'With our app, you can easily  easily complete the loan application process at home.',
    icon: '/assets/images/icons/f2.png',
  },
  {
    title: 'Ovation',
    description:
      'With our app, you can easily  easily complete the loan application process at home.',
    icon: '/assets/images/icons/f3.png',
  },
]
