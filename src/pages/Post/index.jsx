import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./post.css";
import { Pagination, Skeleton } from "antd";

const PostCrypto = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchData = async () => {
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
        setPosts(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error when getting data", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="blog">
        {loading ? (
          <>
            <Skeleton
              avatar={{ shape: "square", size: "large" }}
              title={false}
              paragraph={{
                rows: 4,
                width: ["100%", "80%", "60%", "40%"],
              }}
              active
            />
            <Skeleton
              avatar={{ shape: "square", size: "large" }}
              title={false}
              paragraph={{
                rows: 4,
                width: ["100%", "80%", "60%", "40%"],
              }}
              active
            />
            <Skeleton
              avatar={{ shape: "square", size: "large" }}
              title={false}
              paragraph={{
                rows: 4,
                width: ["100%", "80%", "60%", "40%"],
              }}
              active
            />
            <Skeleton
              avatar={{ shape: "square", size: "large" }}
              title={false}
              paragraph={{
                rows: 4,
                width: ["100%", "80%", "60%", "40%"],
              }}
              active
            />
            <Skeleton
              avatar={{ shape: "square", size: "large" }}
              title={false}
              paragraph={{
                rows: 4,
                width: ["100%", "80%", "60%", "40%"],
              }}
              active
            />
            <Skeleton
              avatar={{ shape: "square", size: "large" }}
              title={false}
              paragraph={{
                rows: 4,
                width: ["100%", "80%", "60%", "40%"],
              }}
              active
            />
          </>
        ) : (
          <>
            {posts
              .slice((currentPage - 1) * 10, currentPage * 10)
              .map((data) => (
                <Link
                  to={`/posts-crypto/${data.id}`}
                  className="blog_box"
                  key={data.id}
                >
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
                      Read on Mirror{" "}
                      <i className="bx bx-outline icons_read"></i>
                    </button>
                  </div>
                </Link>
              ))}
          </>
        )}
      </div>
      <div className="blogs_panigation">
        <Pagination
          current={currentPage}
          total={posts.length}
          pageSize={10}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default PostCrypto;
