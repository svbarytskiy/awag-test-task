import myBackgroundImage from "@/assets/background.webp";
import { Slider } from "@/components/Slider";
import { SliderItem } from "@/components/SliderItem";
import { ReviewCard } from "@/components/ReviewCard";
import { reviews } from "./data";
import type { FC } from "react";

export const ReviewsSection: FC = () => {
  return (
    <div
      className="h-120 sm:h-189 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${myBackgroundImage})` }}
    >
      <div className="px-3 lg:w-4/5 xl:w-2/3 lg:px-0 h-100 sm:h-153 m-auto text-center py-5">
        <h1 className="text-base sm:text-3xl lg:4xl xl:text-5xl font-bold text-black leading-tight tracking-wider mb-8 sm:whitespace-nowrap">
          Voices of Success with Sales Fortuna
        </h1>

        <Slider className="w-full h-full">
          {reviews.map((review, index) => (
            <SliderItem
              key={index}
              className="basis-full px-1 md:px-2 md:basis-1/2 xl:basis-1/3"
            >
              <ReviewCard review={review}/>
            </SliderItem>
          ))}
        </Slider>
      </div>
    </div>
  );
};
