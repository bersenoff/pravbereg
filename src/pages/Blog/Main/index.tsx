import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTitle } from "hooks";
import { message } from "antd";
import { Section } from "components";
import Loader from "react-loader-spinner";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./index.css";

const Component: React.FC = () => {
  useTitle("Блог");

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPosts = () => {
    setLoading(true);

    axios({
      method: "POST",
      url: "https://prabereg.ru/api/blog/list/get"
    }).then((res) => {
      setPosts(res.data.data);
      setLoading(false);
    }).catch((err) => {
      setLoading(false);
      message.error(err.message);
    });
  }

  useEffect(getPosts, [])

  return (
    <Section title="БЛОГ" iconComponent={<i className="fas fa-newspaper"></i>}>
      {loading ?
        <div style={{ textAlign: "center" }}>
          <Loader type="Oval" color="#762a2c" />
        </div>
      :
        <div className="blog-posts-grid">
          {posts.map((post) => {
            return (
              <div className="block-item" style={{ overflow: "hidden" }}>
                <div className="blog-post-title">{post.title}</div>
                <div className="blog-post-content">{post.short_content.substring(0, 300)}...</div>
                <div className="blog-post-btn"><Link  to={`/blog/post/${post.id}`} className="primary-btn">Читать дальше...</Link></div>
              </div>
            );
          })}
        </div>
      }
    </Section>
  );
}

export default Component;