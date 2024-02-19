import React, { useState, useEffect } from "react";
import { supabase } from "../../../client";
import Sidebar from "../../Components/Sidebar";

const CreateTopics = () => {
  const [topics, setTopics] = useState([]);
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data
  async function fetchTopics() {
    try {
      const { data, error } = await supabase
        .from("topics")
        .select()
        .ilike("name", `%${searchTerm}%`);
      if (error) {
        console.error("Error fetching topics:", error.message);
      } else {
        setTopics(data);
      }
    } catch (error) {
      console.error("Error fetching topics:", error.message);
    }
  }

  // Create or update topic
  async function createOrUpdateTopic() {
    try {
      if (isEditing) {
        await supabase.from("topics").update({ name }).eq("id", editId);
      } else {
        await supabase.from("topics").insert([{ name }]);
      }

      resetForm();
      fetchTopics();
    } catch (error) {
      console.error("Error creating/updating topic:", error.message);
    }
  }

  // Edit topic
  const handleEdit = (id) => {
    const topicToEdit = topics.find((topic) => topic.id === id);
    setName(topicToEdit.name);
    setIsEditing(true);
    setEditId(id);
  };

  // Delete topic
  async function handleDelete(id) {
    try {
      const { error } = await supabase.from("topics").delete().eq("id", id);

      if (error) {
        console.error("Error deleting topic:", error.message);
      } else {
        console.log("Topic deleted successfully");
        fetchTopics();
      }
    } catch (error) {
      console.error("Error deleting topic:", error.message);
    }
  }

  // Reset form
  const resetForm = () => {
    setName("");
    setIsEditing(false);
    setEditId(null);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    createOrUpdateTopic();
  };

  useEffect(() => {
    fetchTopics();
    document.title = "CRUD Topics - Alvin AI";
  }, [searchTerm]);

  return (
    <>
      <Sidebar />
      <div className="create">
        <h1 className="create_topics_h1">Create Topics</h1>

        <form onSubmit={handleSubmit} className="create_topics_form">
          <label className="create_topics_label">
            <i className="bx bx-stats title_icons"></i> Name
          </label>
          <input
            type="text"
            value={name}
            placeholder="Topics Name"
            className="create_topics_name"
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="create_btn">
            {isEditing ? "Update" : "Create"}
          </button>
        </form>

        <>
          <p className="create_blogs_title">
            <i className="bx bx-stats title_icons"></i> Topics Lists
          </p>

          <div className="search_blogs">
            <input
              type="text"
              placeholder="Search Topics"
              className="search_blogs_input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="create_topics_lists">
            {topics.map((topic) => (
              <div key={topic.id} className="create_topics_box">
                <p className="create_topics_box_name">{topic.name}</p>
                <div className="create_topics_btn">
                  <button
                    onClick={() => handleEdit(topic.id)}
                    className="create_edit"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(topic.id)}
                    className="create_delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      </div>
    </>
  );
};

export default CreateTopics;
