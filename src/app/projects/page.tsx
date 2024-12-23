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
      image: "/darzee_logo.webp",
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
      image: "/airamed.png",
      link: "https://patient.airamed.de/en/welcome",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-24 px-5 mb-10 bg-black min-h-screen text-white">
        <h1 className="text-3xl font-semibold text-blue-600 font-bold mb-8">Key Projects</h1>
        <ul className="space-y-8">
          {projects.map((project, index) => (
            <li
              key={index}
              className="flex flex-col lg:flex-row items-center lg:items-start border p-4 rounded space-y-4 lg:space-y-0 lg:space-x-8 animate-slide-left opacity-0"
              style={{
                animationDelay: `${index * 1}s`, // Add delay based on index
              }}
            >
              {/* Text Section */}
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
                <p className="text-gray-700 whitespace-pre-line">{project.description}</p>
              </div>
              {/* Image Section */}
                <Link href={project.link} target="_blank">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={150}
                      height={150}
                    />
                </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
