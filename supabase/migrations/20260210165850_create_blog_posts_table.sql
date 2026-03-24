/*
  # Create Blog Posts Table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key) - Unique identifier for each blog post
      - `title` (text) - Blog post title
      - `slug` (text, unique) - URL-friendly slug
      - `excerpt` (text) - Short summary/excerpt
      - `content` (text) - Full blog post content
      - `image_url` (text) - Featured image URL (optional)
      - `category` (text) - Category (e.g., "Boilers", "Heating", "Plumbing Tips")
      - `author` (text) - Author name
      - `published_at` (timestamptz) - Publication date
      - `created_at` (timestamptz) - When the post was created
      - `updated_at` (timestamptz) - Last update timestamp
      - `published` (boolean) - Whether post is published (default false)
  
  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for public to read published posts
    - Add policy for authenticated users to manage posts (for admin system)
  
  3. Indexes
    - Index on slug for fast lookups
    - Index on published_at for sorting
    - Index on category for filtering
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  image_url text,
  category text NOT NULL,
  author text NOT NULL DEFAULT 'Glasgow Premier Plumbing',
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  published boolean DEFAULT false
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published blog posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can insert blog posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
