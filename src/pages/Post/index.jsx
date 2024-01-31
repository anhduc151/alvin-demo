import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./post.css";

const PostCrypto = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://lunarcrush.com/api4/public/topic/bitcoin/posts/v1",
          {
            headers: {
              Authorization: "Bearer 9xj7on8tj5q0cqecn9gqvq2w75lrk4vgqrwwvx9cc",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error HTTP Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setPosts(data.data.posts);
      } catch (error) {
        console.error("Error when get data", error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <div className="blog">
      {posts &&
        posts.map((data) => (
          <Link to={`/blog/${data.id}`} className="blog_box" key={data.id}>
            <div className="blog_box_head">
              <img
                src={data.creator_avatar}
                alt=""
                className="blog_box_head_imgs"
              />
            </div>

            <div className="blog_box_foot">
              <h2 className="blog_box_foot_h2">{data.post_title}</h2>
              <p>{data.creator_display_name}</p>
              <p>Followers: {data.creator_followers}</p>
              <p>Interactions (1h): {data.interactions_1h}</p>
              <p>Interactions (24h): {data.interactions_24h}</p>
              <p>Interactions (total): {data.interactions_total}</p>
              <button className="blog_box_foot_btn">
                Read on Mirror <i className="bx bx-outline icons_read"></i>
              </button>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default PostCrypto;
