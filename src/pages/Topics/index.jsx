import React, { useState, useEffect } from "react";
import { supabase } from "../../client";
import "./topics.css";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    // Hàm fetch dữ liệu từ bảng topics khi component được render
    const fetchTopics = async () => {
      try {
        const { data, error } = await supabase
          .from("topics")
          .select("id, name, created_at");

        if (error) {
          throw error;
        }

        // Cập nhật state với dữ liệu từ bảng topics
        console.log(data);
        setTopics(data);
      } catch (error) {
        console.error("Error fetching topics:", error.message);
      }
    };

    // Gọi hàm fetchTopics khi component được render
    fetchTopics();
    document.title = "Topics - Alvin AI"
  }, []);

  return (
    <div className="topics">
      {topics.map((topic, index) => (
        <Link to={`/topics/${topic.id}`} key={index} className="topics_box">
          <p>Name: {topic.name}</p>
          <p>Created at: {topic.created_at}</p>
        </Link>
      ))}
    </div>
  );
};

export default Topics;
