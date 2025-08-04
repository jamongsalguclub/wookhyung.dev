'use client';

import { ArrowLeftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface BackButtonProps {
  className?: string;
}

export function BackButton({ className = '' }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className={`inline-flex items-center justify-center p-2 text-gray-800 hover:text-gray-900 transition-colors duration-200 rounded-md hover:bg-gray-200 ${className}`}
      aria-label="뒤로 가기"
    >
      <ArrowLeftIcon className="w-5 h-5" />
    </button>
  );
}
