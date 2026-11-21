'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export interface Result {
  id: string;
  student_id: string;
  subject: string;
  grade: string;
  term: string;
  created_at: string;
}

export function ResultsPortal() {
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);
  const [studentId, setStudentId] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const supabaseClient = createClientComponentClient();

    const initAuth = async () => {
      const { data: { user } } = await supabaseClient.auth.getUser();
      if (mounted && user) {
        setStudentId(user.id);
        fetchResults(user.id);
      } else if (mounted) {
        setLoading(false);
      }
    };

    initAuth();
    return () => { mounted = false; };
  }, []);

  const fetchResults = async (id: string) => {
    const { data, error } = await supabase
      .from('results')
      .select('*')
      .eq('student_id', id)
      .order('created_at', { ascending: false });
    if (!error && data) setResults(data);
    setLoading(false);
  };

  if (loading) return (
    <div className="text-center py-8" role="status" aria-live="polite">
      <div className="inline-flex items-center gap-2 text-primary">
        <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <span>Loading results...</span>
      </div>
    </div>
  );

  if (!studentId) return (
    <div className="results-card text-center py-12">
      <div className="w-16 h-16 mx-auto mb-4 bg-primary-lighter rounded-full flex items-center justify-center text-primary" aria-hidden="true">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Sign In Required</h3>
      <p className="text-gray-600 mb-6">Please sign in to view your academic results.</p>
      <a href="/portal/results" className="btn btn-primary">Go to Parent Portal</a>
    </div>
  );

  return (
    <div className="results-card bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden animate-fade-in-up">
      <div className="overflow-x-auto">
        <table className="results-table" role="table">
          <thead>
            <tr>
              <th scope="col">Subject</th>
              <th scope="col">Grade</th>
              <th scope="col">Term</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {results.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                  <div className="space-y-2">
                    <svg className="w-12 h-12 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p>No results available yet.</p>
                    <p className="text-sm">Results will appear here once published.</p>
                  </div>
                </td>
              </tr>
            ) : (
              results.map((result) => (
                <tr key={result.id} className="hover:bg-gray-50 transition-colors duration-fast">
                  <td className="px-6 py-4 font-medium text-gray-900">{result.subject}</td>
                  <td className="px-6 py-4">
                    <span className="grade-badge">{result.grade}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{result.term}</td>
                  <td className="px-6 py-4 text-gray-500 text-sm">
                    {new Date(result.created_at).toLocaleDateString('en-NG', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {results.length > 0 && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <p className="text-sm text-gray-600 text-center">
            Showing {results.length} result{results.length !== 1 ? 's' : ''} for the current academic year.
          </p>
        </div>
      )}
    </div>
  );
}