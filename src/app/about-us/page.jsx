import React from 'react';

export default function About() {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Hero Section - Modern and Impactful */}
            <section className="relative py-20 bg-gradient-to-r from-blue-500 to-indigo-600 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-grid-white/30"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Our Journey
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            Discover the passion and innovation driving us to
                            deliver premium stretch films and packaging
                            solutions.
                        </p>
                    </div>
                </div>
                <div
                    className="absolute bottom-0 left-0 right-0 h-16 bg-white"
                    style={{
                        clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0% 100%)'
                    }}
                ></div>
            </section>

            {/* Our Story Section - More Visual Appeal */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl font-bold mb-6 text-blue-600">
                                Our Story
                            </h2>
                            <div className="space-y-6">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    We embarked on our journey in{' '}
                                    <span className="font-semibold">
                                        November 2024
                                    </span>
                                    , with a vision to revolutionize the
                                    packaging industry through innovative
                                    stretch films and related products.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    In just a short span, we've achieved
                                    remarkable success, including sales of{' '}
                                    <span className="font-semibold">
                                        2 crore
                                    </span>{' '}
                                    - a testament to our unwavering commitment
                                    to quality and customer satisfaction.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Our team thrives on innovation and
                                    precision, crafting durable and sustainable
                                    packaging solutions that meet the diverse
                                    needs of our growing clientele.
                                </p>
                            </div>
                            <div className="mt-8">
                                <a
                                    href="/contact-us"
                                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors"
                                >
                                    Get in touch
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-blue-100 rounded-lg transform -rotate-3"></div>
                                <img
                                    src="/about.jpg"
                                    alt="Our manufacturing facility"
                                    className="relative w-full h-auto rounded-lg shadow-lg object-cover transform rotate-3 transition-transform hover:rotate-0 duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section - More Dynamic */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-blue-600 mb-4">
                            Our Achievements
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            What we've accomplished in our journey so far
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Stat Card 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg
                                    className="h-6 w-6 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">
                                ₹2 Crore
                            </h3>
                            <p className="text-lg font-medium text-blue-600 mb-2">
                                Sales Achievement
                            </p>
                            <p className="text-gray-600">
                                Reached within months of inception
                            </p>
                        </div>

                        {/* Stat Card 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg
                                    className="h-6 w-6 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">
                                10,000+
                            </h3>
                            <p className="text-lg font-medium text-blue-600 mb-2">
                                Units Delivered
                            </p>
                            <p className="text-gray-600">
                                Premium quality stretch films
                            </p>
                        </div>

                        {/* Stat Card 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg
                                    className="h-6 w-6 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">
                                50+
                            </h3>
                            <p className="text-lg font-medium text-blue-600 mb-2">
                                Trusted Clients
                            </p>
                            <p className="text-gray-600">
                                Partnerships across the nation
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section - More engaging */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl overflow-hidden shadow-xl">
                        <div className="p-12 md:p-16">
                            <div className="flex justify-center mb-8">
                                <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center">
                                    <svg
                                        className="h-8 w-8 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
                                Our Mission
                            </h2>
                            <p className="text-xl text-white/90 text-center max-w-3xl mx-auto leading-relaxed">
                                To provide innovative, sustainable, and
                                high-quality stretch film solutions that empower
                                our clients' businesses, while fostering a
                                culture of trust, excellence, and environmental
                                responsibility.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section - New Addition */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-blue-600 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Value 1 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="h-12 w-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <svg
                                    className="h-6 w-6 text-blue-600"
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
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Excellence
                            </h3>
                            <p className="text-gray-600">
                                We strive for excellence in every product we
                                develop and service we provide.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="h-12 w-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <svg
                                    className="h-6 w-6 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Innovation
                            </h3>
                            <p className="text-gray-600">
                                We constantly innovate to improve our products
                                and stay ahead of industry trends.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="h-12 w-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <svg
                                    className="h-6 w-6 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Sustainability
                            </h3>
                            <p className="text-gray-600">
                                We are committed to environmentally responsible
                                manufacturing practices.
                            </p>
                        </div>

                        {/* Value 4 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="h-12 w-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <svg
                                    className="h-6 w-6 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Customer Focus
                            </h3>
                            <p className="text-gray-600">
                                We prioritize our clients' needs and aim to
                                exceed their expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
