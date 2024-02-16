// Trong file TopicsPost.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../../client";

const TopicsPost = () => {
  const [posts, setPosts] = useState([]);
  const { topicId } = useParams();

  useEffect(() => {
    const fetchTopicPosts = async () => {
      try {
        const { data, error } = await supabase
          .from("posts")
          .select("id, title, content")
          .eq("topic_id", topicId);

        if (error) {
          throw error;
        }

        console.log(data);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching topic posts:", error.message);
      }
    };

    fetchTopicPosts();
  }, [topicId]);

  return (
    <div>
      <h2>Topic Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default TopicsPost;
