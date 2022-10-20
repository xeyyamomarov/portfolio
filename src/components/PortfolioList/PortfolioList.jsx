import "./portfolioList.scss";
export const PortfolioList = ({ item, active, setSelected, id }) => {
  return (
    <li
      className={active ? "portfolioList active " : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {item}
    </li>
  );
};
