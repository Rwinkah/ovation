import MainNotification from '@/app/apps/_sections/_notification/main-notification'
import OtherLinks from '@/app/apps/_sections/_timeline/other-link'

export default function Notifications() {
  return (
    <section className="grid grid-cols-3 w-full">
      <MainNotification />
      <OtherLinks />
    </section>
  )
}
