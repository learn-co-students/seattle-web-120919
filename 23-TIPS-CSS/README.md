# CSS Lecture

Best References:

[https://www.w3schools.com/css/default.asp],
[https://developer.mozilla.org/en-us/docs/web/css]

What is CSS? Cascading Style Sheets. It describes how a website should look.

If a website is a robot, the JavaScript is the brain, the HTML is the body, and the CSS is the positioning and other attributes of the components.

CSS does have a bit of a bad reputation in the industry. Here are my top 5 issues with it.

1. It (generally) does not throw errors. This can make it hard to debug.
2. It does not really work so well with VS Code. It has improved lately, but it is still lacking.
3. It does not work so well with Chrome. It is also improving, but it is still not as good as Chrome is with JS. It only gets 1/2 of the elements tab. A bit lacking.
4. It is deep. Lots of rabbit holes for sure.
5. It is verbose. It is really hard to describe the positions and styling of things without using your hands or drawing a picture. But this is what we do with CSS.

But the positives are overwhelming. A good-looking site is quite beautiful compared to the unstyled HTML of our Rails views.

People complain all the time about websites with bad styling, outdated styles etc. CSS is the fix for this.

### Implementing

CSS statements can be placed in several ways.

The first is `inline`. This means that it is placed on the line of code that it is modifying. For example
`<h1 style="color:red;">Today’s Update</h1>`

This is an inline CSS statement. This does work, but it is frowned upon. It is not a good separation of concerns. It can be hard to debug. It is the usual standard to put your CSS in a separate file.

What if someone is adding CSS to your project and nothing is happening? That is hard to debug. If someone has used inline styling, that may not even occur to the other person.

Second is an `internal stylesheet`. It is "internal" to your HTML file.

```
  <style>
     div {
       background: lavendar;
     }
  </style>
```

Third is internal from a local file. This is the preferred way. It is easy for another person to get into the code and see what is going on in ONE file, rahter than manually looking at every HTML line trying to find an inline style. Implementation depends on the language.

Also, a `sepatation of concerns` and `single source of truth` are much coding practices. A single source of truth can be a great place to keep track of everything. A line of code can change multiple things at once. That is very powerful.

Last is external from a link. You can link to another url to get their CSS styles in your project. Examples include Bootstrap(Twitter), Materialize(Google), Bulma, etc. This is considered fine. It will take over most of the styling for you.

### The box model

Every element has several properties. Content, padding, border, and margin.
Content is the actual element.

`The CSS padding properties are used to generate space around an element's content, inside of any defined borders.` - W3 Schools

border - the actual border of an element. Can be visible or invisible.

`The CSS margin properties are used to create space around elements, outside of any defined borders.` - W3 Schools

border

### For us

CSS in our RoR is handled in the `app/assets/stylesheets/application.css`. You can add additional stylesheets, but this is what `rails new ____` gives us. SCSS is a CSS pre-processor. You can do things like use variables inside it.

In JavaScript, it would also be included in a separate file and linked to the `index.html` file.

`<link href="style.css" rel="stylesheet" type="text/css">`

### How to Use

`A CSS rule-set consists of a selector and a declaration block:` - W3 Schools

`<h1 style="color:red;">Today’s Update</h1>`

`h1` is the selector. The declaration block is `"color:red"; font-size:14px;`

Notice that there is a key and a value. Ends with a semicolon. No spaces between `14` and `px`. Comment out with `/*` `*/`.

In a separate CSS file:

```
h1 {
color: red;
/* This is a single-line comment */
font-size:14px;
}
```

In a CSS file, the `h1` above means "Every h1 on the page." So, the above means "Every h1 on the page is red font color and font size of 14px.

Other selectors are # and .

`#` is a selector for an id. Just as with our databases, our `id`s need to be unique in HTML. Having more than one on a page can lead to weird behavior. Notice that this will NOT throw an error. But it will cause trouble in mod 3.

`.` is a selector for a class. Classes can be used to style for one OR MORE elements. It is a great way to style many items at once.

There are even more selectors. For example you can select every p with a class of `.text` or whatever. But these are the main ones to get you started.

### Common CSS properties

`padding: 10px;`

`color: red;` Sets the color of a background, element, text, etc.

`list-style-type: none;` removes the bullet point from lists

`visibility:hidden` hides an element on the page.

### Grids

This is how and where to place elements on your page.
