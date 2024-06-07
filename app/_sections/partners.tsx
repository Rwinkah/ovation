/* eslint-disable @next/next/no-img-element */
export default function Partners() {
  return (
    <div className="container flex flex-col items-center max-w-5xl w-full">
      <p className="text-sm font-semibold text-center uppercase">
        On your screen via
      </p>
      <div className="flex items-center justify-center md:justify-between gap-5 my-7 h-[50px] md:h-[60px] w-full flex-wrap">
        <img
          src={'assets/images/partners/1.png'}
          className="h-full"
          alt="fox"
        />
        <img
          src={'assets/images/partners/4.png'}
          className="h-full"
          alt="usa today"
        />
        <img
          src={'assets/images/partners/3.png'}
          className="h-full"
          alt="market watch"
        />
        <img
          src={'assets/images/partners/2.png'}
          className="h-full"
          alt="digital journal"
        />
      </div>
    </div>
  )
}
