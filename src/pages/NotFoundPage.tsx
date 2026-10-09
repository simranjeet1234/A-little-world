import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export const NotFoundPage: React.FC = () => {
  return (
    <PageTransition>
      <div
        style={{
          maxWidth: '600px',
          margin: '80px auto',
          padding: '40px 20px',
          textAlign: 'center',
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-md)',
          border: '1.5px solid var(--border-card)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🌸4️⃣0️⃣4️⃣</div>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '12px' }}>Oops! Lost in the Little World</h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '28px', lineHeight: 1.6 }}>
          It looks like this tiny corner doesn't exist yet, but don't worry! You can easily head back home.
        </p>

        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 26px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--accent-pink)',
            color: '#FFFFFF',
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <Home size={18} /> Back to Homepage
        </Link>
      </div>
    </PageTransition>
  );
};
