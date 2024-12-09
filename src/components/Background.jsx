import React from 'react'

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      <svg 
        className="absolute bottom-0 right-0 w-full h-full sm:w-[80%] sm:h-[80%] md:w-[70%] md:h-[70%] lg:w-[676px] lg:h-[713px]"
        viewBox="0 0 676 713" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin slice"
      >
        <g filter="url(#filter0_f_45_3)">
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M464.373 264.675C537.639 256.726 613.817 264.985 672.158 310.012C738.007 360.833 803.443 435.361 792.346 517.797C781.619 597.486 692.162 635.513 622.854 676.279C574.414 704.771 520.567 710.022 464.373 710.708C407.119 711.406 343.396 719.729 301.977 680.194C260.07 640.194 263.095 575.723 262.267 517.797C261.421 458.641 260.35 396.923 297.265 350.69C337.902 299.796 399.626 271.701 464.373 264.675Z" 
            fill="#686666"
          />
        </g>
        <defs>
          <filter 
            id="filter0_f_45_3" 
            x="0.700012" 
            y="0.700012" 
            width="1054.18" 
            height="972.503" 
            filterUnits="userSpaceOnUse" 
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="130.65" result="effect1_foregroundBlur_45_3"/>
          </filter>
        </defs>
      </svg>
    </div>
  )
}

