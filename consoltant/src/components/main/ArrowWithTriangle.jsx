import React from "react";

const ArrowWithTriangle = ({ color, visible }) => (
    <svg
        width="245"
        height="78"
        viewBox="0 0 245 78"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
            display: visible ? "block" : "none",
        }}
    >
        <g filter="url(#filter0_d_1967_923)">
            <path
                d="M53.9805 3.09995C55.8677 1.12028 58.4834 0 61.2185 0H230.5C236.023 0 240.5 4.47715 240.5 10V60C240.5 65.5228 236.023 70 230.5 70H61.4735C58.5898 70 55.8464 68.7551 53.9475 66.5848L31.0143 40.3739C27.6082 36.481 27.7331 30.633 31.3022 26.889L53.9805 3.09995Z"
                fill={color}
            />
        </g>
        <path d="M23 34.5L5.75 44.4593L5.75 24.5407L23 34.5Z" fill={color} />
        <defs>
            <filter
                id="filter0_d_1967_923"
                x="24.541"
                y="0"
                width="219.959"
                height="78"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1967_923"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1967_923"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
);

export default ArrowWithTriangle;
