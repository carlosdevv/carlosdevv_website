import image1 from "public/images/image-test.png";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Icons } from "@/components/Icons";
import { ProjectsData } from "@/constants";

export const ProjectSlider = () => {
  return (
    <div className="h-full flex flex-col md:flex-row gap-5 mt-20 justify-center w-full z-20">
      <div className="w-[70%] md:w-[80%]">
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
              <a href={data.link}>
                <AspectRatio ratio={16 / 9} className="rounded-md">
                  <div className="relative group">
                    <Image
                      src={data.image}
                      alt={data.title}
                      width={1000}
                      height={1000}
                      className="rounded-md h-full w-full object-cover"
                    />
                    <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-violet-800 via-[#030014] to-purple-600 opacity-0 group-hover:opacity-70 rounded-md" />
                    <div className="absolute text-gray-100 inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all">
                      <div className="flex flex-col items-center">
                        <span className="font-light text-2xl text-gray-50">
                          {data.title}
                        </span>
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          View project
                          <Icons.arrowRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </AspectRatio>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
