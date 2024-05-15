import React from "react";

export default function TwitterIcon({ color, h, w }) {
  return (
    <div>
      <svg
        width={w ||"49"}
        height={h || "49"}
        viewBox="0 0 49 49"
        fill={color || "#0C4068"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24.4231" cy="24.5927" r="23.9074"    fill={color || "#0C4068"} />
        <path
          d="M32.0811 12.3713H36.1646L27.2432 22.568L37.7386 36.4433H29.5208L23.0843 28.028L15.7195 36.4433H11.6335L21.1758 25.5368L11.1076 12.3713H19.534L25.352 20.0632L32.0811 12.3713ZM30.6479 33.9991H32.9106L18.3045 14.6872H15.8763L30.6479 33.9991Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
