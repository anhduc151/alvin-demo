import React, { useEffect, useState } from "react";
import { Input, Table } from "antd";
import axios from "axios";
import Coin from "../../components/Coin";
import "./dashboard.css";

const { Search } = Input;

const DashBoard = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  // call api coingecko
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
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

  // search coin
  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      title: "Coin",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Coin name={text} image={record.image} />
      ),
      fixed: "left",
      width: 50,
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
      title: "Red",
      dataIndex: "price_change_percentage_1h_in_currency",
      key: "price_change_percentage_1h_in_currency",
      render: (priceChange) => {
        if (priceChange !== undefined && typeof priceChange === 'number') {
          return (
            <span className={priceChange < 0 ? 'red' : 'green'}>
              {priceChange.toFixed(2)}%
            </span>
          );
        } else {
          return <span className="red">N/A</span>;
        }
      },
    },
    {
      title: "Market Cap",
      dataIndex: "market_cap",
      key: "market_cap",
    },
    {
      title: "High 24h",
      dataIndex: "high_24h",
      key: "high_24h",
    },
    {
      title: "Low 24h",
      dataIndex: "low_24h",
      key: "low_24h",
    },
    {
      title: "Last Updated",
      dataIndex: "last_updated",
      key: "last_updated",
    },
  ];


  return (
    <div className="dashboard">
      <div className="forminput">
        <Search
          placeholder="Search Name Coin ..."
          className="search"
          onChange={handleChange}
        />
      </div>

      <div className="dashboard_table">
        <Table
          columns={columns}
          dataSource={filterCoins}
          rowKey={(record) => record.id}
          scroll={{ x: true }}
        />
      </div>
    </div>
  );
};

export default DashBoard;
