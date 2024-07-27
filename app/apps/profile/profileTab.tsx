import VerifyIcon from '@/components/icons/verifyIcon'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import testPfp from '@/public/assets/images/pfp1.jpeg'
import testPfp2 from '@/public/assets/images/ovationProfileTest2.png'
import heart from '@/public/assets/images/heart.svg'
import message from '@/public/assets/images/message-text.svg'
import clap from '@/public/assets/images/clapping.svg'
import retweet from '@/public/assets/images/repeat.svg'

export default function ProfileTab() {
  return (
    <Tabs
      defaultValue={'post'}
      className="border-t-[#353538] border-t-[1px] w-full \"
    >
      <TabsList className=" w-fit  justify-none gap-8 p-4">
        <TabsTrigger
          className="min-w-[66px] h-9 w-fit rounded-[40px] p-4 data-[state=active]:border-white data-[state=active]:bg-white data-[state=active]:text-black"
          value="post"
        >
          Post
        </TabsTrigger>
        <TabsTrigger
          className="min-w-[66px] h-9 w-fit rounded-[40px] p-4 data-[state=active]:border-white data-[state=active]:bg-white data-[state=active]:text-black"
          value="replies"
        >
          Replies
        </TabsTrigger>
        <TabsTrigger
          className="min-w-[66px] h-9 w-fit rounded-[40px] p-4 data-[state=active]:border-white data-[state=active]:bg-white data-[state=active]:text-black"
          value="portfolio"
        >
          Portfolio
        </TabsTrigger>
        <TabsTrigger
          className="min-w-[66px] h-9 w-fit rounded-[40px] p-4 data-[state=active]:border-white data-[state=active]:bg-white data-[state=active]:text-black"
          value="created"
        >
          Created
        </TabsTrigger>
        <TabsTrigger
          className="min-w-[66px] h-9 w-fit rounded-[40px] p-4 data-[state=active]:border-white data-[state=active]:bg-white data-[state=active]:text-black"
          value="stat"
        >
          Stat
        </TabsTrigger>
        <TabsTrigger
          className="min-w-[66px] h-9 w-fit rounded-[40px] p-4 data-[state=active]:border-white data-[state=active]:bg-white data-[state=active]:text-black"
          value="experience"
        >
          Experience
        </TabsTrigger>
      </TabsList>
      <TabsContent
        className="w-full p-4 border-t-[#353538] border-t-[1px]"
        value="post"
      >
        <Posts />
        <Posts />
        <Posts />
      </TabsContent>
    </Tabs>
  )
}

function Posts() {
  return (
    <div className="flex gap-4">
      <div id="post__left">
        <div className="w-9 h-9 overflow-hidden rounded-full border-[1px] border-[#353538]">
          <Image
            className="w-full h-full rounded-full"
            src={testPfp}
            alt="user pfp"
          />
        </div>
      </div>
      <div id="post__right" className="w-full flex flex-col h-full  gap-6  ">
        <span id="post__right__text" className="w-full flex flex-col gap-2">
          <span
            id="post__right__text__header"
            className="flex items-center justify-between w-full h-9"
          >
            <span className="flex gap-1" id="post__right__text__header__left">
              <span className="flex gap-1  items-center justify-center">
                <h1 className="text-white font-semibold">displayname</h1>{' '}
                <VerifyIcon />
              </span>
              <span className="pl-1">
                <h1 className="text-[#808080]">@username</h1>
              </span>
              <span>
                <p className="flex items-center justify-center gap-1">
                  <span className="rounded-full w-1 h-1 bg-gray-500" />
                  2h
                </p>
              </span>
            </span>
            <span>
              <Button variant={'ghost'} className=" h-4 ">
                ...
              </Button>
            </span>
          </span>
          <span id="post__right__text__main" className="text-sm text-[#E6E6E6]">
            <p>
              Dedicated NFT enthusiast, embracing the #digital revolution one
              token at a time. Let's explore the world of blockchain art
              together! 🌐🎨 #NFTCommunity Let's explore the world of blockchain
              art together! 🌐🎨 #NFTCommunity Let's explore the world of
              blockchain art together! 🌐🎨 #NFTCommunity
            </p>
          </span>
        </span>
        <span
          id="post__right__image"
          className="max-w-full h-auto w-auto max-h-[390px]  overflow-hidden rounded-lg"
        >
          <Image
            className="w-full h-auto bg-contain overflow-hidden rounded-lg"
            src={testPfp2}
            alt="post-media"
          />
        </span>
        <span id="post__right__interactions" className="flex gap-4 ">
          <span className=" items-center justify-center flex gap-[1px]">
            <Button className=" w-fit p-[2px] bg-transparent hover:scale-90">
              {' '}
              <Image src={heart} alt="like button" />
            </Button>

            <p>43</p>
          </span>
          <span className=" items-center justify-center flex gap-[1px]">
            <Button className=" w-fit p-[2px] bg-transparent hover:scale-90">
              <Image src={message} alt="like button" />
            </Button>
            <p>32</p>
          </span>
          <span className=" items-center justify-center flex gap-[1px]">
            <Button className=" w-fit p-[2px] bg-transparent hover:scale-90">
              <Image src={retweet} alt="like button" />
            </Button>
            <p>43</p>
          </span>
          <span className=" items-center justify-center flex gap-[1px]">
            <Button className=" w-fit p-[2px] bg-transparent hover:scale-90">
              {' '}
              <Image src={clap} alt="like button" />
            </Button>
            <p>43</p>
          </span>
        </span>
      </div>
    </div>
  )
}
