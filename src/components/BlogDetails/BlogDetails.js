import React from 'react';
import { Link } from 'react-router-dom'
import blog3 from '../../images/blog-details/comments-author/img-1.jpg'
import blog4 from '../../images/blog-details/comments-author/img-2.jpg'
import blog5 from '../../images/blog-details/comments-author/img-3.jpg'
import blog6 from '../../images/blog-details/author.jpg'
import blogs from '../../api/blogs';
import { useParams } from 'react-router-dom'
import BlogSidebar from '../BlogSidebar';

const BlogSingle = (props) => {

    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <section className="blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="blog-content">
                            <div className="post format-standard-image">
                                <div className="entry-media">
                                    <img src={BlogDetails?.blogSingleImg} alt="" />
                                </div>
                                <div className="date-entry-meta">
                                    <div className="cat">Adovcate, Law</div>
                                    <div className="entry-meta">
                                        <span>By: <Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use">Admim</Link> </span>
                                        <span>Date: Jan 20 2020</span>
                                    </div>
                                </div>
                                <h2>Most colorful personalities and powerful institutions, as well as original commentary in the world</h2>
                                <p>Dahsing when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls</p>
                                <p>Over the in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready</p>
                                <blockquote>
                                    Holding out on the table Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an
                                    <span className="quoter">- Jhone dow</span>
                                </blockquote>
                                <h3>Over the horizen consortium is showing off this concept car, which they've dubbed the NCV </h3>
                                <p>Nigurned to look out the window at the dull weather. Pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls the when gago will go away never</p>
                            </div>

                            <div className="tag-share clearfix">
                                <div className="tag">
                                    <ul>
                                        <li><Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use">Family</Link></li>
                                        <li><Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use">Lawyer</Link></li>
                                        <li><Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use">Bradning</Link></li>
                                    </ul>
                                </div>
                                <div className="share">
                                    <ul>
                                        <li><Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use"><i className="ti-facebook"></i></Link></li>
                                        <li><Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use"><i className="ti-linkedin"></i></Link></li>
                                        <li><Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="author-box">
                                <div className="author-avatar">
                                    <Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use" target="_blank"><img src={blog6} alt="" /></Link>
                                </div>
                                <div className="author-content">
                                    <Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use" className="author-name">Michel Don</Link>
                                    <p>Doing right hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather.</p>
                                    <div className="socials">
                                        <ul className="social-link">
                                            <li><Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use"><i className="ti-facebook"></i></Link></li>
                                            <li><Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use"><i className="ti-linkedin"></i></Link></li>
                                            <li><Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="more-posts">
                                <div className="previous-post">
                                    <Link to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use">
                                        <span className="post-control-link">Previous Post</span>
                                        <span className="post-name">Mechin covered the whole of her lower arm towards the viewer</span>
                                    </Link>
                                </div>
                                <div className="next-post">
                                    <a href="0">
                                        <span className="post-control-link">Next Post</span>
                                        <span className="post-name"> There was then turned to look out the window at the dull weather.</span>
                                    </a>
                                </div>
                            </div>

                            <div className="comments-area">
                                <div className="comments-section">
                                    <h3 className="comments-title">Comments</h3>
                                    <ol className="comments">
                                        <li className="comment even thread-even depth-1" id="comment-1">
                                            <div id="div-comment-1">
                                                <div className="comment-theme">
                                                    <div className="comment-image"><img src={blog3} alt="" /></div>
                                                </div>
                                                <div className="comment-main-area">
                                                    <div className="comment-wrapper">
                                                        <div className="comments-meta">
                                                            <h4>John Abraham <span className="comments-date">January 12,2021
                                                                At 9.00am</span></h4>
                                                        </div>
                                                        <div className="comment-area">
                                                            <p>I will give you a complete account of the system, and
                                                                expound the actual teachings of the great explorer of
                                                                the truth, </p>
                                                            <div className="comments-reply">
                                                                <Link className="comment-reply-link" to="/blog-single/Justice-May-For-You-If-You-Are-Innocen"><span>Reply</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="children">
                                                <li className="comment">
                                                    <div>
                                                        <div className="comment-theme">
                                                            <div className="comment-image"><img src={blog4} alt="" /></div>
                                                        </div>
                                                        <div className="comment-main-area">
                                                            <div className="comment-wrapper">
                                                                <div className="comments-meta">
                                                                    <h4>Lily Watson <span className="comments-date">January
                                                                        12,2021 At 9.00am</span></h4>
                                                                </div>
                                                                <div className="comment-area">
                                                                    <p>I will give you a complete account of the system,
                                                                        and expound the actual teachings of the great
                                                                        explorer of the truth, </p>
                                                                    <div className="comments-reply">
                                                                        <Link className="comment-reply-link" to="/blog-single/Justice-May-For-You-If-You-Are-Innocen"><span>Reply</span></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li className="comment">
                                                            <div>
                                                                <div className="comment-theme">
                                                                    <div className="comment-image"><img src={blog5} alt="" /></div>
                                                                </div>
                                                                <div className="comment-main-area">
                                                                    <div className="comment-wrapper">
                                                                        <div className="comments-meta">
                                                                            <h4>John Abraham <span className="comments-date">January
                                                                                12,2021 At 9.00am</span></h4>
                                                                        </div>
                                                                        <div className="comment-area">
                                                                            <p>I will give you a complete account of the
                                                                                system, and expound the actual teachings
                                                                                of the great explorer of the truth, </p>
                                                                            <div className="comments-reply">
                                                                                <Link className="comment-reply-link" to="/blog-single/Justice-May-For-You-If-You-Are-Innocen"><span>Reply</span></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="comment">
                                            <div>
                                                <div className="comment-theme">
                                                    <div className="comment-image"><img src={blog3} alt="" /></div>
                                                </div>
                                                <div className="comment-main-area">
                                                    <div className="comment-wrapper">
                                                        <div className="comments-meta">
                                                            <h4>John Abraham <span className="comments-date">January 12,2021
                                                                At 9.00am</span></h4>
                                                        </div>
                                                        <div className="comment-area">
                                                            <p>I will give you a complete account of the system, and
                                                                expound the actual teachings of the great explorer of
                                                                the truth, </p>
                                                            <div className="comments-reply">
                                                                <Link className="comment-reply-link" to="/blog-single/Justice-May-For-You-If-You-Are-Innocen"><span>Reply</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                                <div className="comment-respond">
                                    <h3 className="comment-reply-title">Post Comments</h3>
                                    <form onSubmit={submitHandler} id="commentform" className="comment-form">
                                        <div className="form-textarea">
                                            <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                                        </div>
                                        <div className="form-inputs">
                                            <input placeholder="Website" type="url" />
                                            <input placeholder="Name" type="text" />
                                            <input placeholder="Email" type="email" />
                                        </div>
                                        <div className="form-submit">
                                            <input id="submit" value="Post Comment" type="submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft} />
                </div>
            </div>
        </section>
    )

}

export default BlogSingle;
