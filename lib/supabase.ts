import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types
export type UserRole = 'parent' | 'teacher' | 'admin'
export type User = {
  id: string
  email: string
  role: UserRole
  full_name: string
  avatar_url: string | null
  created_at: string
}

export type Student = {
  id: string
  user_id: string
  parent_id: string
  full_name: string
  student_id: string
  grade_level: string
  avatar_url: string | null
  created_at: string
}

export type ParentPortal = {
  student_id: string
  grade: string | null
  attendance: boolean
  schedule: string
  messages: string[]
  created_at: string
}