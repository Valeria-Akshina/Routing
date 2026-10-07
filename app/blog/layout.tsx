import type { ReactNode } from 'react';

interface BlogLayoutProps {
    children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
    return (
        <section style={{ border: '2px dashed #0070f3', padding: '16px', marginTop: '16px', borderRadius: '8px' }}>
        <h2 style={{ color: '#0070f3', marginBottom: '8px' }}>Раздел «Блог» (Layout)</h2>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>
            Этот блок отрисовывается один раз и сохраняется при переходах между постами.
        </p>
        {children}
        </section>
    );
}
