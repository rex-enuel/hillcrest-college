import { NewsFeed } from '@/components/NewsFeed';

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">School News & Announcements</h1>
        <NewsFeed />
      </div>
    </main>
  );
}