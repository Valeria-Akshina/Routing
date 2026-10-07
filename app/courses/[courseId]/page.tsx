import { Suspense } from 'react';
import Link from 'next/link';

interface CoursePageProps {
    params: Promise<{ courseId: string }>;
}

async function CourseContent({ params }: CoursePageProps) {
    const { courseId } = await params;

    return (
        <div>
        <h3>Страница курса: {courseId}</h3>
        <p style={{ marginTop: '8px' }}>
            Детальная программа и материалы по курсу <code>{courseId}</code>.
        </p>
        <div style={{ marginTop: '16px' }}>
            <Link href="/courses">← Вернуться к списку курсов</Link>
        </div>
        </div>
    );
}

export default function CoursePage(props: CoursePageProps) {
    return (
        <Suspense fallback={<div>Загрузка курса...</div>}>
        <CourseContent {...props} />
        </Suspense>
    );
}
