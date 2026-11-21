import { ResultsPortal } from '@/components/ResultsPortal';

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Student Results</h1>
        <ResultsPortal />
      </div>
    </main>
  );
}