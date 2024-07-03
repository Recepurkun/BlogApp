import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "./styled.module.css";

const BlogCard = ({ id, title, body, reactions, views }) => {
  return (
    <div>
      <hr className="hr" />
      <Link href={`/blog/${id}`} className={`${styled.card} my-2 m-md-1`}>
        <div className={styled.cardImage}>
          <Image
            src={`https://picsum.photos/200/300?random=${id}`}
            width={96}
            height={96}
            alt="Blog Card"
          />
        </div>
        <div className={styled.cardBody}>
          <h3 className="d-flex flex-wrap justify-content-between me-2">
            {id} - {title}
            <i className="mt-2 mt-md-0">
              <small>
                👍{reactions.likes} 👎{reactions.dislikes}
              </small>
            </i>
          </h3>
          <p className="m-0">{body}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
