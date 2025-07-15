import type { Review } from "@/features/data";
import { type FC } from "react";

interface Props {
  review: Review;
  className?: string;
}

export const ReviewCard: FC<Props> = ({ review, className }) => {
  return (
    <div
      className={`
        bg-white p-4 sm:p-7 relative rounded-lg shadow-lg
        flex flex-col justify-between text-left border border-gray-300
        w-full max-w-sm mx-auto
        h-87
        md:w-95 sm:h-125
        ${className}
      `}
    >
      <div className="mb-4 mt-2 sm:mt-10 h-14 sm:h-20 flex items-center justify-center">
        <img
          src={review.logo}
          alt={`${review.company} logo`}
          className="object-contain rounded max-h-full max-w-full"
          onError={(e) => {
            e.currentTarget.src = `https://placehold.co/150x50/cccccc/333333?text=Logo`;
          }}
        />
      </div>
      <div className="relative">
        <p className="text-gray-400 relative text-xs sm:text-xl font-medium mb-4 sm:mb-6 text-left flex-grow overflow-hidden leading-relaxed sm:leading-[35px]">
          {review.text}
        </p>

        <div
          className="absolute font-staatliches h-4 sm:h-10 text-6xl sm:text-8xl text-gray-200 transform -rotate-180 w-4 sm:w-10 z-10
                    right-2 sm:bottom-0 sm:right-6"
        >
          “
        </div>
      </div>

      <div className="flex text-left mt-auto">
        <img
          src={review.avatar}
          alt={`${review.name}'s avatar`}
          className="w-8 h-8 sm:w-15 sm:h-15 rounded-full object-cover mr-3 sm:mr-4"
          onError={(e) => {
            e.currentTarget.src = `https://placehold.co/50x50/cccccc/333333?text=Avatar`;
          }}
        />
        <div>
          <p className="font-bold text-base sm:text-2xl text-gray-600">
            {review.name}
          </p>
          <p className="font-medium text-xs sm:text-xl text-gray-500">
            {review.position}
          </p>
        </div>
      </div>
    </div>
  );
};
