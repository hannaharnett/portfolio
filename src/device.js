const size = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1440px",
  desktop: "2560px"
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.tablet})`,
  desktop: `(max-width: ${size.desktop})`
};
