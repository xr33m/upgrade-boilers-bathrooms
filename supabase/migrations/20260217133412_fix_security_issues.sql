/*
  # Fix Security Issues

  ## Changes Made

  1. **Remove Unused Indexes**
     - Drop `idx_reviews_created_at` (not being used)
     - Drop `idx_blog_posts_slug` (not being used in queries)
     - Drop `idx_blog_posts_category` (not being used)
     - Drop `idx_blog_posts_published` (not being used)

  2. **Fix RLS Policies for Blog Posts**
     - Drop overly permissive policies
     - Add restrictive policies that check for admin role in user metadata
     - Only users with `user_role = 'admin'` in raw_app_meta_data can manage blog posts

  3. **Fix RLS Policies for Reviews**
     - Update insert policy to set approved = false by default
     - Add update policy for admins to approve reviews
     - Add delete policy for admins

  ## Security Improvements
  - Blog posts can only be created/updated by admin users
  - Reviews require admin approval before being visible
  - Proper authorization checks in place
*/

-- Drop unused indexes
DROP INDEX IF EXISTS idx_reviews_created_at;
DROP INDEX IF EXISTS idx_blog_posts_slug;
DROP INDEX IF EXISTS idx_blog_posts_category;
DROP INDEX IF EXISTS idx_blog_posts_published;

-- Fix blog_posts RLS policies
DROP POLICY IF EXISTS "Authenticated users can insert blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can update blog posts" ON blog_posts;

-- Create restrictive policies for blog_posts (admin only)
CREATE POLICY "Admins can insert blog posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (
    (auth.jwt()->>'user_role') = 'admin' OR
    (auth.jwt()->'app_metadata'->>'user_role') = 'admin'
  );

CREATE POLICY "Admins can update blog posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (
    (auth.jwt()->>'user_role') = 'admin' OR
    (auth.jwt()->'app_metadata'->>'user_role') = 'admin'
  )
  WITH CHECK (
    (auth.jwt()->>'user_role') = 'admin' OR
    (auth.jwt()->'app_metadata'->>'user_role') = 'admin'
  );

CREATE POLICY "Admins can delete blog posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (
    (auth.jwt()->>'user_role') = 'admin' OR
    (auth.jwt()->'app_metadata'->>'user_role') = 'admin'
  );

-- Fix reviews RLS policies
DROP POLICY IF EXISTS "Authenticated users can insert reviews" ON reviews;

-- Allow anyone to submit reviews, but force approved = false
CREATE POLICY "Anyone can submit reviews"
  ON reviews
  FOR INSERT
  TO public
  WITH CHECK (approved = false);

-- Only admins can update reviews (for approval workflow)
CREATE POLICY "Admins can update reviews"
  ON reviews
  FOR UPDATE
  TO authenticated
  USING (
    (auth.jwt()->>'user_role') = 'admin' OR
    (auth.jwt()->'app_metadata'->>'user_role') = 'admin'
  )
  WITH CHECK (
    (auth.jwt()->>'user_role') = 'admin' OR
    (auth.jwt()->'app_metadata'->>'user_role') = 'admin'
  );

-- Only admins can delete reviews
CREATE POLICY "Admins can delete reviews"
  ON reviews
  FOR DELETE
  TO authenticated
  USING (
    (auth.jwt()->>'user_role') = 'admin' OR
    (auth.jwt()->'app_metadata'->>'user_role') = 'admin'
  );
