"use client"
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function CarouselPlugin() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const images = [
    "https://bisempk.edu.pk/img/slider/slider1.jpeg",
    "https://bisempk.edu.pk/img/slider/slider2.jpeg",
    "https://bisempk.edu.pk/img/slider/slider3.jpeg",
    "https://bisempk.edu.pk/img/slider/slider4.jpeg",
  ]
  return (
    <div className="relative w-full mb-20">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-[380px]" // Adjust height as needed
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="relative w-full h-full">
             <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${images[index]})` }}
  />
  
  {/* Content overlay */}
  <div className="relative flex flex-col items-center justify-center h-[400px] w-full bg-black bg-opacity-40">
    <div className="text-center text-white">
      <h1 className="text-2xl font-bold mb-4">Board of Intermediate & Secondary <br />
Education, Mirpurkhas
 </h1>
      <div className="space-x-4">
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-2xl hover:bg-gradient-to-r font-sans hover:from-purple-500 hover:to-blue-500"> Read More</button>
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-2xl hover:bg-gradient-to-r font-sans hover:from-purple-500 hover:to-blue-500"> Contact Us</button>
      </div>
    </div>
  </div>

            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10" />
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  );
}
