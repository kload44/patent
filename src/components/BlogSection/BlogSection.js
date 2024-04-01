import React from 'react'
import blogs from '../../api/blogs'
import { Link } from 'react-router-dom'

const BlogSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={`blog-section section-padding ${props.bClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-4 col-12">
                        <div className="section-title-s4">
                            <div className="icon">
                                <i className="fi flaticon-light-bulb"></i>
                            </div>
                            <span>Latest Blog</span>
                            <h2>Check Our Latest Tips & News</h2>
                            <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nuncIt showed a lady fitted</p>
                            <Link onClick={ClickHandler} to="/blog" className="theme-btn">More Blog Post</Link>
                        </div>
                    </div>
                    <div className="col col-lg-8 col-12">
                        <div className="blog-grids clearfix">
                            {blogs.slice(0,2).map((blog, Bitem) => (
                                <div className="grid" key={Bitem}>
                                    <div className="entry-media">
                                        <img src={blog.screens} alt="" />
                                    </div>
                                    <div className="entry-details">
                                        <div className="cat">{blog.thumb}</div>
                                        <h3><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h3>
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="read-more">Read More</Link>
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

export default BlogSection;