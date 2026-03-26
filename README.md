# Hero.IO

## Description
Hero.IO is a modern and responsive web application that allows users to explore, install, and manage different apps in one place.

The application includes three main sections: **Home**, **Apps**, and **Installation**.

- The **Home page** features a header with navigation, a statistics section (total downloads, reviews, and active apps), and a banner with buttons redirecting to app stores. It also showcases the top trending apps, where users can view the top 8 apps initially. When the user clicks the “See More” button, more apps (up to 20) are displayed, and the button dynamically changes into a **“More Apps”** button that redirects the user to the Apps page. Clicking on any app redirects to its detailed view.

- The **App Details page** provides in-depth information about each app, including total downloads, ratings, and reviews. It also includes a visual chart that displays rating distribution (star-wise). The app description is partially shown (first 100 words) with a “See More” option to expand and view the full content. When a user clicks the **“Install Now”** button, the app gets installed, the button becomes disabled, and the text changes to **“Installed”**.

- The **Apps page** displays a collection of 32 apps. Users can click on any app to navigate to the same App Details section. It also includes a dynamic search feature—results update instantly based on user input. If no app is found, a warning message is shown along with a clear button to reset the search. The total app count updates in real time based on search results, and shows 0 when no apps are found.

- The **Installation page** allows users to manage installed apps. Users can sort apps based on downloads, uninstall them, and view their installed apps list. All installation data is stored in local storage, ensuring persistence even after page reload.

Additional features include:
- Proper handling of invalid routes with a custom 404 page  
- “App Not Found” page for invalid app details  
- Error handling for developer-side issues with a dedicated error display page  
- A header with logo (redirects to home), navigation links (Home, Apps, Installation) with active route indication, and a contribution button linking to GitHub  
- A custom footer  
- Fully responsive design for all devices  

## Technologies
- HTML  
- CSS  
- Tailwind CSS  
- DaisyUI  
- JavaScript (ES6)  
- React  
- React Router  
- Firebase  
- Recharts  
- Local Storage  
