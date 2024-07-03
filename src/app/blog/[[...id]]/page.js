import Image from 'next/image'
import React from 'react'
import styled from "./styled.module.css"
import { notFound } from 'next/navigation'
import { getPostDetails } from '@/service/api'

const blogCategories = ["Technology", "Health", "Travel", "Lifestyle", "Education"];

function getRandomCategory() {
    const randomIndex = Math.floor(Math.random() * blogCategories.length);
    return blogCategories[randomIndex];
}

const getLetters = (word) => {
    return (word[0].toUpperCase() + word.slice(1).toLowerCase());
}

const BlogPage = async ({ params }) => {
    const post = await getPostDetails(params.id)
    const { title, body, tags, views, reactions } = post

    if (!title) {
        return notFound();
    }

    return (
        <div className={styled.blogContainer}>
            <div className={styled.cardImage}>
                <Image
                    src={`https://picsum.photos/960/400?random=${post.id}`}
                    alt={title}
                    fill
                    priority={true}
                />
                <div className={styled.overlay}>
                    <span className={styled.categoryName}>
                        {getRandomCategory()}
                    </span>
                </div>
            </div>
            <div className='d-flex flex-wrap align-items-center justify-content-between w-100 mt-3 mb-2'>
                <div className='d-flex align-items-center'>
                    <Image
                        src={`https://picsum.photos/960/400?random=${post.id}`}
                        alt={post.title}
                        width={60}
                        height={60}
                        className='rounded-circle me-2'
                    />
                    <div>
                        <span className='mx-2'> {Math.floor(Math.random() * 30) + 1} days ago ·</span>
                        <span>{Math.floor(Math.random() * 5) + 1}  min read
                        </span>
                    </div>
                </div>
                <h4 className='opacity-50 me-2 mt-2 mt-md-0'><small>Views: {views}</small></h4>
            </div>
            <h3 className={`${styled.blogTitle} display-5`}> {title}</h3>
            <p className={styled.blogBody}>{body}</p>
            <div className={`${styled.tags} d-flex justify-content-start w-100 mx-3`}>
                {tags.map((tag, index) => <button className='btn btn-sm' key={index}> {getLetters(tag)}</button>)}
            </div>
            <div className='d-flex flex-wrap justify-content-between align-items-center w-100 my-3 mx-3'>
                <div className="opacity-75 d-flex gap-2">
                    <h5 className={styled.reactions}>👍 {reactions.likes} </h5>
                    <h5 className={styled.reactions}>👎{reactions.dislikes}</h5>
                </div>
            </div>
        </div>
    )
}

export default BlogPage