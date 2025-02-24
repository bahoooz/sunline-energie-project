import { NextResponse } from "next/server";

const fetchGoogleReviews = async () => {
  const apiKey = "VOTRE_CLE_API_GOOGLE";
  const placeId = "VOTRE_PLACE_ID";
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const reviews = data.result.reviews;
    console.log("Data :", data);
    console.log("Reviews :", reviews);

    return reviews;
  } catch (error) {
    console.error("Erreur lors de la récupération des avis :", error);
    console.error("ça marche pas :");
    return [];
  }
};

export async function GET() {
  const reviews = await fetchGoogleReviews();
  return NextResponse.json(reviews);
}
