import React from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Heart,
  Users,
  Award,
  Globe,
  CheckCircle,
  ArrowUpRight,
  Images,
} from "lucide-react";
import { motion } from "framer-motion";

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

// ✅ Reusable Components
const StatCard = ({
  icon: Icon,
  number,
  label,
}: {
  icon: LucideIcon;
  number: string;
  label: string;
  color?: string;
}) => (
  <motion.div whileHover={{ scale: 1.02 }} className="card p-8 text-center">
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 mb-4">
      <Icon className="h-8 w-8 text-primary-600" />
    </div>
    <h3 className="text-3xl font-display font-bold text-secondary-900 mb-2">
      {number}
    </h3>
    <p className="text-secondary-600">{label}</p>
  </motion.div>
);

const ProgramCard = ({
  title,
  img,
  desc,
  bullets,
  onClick,
}: {
  title: string;
  img: string;
  desc: string;
  bullets: string[];
  onClick?: () => void;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="card card-hover overflow-hidden cursor-pointer"
    onClick={onClick}
  >
    <div className="relative h-52 overflow-hidden">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
      <div className="absolute top-4 left-4">
        <span className="badge badge-primary">{title}</span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-display font-semibold text-secondary-900 mb-3">
        {title}
      </h3>
      <p className="text-secondary-600 mb-4 line-clamp-2">{desc}</p>
      <ul className="text-sm text-secondary-500 space-y-1 mb-4">
        {bullets.slice(0, 3).map((b, i) => (
          <li key={i} className="flex items-start">
            <CheckCircle className="h-4 w-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 pt-4 border-t border-secondary-100">
        <button className="text-primary-600 font-medium flex items-center hover:text-primary-700 transition-colors">
          Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </div>
  </motion.div>
);

const WhyUsItem = ({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  color?: string;
}) => (
  <div className="flex items-start space-x-4 p-6 card transition-all duration-200 hover:shadow-card">
    <div className="p-3 rounded-lg bg-primary-50 text-primary-600">
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <h3 className="text-lg font-display font-semibold text-secondary-900 mb-2">
        {title}
      </h3>
      <p className="text-secondary-600">{text}</p>
    </div>
  </div>
);

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const images = [
    "/gallery/(1).JPG",
    "/gallery/(2).JPG",
    "/gallery/(3).JPG",
    "/gallery/(4).JPG",
    "/gallery/(5).JPG",
  ];

  // Collage layout does not require carousel controls

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-blue-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/70 backdrop-blur-sm px-4 py-2 mb-6 text-sm font-semibold tracking-wide ring-1 ring-white/20 shadow-lg">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-slate-700">
                NEPAL'S LEADING CLINICAL INTERNSHIP PROVIDER
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Premium Clinical
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Internships
              </span>
              <br />
              <span className="text-slate-700">in Nepal</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl font-light leading-relaxed">
              Supervised rotations across Internal Medicine, Surgery & Community
              Health with
              <span className="font-semibold text-blue-600">
                {" "}
                guaranteed placements
              </span>
              , accommodation, and local support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setCurrentPage("programs")}
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1"
              >
                <span>Explore Programs</span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => setCurrentPage("application")}
                className="bg-white/80 backdrop-blur-sm text-slate-700 px-8 py-4 rounded-2xl font-semibold text-lg ring-1 ring-slate-200 hover:bg-white hover:ring-slate-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* Enhanced Media Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img
                  src={images[0]}
                  alt="Medical Internship 1"
                  className="rounded-3xl h-52 md:h-60 w-full object-cover shadow-2xl ring-1 ring-white/20 transform hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <img
                  src={images[2]}
                  alt="Medical Internship 3"
                  className="rounded-3xl h-40 md:h-48 w-full object-cover shadow-2xl ring-1 ring-white/20 transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="space-y-6 mt-8">
                <img
                  src={images[1]}
                  alt="Medical Internship 2"
                  className="rounded-3xl h-40 md:h-48 w-full object-cover shadow-2xl ring-1 ring-white/20 transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <img
                  src={images[3]}
                  alt="Medical Internship 4"
                  className="rounded-3xl h-52 md:h-60 w-full object-cover shadow-2xl ring-1 ring-white/20 transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Floating achievement card */}
            <div className="absolute -bottom-6 left-6 bg-white/90 backdrop-blur-sm text-slate-800 rounded-2xl shadow-2xl ring-1 ring-white/20 px-6 py-4 max-w-xs">
              <div className="flex items-center space-x-3 mb-2">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=60"
                    alt="Student 1"
                    className="w-8 h-8 rounded-full object-cover border-2 border-white"
                  />
                  <img
                    src="https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=60"
                    alt="Student 2"
                    className="w-8 h-8 rounded-full object-cover border-2 border-white"
                  />
                  <img
                    src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=60"
                    alt="Student 3"
                    className="w-8 h-8 rounded-full object-cover border-2 border-white"
                  />
                </div>
                <div className="text-sm font-bold text-slate-900">
                  100+ Students
                </div>
              </div>
              <div className="text-xs text-slate-600 mb-3">
                Successfully completed their internships this year
              </div>
              <button
                onClick={() => setCurrentPage("application")}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold px-4 py-2 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg"
              >
                Join Them Today
              </button>
            </div>

            {/* Floating stats */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl ring-1 ring-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">98%</div>
                <div className="text-xs text-slate-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / PARTNERS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <div className="text-center mb-6">
            <p className="text-sm uppercase tracking-wider text-gray-500">
              Trusted by leading hospitals and institutions
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center opacity-80">
            <div className="h-10 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs">
              Kathmandu Medical College
            </div>
            <div className="h-10 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs">
              Nobel Medical College{" "}
            </div>
            <div className="h-10 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs">
              Patan Academic of Health Science{" "}
            </div>
            <div className="h-10 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs">
              Institute of Medicine Teaching Hospital{" "}
            </div>
            <div className="h-10 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs">
              Manipal Medical College
            </div>
            <div className="h-10 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs">
              Nepaljung Medical College
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <StatCard
            icon={Heart}
            number="100+"
            label="Medical Interns Trained"
            color="bg-teal-50"
          />
          <StatCard
            icon={Users}
            number="10+"
            label="Partner Hospitals"
            color="bg-emerald-50"
          />
          <StatCard
            icon={Award}
            number="3"
            label="Years of Excellence"
            color="bg-blue-50"
          />
          <StatCard
            icon={Globe}
            number="30+"
            label="Countries Represented"
            color="bg-indigo-50"
          />
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Medical Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our range of internship programs designed to give
              hands-on experience in Nepal's healthcare system.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Row */}
            <ProgramCard
              title="Internal Medicine"
              img="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800"
              desc="Comprehensive training in internal medicine with Nepal's top physicians."
              bullets={[
                "4-week program",
                "Direct patient interaction",
                "Ward rounds",
                "Case presentations",
              ]}
            />
            <ProgramCard
              title="Surgery"
              img="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800"
              desc="Observe and assist in surgical procedures under skilled surgeons."
              bullets={[
                "Operating room experience",
                "Pre/post-op care",
                "Surgical techniques",
                "Emergency procedures",
              ]}
            />
            <ProgramCard
              title="Community Health"
              img="/gallery/(6).JPG"
              desc="Experience healthcare delivery in rural Nepal communities."
              bullets={[
                "Rural health camps",
                "Preventive medicine",
                "Health education",
                "Cultural immersion",
              ]}
            />
            
            {/* Second Row */}
            <ProgramCard
              title="Paramedical"
              img="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800"
              desc="Hands-on training in diagnostic and therapeutic medical support services."
              bullets={[
                "Laboratory techniques",
                "Diagnostic procedures",
                "Patient care assistance",
                "Medical technology training",
              ]}
            />
            <ProgramCard
              title="Dental Electives"
              img="/assets/images/dental.png"
              desc="Comprehensive dental training program with clinical exposure."
              bullets={[
                "Clinical rotations",
                "Oral health assessment",
                "Preventive dentistry",
                "Community outreach",
              ]}
              onClick={() => setCurrentPage("dental-elective")}
            />
            <ProgramCard
              title="Physiotherapy"
              img="/assets/images/physio.png"
              desc="Develop rehabilitation skills through practical physiotherapy training."
              bullets={[
                "Rehabilitation techniques",
                "Physical assessment",
                "Exercise therapy",
                "Patient recovery support",
              ]}
              onClick={() => setCurrentPage("physiotherapy-internship")}
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A clear, guided process from application to certification.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div whileHover={{ y: -4 }} className="card p-6 text-center">
              <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-gray-600 text-sm">
                Submit your preferences and dates. Our team reviews within 48
                hours.
              </p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="card p-6 text-center">
              <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Placement</h3>
              <p className="text-gray-600 text-sm">
                We secure your hospital rotation and share your placement
                package.
              </p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="card p-6 text-center">
              <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Arrival & Support
              </h3>
              <p className="text-gray-600 text-sm">
                Airport pickup, orientation, safe housing, and ongoing local
                support.
              </p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="card p-6 text-center">
              <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Certificate</h3>
              <p className="text-gray-600 text-sm">
                Complete rotations and receive an official certificate of
                completion.
              </p>
            </motion.div>
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => setCurrentPage("application")}
              className="btn-primary px-8 py-3 text-sm"
            >
              Start Application
            </button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>
            <div className="space-y-6">
              <WhyUsItem
                icon={Heart}
                title="World-Class Training"
                text="Learn from top professionals in modern facilities."
                color="bg-teal-100"
              />
              <WhyUsItem
                icon={Users}
                title="Cultural Immersion"
                text="Experience Nepal's culture while advancing your career."
                color="bg-emerald-100"
              />
              <WhyUsItem
                icon={Award}
                title="Certification"
                text="Earn internationally recognized certificates."
                color="bg-blue-100"
              />
            </div>
          </div>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src="https://images.pexels.com/photos/8376297/pexels-photo-8376297.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Medical team in Nepal"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* TESTIMONIALS TEASER */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              What Our Interns Say
            </h2>
            <button
              onClick={() => setCurrentPage("testimonials")}
              className="btn-ghost text-teal-700"
            >
              Read All →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.blockquote whileHover={{ y: -3 }} className="card p-6">
              <p className="text-gray-800">
                "The surgical rotation exceeded my expectations. Incredible
                mentorship."
              </p>
              <footer className="mt-4 text-sm text-gray-500">
                — Aisha, UK
              </footer>
            </motion.blockquote>
            <motion.blockquote whileHover={{ y: -3 }} className="card p-6">
              <p className="text-gray-800">
                "Community health camp was life‑changing and culturally
                immersive."
              </p>
              <footer className="mt-4 text-sm text-gray-500">
                — Marco, Italy
              </footer>
            </motion.blockquote>
            <motion.blockquote whileHover={{ y: -3 }} className="card p-6">
              <p className="text-gray-800">
                "Well‑organized program with safe accommodation and great
                support."
              </p>
              <footer className="mt-4 text-sm text-gray-500">
                — Priya, India
              </footer>
            </motion.blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 text-emerald-100">
            Join hundreds of medical students who transformed their careers with
            us.
          </p>
          <button
            onClick={() => setCurrentPage("application")}
            className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg shadow hover:bg-gray-100 flex items-center justify-center mx-auto"
          >
            Apply Now <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* STICKY CTA BAR */}
      <div className="fixed bottom-4 inset-x-0 px-4 z-40">
        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur rounded-xl shadow-lg ring-1 ring-gray-200 flex items-center justify-between px-4 py-3">
          <div className="text-sm">
            <span className="font-semibold text-gray-900">
              Ready to secure your placement?
            </span>
            <span className="text-gray-600 ml-2 hidden sm:inline">
              Limited slots per rotation.
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage("contact")}
              className="btn-ghost"
            >
              Talk to an Advisor
            </button>
            <button
              onClick={() => setCurrentPage("application")}
              className="btn-primary px-4 py-2 text-sm"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Images className="h-7 w-7 text-teal-600" />
              <h2 className="text-3xl font-bold text-gray-900">In Pictures</h2>
            </div>
            <button
              onClick={() => setCurrentPage("gallery")}
              className="text-teal-600 hover:text-teal-700 font-semibold"
            >
              View full gallery →
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/gallery/(1).JPG",
              "/gallery/(2).JPG", 
              "/gallery/(3).JPG",
              "/gallery/(4).JPG",
              "/gallery/(5).JPG",
              "/gallery/(6).JPG",
              "/gallery/(7).JPG",
              "/gallery/(8).JPG"
            ].map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg"
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="h-32 md:h-40 w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
