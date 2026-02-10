import React from "react";

const MusicCard: React.ComponentType<any> = function(): React.ReactNode {
  return (
    <div className="w-[150px] h-[200px] bg-white flex justify-center pt-[3px] relative">
      <img
        src="https://m.media-amazon.com/images/I/81p6paS5TzL._UF1000,1000_QL80_.jpg"
        className="w-[140px] h-[140px]"
      ></img>
      <div className="h-[55px] w-[150px] absolute flex gap-2 items-center bottom-0 left-0 px-[2px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          image-rendering="optimizeQuality"
          fill-rule="evenodd"
          clip-rule="evenodd"
          viewBox="0 0 512 512"
          height="50px"
          width="50px"
        >
          <circle fill="#01A437" cx="256" cy="256" r="256" />
          <path
            fill="#42C76E"
            d="M256 9.28c136.12 0 246.46 110.35 246.46 246.46 0 3.22-.08 6.42-.21 9.62C497.2 133.7 388.89 28.51 256 28.51S14.8 133.7 9.75 265.36c-.13-3.2-.21-6.4-.21-9.62C9.54 119.63 119.88 9.28 256 9.28z"
          />
          <path
            fill="#fff"
            d="M351.74 275.46c17.09-11.03 17.04-23.32 0-33.09l-133.52-97.7c-13.92-8.73-28.44-3.6-28.05 14.57l.54 191.94c1.2 19.71 12.44 25.12 29.04 16l131.99-91.72z"
          />
        </svg>
        <span className="bg-blue"> sanam re</span>
      </div>
    </div>
  );
}

export default MusicCard;
