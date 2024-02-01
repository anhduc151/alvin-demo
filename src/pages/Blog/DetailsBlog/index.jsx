import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../../client";
import "../blog.css";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      const { data, error } = await supabase
        .from("blogs")
        .select()
        .eq("id", id)
        .single();
      setLoading(false);
      if (error) {
        console.error("Error fetching blog details");
      } else {
        console.log(data);
        setBlog(data);
      }
    }

    fetchBlog();
  }, [id]);

  return (
    <div className="blog_detail">
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div className="blog_detail_box">
          <h2 className="blog_detail_box_h2">{blog.title}</h2>
          <p
            dangerouslySetInnerHTML={{ __html: blog.description }}
            className="blog_detail_box_p"
          />
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
