/*
  # Create Reviews Table

  1. New Tables
    - `reviews`
      - `id` (uuid, primary key) - Unique identifier for each review
      - `name` (text) - Customer name
      - `service` (text) - Type of service received
      - `rating` (integer) - Rating out of 5
      - `comment` (text) - Review comment
      - `created_at` (timestamptz) - When the review was created
      - `approved` (boolean) - Whether review is approved for display (default false)
  
  2. Security
    - Enable RLS on `reviews` table
    - Add policy for public to read approved reviews
    - Add policy for authenticated users to insert reviews (for admin approval system)
*/

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  service text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  created_at timestamptz DEFAULT now(),
  approved boolean DEFAULT false
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read approved reviews"
  ON reviews
  FOR SELECT
  USING (approved = true);

CREATE POLICY "Authenticated users can insert reviews"
  ON reviews
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_reviews_approved ON reviews(approved);
CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON reviews(created_at DESC);
