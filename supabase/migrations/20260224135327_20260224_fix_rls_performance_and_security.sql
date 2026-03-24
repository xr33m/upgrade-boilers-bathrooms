/*
  # Fix RLS Performance Issues and Security Vulnerabilities

  ## Issues Fixed

  1. **RLS Function Call Performance (blog_posts & reviews)**
     - Replace direct auth.jwt() calls with subqueries to cache function results
     - Prevents re-evaluation of auth functions for each row
     - Improves query performance at scale

  2. **Unused Indexes (bookings table)**
     - Drop idx_bookings_created_at (unused)
     - Drop idx_bookings_status (unused)

  3. **Overly Permissive RLS Policy (bookings INSERT)**
     - Current policy allows unrestricted inserts (WITH CHECK true)
     - Keep booking submission open but document the design decision

  4. **Auth Connection Strategy**
     - Supabase should handle this at project settings level
     - Not a migration-level change

  ## Changes by Table

  ### blog_posts
  - Drop and recreate INSERT policy with SELECT subquery pattern
  - Drop and recreate UPDATE policy with SELECT subquery pattern
  - Drop and recreate DELETE policy with SELECT subquery pattern

  ### reviews
  - Drop and recreate UPDATE policy with SELECT subquery pattern
  - Drop and recreate DELETE policy with SELECT subquery pattern

  ### bookings
  - Drop unused indexes
  - Keep INSERT policy as-is (intentionally open for public submissions)
*/

-- ============================================================================
-- FIX blog_posts TABLE RLS PERFORMANCE ISSUES
-- ============================================================================

DROP POLICY IF EXISTS "Admins can insert blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Admins can update blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Admins can delete blog posts" ON blog_posts;

CREATE POLICY "Admins can insert blog posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (
    (SELECT auth.jwt()->>'user_role') = 'admin' OR
    (SELECT auth.jwt()->'app_metadata'->>'user_role') = 'admin'
  );

CREATE POLICY "Admins can update blog posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (
    (SELECT auth.jwt()->>'user_role') = 'admin' OR
    (SELECT auth.jwt()->'app_metadata'->>'user_role') = 'admin'
  )
  WITH CHECK (
    (SELECT auth.jwt()->>'user_role') = 'admin' OR
    (SELECT auth.jwt()->'app_metadata'->>'user_role') = 'admin'
  );

CREATE POLICY "Admins can delete blog posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (
    (SELECT auth.jwt()->>'user_role') = 'admin' OR
    (SELECT auth.jwt()->'app_metadata'->>'user_role') = 'admin'
  );

-- ============================================================================
-- FIX reviews TABLE RLS PERFORMANCE ISSUES
-- ============================================================================

DROP POLICY IF EXISTS "Admins can update reviews" ON reviews;
DROP POLICY IF EXISTS "Admins can delete reviews" ON reviews;

CREATE POLICY "Admins can update reviews"
  ON reviews
  FOR UPDATE
  TO authenticated
  USING (
    (SELECT auth.jwt()->>'user_role') = 'admin' OR
    (SELECT auth.jwt()->'app_metadata'->>'user_role') = 'admin'
  )
  WITH CHECK (
    (SELECT auth.jwt()->>'user_role') = 'admin' OR
    (SELECT auth.jwt()->'app_metadata'->>'user_role') = 'admin'
  );

CREATE POLICY "Admins can delete reviews"
  ON reviews
  FOR DELETE
  TO authenticated
  USING (
    (SELECT auth.jwt()->>'user_role') = 'admin' OR
    (SELECT auth.jwt()->'app_metadata'->>'user_role') = 'admin'
  );

-- ============================================================================
-- FIX bookings TABLE UNUSED INDEXES
-- ============================================================================

DROP INDEX IF EXISTS idx_bookings_created_at;
DROP INDEX IF EXISTS idx_bookings_status;

-- Note: Bookings can be inserted by anonymous users (public form submission)
-- The INSERT policy with "WITH CHECK (true)" is intentional design for public booking form
-- This is not a security vulnerability - bookings are public submissions by design
