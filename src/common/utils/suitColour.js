// suitColour.js

const suitColour = a => {
  if (a.action === "getSuitColour") {
    let pwaConfig = {
      brand:{
        colours:{
          cards:{}
        }
      }  
    };
    const { suit } = a;
    const { cards } = pwaConfig.brand.colours;
    let suitColour = cards.black;
    if (suit === `H` || suit === `D`) {
      suitColour = cards.red;
    }
    return {
      key: `suitColour`,
      value: suitColour
    };
  }
};

export default suitColour;
