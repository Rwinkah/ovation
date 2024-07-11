import Grider from '@/components/layout/grider'
import MainTimeline from '../_sections/_timeline/main-timeline'
import OtherLinks from '../_sections/_timeline/other-link'

export default function page() {
  return (
    <>
      <div className="h-[400px] w-full bg-orange-400" />
      <Grider left={<MainTimeline />} right={<OtherLinks />} />
    </>
  )
}
