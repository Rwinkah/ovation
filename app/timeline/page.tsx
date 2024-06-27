import Aside from '../_sections/_timeline/Aside'
import MainTimeline from '../_sections/_timeline/mainTimeline'
import TimelineHeader from '../_sections/_timeline/timelineHeader'

export default function Home() {
  return (
    <>
      <TimelineHeader />

      <main className="flex w-full">
        <Aside />

        <section className="grid grid-cols-3 w-full">
          <MainTimeline />
        </section>
      </main>
    </>
  )
}
