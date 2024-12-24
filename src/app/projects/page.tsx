"use client";

import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      name: "FoodDarzee (Frontend Lead)",
      description: `
        - Led a team of 10 for frontend integration and UI/UX development using Angular 12.
        - Developed a chatbot for CRUD operations and onboarding via WebSocket.
        - Integrated third-party APIs (Razorpay, Socket.IO) and worked on Node.js for backend integration.
        - Ensured code quality, usability, and team mentorship.
      `,
      image: "/fooddarzee.webp",
      link: "https://www.fooddarzee.com/",
    },
    {
      name: "Coinbase (React Native Developer)",
      description: `
        - Developed cross-platform mobile apps for iOS and Android using React Native.
        - Implemented IMPS and UPI transaction modules with dLocal integration.
        - Worked on end-to-end architecture and Figma-based UI/UX design development.
      `,
      image: "/coinbase.png",
      link: "https://www.coinbase.com/",
    },
    {
      name: "The Pencil (Frontend Lead)",
      description: `
        - Led a team of 15 for the dashboard and website UI/UX development using Angular.
        - Managed reusable code, integrated analytics with Segment, Google Analytics, and APIs (RazorPay SDK, Freshdesk).
        - Worked with Node.js for backend functionalities and ensured seamless integration.
        - Ensured code quality, usability, and mentored team members.
      `,
      image: "/thepencil.png",
      link: "https://thepencilapp.com/",
    },
    {
      name: "AIRAmed Portal (Full-Stack Developer)",
      description: `
        - Developed a DICOM file upload and analysis portal to help doctors and physicians analyze patient diagnostics.
        - Enabled .dcm file uploads through the portal, ensuring smooth integration with analysis tools.
        - Built the frontend with Angular and developed backend services using Node.js and MongoDB.
        - Integrated Stripe for payment processing, allowing secure transactions for doctors and healthcare professionals.
        - Focused on performance optimization and ensured data security and compliance with healthcare standards.
      `,
      image: "/airamed.jpg",
      link: "https://patient.airamed.de/en/welcome",
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white pt-24 min-h-screen" >
        <div className="max-w-7xl mx-auto p-6">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Key Projects</h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <li
                key={index}
                className="bg-gray-800 hover:bg-gray-700 transition-shadow border border-gray-700 rounded-lg shadow-md overflow-hidden"
              >
                {/* Image Section */}
                <Link href={project.link} target="_blank">
                  <div className="relative group">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={400}
                      height={300}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>

                {/* Text Section */}
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-3">{project.name}</h2>
                  <p className="text-gray-400 text-sm whitespace-pre-line mb-4">
                    {project.description}
                  </p>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                  >
                    Visit Project
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </main>
    </>
  );
}
