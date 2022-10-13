import React from "react";

const TableLine = ({ coin, index }) => {
  const priceFormater = (price) => {
    if (Math.round(price).toString().length < 4) {
      return new Intl.NumberFormat("us-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 7,
      }).format(price);
    } else {
      return price;
    }
  };

  const mktCapFormateur = () => {};

  return (
    <div className="table-line">
      <div className="infos-container">
        <span>*</span>
        <p>{index + 1}</p>
        <div className="img">
          <img src={coin.image} height="20px" alt="" />
        </div>
        <div className="infos">
          <div className="chart-img">
            <img src="./assets/chart-icon.svg" alt="chart-icon" />
          </div>
          <h4>{coin.name}</h4>
          <span>- {coin.symbol.toUpperCase()}</span>
          <a
            target="_blank"
            href={`https://www.coingecko.com/fr/pi%C3%A8ces/${coin.name
              .toLowerCase()
              .replaceAll(" ", "-")}`}
          >
            <img src="./assets/info-icon.svg" alt="info_icon" />
          </a>
        </div>
      </div>
      <p>{priceFormater(coin.current_price).toLocaleString()} $</p>
      <p className="mktcap">{mktCapFormateur(coin.market_cap)} Md$</p>
    </div>
  );
};

export default TableLine;
