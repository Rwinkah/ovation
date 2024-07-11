import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import VerifiedNotification from './verified-notification'

export default function MainNotification() {
  return (
    <section className="w-full flex flex-col col-span-2 other-link overflow-auto">
      <Tabs defaultValue="all" className="w-full px-0">
        <TabsList className="w-full border-b border-[#1A1A1A] px-0 rounded-none">
          <TabsTrigger
            value="all"
            className="text-[#B3B3B3] w-1/2 py-7 px-5 text-lg leading-5 hover:text-white ml-3"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="verified"
            className="text-[#B3B3B3] w-1/2 py-7 px-5 text-lg leading-5 hover:text-white"
          >
            Verified
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">Change your name</TabsContent>
        <TabsContent value="verified">
          <VerifiedNotification />
        </TabsContent>
      </Tabs>
    </section>
  )
}
