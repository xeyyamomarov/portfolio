import { useEffect, useState } from "react";
import { PortfolioList } from "../PortfolioList/PortfolioList";
import "./portfolio.scss";
import {
//   featuredPortfolio,
  webPortfolio,
  designPortfolio,
  // gamePortfolio,
} from "../../data";
export const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    // {
    //   id: "featured",
    //   title: "Featured",
    // },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "design",
      title: "Design",
    },
    // {
    //   id: "game",
    //   title: "Game",
    // },
  ];

  useEffect(() => {
    switch (selected) {
    //   case "featured":
    //     setData(featuredPortfolio);
    //     break;
      case "web":
        setData(webPortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      // case "game":
      //   setData(gamePortfolio);
      //   break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => {
          return (
            <PortfolioList
              key={item.id}
              item={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          );
        })}
      </ul>
      <div className="container">
        {data.map((d) => {
          return (
            <div key={d.id} className="item">
              <img  src={d.img} alt="" />
              {/* <h3>{d.title}</h3> */}
              <a href={d.link}  >{d.title}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
