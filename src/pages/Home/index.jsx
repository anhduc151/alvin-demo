import React, { useEffect, useState } from "react";
import { Input, Table } from "antd";
import axios from "axios";
import Coin from "../../components/Coin";
import "./home.css";

const { Search } = Input;

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        // "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      title: "Coin",
      dataIndex: "name",
      key: "name",
      render: (text, record) => <Coin name={text} image={record.image} />,
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
    },
    {
      title: "Price",
      dataIndex: "current_price",
      key: "current_price",
    },
    {
      title: "Volume",
      dataIndex: "total_volume",
      key: "total_volume",
    },
    {
      title: "1h",
      dataIndex: "price_change_percentage_1h_in_currency",
      key: "price_change_percentage_1h_in_currency",
    },
    {
      title: "Market Cap",
      dataIndex: "market_cap",
      key: "market_cap",
    },
    {
      title: "Last Updated",
      dataIndex: "last_updated",
      key: "last_updated",
    },
  ];

  return (
    <div className="home">
      <div className="forminput">
        <Search
          placeholder="Tìm kiếm"
          className="search"
          onChange={handleChange}
        />
      </div>

      <div className="home_table">
        <Table
          dataSource={filterCoins}
          columns={columns}
          rowKey={(record) => record.id}
        />
      </div>
    </div>
  );
};

export default Home;
