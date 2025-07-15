import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-3 mt-3">
      <div className="container text-center">
        <p>Connect with us </p>
        <div className="d-flex justify-content-center">

          <a href="https://www.threads.net/" target="_blank" className="text-white mx-3">
            Threads 
          </a>
          <a href="https://www.instagram.com/" target="_blank" className="text-white mx-3">
            Instagram
          </a>
          <a href="https://www.youtube.com/" target="_blank" className="text-white mx-3">
            Youtube 
          </a>
        </div>
        <p className="mt-3 mb-0">Copyright © 2025 Game Nexus Corp ltd .</p>
      </div>
    </footer>
  );
};

export default Footer;