import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Icons } from "@/components/Icons";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ProjectsData } from "@/constants";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export const ProjectSlider = () => {
  return (
    <div className="h-full flex flex-col mt-10 md:flex-row gap-5 justify-center w-full z-20">
      <div className="w-full md:w-4/5">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
        >
          {ProjectsData.map((data) => (
            <SwiperSlide key={data.title}>
              <AspectRatio ratio={16 / 9} className="rounded-md">
                <div className="relative group">
                  <Image
                    src={data.image}
                    alt={data.title}
                    width={1000}
                    height={1000}
                    className="rounded-md h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-800 via-[#030014] to-purple-600 opacity-0 group-hover:opacity-70 rounded-md" />
                  <div className="absolute text-gray-100 inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <div className="flex flex-col items-center">
                      <span className="text-xl text-gray-50 font-semibold">
                        {data.title}
                      </span>
                      <div className="flex flex-col gap-y-2 mt-4 items-center">
                        <a href={data.github} target="_blank">
                          <Button variant="secondary">
                            <Icons.github className="mr-2 h-4 w-4" />
                            Github project
                          </Button>
                        </a>
                        {data.liveDemo && (
                          <a href={data.liveDemo} target="_blank">
                            <Button variant="ghost">Live Demo</Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
