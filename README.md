[HypeCode Live Link](https://www.hypecode.herokuapp.com)




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
