import Topics from '@/app/(feed)/_components/_timeline/Topic'
import FeaturedCard from '@/app/(feed)/_components/_timeline/featuredCard'
import SearcInput from '@/app/(feed)/_components/_timeline/searchInput'

export default function OtherLinks() {
  return (
    <>
      <section className="col-span-1 px-[30px] py-[21px] flex flex-col gap-5 bg-[#111115] other-link overflow-auto">
        <SearcInput />

        <FeaturedCard />

        <Topics />
      </section>
    </>
  )
}
