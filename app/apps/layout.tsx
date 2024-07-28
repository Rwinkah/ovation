import TimelineHeader from './_sections/_timeline/timeline-header'
import Aside from './_sections/Aside'

export default function AsideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen">
        <TimelineHeader />
        <main className="flex w-full other-link overflow-y-scroll">
          <Aside />
          {children}
        </main>
      </body>
    </html>
  )
}
