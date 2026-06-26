import React from 'react';

interface Props {
  name: string;
  email: string;
  status: string;
}

export default function ProfileCard({ name, email, status }: Props) {
  return (
    <section className="profile-card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Status: {status}</p>
    </section>
  );
}
