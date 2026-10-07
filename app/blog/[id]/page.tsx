import { Suspense } from 'react';
import Link from 'next/link';

interface PostPageProps {
    params: Promise<{ id: string }>;
}

async function PostContent({ params }: PostPageProps) {
    const { id } = await params;

    return (
        <div>
        <h3>Пост №{id}</h3>
        <p style={{ marginTop: '8px' }}>
            Это содержимое динамической страницы для поста с ID: <strong>{id}</strong>.
        </p>

        <div style={{ marginTop: '16px', display: 'flex', gap: '16px' }}>
            <Link href={`/blog/${id}/comments/5`}>Посмотреть комментарий №5</Link>
            <Link href="/blog">← Назад к списку постов</Link>
        </div>
        </div>
    );
}

export default function PostPage(props: PostPageProps) {
    return (
        <Suspense fallback={<div>Загрузка поста...</div>}>
        <PostContent {...props} />
        </Suspense>
    );
}