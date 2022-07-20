import React from "react";

const Eclipse = (props) => {
  return (
    <div>
      <svg
        className={`absolute ${props.cname}`}
        width="129"
        height="129"
        viewBox="0 0 129 129"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="64.5"
          cy="64.4973"
          rx="64.0295"
          ry="64.0229"
          transform="rotate(-27.8029 64.5 64.4973)"
          fill="url(#paint0_linear_177_608)"
          fill-opacity="0.22"
        />
        <defs>
          <linearGradient
            id="paint0_linear_177_608"
            x1="64.5"
            y1="0.474365"
            x2="64.5"
            y2="128.52"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#01FEFF" />
            <stop offset="1" stop-color="#01FEFF" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Eclipse;
