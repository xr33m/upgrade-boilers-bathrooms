/*
  # Fix Remaining RLS Security Issues

  ## Issues Resolved

  1. **blog_posts RLS Policies** 
     - Previous policies still used direct auth.jwt() calls in some contexts
     - Consolidated to use proper SELECT subquery pattern for all checks
     - Fixed INSERT policy to properly restrict to admin users
     - Removed overly permissive "Authenticated users can update/insert" policies

  2. **reviews RLS Policies**
     - Removed overly permissive "Authenticated users can insert reviews" policy (WITH CHECK true)
     - Added proper admin-only UPDATE and DELETE policies
     - Kept public SELECT policy for approved reviews

  3. **bookings RLS Policy**
     - Changed INSERT policy from allowing true to properly validate data
     - Added minimal validation to prevent completely empty/invalid submissions
     - Email format validation is recommended for better data quality

  ## Changes by Table

  ### blog_posts
  - DROP old INSERT/UPDATE/DELETE policies
  - CREATE new policies with admin role checks using SELECT subquery pattern
  - INSERT: Admin only
  - UPDATE: Admin only
  - DELETE: Admin only

  ### reviews
  - DROP old overly permissive INSERT policy
  - Ensure UPDATE and DELETE are admin-only
  - SELECT remains public for approved reviews

  ### bookings
  - DROP overly permissive INSERT policy (WITH CHECK true)
  - CREATE new INSERT policy with basic validation
  - Ensures email field is not empty (minimal data quality check)
*/

-- ============================================================================
-- FIX blog_posts TABLE RLS - REMOVE OVERLY PERMISSIVE POLICIES
-- ============================================================================

DROP POLICY IF EXISTS "Authenticated users can insert blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can update blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can delete blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Admins can insert blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Admins can update blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Admins can delete blog posts" ON blog_posts;

CREATE POLICY "Admins can insert blog posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (
    (SELECT auth.jwt()->'app_metadata'->>'user_role') = 'admin'
  );

CREATE POLICY "Admins can update blog posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (
    (SELECT auth.jwt()->'app_metadata'->>'user_role') = 'admin'
  )
  WITH CHECK (
    (SELECT auth.jwt()->'app_metadata'->>'user_role') = 'admin'
  );

CREATE POLICY "Admins can delete blog posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (
    (SELECT auth.jwt()->'app_metadata'->>'user_role') = 'admin'
  );

-- ============================================================================
-- FIX reviews TABLE RLS - REMOVE OVERLY PERMISSIVE POLICIES
-- ============================================================================

DROP POLICY IF EXISTS "Authenticated users can insert reviews" ON reviews;
DROP POLICY IF EXISTS "Admins can update reviews" ON reviews;
DROP POLICY IF EXISTS "Admins can delete reviews" ON reviews;

CREATE POLICY "Admins can update reviews"
  ON reviews
  FOR UPDATE
  TO authenticated
  USING (
    (SELECT auth.jwt()->'app_metadata'->>'user_role') = 'admin'
  )
  WITH CHECK (
    (SELECT auth.jwt()->'app_metadata'->>'user_role') = 'admin'
  );

CREATE POLICY "Admins can delete reviews"
  ON reviews
  FOR DELETE
  TO authenticated
  USING (
    (SELECT auth.jwt()->'app_metadata'->>'user_role') = 'admin'
  );

-- ============================================================================
-- FIX bookings TABLE RLS - RESTRICT INSERT POLICY
-- ============================================================================

DROP POLICY IF EXISTS "Anyone can submit bookings" ON bookings;

CREATE POLICY "Anyone can submit bookings"
  ON bookings
  FOR INSERT
  TO public
  WITH CHECK (
    email IS NOT NULL AND
    email != '' AND
    name IS NOT NULL AND
    name != '' AND
    phone IS NOT NULL AND
    phone != ''
  );
