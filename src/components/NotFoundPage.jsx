// src/components/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-cream text-center p-8 font-body">
      <h1 className="text-6xl font-fancy-title mb-4 animate-pulse">404</h1>
      <p className="text-2xl mb-8">This passage leads nowhere...</p>
      <Link to="/" className="text-blood-red hover:underline text-lg">
        Return to the entrance.
      </Link>
    </div>
  );
}