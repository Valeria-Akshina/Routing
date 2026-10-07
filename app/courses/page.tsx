import Link from 'next/link';

interface Course {
    id: string;
    title: string;
    duration: string;
    }

    export default function CoursesPage() {
    const courses: Course[] = [
        { id: 'nextjs-basic', title: 'Next.js с нуля до PRO', duration: '4 недели' },
        { id: 'typescript-advanced', title: 'Продвинутый TypeScript', duration: '6 недель' },
    ];

    return (
        <div>
        <h3>Доступные программы:</h3>
        <ul style={{ marginTop: '12px', paddingLeft: '20px' }}>
            {courses.map((course) => (
            <li key={course.id} style={{ marginBottom: '10px' }}>
                <Link href={`/courses/${course.id}`}>
                <strong>{course.title}</strong>
                </Link>{' '}
                — {course.duration}
            </li>
            ))}
        </ul>
        </div>
    );
}