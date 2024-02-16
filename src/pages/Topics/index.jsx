import React, { useState, useEffect } from "react";
import { supabase } from "../../client";
import { Link } from "react-router-dom";
import { Pagination, Skeleton } from "antd";
import "./topics.css";
import PostCrypto from "../Post";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [topicsPerPage] = useState(8);

  // Change page
  const handleChangePage = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("topics")
          .select("id, name, created_at");

        if (error) {
          throw error;
        }

        console.log(data);
        setTopics(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching topics:", error.message);
        setLoading(false);
      }
    };

    fetchTopics();
    document.title = "Topics - Alvin AI";
  }, []);

  // Logic to paginate
  const indexOfLastTopic = currentPage * topicsPerPage;
  const indexOfFirstTopic = indexOfLastTopic - topicsPerPage;
  const currentTopics = topics.slice(indexOfFirstTopic, indexOfLastTopic);

  return (
    <div className="discover">
      <div className="discover_top">
        <h2 className="discover_top_h2">
          <i className="bx bx-coin-stack topics_icons"></i> Topics
        </h2>

        {loading ? (
          <>
            {[...Array(1)].map((_, index) => (
              <Skeleton
                key={index}
                avatar={{ shape: "square", size: "large" }}
                title={false}
                paragraph={{ rows: 4, width: ["100%", "80%", "60%", "40%"] }}
                active
              />
            ))}
          </>
        ) : (
          <div className="topics">
            {currentTopics.map((topic, index) => (
              <Link
                to={`/topics/${topic.id}`}
                key={index}
                className="topics_box"
              >
                <h2 className="topics_box_h2">
                  <i className="bx bx-coin topics_icons"></i> {topic.name}
                </h2>
                <p>Created at: {topic.created_at}</p>
              </Link>
            ))}
          </div>
        )}

        <div className="blogs_panigation">
          <Pagination
            current={currentPage}
            total={topics.length}
            pageSize={topicsPerPage}
            onChange={handleChangePage}
            showSizeChanger={false}
          />
        </div>
      </div>

      <div className="discover_bottom">
        <h2 className="discover_top_h2">
          <i className="bx bx-coin-stack topics_icons"></i> Posts
        </h2>
        <PostCrypto />
      </div>
    </div>
  );
};

export default Topics;
