


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





// export const colorize = (tagName, color) => {
//     const ele = document.getElementById("rendering-iframe")
//     const innerDoc = ele.contentDocument || ele.contentWindow.document
//     const eles = innerDoc.getElementsByTagName(`${tagName}`)

//     for (let i=0; i < eles.length; i++) {
//     eles[i].setAttribute("style", `color: ${color}`)
//     }

//     const cmTags = Array.from(document.getElementsByClassName("cm-tag"))

//     for (let i=0; i < cmTags.length; i++) {
//         if (cmTags[i].innerText === `${tagName}`) {
//             cmTags[i].parentElement.setAttribute("style", `color: ${color}`)
//             cmTags[i-1].setAttribute("style", `color: ${color}`)
//             cmTags[i].setAttribute("style", `color: ${color}`)
//             if (cmTags[i+1]) {
//                 cmTags[i+1].setAttribute("style", `color: ${color}`)
//             }
//         }
//     }
// }
