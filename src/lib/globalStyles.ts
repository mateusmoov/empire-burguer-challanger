import { globalCss } from "./stitches.config";
import { fonts, fontSizes, fontWeights } from "./tokens/typography";
import { palette } from "./tokens/colors";
const global = {
  "*": {
    "box-sizing": "border-box",
  },
  "*:before": {
    "box-sizing": "border-box",
  },
  "*:after": {
    "box-sizing": "border-box",
  },
};

export const globalStyles = globalCss({
  ":root": {
    ...fonts,
    ...fontSizes,
    ...fontWeights,
    ...palette,
  },
  ...global,
});
