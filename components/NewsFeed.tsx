'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  created_at: string;
}

export function NewsFeed() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data) setNews(data);
      setLoading(false);
    };
    fetchNews();
  }, []);

  if (loading) return (
    <div className="text-center py-8" role="status" aria-live="polite">
      <div className="inline-flex items-center gap-2 text-primary">
        <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <span>Loading news...</span>
      </div>
    </div>
  );

  return (
    <div className="news-feed" role="feed" aria-label="Latest news">
      {news.length === 0 ? (
        <div className="news-item text-center">
          <p className="text-gray-500">No announcements yet. Check back soon!</p>
        </div>
      ) : (
        news.map((item, index) => (
          <article
            key={item.id}
            className="news-item animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <header className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <h2 className="news-title flex-1 min-w-0">{item.title}</h2>
              <time className="news-date whitespace-nowrap flex-shrink-0" dateTime={item.created_at}>
                {new Date(item.created_at).toLocaleDateString('en-NG', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </header>
            <div className="news-content">{item.content}</div>
          </article>
        ))
      )}
    </div>
  );
}