import type { ReactNode } from 'react';

interface CoursesLayoutProps {
    children: ReactNode;
}

export default function CoursesLayout({ children }: CoursesLayoutProps) {
    return (
        <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #e9ecef' }}>
        <header style={{ borderBottom: '2px solid #22c55e', paddingBottom: '8px', marginBottom: '16px' }}>
            <h2>Академия программирования (Раздел «Курсы»)</h2>
        </header>
        {children}
        </div>
    );
}
