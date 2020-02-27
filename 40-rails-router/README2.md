Single Page Application - Appears as a single page. Restricted to that page. Navigating away clears memory. I never can leave that URL. State gone etc.

Also, can't send a specific link. Have to start at a page and navigate to a page.

React-router is a great library to fix this.

It completely overwrites what the browser does with routing. The URL is actually navigating through the site via the url bar, but NOT reloading the page.

To compare: If we click on a regular `a` tag that takes us somewhere else, we lose our state and props and whatever progress we made.

React Router allows us to pretend that we are clicking around on a multipage app, while maintaining our state. It is faster than reloading a page as well.

We define what part of the page changes with each different view. We can selectively rerender part of a page depending on what is clicked. The rest of the site is not even computed. Saves bandwidth.
