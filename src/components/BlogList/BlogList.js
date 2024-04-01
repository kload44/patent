import React from 'react';
import { Link } from 'react-router-dom'
import BlogSidebar from '../BlogSidebar'
import VideoModal from '../ModalVideo'

import blogs from '../../api/blogs'



const BlogList = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="blog-content">
                            {blogs.map((blog, bitem) => (
                                <div className={`post  ${blog.blClass}`} key={bitem}>
                                    <div className="entry-media">
                                        <img src={blog.blogSingleImg} alt="" />
                                        <VideoModal />
                                    </div>
                                    <div className="entry-details">
                                        <div className="cat">{blog.thumb}</div>
                                        <h3><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h3>
                                        <p>Collection of textile samples lay spread out on the table Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with</p>
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="read-more">Read More</Link>
                                    </div>
                                    <div className="entry-meta">
                                        <span>By: <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>Admim</Link> </span>
                                        <span>Date: {blog.create_at} </span>
                                    </div>
                                </div>
                            ))}

                            <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link to="/blog-left-sidebar" aria-label="Previous">
                                            <i className="fi ti-angle-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link to="/blog-left-sidebar">1</Link></li>
                                    <li><Link to="/blog-left-sidebar">2</Link></li>
                                    <li><Link to="/blog-left-sidebar">3</Link></li>
                                    <li>
                                        <Link to="/blog-left-sidebar" aria-label="Next">
                                            <i className="fi ti-angle-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <BlogSidebar blLeft={props.blLeft} />
                </div>
            </div>
        </section>

    )

}

export default BlogList;
