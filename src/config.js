const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.sol;

// General metadata for Ethereum
const namePrefix = "SolSlut";
const description = " 6969 sluts who shamelessly live on the solana blockchain. These sluts can be staked for passive income and rewards";

const solanaMetadata = {
  symbol: "",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.solanasluts.com/",
  creators: [
    {
      address: "4RZdj9xQrMrDeFHNmFPL7KUStLBdpug1g5eC8umAdu5g",
      share: 80, //80%
    },
    {
      address: "8FWSmaepGFBqgx5TcxFNatTaCwH5pBR9oGW4czyewAo6",
      share: 10, //10%
    },
    {
      address: "7pgm4HewLzLkddE7gA8PwaFxzAdfSupxfR5UMc3LXg1L",
      share: 10, //10%
    },
  ],
};

const layerConfigurations = [
  {
    growEditionSizeTo: 9,
    layersOrder: [      
      { name: "Unique" },
    ],
  },
  {
    growEditionSizeTo: 6968,
    layersOrder: [      
      { name: "Background" },
      { name: "Hand" },
      { name: "Skin" },
      { name: "Bottom" },
      { name: "Face" },
      { name: "Top" },
      { name: "Tails" },
      { name: "Accessories" },
      { name: "Hair" },
    ],
  },
 

  
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
