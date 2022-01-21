[HypeCode Live Link](https://www.hypecode.herokuapp.com)


* Background

HypeCode is a coding environment where a user learns html by clicking buttons that render HTML.  It familiarizes the user with HTML conceptually before       introducing syntax. HypeCode features a text editor accompanied with buttons that auto populate an HTML tag on click.  To the left of the editor, there is an iframe that renders the compiled code from the editor.  Users can save HTML files and download them from their profile page for external use in software like vs code.

* Technologies Used:

The frontend for HypeCode was built using react.  Redux was used to keep track of 	global state.  We used MongoDB to store files, users, profiles, and the current session.

# Challenging Features
### Customized Code Highlighting
```js
  export const colorize = (tagName, color) => {
      const ele = document.getElementById("rendering-iframe")
      const innerDoc = ele.contentDocument || ele.contentWindow.document
      const eles = innerDoc.getElementsByTagName(`${tagName.slice(1,-1)}`)

      for (let i=0; i < eles.length; i++) {
      eles[i].setAttribute("style", `color: ${color}`)
      }

      const allLines = Array.from(document.getElementsByClassName("CodeMirror-line"))
      const allSpans = []

      for (let i=0; i < allLines.length; i++) {
          const child = allLines[i].childNodes[0]

          if (child.innerText.includes(`${tagName}`)) {
              child.setAttribute("style", `color: ${color}`)
          }
      }
  }
```
Colorized uses dynamic DOM manipulation to highlight the rendered result of a piece of code and the code itself in the same color. The purpose is to make it easier for people who are brand new to coding in HTML to see the behavior, purpose, and syntax of each tag.

The main challenge in accomplishing this was finding a way to break conventional highlighting structures. Usually, the tag name, content, and attributes categories are each given an individual color. We aimed to make it so that each HTML element and it's rendered output was highlighted in a single color since a brand new coder would likely be confused by more nuanced highlighting. 

We accomplished this by using jquery to parse our code to look for tags and then color them accordingly. The colorized function was run for each html tag that is featured in HypeCode's main page coding environment. 
