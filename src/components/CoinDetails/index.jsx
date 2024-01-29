import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CoinDetails = () => {
  const { id } = useParams();
  const [coinDetail, setCoinDetail] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => {
        setCoinDetail(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  if (!coinDetail) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{coinDetail.name}</h2>
      <p>Symbol: {coinDetail.symbol}</p>
    </div>
  );
};

export default CoinDetails;
