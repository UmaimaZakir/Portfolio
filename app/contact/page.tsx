"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("Message submitted:", message);  // Just logging the message for now
        // Here, you can add the logic to send the message to your backend or email.
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            {/* Header */}
            <header className="bg-blue-600 py-6">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <h1 className="text-white text-3xl font-bold">Contact Me</h1>
                    <nav>
                        <ul className="flex space-x-8">
                            <li>
                                <Link href="/">
                                    <span className="text-white hover:text-blue-300 transition">Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <span className="text-white hover:text-blue-300 transition">About</span>
                                </Link>
                            </li>
                            <li><Link href="/project">
                                <span className="text-white">Project</span></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Contact Section */}
            <section className="py-20 bg-white text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-semibold text-gray-800">Get in Touch</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Feel free to reach out for collaboration, freelance work, or any questions. I'd love to hear from you!
                    </p>

                    <form className="mt-8 max-w-lg mx-auto" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="px-4 py-3 w-full rounded-lg text-gray-700 mb-4"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea
                            placeholder="Your Message"
                            className="px-4 py-3 w-full rounded-lg text-gray-700 mb-4"
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4 text-center">
                <p>&copy;My Portfolio</p>
            </footer>
        </div>
    );
};

export default Contact;
