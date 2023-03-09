# React Restaurant Pseudocode

### Main Questions:
Q: One page or multiple?
A:

Q: Name of the Restaurant?
A:

Q: What API am I calling?

Q: What theme do I want to go with?

Q

### HTML/CSS
### React Component Hierarchy
Index.js
|-- App.js
|---components/
|----APICall.js
|----NavBar.js
|----Splash.js
|----Menu/ 
|-----Breakfast.js
|-----Lunch.js
|-----Dinner.js





MenuItem




### Variables
## STATE
menuItems []
page “breakfast”/”lunch”/”dinner”

### Functions

for API call -
import React
import Axios

in the App.js
const for data
const for query
const for url

start with useEffect(() => {})



handleNavigate() - change the page or the filter of the items shown on the screen
Procedures

### Requirements
##### To complete the assignment, you must complete the following:
1. Make some wireframes for the website design (include them in your repo as photos and/or screenshots)
2. Generate the following information:
 - The restaurant's name (give it a good one!, we will crown a winner for the most creative)
 - The restaurant's address
 - The restaurant's hours of operation
3. Install Bootstrap via npm.
4. Access the API using Axios installed with npm. Learn more about fetching data
5. Create a dynamic restaurant menu
 - Choose a specific menu section type to display (Appetizers, Pasta, Sandwiches, etc)
 - Dynamically render at least 15 menu items.
 - The menu section you decide to display should have its own view as an organism (for example, a bootstrap accordion or nav tabs)
 - Each menu item must be a molecule (for example, using a bootstrap card or list item with the name, and the price, etc)
 - Manage the React Component State

##### Additional Requirements
 - Website must be responsive
 - Website must be styled
 - Use the tools and technologies covered in class to complete your website.
 - Your repo should be public so that others can see your code and comment on it.
 - Remember to push to GitHub!
 - Potential employers will view your GitHub profile, so activity is crucial!

##### Stretch Goals
 - Pepper Emojis/icons/pictures for spicy level
 - Create your own JSON and upload to the jsonkeeper.com to customize your items. (Structure could also change)
 - Change menu display based on the time of day (breakfast, brunch, lunch, etc)
 - Create an MVP assigning points to user stories using the Fibonacci method.
 - Modify your Title and Meta Tags using create-react-app.
 - Use NPM to embed a Google Map component showing the location of the restaurant.
 - Include a different 'specials' menu for each day of the week that the restaurant is    open and show that menu based on the current day (should prove to work throughout the week) as well as what was on the specials menu yesterday/ what will be on the specials menu tomorrow. Can be done randomly and keep in localStorage so it never changes.
 - Use React Context
 - Parse the results of the API call to show a list of sides available for substitution (either in addition to or instead of listing sides with each entree). Show spicy level with some indication. Group by cuisine. Lots of options here to go above and beyond.
 - Implement DoorDash style online ordering with parent-child component state management and a 'shopping cart' to save data for purchase.

