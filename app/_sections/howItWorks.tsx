export default function HowItWorks() {
  return (
    <section className="container w-[80%] h-fit p-24 rounded-[20px] bg-[#1C1D19] flex flex-col items-center justify-center my-20 video-ctn">
      <p className="text-white text-2xl md:text-4xl font-semibold font-heading section-header">
        How it works
      </p>

      <p className="text-base md:text-2xl w-[80%] text-center mt-2 section-description">
        Artists, projects, and enthusiasts can effortlessly and impactfully
        showcase their NFTs, contributions, and notoriety
      </p>

      <div className="mt-8 md:mt-24 w-[90%] h-[300px] md:h-[568px] bg-[#333726] flex items-center justify-center rounded-[20px]">
        <img src="assets/images/play.png" alt="play button" />
      </div>
    </section>
  )
}
