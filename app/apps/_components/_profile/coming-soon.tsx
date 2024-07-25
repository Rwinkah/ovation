import { Newsletter } from '@/app/(landing-page)/_sections/newsletter'

export default function ComingSoon() {
  return (
    <div className="w-screen h-screen fixed bg-[#111115B2] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center px-11 py-7 bg-[#232227] rounded-[20px] gap-[52px]">
        <p className="text-[28px] text-white font-semibold">COMING SOON.....</p>

        <div className="flex flex-col gap-5 items-center">
          <p className="text-xl text-[#E6E6E6]">
            Subscribe below to be notified of when it goes live
          </p>

          <p className="text-sm text-white">
            Be among the special ones to get early notification when we launch
          </p>
        </div>
      </div>
    </div>
  )
}
