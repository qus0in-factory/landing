export const ads = {
  enabled: false,
  showPlaceholder: true,
  provider: "adfit" as "adfit" | "adsense",
  adsenseClient: "",
  slots: {
    heroBottom: {
      enabled: true,
      mobile: { unit: "", w: 320, h: 100 },
      desktop: { unit: "", w: 728, h: 90 },
    },
    footerAbove: {
      enabled: false,
      mobile: { unit: "", w: 320, h: 50 },
      desktop: { unit: "", w: 728, h: 90 },
    },
  },
};
