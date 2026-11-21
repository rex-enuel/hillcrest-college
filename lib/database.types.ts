export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          role: 'parent' | 'teacher' | 'admin'
          full_name: string
          avatar_url: string | null
          created_at: string
        }
        Insert: {
          id: string
          email: string
          role?: 'parent' | 'teacher' | 'admin'
          full_name: string
          avatar_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          role?: 'parent' | 'teacher' | 'admin'
          full_name?: string
          avatar_url?: string | null
          created_at?: string
        }
      }
      news: {
        Row: {
          id: string
          title: string
          content: string
          author_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          author_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          author_id?: string | null
          created_at?: string
        }
      }
      results: {
        Row: {
          id: string
          student_id: string
          subject: string
          grade: string
          term: string
          created_at: string
        }
        Insert: {
          id?: string
          student_id: string
          subject: string
          grade: string
          term: string
          created_at?: string
        }
        Update: {
          id?: string
          student_id?: string
          subject?: string
          grade?: string
          term?: string
          created_at?: string
        }
      }
    }
  }
}
