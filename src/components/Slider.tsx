import { useState, useRef, useEffect, Children, type FC } from "react";
import { ArrowButton } from "./ArrowButton";

interface SliderProps {
  children: React.ReactNode;
  className?: string;
}

export const Slider: FC<SliderProps> = ({ children, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const totalSlides = Children.count(children);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(totalSlides - 1, prevIndex + 1));
  };

  useEffect(() => {
    if (contentRef.current && totalSlides > 0) {
      const itemElement = contentRef.current.children[0] as HTMLElement;
      const itemWidth = itemElement?.offsetWidth || 0;

      contentRef.current.scrollTo({
        left: currentIndex * itemWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex, totalSlides]);

  return (
    <div className={`flex flex-col items-center w-full mx-auto ${className}`}>
      <div className="flex items-center w-full gap-x-4 h-full">
        <ArrowButton
          direction="left"
          onClick={handlePrev}
          aria-label="Попередній слайд"
          disabled={currentIndex === 0 || totalSlides <= 1}
          className="flex-shrink-0"
        />
        <div
          ref={contentRef}
          className="flex overflow-x-hidden scroll-smooth h-full flex-grow"
        >
          {children}
        </div>
        <ArrowButton
          direction="right"
          onClick={handleNext}
          aria-label="Наступний слайд"
          disabled={currentIndex >= totalSlides - 1 || totalSlides <= 1}
          className="flex-shrink-0"
        />
      </div>

      {totalSlides > 1 && (
        <div className="flex justify-center mt-4 gap-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-gray-600" : "bg-gray-100"
              }`}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};
