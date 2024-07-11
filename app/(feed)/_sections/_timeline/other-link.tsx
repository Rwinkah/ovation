import FeaturedCard from '@/app/(feed)/_components/_timeline/featured-card'
import SearcInput from '../../_components/_timeline/search-input'
import Topics from '../../_components/_timeline/Topic'

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
