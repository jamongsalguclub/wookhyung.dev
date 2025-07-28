import Link from 'next/link';

interface WipProps {
  title: string;
  description?: string;
}

export function Wip({
  title,
  description = 'This page is under construction.',
}: WipProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Work in Progress
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">{description}</p>
      <Link
        href="/"
        className="text-gray-900 hover:text-gray-600 font-medium transition-colors underline underline-offset-4"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
