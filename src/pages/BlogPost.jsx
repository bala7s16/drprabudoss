import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

import { Helmet } from 'react-helmet';

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id));

    if (!post) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">Post not found</h2>
                <Link to="/blog" className="text-primary hover:underline">
                    Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 pt-36">
            <Helmet>
                <title>{post.title} | Dr. Prabu Doss - COGS</title>
                <meta name="description" content={post.excerpt} />
                <meta name="keywords" content={`Gastroenterologist, Dr. Prabu Doss, COGS, ${post.category}, Liver Specialist, Chennai, ${post.title}`} />
            </Helmet>

            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 md:h-96 object-cover"
                />

                <div className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-6 text-sm">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
                            {post.category}
                        </span>
                        <span className="text-gray-500">{post.date}</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8">
                        {post.title}
                    </h1>

                    <div
                        className="prose prose-lg max-w-none text-gray-700"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* About the Expert Footer */}
                    <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-100">
                        <h3 className="text-xl font-bold text-dark mb-2">About the Expert</h3>
                        <p className="text-gray-600 mb-4">
                            <strong>Dr. Prabu Doss</strong> is a renowned Surgical Gastroenterologist and the founder of <strong>COGS (Centre for Obesity & Gastro Surgery)</strong> in Chennai.
                            With over 25 years of experience, he specializes in advanced laparoscopic surgeries and comprehensive liver care.
                        </p>
                        <Link to="/know-your-doctor" className="text-primary font-medium hover:text-secondary">
                            Know More About Dr. Prabu Doss →
                        </Link>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <Link
                            to="/blog"
                            className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors"
                        >
                            ← Back to Blog
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
