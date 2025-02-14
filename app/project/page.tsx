import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Project = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            {/* Header */}
            <header className="bg-blue-600 py-6">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <h1 className="text-white text-3xl font-bold">My Projects</h1>
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
                            <li>
                                <Link href="/contact">
                                    <span className="text-white hover:text-blue-300 transition">Contact</span>
                                </Link>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Projects Section */}
            <section className="py-20 bg-white text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-semibold text-gray-800">My Projects</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    This is the project I have worked on using Next.js, Html and Tailwind CSS. Feel free to explore!
                    </p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Project 1 */}
                        <div className="bg-white p-6 shadow-lg rounded-lg">
                            <Link href="https://day4-ecommerce.vercel.app/">
                            <Image
                                src="/images/productlistpage.png" // Replace with the actual project image
                                alt="Project 1"
                                width={300}
                                height={200}
                                className="rounded-md"
                            /></Link>
                            <h3 className="mt-4 text-2xl font-semibold text-gray-800">Project 1</h3>
                            <p className="mt-2 text-gray-600">A project built using Next.js and Tailwind CSS. It is a full-stack web application.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4 text-center">
                <p>&copy;My Portfolio</p>
            </footer>
        </div>
    );
};

export default Project;
