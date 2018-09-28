# React Gallery App

In this project, you'll build an image gallery using React and the Flickr API. After creating the project with create-react-app, you will build the gallery components, add to the supplied CSS and set up routing. For this project, you'll use the very popular and in-demand React library to create an image gallery app. With the help of this powerful "MVC" (Model, View, Controller) library, the app will be built in the style of modern single page applications to keep it fast, modular, and in sync with current web development trends.

Using the powerful Create React App tool, you'll set up the initial project.

Then you will:

* Use JavaScript and JSX to build out the gallery components in a modular fashion.

* Use React Router to set up routes for three default topic pages and a search page.

* Use the Fetch API or a tool like Axios to fetch data from the Flickr API and use it to display images in your app.

* Add logic to handle the search and various requirements of the project.
Add to the supplied CSS to personalize the project.

## Project Instructions 

**Create your project**

Use the create-react-app to set up and create your initial project directory.

**Build your app components**  

* Use the index.html file and mockups as a general guide while you create the components of this project.

* Use the src/App.js file as your main container component, where you should import your .config file.

* Keep and manage as much of the state and functionality as possible in your src/App.js file, and pass data down to reusable stateless components with props.

* Create the necessary stateless functional components that focus on the UI and receive data via props. Some examples of the stateless components you could use for your app are:
    * A Header component that could store things like an app title, logo, nav and search bar. Remember, the mockups and index.html file are a guide for how the main components should be laid out, arranged, and positioned, but you can personalize your app by adding things like a tittle, logo, footer, etc..

    * A Nav component for the navigation menu

    * A single Gallery component that can be reused to display the sets of images for each of the three topic categories you wish to display, like sunsets, waterfalls and rainbows, for example.

    * A single Gallery-item component that can be reused with iteration to display each list item and image.

    * Create a form component for the search. Since forms deal with a significant amount of unique information that can be very specific to the particular form being used, a stateless component might not be the best option. So feel free to manage the form-specific state in the form component rather than trying to keep you form stateless.


**Get a Flickr API key**

* Create yahoo account/use tumblr account to sign in.

* Apply for a non-commercial API key.

* You’ll need to set up a .config.js file in your project that imports your API key into your application so that you and other users can request data from the Flickr API. This should be imported into src/App.js.

* The config.js file should look something like this:

```
const apiKey = 'YOUR API KEY';
export default apiKey;
```

* Import your API key into your application, preferably into src/App.js, and save it to a variable like you would any other module, and use the variable where applicable. That way, your app’s users will only need to enter in an API key once.

**Note:** This config.js file must be listed in the .gitignore file so it won’t be committed to your github repository. This will prevent your keys and tokens from getting posted publicly to GitHub. It is very important that you do NOT upload any of your personal API keys / secrets / passwords to Github or other publicly accessible place. When you submit this project for grading, your project reviewer will create their own config.js file and use their own API key to run the project.

**Routes**

* Install React Router and set up your `<Route>` and `<Link>` or `<NavLink>` components.

* Include a "Search" link that includes a search field to let users search for photos.

* Clicking a nav link should navigate the user to the correct route, displaying the appropriate info.

* The current route should be reflected in the URL.

* Your app should display at least 3 default topic links that return a list of photos matching some criteria. For example: sunsets, waterfalls and rainbows.
It's okay to request and load the photos for the three default topics when the app first loads. Those default topic pages don't have to re-request and reload new data every time one of those pages are loaded.


**Requesting the data**

* Fetch the data from the Flickr API using the Fetch API or a tool like Axios.

* Make sure data fetching and state is managed by a higher-level “container” component, like src/App.js.

* It is recommended the you use the following link for help with this part of the project, `https://www.flickr.com/services/api/explore/flickr.photos.search`.

    * Enter a tag to search for, such as “sunsets.”

    * You should also limit the number of results to 24 using the per_page argument.

    * Choose JSON as the output, then “Do not sign call.”
    
    * Click “Call Method...” At the bottom of the page, and you’ll see an example of the API call you’ll need to make. You can click on the URL to see what the response will look like.

    
**Search**

* Be sure to include a search field feature and a search route to search for new categories of images.


**Displaying the data**

* Make sure each image gets a unique "key" prop.
  
    * There should be no console warnings regarding unique "key" props.

* The title of each page displaying images should be dynamically provided via "props".

* The current route should be reflected in the URL.

* There should be no more that 24 images displayed.


**CSS styles**

* The mockups are just a general guide for how the elements should be arranged and positioned on the page. But other than general arrangement, spacing and positioning, you are free to experiment with things like color, background color, font, shadows, transitions, animations, etc..

## Extra Credit

**Add a loading indicator that displays each time the app fetches new data. Since the data for the three main topic pages can be requested when the page first loads, it's okay if the loading indicator is only present on the search route.**

**If no matches are found by the search, display a friendly user message to tell the user there are no matches.**

**Include a 404-like error route that displays a friendly 404 error page when a URL does not match an existing route.**

**Completed:** N/A    
**Grade:** N/A