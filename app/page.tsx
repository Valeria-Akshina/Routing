// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1 style={{ marginBottom: '12px' }}>Главная страница</h1>
      <p style={{ marginBottom: '20px' }}>
        Добро пожаловать в практическую работу по маршрутизации и layouts в Next.js App Router!
      </p>
      
      <div style={{ display: 'flex', gap: '12px' }}>
        <Link href="/about" style={{ padding: '8px 16px', background: '#0070f3', color: '#fff', borderRadius: '6px', textDecoration: 'none' }}>
          Перейти в «О нас»
        </Link>
        <Link href="/blog" style={{ padding: '8px 16px', background: '#0070f3', color: '#fff', borderRadius: '6px', textDecoration: 'none' }}>
          Перейти в «Блог»
        </Link>
        <Link href="/courses" style={{ padding: '8px 16px', background: '#0070f3', color: '#fff', borderRadius: '6px', textDecoration: 'none' }}>
          Перейти в «Курсы»
        </Link>
      </div>
    </div>
  );
}
