[HypeCode Live Link](https://www.hypecode.herokuapp.com)


# Background

HypeCode is a coding environment where a user learns html by clicking buttons that render HTML.  It familiarizes the user with HTML conceptually before       introducing syntax. HypeCode features a text editor accompanied with buttons that auto populate an HTML tag on click.  To the left of the editor, there is an iframe that renders the compiled code from the editor.  Users can save HTML files and download them from their profile page for external use in software like vs code.

<!-- <img width="1000" alt="hype-homepage" src="https://user-images.githubusercontent.com/87621185/152572721-9a2fe323-05ee-402f-bbd6-392aa8d7ae4a.png"> -->
<img width="900" alt="Screen Shot 2022-02-04 at 1 33 18 PM" src="https://user-images.githubusercontent.com/87621185/152583932-54db2513-c90a-4433-8567-1ea57c1ce28b.png">


# Technologies Used:
The frontend for HypeCode was built using react.  Redux was used to keep track of global state.  We used MongoDB to store files, users, profiles, and the current session.

# Challenging Features
## Customized Code Highlighting
<img width="900" alt="Screen Shot 2022-02-04 at 1 09 37 PM" src="https://user-images.githubusercontent.com/87621185/152580787-a9351ad0-7372-4101-85bb-f9349b21f60c.png">

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


## Saving User Files
```js
saveCode(){
        const value = this.state.editor.getValue();
        if(this.props.currentUser){
            this.props.createFile({code:value})
        }
        const textFileAsBlob = new Blob([value], {
            type: "text/plain;charset=utf-8"
        });
        const fileNameToSaveAs = "myfile.txt";
        const downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        if (window.webkitURL != null) {
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        } else {
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        }
        downloadLink.click();
    }
 ```
CHALLENGE: Saving a file to the database from frontend to backend that someone can access when they are logged in. Also, allowing a user to download the file they had saved in the database.

Solution:  First we checked if the user is logged in, once they saved the code we would create an object containing the code. We would then send through axios to mongodb and create a new object in the database using their Id and default values. The user can then rename the file through their profile and also update their code. The user will also be able to click the file name and the file and will be downloaded from the profile. 

### Check out the CRUD cycle for html files in the video below!
[![Watch the video](https://img.youtube.com/vi/998rsSMw2mQ/maxresdefault.jpg)](https://www.youtube.com/watch?v=998rsSMw2mQ)

