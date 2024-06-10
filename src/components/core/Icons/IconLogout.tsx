import { Fill } from "./Icon.types";

interface IconProps {
  fill: Fill;
}

const IconLogout: React.FC<IconProps> = ({fill}) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3405_20)">
        <path
          d="M17.7083 7.29167L16.2396 8.76042L18.9271 11.4583H8.33331V13.5417H18.9271L16.2396 16.2292L17.7083 17.7083L22.9166 12.5L17.7083 7.29167ZM4.16665 5.20833H12.5V3.125H4.16665C3.02081 3.125 2.08331 4.0625 2.08331 5.20833V19.7917C2.08331 20.9375 3.02081 21.875 4.16665 21.875H12.5V19.7917H4.16665V5.20833Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_3405_20">
          <rect width="25" height="25" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconLogout;
