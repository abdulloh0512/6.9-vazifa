import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./tovar.css";

function Tovarlar() {
  const [posts, setPosts] = useState();
  async function getPost() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setPosts(data.products);
  }
  useEffect(() => {
    getPost();
  }, []);
  console.log(posts);
  return (
    <div>
      <div className="card">
        {posts &&
          posts.map((post) => (
            <div key={post.id} className="">
              <Link to={"/product/" + post.id}>
                <figure>
                  <img
                    className="tovar_img"
                    src={posts && post.images[0]}
                    alt=""
                  />
                </figure>
                <div className="big_card">
                  <div className="">
                    <div className="">
                      <span className="tovar_brand">
                        Kompaniya : {posts && post.brand}
                      </span>
                    </div>
                    <span className="tovar_title"> Madel : {posts && post.title}</span>
                  </div>
                  <p className="tovar_description">
                    {posts && post.description}
                  </p>
                  <div className="">
                    <span className="tovar_rating">
                      <img className="tovar_star" src="star.svg" alt="" />
                      {posts && post.rating}
                    </span>
                  </div>
                  <span className="r">
                    Soni : <span className="tovar_stock">{posts && post.stock}</span> ta 
                  </span>
                  <div className="">
                    <span className="">
                      Narxi : {posts && Math.ceil(post.price * 12331)} so'm
                    </span>
                    <br />
                    <span className="">
                      Nasiya (12 oy) : {Math.ceil((post.price * 12331) / 12)} so'm /  oyiga
                    </span>
                  </div>
                  <button className="tovar_button">Sotib olish</button>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Tovarlar;
