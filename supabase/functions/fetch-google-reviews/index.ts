const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  publishedAtDate: string;
  reviewId: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const apiKey = Deno.env.get("GOOGLE_PLACES_API_KEY");
    const placeId = Deno.env.get("GOOGLE_PLACE_ID");

    if (!apiKey || !placeId) {
      return new Response(
        JSON.stringify({
          error: "Missing configuration",
          reviews: [],
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=reviews&key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Google API error: ${response.statusText}`);
    }

    const data = await response.json();
    const reviews: GoogleReview[] = (data.reviews || [])
      .slice(0, 6)
      .map((review: any) => ({
        author: review.authorAttribution?.displayName || "Anonymous",
        rating: review.rating || 5,
        text: review.originalText || review.text || "",
        publishedAtDate: review.publishTime || new Date().toISOString(),
        reviewId: review.name || Math.random().toString(),
      }));

    return new Response(JSON.stringify({ reviews }), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch reviews",
        reviews: [],
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
