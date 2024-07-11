import OtherLinks from '../_sections/_timeline/other-link'
import MainTimeline from '../_sections/_timeline/main-timeline'

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-3 w-full">
        <MainTimeline />
        <OtherLinks />
      </section>
    </>
  )
}
