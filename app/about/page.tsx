import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            {/* Header */}
            <header className="bg-blue-600 py-6">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <h1 className="text-white text-3xl font-bold">About Me</h1>
                    <nav>
                        <ul className="flex space-x-8">
                            <li>
                                <Link href="/">
                                    <span className="text-white hover:text-blue-300 transition">Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/project">
                                    <span className="text-white hover:text-blue-300 transition">Project</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <span className="text-white hover:text-blue-300 transition">Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* About Section */}
            <section className="py-20 bg-white text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-semibold text-gray-800">About Me</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        I’m a passionate web developer specializing in creating interactive, responsive, and scalable websites.
                        With Next.js, Html and Tailwind CSS, I build modern web applications that are fast and user-friendly.
                    </p>
                    <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                        I enjoy learning new technologies and keeping up with the latest trends in the industry. I focus on clean code, performance optimization, and creating beautiful user experiences.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4 text-center">
                <p>&copy;My Portfolio</p>
            </footer>
        </div>
    );
};

export default About;
