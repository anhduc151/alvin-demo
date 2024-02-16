// Trang TopicsPost.js
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../../../client";

const TopicsPost = () => {
  const { topicId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchTopicPosts = async () => {
      try {
        const { data: topicPosts, error: topicPostsError } = await supabase
          .from("topics_posts")
          .select("post_id")
          .eq("topic_id", topicId);

        if (topicPostsError) {
          throw topicPostsError;
        }

        const postIds = topicPosts.map((topicPost) => topicPost.post_id);

        const { data: postsData, error: postsError } = await supabase
          .from("posts")
          .select("id, title, content")
          .in("id", postIds);

        if (postsError) {
          throw postsError;
        }
        
        console.log(postsData);
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching topic posts:", error.message);
      }
    };

    fetchTopicPosts();
  }, [topicId]);

  return (
    <div className="topics_posts">
      <h2 className="topics_posts_h2">Lists Posts</h2>
      <div className="topics_posts_list">
        {posts.map((post) => (
          <Link to={`/posts-crypto/${post.id}`} key={post.id} className="topics_posts_box">
            <h3>{post.title}</h3>
            <p className="posts_description">{post.content}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopicsPost;
