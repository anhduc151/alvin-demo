import React from "react";
import "./blog.css";
import blog from "../../assets/blog.png";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blog">
      <Link to="/blog/1" className="blog_box">
        <div className="blog_box_head">
          <img src={blog} alt="" className="blog_box_head_imgs" />
        </div>

        <div className="blog_box_foot">
          <h2 className="blog_box_foot_h2">
            The token distribution playbook is broken. We're fixing it.
          </h2>
          <p className="blog_box_foot_p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium modi consectetur facilis voluptates laborum animi,
            consequatur laudantium illum sint ipsa temporibus facere delectus
            deserunt totam corrupti ad aut quasi repellendus!
          </p>

          <button className="blog_box_foot_btn">
            Read on Mirror <i className="bx bx-outline icons_read"></i>
          </button>
        </div>
      </Link>

      <Link to="/blog/1" className="blog_box">
        <div className="blog_box_head">
          <img src={blog1} alt="" className="blog_box_head_imgs" />
        </div>

        <div className="blog_box_foot">
          <h2 className="blog_box_foot_h2">
            The token distribution playbook is broken. We're fixing it.
          </h2>
          <p className="blog_box_foot_p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium modi consectetur facilis voluptates laborum animi,
            consequatur laudantium illum sint ipsa temporibus facere delectus
            deserunt totam corrupti ad aut quasi repellendus!
          </p>
          <button className="blog_box_foot_btn">
            Read on Mirror <i className="bx bx-outline icons_read"></i>
          </button>
        </div>
      </Link>

      <Link to="/blog/1" className="blog_box">
        <div className="blog_box_head">
          <img src={blog2} alt="" className="blog_box_head_imgs" />
        </div>

        <div className="blog_box_foot">
          <h2 className="blog_box_foot_h2">
            The token distribution playbook is broken. We're fixing it.
          </h2>
          <p className="blog_box_foot_p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium modi consectetur facilis voluptates laborum animi,
            consequatur laudantium illum sint ipsa temporibus facere delectus
            deserunt totam corrupti ad aut quasi repellendus!
          </p>
          <button className="blog_box_foot_btn">
            Read on Mirror <i className="bx bx-outline icons_read"></i>
          </button>
        </div>
      </Link>

      <Link to="/blog/1" className="blog_box">
        <div className="blog_box_head">
          <img src={blog3} alt="" className="blog_box_head_imgs" />
        </div>

        <div className="blog_box_foot">
          <h2 className="blog_box_foot_h2">
            The token distribution playbook is broken. We're fixing it.
          </h2>
          <p className="blog_box_foot_p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium modi consectetur facilis voluptates laborum animi,
            consequatur laudantium illum sint ipsa temporibus facere delectus
            deserunt totam corrupti ad aut quasi repellendus!
          </p>
          <button className="blog_box_foot_btn">
            Read on Mirror <i className="bx bx-outline icons_read"></i>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Blog;