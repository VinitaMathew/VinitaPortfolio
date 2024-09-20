const PortfolioImage = require("../../../assets/portfolio.png");
const ShoppingImage = require("../../../assets/shopping-website.png");
const TagImage = require("../../../assets/tag.png");
//const BrightSmilesImage = require("../../../assets/bright-smiles.png");

export const projectsData = [
  {
    imageUrl: PortfolioImage,
    title: "Product Designer Portfolio",
    desciption: "Portfolio website",
    keyPoints: ["SCSS", "Responsive", "TypeScript"],
    link: "https://nishaduxd.com/",
  },
  {
    imageUrl: ShoppingImage,
    title: "Online Shopping",
    desciption: "E-Commerce website",
    keyPoints: ["Vite", "Redux", "MaterialUI"],
    link: "https://github.com/VinitaMathew/ShoppingWebsite",
  },
  {
    imageUrl: TagImage,
    title: "TAG - Food and Beverage Solutions",
    desciption: "Enterprise website",
    keyPoints: ["Jest", "SCSS", "RouterDom"],
    link: "https://vinitamathew.github.io/tag/#/",
  },
  // {
  //   imageUrl: BrightSmilesImage,
  //   title: "Bright Smiles Orthodontics",
  //   desciption: "Dental clinic website",
  //   keyPoints: ["SCSS", "Responsive", "TypeScript"],
  //   link: "https://vinitamathew.github.io/BrightSmiles/",
  // },
];
