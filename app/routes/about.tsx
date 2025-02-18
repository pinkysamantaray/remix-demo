import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from '@heroui/breadcrumbs';

const About: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100">
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/about" isCurrent>
          About
        </BreadcrumbItem>
      </Breadcrumbs>
      <div className="flex  min-h-screen items-center justify-center">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h1 className="font-bold text-center m-3">About Us</h1>
          <div className="grid text-pretty gap-4">
            <p>
              Welcome to our website. We are dedicated to providing the best
              service possible.
            </p>
            <p>
              Our team is composed of experienced professionals who are
              passionate about what they do.
            </p>
            <p>
              Thank you for visiting our site. We hope you find what you are
              looking for.
            </p>
            <p className="m-4 text-center">¯\_(ツ)\_/¯</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
