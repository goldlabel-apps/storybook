const viewports = {
  printA4Landscape:{
    name: "A4 Paper, Landscape",
    styles: {
      height: "596px",
      width: "842px"
    }
  },
  printA4Portrait:{
    name: "A4 Paper, Portrait",
    styles: {
      height: "842px",
      width: "596px"
    }
  },
  baseline: {
    name: "baseline",
    // styles: {
    //   height: "600px",
    //   width: "360px"
    // }
    styles: {
      width: "600px",
      height: "360px"
    }
  },
  iPhone: {
    name: "iPhone 6/7/8",
    styles: {
      height: "375px",
      width: "667px"
    }
  },
  galaxyS5: {
    name: "Galaxy S5",
    styles: {
      height: "640px",
      width: "360px"
    }
  }
};

export default viewports;
