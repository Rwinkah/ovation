import Aside from '../_sections/_timeline/Aside'
import TimelineHeader from '../_sections/_timeline/timelineHeader'

export default function AsideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TimelineHeader />

        <main className="flex w-full">
          <Aside />

          {children}
        </main>
      </body>
    </html>
  )
}
