import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const Blog = () => {
    return (
        <div className="container mx-auto px-4 py-12 pt-36">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-dark mb-4">Health Blog</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Stay informed with the latest insights on gastrointestinal and liver health from Dr. Prabu.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <div className="text-sm text-primary font-semibold mb-2 uppercase tracking-wide">
                                {post.category}
                            </div>
                            <h2 className="text-xl font-bold mb-3 text-dark hover:text-primary transition-colors">
                                <Link to={`/blog/${post.id}`}>{post.title}</Link>
                            </h2>
                            <p className="text-gray-600 mb-4 line-clamp-3">
                                {post.excerpt}
                            </p>
                            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                                <span className="text-sm text-gray-500">{post.date}</span>
                                <Link
                                    to={`/blog/${post.id}`}
                                    className="text-primary font-medium hover:text-secondary transition-colors"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
