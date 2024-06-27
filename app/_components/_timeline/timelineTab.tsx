import PublishPost from './publishPost'
import TimelinePosts from './timelinePosts'

export default function TimelineTab() {
  return (
    <section className="w-full h-fit flex flex-col">
      <div className="w-full border-b border-[#1A1A1A] px-3">
        <p className="text-white font-semibold text-[28px] py-[10px]">
          Timeline
        </p>
      </div>

      <PublishPost />

      <TimelinePosts />
    </section>
  )
}
