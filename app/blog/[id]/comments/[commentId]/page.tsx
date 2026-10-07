import { Suspense } from 'react';
import Link from 'next/link';

interface CommentPageProps {
    params: Promise<{ id: string; commentId: string }>;
}

async function CommentContent({ params }: CommentPageProps) {
    const { id, commentId } = await params;

    return (
        <div>
        <h4>Комментарий №{commentId}</h4>
        <p style={{ marginTop: '8px' }}>Оставлен к публикации №{id}.</p>
        <div style={{ marginTop: '12px' }}>
            <Link href={`/blog/${id}`}>← Вернуться к посту №{id}</Link>
        </div>
        </div>
    );
}

export default function CommentPage(props: CommentPageProps) {
    return (
        <Suspense fallback={<div>Загрузка комментария...</div>}>
        <CommentContent {...props} />
        </Suspense>
    );
}