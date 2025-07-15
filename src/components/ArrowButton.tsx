import { type ComponentPropsWithoutRef, type FC } from "react";

interface ArrowButtonProps extends ComponentPropsWithoutRef<"button"> {
  direction: "left" | "right";
}

export const ArrowButton: FC<ArrowButtonProps> = ({
  direction,
  className = "",
  ...props
}) => {
  const isLeft = direction === "left";

  const arrowSvg = (
    <svg
      className="w-4 h-4 sm:w-8 sm:h-8 m-auto"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
        transform={isLeft ? "rotate(180 12 12)" : ""}
      ></path>
    </svg>
  );

  return (
    <button
      className={`p-2 w-8 h-8 sm:w-16 sm:h-16 rounded-full bg-white  text-gray-600 border-gray-400 border hover:bg-gray-100 duration-300 focus:outline-none focus:ring-2 z-10 ${className}`}
      {...props}
    >
      {arrowSvg}
    </button>
  );
};
