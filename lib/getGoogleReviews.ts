export const fetchGoogleReviews = async () => {
  const apiKey = 'AIzaSyCsDs-expNOsMFJcIkpk_dSU31T-BwXnPI';
  const placeId = 'ChIJIxl9eYFNAUgRtNTpYxT9aPk';
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const reviews = data.result.reviews;
    return reviews;
  } catch (error) {
    console.error('Erreur lors de la récupération des avis :', error);
    return [];
  }
};
