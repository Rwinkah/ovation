import EventIcon from '@/components/icons/eventIcon'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const featured = [
  {
    isProject: true,
    isEvent: false,
    isPost: false,
    type: 'Project',
    header: 'MAD LADS',
    content:
      "NFT stands for Non-Fungible Token. It's a type of digital asset that....",
    projectPreview: [
      '/assets/images/profile/nft1.png',
      '/assets/images/profile/nft2.png',
      '/assets/images/profile/nft3.png',
      '/assets/images/profile/nft1.png',
      '/assets/images/profile/nft2.png',
      '/assets/images/profile/nft3.png',
    ],
    eventDetails: '',
    eventLocation: '',
    viewsCount: 32,
    collectorCount: '1k',
  },
  {
    isProject: false,
    isEvent: false,
    isPost: true,
    type: 'Post',
    header: 'WHAT IS NFT',
    content:
      "NFT stands for Non-Fungible Token. It's a type of digital asset that represents ownership or proof of authenticity of a unique item or piece of content using blockchain technology. Unlike cryptocurrencies such as Bitcoin or Ethereum, which are fungible and can be exchanged on a one-to-one basis, NFTs are indivisible, exchanged on a one-to-one basis, N...",
    projectPreview: ['', '', '', '', '', ''],
    eventDetails: '',
    eventLocation: '',
    viewsCount: 32,
    collectorCount: '',
  },
  {
    isProject: false,
    isEvent: true,
    isPost: false,
    type: 'Event',
    header: 'MINT DAY',
    content:
      "NFT stands for Non-Fungible Token. It's a type of digital asset that represents ownership or proof of authenticity of a unique item or piece of content using blockchain technology. Unlike cryptocurrencies such as Bitcoin or Ethereum, which are fungible and can be exchanged on a one-to-one basis, NFTs are indivisible, exchanged on a one-to-one basis, N...",
    projectPreview: ['', '', '', '', '', ''],
    eventDetails: 'Wed, 24 Jan, 15:00 - 20:00',
    eventLocation: 'Virtual Event',
    viewsCount: 32,
    collectorCount: '',
  },
]

export default function MainProfileSection() {
  return (
    <div className="col-span-2 h-full flex flex-col items-center bg-[#111115]">
      <div className="flex flex-col mt-5 w-[95%] h-fit border border-[#353538] rounded-[14px] px-5 py-[15px] gap-[30px]">
        <p className="text-white font-medium">Featured</p>

        <div className="flex flex-wrap gap-4">
          <div className="w-[300px] h-[309px] bg-[#18181C] border border-[#FFFFFF14] rounded-[10px] flex flex-col">
            <div className="flex flex-col px-[13px] pt-[9px]">
              <p className="text-[#999999] text-[11px]">Project</p>
              <p className="text-white text-sm font-semibold mt-6">MAD LADS</p>
              <p className="text-xs text-[#999999] mt-3">
                NFT stands for Non-Fungible Token. It's a type of digital asset
                that....{' '}
                <Link href="/" className="text-white">
                  more
                </Link>
              </p>
              <div className="grid grid-cols-3 gap-[6px] mt-3">
                <img src="/assets/images/profile/nft1.png" alt="NFT" />
                <img src="/assets/images/profile/nft2.png" alt="NFT" />
                <img src="/assets/images/profile/nft3.png" alt="NFT" />
                <img src="/assets/images/profile/nft1.png" alt="NFT" />
                <img src="/assets/images/profile/nft2.png" alt="NFT" />
                <img src="/assets/images/profile/nft3.png" alt="NFT" />
              </div>
            </div>

            <div className="flex items-center gap-2 px-[13px] py-3 bg-[#111115] rounded-b-[10px]">
              <p className="p-2 rounded-[400px] bg-[#18181C] border border-[#B3B3B3] text-[10px] text-[#B3B3B3] font-medium">
                32 Views
              </p>
              <p className="p-2 rounded-[400px] bg-[#18181C] border border-[#B3B3B3] text-[10px] text-[#B3B3B3] font-medium">
                1k Collectors
              </p>
            </div>
          </div>

          <div className="w-[300px] h-[309px] bg-[#18181C] border border-[#FFFFFF14] rounded-[10px] flex flex-col">
            <div className="flex flex-col px-[13px] pt-[9px]">
              <p className="text-[#999999] text-[11px]">Event</p>
              <p className="text-white text-sm font-semibold mt-6">MINT DAY</p>
              <img
                src="/assets/images/timeline/_post/image7.png"
                alt="Event preview image"
                className="h-[95px] mt-3"
              />
              <div className="flex items-center gap-[6px] mt-4">
                <EventIcon className="w-3 h-3 stroke-[#B3B3B3]" />
                <p className="text-[11px] text-[#B3B3B3]">
                  Wed, 24 Jan, 15:00 - 20:00
                </p>
              </div>
              <div className="flex items-center gap-[6px] mt-3 mb-3">
                <img
                  src="/assets/images/profile/location.png"
                  alt="User Display Picture"
                  className="rounded-full w-3 h-3"
                />
                <p className="text-[11px] text-[#B3B3B3] underline">
                  Virtual Event
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-[13px] py-3 bg-[#111115] rounded-b-[10px]">
              <p className="p-2 rounded-[400px] bg-[#18181C] border border-[#B3B3B3] text-[10px] text-[#B3B3B3] font-medium">
                32 Views
              </p>

              <Button
                variant="default"
                className="text-[10px] px-[10px] py-[8px] h-fit"
              >
                Add to calendar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
