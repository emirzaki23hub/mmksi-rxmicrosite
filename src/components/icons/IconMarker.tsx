import { SVGProps } from "react"
const IconMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={51}
    fill="currentColor"
    {...props}
  >
    <path
      fill="currentColor"
      d="M35.556 31.941c-1.873 2.853-9.687 11.96-13.477 16.334L20 50.666S6.94 35.745 4.444 31.941L20 37.121l15.556-5.18Z"
    />
    <ellipse cx={20} cy={19.826} fill="currentColor" rx={20} ry={19.826} />
    <circle cx={19.5} cy={20.5} r={4.5} fill="#fff" />
  </svg>
)
export default IconMarker
