import OtherLinks from '../_sections/_timeline/otherLink'
import MainTimeline from '../_sections/_timeline/mainTimeline'

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
