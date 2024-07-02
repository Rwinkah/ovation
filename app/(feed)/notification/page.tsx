import MainNotification from '@/app/_sections/_notification/mainNotification'
import OtherLinks from '@/app/_sections/_timeline/otherLink'

export default function Notifications() {
  return (
    <section className="grid grid-cols-3 w-full">
      <MainNotification />

      <OtherLinks />
    </section>
  )
}
