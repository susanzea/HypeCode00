
export const h1 = (innertext) => {
    return `<h1>${innertext}</h1>\n`
}

export const h2 = (innertext) => {
    return `<h2>${innertext}</h2>\n`
}

export const h3 = (innertext) => {
    return `<h3>${innertext}</h3>\n`
}

export const iframe = (video_link) => {
    const video_id = video_link.slice(-11)
    return `<iframe width="504px" height="378px" src="https://www.youtube.com/embed/${video_id}"></iframe>\n`
}

export const img = (image_link) => {
    return `<img src="${image_link}">\n`
}

export const p = (content) => {
    return `<p>${content}</p>\n`
}

export const ol = (content) => {
    return `<ol>\n   <li>${content}</li>\n</ol>\n`
}

export const ul = (content) => {
    return `<ul>\n   <li>${content}</li>\n</ul>\n`
}