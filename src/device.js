const size = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1440px",
  desktop: "2560px"
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`
};
