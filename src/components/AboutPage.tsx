import React, { useState } from "react";
import { MapPin, Users, Award, Heart } from "lucide-react";

const AboutPage = () => {
  const [selectedPerson, setSelectedPerson] = useState("chairman");
  const people = [
    {
      name: "Dr. Rohit Rawat",
      title: "Co-Founder",
      image: "rohit.jpeg",
      role: "chairman",
      message:
        "As a doctor and the co-founder of Medical Exchange Nepal, our vision has always been to make medical exchange programs more affordable, easing the financial burden for students compared to many other options. We also make it a priority to pair each incoming elective student with a local medical student, so they gain first-hand insight into Nepal's healthcare environment, culture, and day-to-day realities. Being from the same field, we understand their needs and create experiences that are relevant and enriching, complementing the great work of organizations from all backgrounds.",
    },
    {
      name: "Pratik Gautam",
      title: "Software Engineer & Co-Founder",
      image: "pratik.jpg",
      role: "coordinator",
      message:
        "Technology plays a crucial role in modernizing medical education and making our programs accessible to students worldwide. Our platform ensures seamless communication, efficient program management, and enhanced learning experiences. We believe in bridging the gap between traditional medical education and innovative digital solutions, creating opportunities for students to excel in their medical careers while experiencing the rich culture and healthcare system of Nepal.",
    },
    {
      name: "HA",
      title: "Public Health Advocate",
      image: "person.jpg",
      role: "publichealth",
      message:
        "With over three years of experience in Nepal's rural health systems, I've witnessed firsthand the challenges and opportunities in community healthcare. Our medical exchange programs not only provide students with clinical experience but also expose them to the realities of public health in resource-limited settings. Through community health initiatives and rural rotations, students gain valuable insights into preventive medicine and community empowerment, preparing them to be well-rounded healthcare professionals who understand healthcare beyond hospital walls.",
    },
    {
      name: "Sulav Gautam",
      title: "Digital Product Architect",
      image: "sullo.jpg",
      role: "designer",
      message:
        "I believe every design and product should make sense. Technology should solve real problems, simplify complex processes, and create meaningful experiences for users. By focusing on clarity, usability, and purpose, I craft apps and web solutions that empower people, enhance engagement, and deliver value in every interaction.",
    },
  ];

  const currentPerson = people.find((person) => person.role === selectedPerson);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background Elements - matching theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent leading-tight mb-6">
              About Medical Internship Nepal
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
              Bridging international medical education with Nepal's healthcare
              system for over
              <span className="font-semibold text-white">
                {" "}
                3 years of excellence
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Message from{" "}
                {currentPerson.title === "Co-Founder" ? "Chairman" : "Team"}
              </h2>

              {/* Quote Section */}
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500 shadow-lg">
                <blockquote className="text-gray-600 italic text-lg leading-relaxed">
                  "{currentPerson.message}"
                </blockquote>
                <div className="mt-4 text-right">
                  <cite className="text-blue-600 font-semibold not-italic">
                    — {currentPerson.name}
                  </cite>
                  <p className="text-gray-500 text-sm">{currentPerson.title}</p>
                </div>
              </div>

              {/* Profile Picture Selector */}
              <div className="flex gap-4 mt-8 justify-center lg:justify-start">
                <button
                  onClick={() => setSelectedPerson("chairman")}
                  className={`relative w-16 h-16 rounded-full overflow-hidden ring-4 transition-all duration-300 transform hover:scale-105 ${
                    selectedPerson === "chairman"
                      ? "ring-blue-500 shadow-lg"
                      : "ring-gray-300 hover:ring-blue-300"
                  }`}
                >
                  <img
                    src="rohit.jpeg"
                    alt="Dr. Rohit Rawat"
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  onClick={() => setSelectedPerson("publichealth")}
                  className={`relative w-16 h-16 rounded-full overflow-hidden ring-4 transition-all duration-300 transform hover:scale-105 ${
                    selectedPerson === "publichealth"
                      ? "ring-blue-500 shadow-lg"
                      : "ring-gray-300 hover:ring-blue-300"
                  }`}
                >
                  <img
                    src="person.jpg"
                    alt="HA"
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  onClick={() => setSelectedPerson("coordinator")}
                  className={`relative w-16 h-16 rounded-full overflow-hidden ring-4 transition-all duration-300 transform hover:scale-105 ${
                    selectedPerson === "coordinator"
                      ? "ring-blue-500 shadow-lg"
                      : "ring-gray-300 hover:ring-blue-300"
                  }`}
                >
                  <img
                    src="pratik.jpg"
                    alt="Pratik Gautam"
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  onClick={() => setSelectedPerson("designer")}
                  className={`relative w-16 h-16 rounded-full overflow-hidden ring-4 transition-all duration-300 transform hover:scale-105 ${
                    selectedPerson === "designer"
                      ? "ring-blue-500 shadow-lg"
                      : "ring-gray-300 hover:ring-blue-300"
                  }`}
                >
                  <img
                    src="sullo.jpg"
                    alt="Sulav Gautam"
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>
            </div>
            <div>
              <img
                src={currentPerson.image}
                alt={currentPerson.name}
                className="rounded-2xl shadow-2xl ring-1 ring-white/20 transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Story
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Founded in 2023 by a group of Nepali physicians and international
              medical educators who recognized the need for quality medical
              internship programs in Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
                <img
                  src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Foundation team member"
                  className="absolute -top-3 -right-3 w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                2023 - Foundation
              </h3>
              <p className="text-slate-600">
                Started with partnerships with 3 hospitals in Kathmandu, hosting
                25 international interns.
              </p>
            </div>
            <div className="text-center">
              <div className="relative bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
                <img
                  src="https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Expansion team member"
                  className="absolute -top-3 -right-3 w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                2024 - Expansion
              </h3>
              <p className="text-slate-600">
                Expanded to rural areas and specialized programs, partnering
                with 15 healthcare facilities.
              </p>
            </div>
            <div className="text-center">
              <div className="relative bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
                <img
                  src="https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Excellence team member"
                  className="absolute -top-3 -right-3 w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                2025 - Excellence
              </h3>
              <div className="flex items-center justify-center mb-3">
                <div className="flex -space-x-3">
                  <img
                    src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=60"
                    alt="Student 1"
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-md"
                  />
                  <img
                    src="https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=60"
                    alt="Student 2"
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-md"
                  />
                  <img
                    src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=60"
                    alt="Student 3"
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-md"
                  />
                  <img
                    src="https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg?auto=compress&cs=tinysrgb&w=60"
                    alt="Student 4"
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-md"
                  />
                  <img
                    src="https://images.pexels.com/photos/5452275/pexels-photo-5452275.jpeg?auto=compress&cs=tinysrgb&w=60"
                    alt="Student 5"
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-md"
                  />
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center ring-2 ring-white shadow-md">
                    <span className="text-white text-xs font-bold">+95</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-600">
                Today we partner with 10+ hospitals and have trained over 100
                medical professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-slate-600">
              Meet the dedicated professionals who make our programs possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <img
                src="rohit.jpeg"
                alt="Dr. Rajesh Sharma"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-blue-100"
              />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Dr. Rohit Rawat
              </h3>
              <p className="text-blue-600 mb-3 font-medium">Co-Founder</p>
              <p className="text-slate-600 text-sm">
                Founder of NGO Aarogya Nepal, MBBS, 2+ years experience in
                medical education and hospital administration.
              </p>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <img
                src="pratik.jpg"
                alt="Pratik Gautam"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-blue-100"
              />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Pratik Gautam
              </h3>
              <p className="text-blue-600 mb-3 font-medium">
                Software Engineer & Co-Founder
              </p>
              <p className="text-slate-600 text-sm">
                Software Engineer with 10+ years of experience. Expert in app
                development, web development and much more!
              </p>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <img
                src="person.jpg"
                alt="HA"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-blue-100"
              />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">HA</h3>
              <p className="text-blue-600 mb-3 font-medium">
                Public Health Advocate
              </p>
              <p className="text-slate-600 text-sm">
                BPH with 3+ years experience in rural health systems. Dedicated
                to improving community well-being and empowering youth through
                health initiatives.
              </p>
            </div>

            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <img
                src="sullo.jpg"
                alt="Sulav Gautam"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-blue-100"
              />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Sulav Gautam
              </h3>
              <p className="text-blue-600 mb-3 font-medium">
                Digital Product Architect
              </p>
              <p className="text-slate-600 text-sm">
                Developer with clear, effective apps and web solutions that
                solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-blue-100">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-3">Compassion</h3>
              <p className="text-blue-100">
                We believe healthcare is fundamentally about caring for people
                with empathy and understanding.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-blue-100">
                We maintain the highest standards in medical education and
                patient care.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-blue-100">
                We foster teamwork between international interns and local
                healthcare professionals.
              </p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-3">Cultural Bridge</h3>
              <p className="text-blue-100">
                We connect global medical knowledge with local healthcare needs
                and traditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
