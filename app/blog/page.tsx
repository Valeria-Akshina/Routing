import Link from 'next/link';

interface Post {
    id: string;
    title: string;
}

export default function BlogPage() {
    const posts: Post[] = [
        { id: '1', title: 'Введение в App Router' },
        { id: '2', title: 'Layouts и Templates на практике' },
        { id: '3', title: 'Оптимизация навигации с компонентом Link' },
    ];

    return (
        <div>
        <h3>Список публикаций:</h3>
        <ul style={{ marginTop: '12px', paddingLeft: '20px' }}>
            {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: '8px' }}>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
}
