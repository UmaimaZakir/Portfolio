import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Resume() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            {/* Header Section */}
            <header className="bg-blue-600 py-6">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <h1 className="text-white text-3xl font-bold">My Portfolio</h1>
                    <nav>
                        <ul className="flex space-x-8">
                            <li>
                                <Link href="/about">
                                    <span className="text-white hover:text-blue-300 transition">About</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/project">
                                    <span className="text-white hover:text-blue-300 transition">Projects</span>
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

            {/* Hero Section */}
            <section className="text-center py-28 bg-blue-500 text-white">
                <h2 className="text-5xl font-extrabold">Hello, I'm Umaima Zakir</h2>
                <p className="mt-4 text-lg">I create amazing web experiences with Next.js, Html & Tailwind CSS</p>
            </section>

            {/* About Section */}
            {/* <section id="about" className="py-20 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-semibold text-gray-800">About Me</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
                        I’m a passionate web developer specializing in creating interactive, responsive, and scalable websites.
                        With Next.js, Html and Tailwind CSS, I build modern web applications that are fast and user-friendly.
                    </p>
                </div>
            </section> */}

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-semibold text-gray-800">My Projects</h2>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Example Project 1 */}
                        <div className="bg-white p-6 shadow-lg rounded-lg">
                            <Link href="https://day4-ecommerce.vercel.app/">
                            <Image
                                src="/images/productlistpage.png"
                                alt="Project 1"
                                width={300}
                                height={200}
                                className="rounded-md"
                            /></Link>
                            <h3 className="mt-4 text-2xl font-semibold text-gray-800">Project 1</h3>
                            <p className="mt-2 text-gray-600">
                                A full-stack web application built with Next.js and Tailwind CSS.
                            </p>
                        </div>
                        {/* Add more projects here */}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4 text-center">
                <p>&copy;My Portfolio</p>
            </footer>
        </div>
    );
}
