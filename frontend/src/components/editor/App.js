import './index.css'
import { colorize } from './editor_helpers';
import React, { useState, UseEffect, useEffect } from 'react';
import Editor from './Editor';
import useLocalStorage from '../editor/hooks/useLocalStorage';
var $ = require("jquery");




function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html])

  useEffect(() => {

    // ele.setAttribute("color", "blue")
    setTimeout(() => {
      debugger
      colorize("<h1>", "blue")
      colorize("<ol>", "orange")
      colorize("<ul>", "orange")
      colorize("<li>", "orange")
      colorize("<p>", "green")
      colorize("<img>", "pink")
      colorize("<video>", "purple")
      colorize("</h1>", "blue")
      colorize("</ol>", "orange")
      colorize("</ul>", "orange")
      colorize("</li>", "orange")
      colorize("</p>", "green")
      colorize("<img>", "pink")
      colorize("</video>", "purple")
    }, 50)
  })

  const handleInput = () => {
   setHtml(prev => prev + '<h1> </h1> \n')
  }

  // const getPos = () => {
  //   document.getElementsByClassName("react-codemirror2 html-editor")
  //   .onclick = function() {
  //       console.log("clicked")
  //   }
  // }

  const clear = () => {
    setHtml('')
  }

  return (
    <div id="coding-space">
      <div className='code-buttons'>
        <button onClick={handleInput}>ADD CODE</button>

        <div id="video">
          <button className='code-button' id="show-video-form">video</button>
          <form className='code-form'>
            <input id="video-input"></input>
            <button id="create-video-code">x</button>
          </form>
        </div>
        
        
        <button className='code-inputter'>title</button>
        <button className='code-inputter'>list</button>
        <button className='code-inputter'>paragraph</button>
        <button className='code-inputter'>image</button>
      </div>
      <div className="pane right-pane">
        <Editor 
          language="xml" 
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
      </div>
      <div className="pane left-pane">
        <iframe 
          id="rendering-iframe"
          srcDoc={srcDoc}
          title="output"
          frameBorder="0"
          height="100%"
        />
      </div>
      <button onClick={clear}>C</button>
    </div>
  )
}

export default App;




////CODE BELOW WAS REPLACED BY COLORIZE HELPER FUNC
// const ele = document.getElementById("rendering-iframe")
      // const innerDoc = ele.contentDocument || ele.contentWindow.document
      // const headerEles = innerDoc.getElementsByTagName("h1")

      // for (let i=0; i < headerEles.length; i++) {
      //   headerEles[i].setAttribute("style", "color: blue")
      // }

      // const cmTags = Array.from(document.getElementsByClassName("cm-tag"))
      // console.log(cmTags)

      // for (let i=0; i < cmTags.length; i++) {
      //   if (cmTags[i].innerText === "h1") {
      //     cmTags[i-1].setAttribute("style", "color: blue")
      //     cmTags[i].setAttribute("style", "color: blue")
      //     cmTags[i+1].setAttribute("style", "color: blue")
      //   }
      // }




// $("ul").filter(function() {
      //           return $("li", this).length == 2;
      //       })

      //   console.log(Array.from(document.getElementsByClassName("cm-tag")).filter(function() {
      //           return $("cm-tag", this).innerText === "h1";
      //       }))
        // $('cm-tag:contains("h1")').css({color: "orange"})

      // .setAttribute("style", "color: blue")
      // $("#iframe").contents().find("#document").css({ background: "#ccc", color: "blue" });
      //   $("#header2").css({ background: "#ccc", color: "blue" });







// import React, { useState, UseEffect, useEffect } from 'react';
// import Editor from './Editor';
// import useLocalStorage from '../hooks/useLocalStorage';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  
//   const [html, setHtml] = useLocalStorage('html', '')
//   const [srcDoc, setSrcDoc] = useState('')

//   // useEffect(() => {
//   //   const timeout = setTimeout(() => {
//   //     setSrcDoc(`
//   //       <html>
//   //         <body>${html}</body>
//   //       </html>
//   //     `)
//   //   }, 250)

//   //   return () => clearTimeout(timeout)
//   // }, [html])

 



  

//   render() {
    
//   }
//   return (
//     <>
//       <div className="pane top-pane">
//         <Editor 
//           language="xml" 
//           displayName="HTML"
//           value={html}
//           onChange={setHtml}
//         />
//       </div>
//       <div className="pane">
//         <iframe 
//           srcDoc={srcDoc}
//           title="output"
//           sandbox="allow-scripts"
//           frameBorder="0"
//           height="100%"
//         />
//       </div>
//     </>
//   )
// }

// export default App;