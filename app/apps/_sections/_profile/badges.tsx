import Circle from '@/components/icons/circle'

export default function Badges() {
  return (
    <div className="flex flex-col bg-[#18181C] rounded-[20px] gap-4 px-5 py-[18px]">
      <p className="text-sm font-medium text-[#808080]">Badges</p>

      <div className="flex justify-between">
        <div className="flex flex-col gap-[6px]">
          <div className="outline outline-[3px] outline-[#808080] h-[50px] w-[50px] rounded-full relative">
            <Circle className="p-0 absolute" />
          </div>
          <p className="text-[11px] text-[#B3B3B3]">Portfolio</p>
        </div>
      </div>
    </div>
  )
}
