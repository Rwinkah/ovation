import OtherLinks from '../_sections/_timeline/other-link'
import MainTimeline from '../_sections/_timeline/main-timeline'
import Grider from '@/components/layout/grider'

export default function Home() {
  return <Grider left={<MainTimeline />} right={<OtherLinks />} />
}
