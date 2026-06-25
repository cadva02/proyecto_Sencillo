import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import ProfileCard from './components/ProfileCard';

export default function App() {
  return (
    <div className="app-container">
      <header>
        <h1>User Dashboard</h1>
        <ThemeToggle />
      </header>
      
      <main>
        <ProfileCard name="John Doe" email="john.doe@example.com" status="Active" />
      </main>
    </div>
  );
}
