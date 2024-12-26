import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/TabBar";


export default function Home() {
  return (
    <div className="flex w-full justify-between gap-5 ">
      <div className="sticky">
        <Sidebar/>
      </div>
      <div className="w-full h-full">
        <Navbar/>
      </div>
    </div>
)
    
}
