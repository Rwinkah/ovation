import TimelineHeader from './_sections/_timeline/timeline-header'
import Aside from './_sections/Aside'

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
