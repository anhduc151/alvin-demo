import React from "react";
import "./coin.css";

function Coin({ name, image, symbol, price, volume, priceChange, marketCap, lastUpdated }) {
  return (
    <div className="coin">
      <div className="row">
        <div className="coin_box">
          <img src={image} alt={name} />
          <h1>{name}</h1>
        </div>
        <p className="symbol">{symbol}</p>

        <div className="data">
          <p className="price">{price ? `${price} INR` : ''}</p>
          <p className="volume">{volume ? `${volume.toLocaleString()} INR` : ''}</p>
          {priceChange !== undefined ? (
            priceChange < 0 ? (
              <p className="red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="green">{priceChange.toFixed(2)}%</p>
            )
          ) : (
            <p className="red">N/A</p>
          )}
          <p className="market-cap">
            {marketCap !== undefined ? `$ ${marketCap.toLocaleString()} INR` : ''}
          </p>
          <p className="last_updated">{lastUpdated ? lastUpdated : ''}</p>
        </div>
      </div>
    </div>
  );
}

export default Coin;
