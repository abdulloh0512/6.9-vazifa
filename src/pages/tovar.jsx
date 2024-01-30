import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./tovar.css";

function Tovar() {
  const { id } = useParams();
  const [post, setPost] = useState();
  async function getPost() {
    const res = await fetch("https://dummyjson.com/products/" + id);
    const data = await res.json();
    setPost(data);
  }
  useEffect(() => {
    getPost();
  }, []);
  console.log(post);
  return (
    <div className="box">
      <div className="img_div">
          <img src={post && post.images[0]} className="img" />
          <img src={post && post.images[1]} className="img" />
          <img src={post && post.images[2]} className="img" />
          <img src={post && post.images[3]} className="img" />
          <img src={post && post.images[4]} className="img" />
      </div>
      <h1>
        {post && post.description}
      </h1>
    </div>
  );
}

export default Tovar;
