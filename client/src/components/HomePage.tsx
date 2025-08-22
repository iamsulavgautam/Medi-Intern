import React, { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Heart,
  Users,
  Award,
  Globe,
  ChevronLeft,
  ChevronRight,
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
  color,
}: {
  icon: LucideIcon;
  number: string;
  label: string;
  color: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`p-8 rounded-lg ${color}`}
  >
    <Icon className="h-12 w-12 mx-auto mb-4 text-gray-700" />
    <h3 className="text-3xl font-bold text-gray-900 mb-2">{number}</h3>
    <p className="text-gray-600">{label}</p>
  </motion.div>
);

const ProgramCard = ({
  title,
  img,
  desc,
  bullets,
}: {
  title: string;
  img: string;
  desc: string;
  bullets: string[];
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300"
  >
    <img src={img} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{desc}</p>
      <ul className="text-sm text-gray-500 space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const WhyUsItem = ({
  icon: Icon,
  title,
  text,
  color,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  color: string;
}) => (
  <div className="flex items-start space-x-4">
    <div className={`p-2 rounded-lg ${color}`}>
      <Icon className="h-6 w-6 text-gray-800" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  </div>
);

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://raw.githubusercontent.com/pratikgtam/medical_images/refs/heads/main/images/top/1.JPG",
    "https://raw.githubusercontent.com/pratikgtam/medical_images/refs/heads/main/images/top/2.JPG",
    "https://raw.githubusercontent.com/pratikgtam/medical_images/refs/heads/main/images/top/3.JPG",
    "https://raw.githubusercontent.com/pratikgtam/medical_images/refs/heads/main/images/top/4.JPG",
    "https://raw.githubusercontent.com/pratikgtam/medical_images/refs/heads/main/images/top/5.JPG",
  ];

  const nextImage = () => setCurrentImageIndex((i) => (i + 1) % images.length);
  const prevImage = () =>
    setCurrentImageIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="font-sans">
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-teal-700 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 mb-4 text-xs font-semibold tracking-wide ring-1 ring-white/20">
              NEPAL’S LEADING CLINICAL INTERNSHIP PROVIDER
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Premium Clinical Internships in Nepal
            </h1>
            <p className="text-lg text-teal-100 mb-8 max-w-2xl">
              Supervised rotations across Internal Medicine, Surgery & Community
              Health with guaranteed placements, accommodation, and local
              support.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setCurrentPage("programs")}
                className="bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 flex items-center"
              >
                Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button
                onClick={() => setCurrentPage("application")}
                className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold ring-1 ring-white/20 hover:bg-white/20"
              >
                Apply Now
              </button>
            </div>
          </motion.div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-lg shadow-2xl relative">
              <img
                src={images[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
                className="w-full h-96 object-cover transition-all duration-700"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            {/* dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`w-3 h-3 rounded-full transition ${
                    i === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
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
              Nepal Med Center
            </div>
            <div className="h-10 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs">
              Kathmandu General
            </div>
            <div className="h-10 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs">
              Everest Hospital
            </div>
            <div className="h-10 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs">
              Patan Teaching
            </div>
            <div className="h-10 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs">
              Bir Hospital
            </div>
            <div className="h-10 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs">
              Bhaktapur Care
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
              hands-on experience in Nepal’s healthcare system.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProgramCard
              title="Internal Medicine"
              img="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800"
              desc="Comprehensive training in internal medicine with Nepal’s top physicians."
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
              img="https://raw.githubusercontent.com/pratikgtam/medical_images/refs/heads/main/images/community-health/1.jpeg"
              desc="Experience healthcare delivery in rural Nepal communities."
              bullets={[
                "Rural health camps",
                "Preventive medicine",
                "Health education",
                "Cultural immersion",
              ]}
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
                text="Experience Nepal’s culture while advancing your career."
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
                “The surgical rotation exceeded my expectations. Incredible
                mentorship.”
              </p>
              <footer className="mt-4 text-sm text-gray-500">
                — Aisha, UK
              </footer>
            </motion.blockquote>
            <motion.blockquote whileHover={{ y: -3 }} className="card p-6">
              <p className="text-gray-800">
                “Community health camp was life‑changing and culturally
                immersive.”
              </p>
              <footer className="mt-4 text-sm text-gray-500">
                — Marco, Italy
              </footer>
            </motion.blockquote>
            <motion.blockquote whileHover={{ y: -3 }} className="card p-6">
              <p className="text-gray-800">
                “Well‑organized program with safe accommodation and great
                support.”
              </p>
              <footer className="mt-4 text-sm text-gray-500">
                — Priya, India
              </footer>
            </motion.blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-center">
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
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg"
              >
                <img
                  src={`https://raw.githubusercontent.com/pratikgtam/medical_images/refs/heads/main/images/top/${
                    (i % 5) + 1
                  }.JPG`}
                  alt={`Teaser ${i + 1}`}
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
