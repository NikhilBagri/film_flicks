# FILMFLICKS
FILMFLICKS is a web application developed using React, HTML, Tailwind CSS, and Firebase. It allows users to sign up, sign in, and enjoy a wide range of movies and TV shows. The application integrates the TMDB API to fetch movie and TV show data and provides features such as personalized watchlists and category-based browsing.

To view the site, simply access the live demo hosted on https://filmflicks.vercel.app/.

## Features
1. User authentication: Users can sign up and sign in to access the application's features.
2. Movie and TV show catalog: The application fetches data from the TMDB API to provide a vast collection of movies and TV shows.
3. Home page: Users can explore different categories of movies and TV shows on the home page.
4. Personalized watchlist: Users can add movies and TV shows to their personal watchlists by liking them.
5. Firebase integration: The application utilizes Firebase for user authentication and storage.

## Installation
To run the FILMFLICKS application locally, follow these steps:

1. Clone the repository: (https://github.com/NikhilBagri/filmflicks.git)
2. Install the dependencies: npm install
3. Create a Firebase project and set up Firebase authentication and storage.
4. Obtain an API key from TMDB by creating an account on their website.
5. Create a .env file in the project root directory.
6. Add the following environment variables to the .env file:
  REACT_APP_FIREBASE_API_KEY=<firebase-api-key>
  REACT_APP_FIREBASE_AUTH_DOMAIN=<firebase-auth-domain>
  REACT_APP_FIREBASE_PROJECT_ID=<firebase-project-id>
  REACT_APP_FIREBASE_STORAGE_BUCKET=<firebase-storage-bucket>
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<firebase-messaging-sender-id>
  REACT_APP_FIREBASE_APP_ID=<firebase-app-id>
7. Create a file named Request and save the TMDB api key there.
8. Run the application: npm start
9. The application will start running on http://localhost:3000.
