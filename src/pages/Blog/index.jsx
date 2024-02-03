import React, { useState, useEffect } from "react";
import "./blog.css";
import blogImage from "../../assets/blog.png";
import { supabase } from "../../client";
import { Link } from "react-router-dom";
import { Pagination, Skeleton } from "antd";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  async function fetchPosts() {
    const { data, error } = await supabase.from("blogs").select();
    setLoading(false);
    if (error) {
      console.log("Error fetching posts");
    } else {
      console.log(data);
      setPosts(data);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    document.title = "Blogs - Alvin AI";
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
            {currentPosts.map((blog) => (
              <Link to={`/blog/${blog.id} `} key={blog.id} className="blog_box">
                <div className="blog_box_head">
                  <img
                    src={blog.image || blogImage}
                    alt=""
                    className="blog_box_head_imgs"
                  />
                </div>

                <div className="blog_box_foot">
                  <h2 className="blog_box_foot_h2">{blog.title}</h2>
                  <p
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                    className="blog_box_foot_p"
                  />
                  <button className="blog_box_foot_btn">
                    Read on Mirror <i className="bx bx-outline icons_read"></i>
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
          pageSize={postsPerPage}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Blog;
