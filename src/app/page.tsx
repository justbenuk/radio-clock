import StationNotes from "@/components/station-notes";
import Weather from "@/components/weather";
import dynamic from 'next/dynamic'
//you need to make sure the clocks are loaded on the client side. It will show a render error if you dont
const AnalogClock = dynamic(() => import('@/components/aclock'), { ssr: false })
const DigitalClock = dynamic(() => import('@/components/dclock'), { ssr: false })
export default function Home() {
  return (
    <div className="h-full px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-2 lg:col-span-1">
          <div className="flex flex-col h-full bg-base-content">
            <h1>Your Branding Here</h1>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <AnalogClock />
          <DigitalClock />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Weather />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6 h-full">
        <div className="bg-white rounded-xl h-full p-6">Train Times</div>
        <div className="bg-white rounded-xl h-full p-6"> local traffic</div>
      </div>
    </div>
  );
}
