import { Input } from '@/components/ui/input'
import SearchIcon from '../_icons/searchIcon'

export default function SearcInput() {
  return (
    <div className="flex items-center w-full border border-[#353538] rounded-[500px] gap-[15px] pl-3">
      <SearchIcon />

      <Input
        type="text"
        placeholder="Search Ovation"
        className="border-none outline-none rounded-none ring-0 focus-visible:ring-0 font-medium text-[#4D4D4D] h-fit px-1 bg-transparent"
      />
    </div>
  )
}
