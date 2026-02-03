
import Carousels from "@/components/Carousel";
import Explore from "@/components/Explore";
import OurObjective from "@/components/OurObjective";
import Subfooter from "@/components/Subfooter";
import Image from "next/image";
 import {
  UserButton,
 } from "@clerk/nextjs";

export default function Home() {
  return (
    
    <div className="flex: text-right  ">
       <UserButton/>
      <Carousels />
      <div className="relative">
        <Explore />
        <Subfooter />
        <OurObjective />

      </div>
   <div>
    <h2>
     
    </h2>
   </div>
    </div>
  );
}
