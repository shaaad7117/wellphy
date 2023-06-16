// Replace "YOUR_API_KEY" with your actual Google Places API key
const apiKey = 'AIzaSyC0QHQlnFGYN5v8PeHSVFqhS6BIoEIiQpU';
const placeId = 'wellphy pain & sports clinic';

// Fetch Google Reviews
fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${WellPhy}&fields=reviews&key=${AIzaSyC0QHQlnFGYN5v8PeHSVFqhS6BIoEIiQpU}`)
  .then(response => response.json())
  .then(data => {
    const reviews = data.result.reviews;

    // Iterate over the reviews and populate your template
    const carouselContainer = document.getElementById('reviews-carousel'); // Replace with your carousel container ID

    reviews.forEach(review => {
      const reviewElement = document.createElement('div');
      reviewElement.classList.add('review-item'); // Add necessary classes to style the review item
      
      const ratingElement = document.createElement('span');
      ratingElement.textContent = review.rating;

      const textElement = document.createElement('p');
      textElement.textContent = review.text;

      reviewElement.appendChild(ratingElement);
      reviewElement.appendChild(textElement);

      carouselContainer.appendChild(reviewElement);
    });
  })
  .catch(error => {
    console.error('Error fetching Google Reviews:', error);
  });
