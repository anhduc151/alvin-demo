import React from "react";
import "./coin.css";

function Coin({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
  lastUpdated,
  high24h,
  low24h,
}) {
  return (
    <div className="coin">
      <div className="row">
        <div className="coin_box">
          <img src={image} alt={name} />
          <h1>{name}</h1>
        </div>
        <p className="symbol">{symbol}</p>
        <p className="price">{price ? `${price} INR` : ""}</p>
        {/* <p className="volume">
          {volume ? `${volume.toLocaleString()} INR` : ""}
        </p> */}
        {priceChange !== undefined ? (
          <p className={priceChange < 0 ? "red" : "green"}>
            {priceChange.toFixed(2)}%
          </p>
        ) : (
          // <span className="red">N/A</span>
          ""
        )}
        <p className="market-cap">
          {marketCap !== undefined ? `$ ${marketCap.toLocaleString()} INR` : ""}
        </p>
        <p className="high_24h red">{high24h}</p>
        <p className="low_24h green">{low24h}</p>
        <p className="last_updated">{lastUpdated ? lastUpdated : ""}</p>
      </div>
    </div>
  );
}

export default Coin;
