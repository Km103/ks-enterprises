import React from 'react';

export default function About() {
    return (
        <div className="min-h-screen bg-primary">
            {/* Hero Section */}
            <section className="bg-gray-100 text-black py-10 bg-heroSection bg-cover bg-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        About Us
                    </h1>
                    <p className="text-base md:text-lg max-w-3xl mx-auto">
                        Discover our journey, vision, and the passion driving us
                        to deliver top-quality stretch films and packaging
                        solutions.
                    </p>
                </div>
            </section>

            {/* Company Story Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-black mb-6">
                                Our Story
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We embarked on our journey in{' '}
                                <span className="font-semibold">
                                    November 2024
                                </span>
                                , with a mission to revolutionize the packaging
                                industry through high-quality stretch films and
                                related products. In just a short span, we have
                                achieved remarkable milestones, including
                                generating sales of{' '}
                                <span className="font-semibold">2 crore</span>,
                                a testament to our commitment to excellence and
                                customer trust.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our team is driven by innovation and precision,
                                crafting durable and sustainable packaging
                                solutions that meet the diverse needs of our
                                clients. We’re committed to pushing the
                                boundaries of manufacturing excellence and are
                                excited about shaping the future of the
                                industry!
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/about.jpg"
                                alt="Manufacturing stretch films"
                                className="w-11/12 h-auto rounded-lg shadow-lg mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-black mb-12 text-center">
                        Our Achievements
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <svg
                                className="w-12 h-12 text-blue-600 mb-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h-2m-6 0H3m6-17V3m0 18v-2"
                                ></path>
                            </svg>
                            <h3 className="text-xl font-semibold text-black">
                                2 Crore Sales
                            </h3>
                            <p className="text-gray-600 text-center">
                                Achieved within months of inception
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <svg
                                className="w-12 h-12 text-blue-600 mb-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <h3 className="text-xl font-semibold text-black">
                                10,000+ Units
                            </h3>
                            <p className="text-gray-600 text-center">
                                High-quality stretch films delivered
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <svg
                                className="w-12 h-12 text-blue-600 mb-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                ></path>
                            </svg>
                            <h3 className="text-xl font-semibold text-black">
                                50+ Clients
                            </h3>
                            <p className="text-gray-600 text-center">
                                Trusted by businesses nationwide
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-black mb-6">
                        Our Mission
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        To provide innovative, sustainable, and high-quality
                        stretch film solutions that empower our clients’
                        businesses, while fostering a culture of trust,
                        excellence, and environmental responsibility.
                    </p>
                </div>
            </section>
        </div>
    );
}
