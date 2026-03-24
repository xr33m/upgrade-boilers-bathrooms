/*
  # Create bookings table

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `name` (text) - Customer name
      - `email` (text) - Customer email
      - `phone` (text) - Customer phone number
      - `service` (text) - Service type selected
      - `message` (text) - Additional message from customer
      - `created_at` (timestamp) - When booking was created
      - `status` (text) - Booking status (new, contacted, completed)

  2. Security
    - Enable RLS on `bookings` table
    - Add policy allowing anyone to insert bookings (public submissions)
    - Add policy allowing authenticated users to view all bookings (for admin)

  3. Indexes
    - Index on created_at for sorting recent bookings
    - Index on status for filtering bookings
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'completed')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit bookings"
  ON bookings
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX idx_bookings_created_at ON bookings(created_at DESC);
CREATE INDEX idx_bookings_status ON bookings(status);
