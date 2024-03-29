import React, { useEffect, useState } from "react";
import { Input, Table, Spin, message, Skeleton } from "antd";
import axios from "axios";
import Coin from "../../components/Coin";
import "./dashboard.css";

const DashBoard = ({ token }) => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [latestCoins, setLatestCoins] = useState([]);
  const [highVolumeCoins, setHighVolumeCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const { Search } = Input;
  const [filteredCoins, setFilteredCoins] = useState([]);

  // let navigate = useNavigate();

  // const handleLogout = () => {
  //   sessionStorage.removeItem("token");
  //   navigate("/");
  // };

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

  useEffect(() => {
    // Lấy 3 đồng coin mới nhất
    const sortedCoins = [...coins].sort(
      (a, b) => b.last_updated - a.last_updated
    );
    const latestThreeCoins = sortedCoins.slice(0, 3);
    setLatestCoins(latestThreeCoins);
  }, [coins]);

  useEffect(() => {
    // Lấy 3 đồng coin có giao dịch nhiều nhất
    const sortedCoins = [...coins].sort(
      (a, b) => b.total_volume - a.total_volume
    );
    const highVolumeThreeCoins = sortedCoins.slice(0, 3);
    setHighVolumeCoins(highVolumeThreeCoins);
  }, [coins]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleChangeTable = (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredData = coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchText)
    );
    setFilteredCoins(filteredData);
  };

  // search coin
  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectedCoins = filterCoins.slice(0, 3);

  const columns = [
    {
      title: "Coin",
      dataIndex: "name",
      key: "name",
      render: (text, record) => <Coin name={text} image={record.image} />,
      fixed: "left",
      width: 50,
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      render: (text) => (
        <span style={{ textTransform: "uppercase", fontWeight: "normal" }}>
          {text.toUpperCase()}
        </span>
      ),
      key: "symbol",
    },
    {
      title: "Price",
      dataIndex: "current_price",
      key: "current_price",
    },
    // {
    //   title: "Volume",
    //   dataIndex: "total_volume",
    //   key: "total_volume",
    // },
    {
      title: "24h",
      dataIndex: "price_change_24h",
      key: "price_change_24h",
      render: (priceChange24h) => (
        <span className={priceChange24h < 0 ? "red" : "green"}>
          {priceChange24h.toFixed(2)}%
        </span>
      ),
    },
    {
      title: "24h %",
      dataIndex: "price_change_percentage_24h",
      key: "price_change_percentage_24h",
      render: (priceChangePercentage24h) => (
        <span className={priceChangePercentage24h < 0 ? "red" : "green"}>
          {priceChangePercentage24h.toFixed(2)}%
        </span>
      ),
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

  useEffect(() => {
    if (coins.length > 0) {
      // hidden loader
      setLoading(false);
    }
  }, [coins]);

  useEffect(() => {
    document.title = "Dashboard - Alvin AI";
  }, []);

  return (
    <div className="dashboard">
      {/* <h3>Welcome back, {token.user.user_metadata.full_name}</h3> */}
      {/* <button onClick={handleLogout}>Logout</button> */}

      <div className="dashboard_overview">
        <h2 className="dashboard_overview_h2">
          <i className="bx bx-stats title_icons"></i> Markets Overview
        </h2>
        <div className="dashboard_overview_trending">
          <div className="dashboard_overview_box">
            <p className="dashboard_overview_box_p">🔥Hot Coins</p>
            {loading ? (
              <Skeleton
                avatar={{ size: "large" }}
                title={false}
                paragraph={{
                  rows: 4,
                  width: ["100%", "80%", "60%", "40%"],
                }}
                active
              />
            ) : (
              <>
                {selectedCoins.map((coin) => (
                  <div key={coin.id} className="coin_info_box">
                    <Coin name={coin.name} image={coin.image} />
                    <p className={coin.price_change_24h < 0 ? "red" : "green"}>
                      {coin.current_price}
                    </p>
                    <p className={coin.price_change_24h < 0 ? "red" : "green"}>
                      {coin.price_change_24h.toFixed(2)}%
                    </p>
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="dashboard_overview_box">
            <p className="dashboard_overview_box_p">🚀Top Gainer Coin</p>
            {loading ? (
              // <div className="loading_circle">
              //   <div className="ui-loader loader-blk">
              //     <svg viewBox="22 22 44 44" className="multiColor-loader">
              //       <circle
              //         cx="44"
              //         cy="44"
              //         r="20.2"
              //         fill="none"
              //         strokeWidth="3.6"
              //         className="loader-circle loader-circle-animation"
              //       ></circle>
              //     </svg>
              //   </div>
              // </div>
              <Skeleton
                avatar={{ size: "large" }}
                title={false}
                paragraph={{
                  rows: 4,
                  width: ["100%", "80%", "60%", "40%"],
                }}
                active
              />
            ) : (
              <>
                {latestCoins.map((coin) => (
                  <div key={coin.id} className="coin_info_box">
                    <Coin name={coin.name} image={coin.image} />
                    <p className={coin.price_change_24h < 0 ? "red" : "green"}>
                      {coin.current_price}
                    </p>
                    <p className={coin.price_change_24h < 0 ? "red" : "green"}>
                      {coin.price_change_24h.toFixed(2)}%
                    </p>
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="dashboard_overview_box">
            <p className="dashboard_overview_box_p">🔈Top Volume Coin</p>
            {loading ? (
              //
              <Skeleton
                avatar={{ size: "large" }}
                title={false}
                paragraph={{
                  rows: 4,
                  width: ["100%", "80%", "60%", "40%"],
                }}
                active
              />
            ) : (
              <>
                {highVolumeCoins.map((coin) => (
                  <div key={coin.id} className="coin_info_box">
                    <Coin name={coin.name} image={coin.image} />
                    <p className={coin.price_change_24h < 0 ? "red" : "green"}>
                      {coin.current_price}
                    </p>
                    <p className={coin.price_change_24h < 0 ? "red" : "green"}>
                      {coin.price_change_24h.toFixed(2)}%
                    </p>
                    {/* <p>{coin.total_volume}</p> */}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="dashboard_table">
        <div className="dashboard_table_search">
          <h2 className="dashboard_overview_h2">
            <i className="bx bx-stats title_icons"></i> Coins
          </h2>

          {/* <input
            type="text"
            className="dashboard_table_search_input"
            placeholder="Search coin name ..."
            onChange={handleChangeTable}
          ></input> */}

          <div className="inputGroup">
            <input
              type="text"
              required
              autoComplete="off"
              onChange={handleChangeTable}
            />
            <label htmlFor="name">Search</label>
          </div>
        </div>

        {loading ? (
          <>
            <Skeleton
              title={false}
              paragraph={{
                rows: 10,
                width: [
                  "100%",
                  "90%",
                  "80%",
                  "70%",
                  "60%",
                  "50%",
                  "40%",
                  "30%",
                  "20%",
                  "10%",
                ],
              }}
              active
            />
          </>
        ) : (
          <>
            <Table
              columns={columns}
              dataSource={filteredCoins.length > 0 ? filteredCoins : coins}
              rowKey={(record) => record.id}
              scroll={{ x: true }}
              pagination={{ position: "bottom", showSizeChanger: true }}
              className="centered-pagination-table"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default DashBoard;
