import { Input } from '@/components/ui/input'
import SearchIcon from '../../../../components/icons/searchIcon'

export default function SearchInput() {
  return (
    <div className="h-[54px] w-[450px] border-[1px] flex items-center rounded-full border-[#353538] rounded- gap-[15px] pl-3">
      <SearchIcon />

      <Input
        type="text"
        placeholder="Search Ovation"
        // className=''
        // .className="h-[55px] border-none focus:border-none w-full outline-none rounded-none ring-0 focus:outline-none focus:ring-0 focus-visible:ring-0 font-medium text-[#4D4D4D] px-1 bg-transparent"
      />
    </div>
  )
}
