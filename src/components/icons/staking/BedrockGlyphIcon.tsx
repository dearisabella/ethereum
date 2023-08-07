import React from "react"
import { createIcon } from "@chakra-ui/react"
import { commonIconDefaultProps } from "../utils"

export const BedrockGlyphIcon = createIcon({
  displayName: "BedrockGlyphIcon",
  viewBox: "0 0 33 32",
  defaultProps: {
    width: "33px",
    height: "32px",
    ...commonIconDefaultProps,
  },
  path: [
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.48604 8.40251L12.6413 0L18.6196 4.9005L16.7115 4.56347C15.3401 4.92407 14.9398 5.01208 14.5641 5.16179C14.2052 5.30479 13.8687 5.5041 12.7298 6.05105C12.0417 6.38033 10.851 7.47226 9.84519 8.3946C9.14705 9.03481 8.53801 9.59331 8.24799 9.75838C7.61707 10.1187 6.48604 8.40251 6.48604 8.40251ZM6.07831 11.5752L3.3546 15.6777L5.99752 18.8195L10.0562 20.094L16.7077 14.3877L20.6202 12.106L23.3593 10.8663L19.1852 7.41079C19.1852 7.41079 13.9686 7.74007 12.0759 10.1225C12.0759 10.1225 8.42501 13.6943 7.83641 13.2333L6.07831 11.5752ZM2.88529 19.478L0 23.8323L0.188505 25.44L3.94323 28.4268C3.94323 28.4268 8.00956 31.6808 10.2024 31.9985C10.5492 32.0484 12.297 30.8408 14.526 29.3007L14.526 29.3007C16.9705 27.6118 19.9936 25.523 22.3821 24.2546C26.0907 22.2866 28.2527 21.5389 28.2527 21.5389L33 22.4803L23.9517 13.7485C23.9517 13.7485 17.4271 17.82 15.8652 19.4741C14.2995 21.1283 10.1908 24.1073 10.1908 24.1073L5.75519 22.7437L2.88529 19.478Z"
    />,
  ],
})
