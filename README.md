# IMDb Sorter
A GreaseMonkey script to sort the section on a movie entry on imdb.com

## How to Use
`imdb.user.js` contains two arrays of section id's to sort and hide, respectively, that you currently have to modify manually before installing the script.
* `show` specifies an order of sections, such that the first element of `show` is shown right below the title section.
* `hide` specifies sections that should be hidden.

To install the script:
* Chrome: Open Extensions by going to the webpage `chrome://extensions` and drag the `imdb.user.js` to middle of the screen onto the box "Drop to install".
* Firefox: Install [GreaseMonkey](https://addons.mozilla.org/da/firefox/addon/greasemonkey/) and drag `imdb.user.js` to a browser page to install.
