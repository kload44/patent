import React from 'react'
import blogs from '../../api/blogs'
import { Link } from 'react-router-dom'

const BlogSection2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-blog-section section-padding">
            <div className="container">
                <div className="wpo-blog-wrap">
                    <div className="wpo-section-title-s2">
                        <span>Blog</span>
                        <h2>Latest News Update</h2>
                    </div>
                    <div className="wpo-blog-items">
                        <div className="row">
                            {blogs.map((blog, Bitem) => (
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12" key={Bitem}>
                                    <div className="wpo-blog-item">
                                        <div className="wpo-blog-img">
                                            <img src={blog.screens} alt="" />
                                        </div>
                                        <div className="wpo-blog-content">
                                            <ul>
                                                <li>{blog.create_at}</li>
                                                <li><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.author}</Link></li>
                                                <li>{blog.comment} comment</li>
                                            </ul>
                                            <h2><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                            <Link onClick={ClickHandler} className="b-btn" to={`/blog-single/${blog.slug}`}>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection2;