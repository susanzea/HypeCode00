import React from 'react';
import { useEffect } from 'react';
//gives us access to all of the css we'll be putting on editos
import 'codemirror/lib/codemirror.css'
//gives us access to all of the themes we'll be putting on editos
import 'codemirror/theme/material.css'
//languages
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
//editor being imported
import { Controlled as ControlledEditor } from 'react-codemirror2';
import {highlightActiveLine} from "@codemirror/view"
import keyword from './keywords';
import { connect } from 'react-redux'
import { fetchFile, createFile } from '../../actions/file_actions';


var $ = require("jquery");


class Editor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            editor: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.append = this.append.bind(this);
        this.setEditor = this.setEditor.bind(this)
        this.appendIframe = this.appendIframe.bind(this);
        this.appendImage = this.appendImage.bind(this);
        this.appendParagraph = this.appendParagraph.bind(this);
        this.appendHeaderOne = this.appendHeaderOne.bind(this);
        this.appendHeaderTwo = this.appendHeaderTwo.bind(this);
        this.appendHeaderThree = this.appendHeaderThree.bind(this);
        this.appendOrderedList = this.appendOrderedList.bind(this);
        this.appendUnorderedList = this.appendUnorderedList.bind(this);
        this.toggleIframe = this.toggleIframe.bind(this);
        this.toggleImage = this.toggleImage.bind(this);
        this.toggleParagraph = this.toggleParagraph.bind(this);
        this.toggleHeader = this.toggleHeader.bind(this);
        this.saveCode = this.saveCode.bind(this)
    }

    saveCode(){
        const value = this.state.editor.getValue();
        console.log(value)
        this.props.createFile({code:value})
        // debugger
        var textFileAsBlob = new Blob([value], {
            type: "text/plain;charset=utf-8"
        });
        var fileNameToSaveAs = "myfile.txt";

        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        if (window.webkitURL != null) {
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        } else {
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        }
        // downloadLink.click();
        
    }

    setEditor(editor) {
        this.setState({ editor: editor })
    }
  

    handleChange(editor, data, value) {
        this.props.onChange(value);
    }

    append() {

        var doc = this.state.editor.getDoc();
        var cursor = doc.getCursor(); // gets the line number in the cursor position
        var line = doc.getLine(cursor.line); // get the line contents
        console.log(line)
        var pos = { // create a new object to avoid mutation of the original selection
            line: cursor.line,
            ch: line.length// set the character position to the end of the line
        }
        doc.replaceRange('<h1>my new line of code</h1>\n', pos); // adds a new line
    }


    appendIframe(e) {
        const content = e.target.childNodes[1].innerText.slice(-11)
        var doc = this.state.editor.getDoc();
        var cursor = doc.getCursor(); // gets the line number in the cursor position
        var line = doc.getLine(cursor.line); // get the line contents
        console.log(line)
        var pos = { // create a new object to avoid mutation of the original selection
            line: cursor.line,
            ch: line.length// set the character position to the end of the line
        }
        doc.replaceRange(`<iframe width="420" height="315" src="https://www.youtube.com/embed/${content}"></iframe>\n`, pos); // adds a new line
        e.target.childNodes[1].innerText = ""
    }

    appendImage(e) {
        const content = e.target.childNodes[1].innerText
        var doc = this.state.editor.getDoc();
        var cursor = doc.getCursor(); // gets the line number in the cursor position
        var line = doc.getLine(cursor.line); // get the line contents
        console.log(line)
        var pos = { // create a new object to avoid mutation of the original selection
            line: cursor.line,
            ch: line.length// set the character position to the end of the line
        }
        doc.replaceRange(`<img src="${content}">\n`, pos); // adds a new line
        e.target.childNodes[1].innerText = ""
    }

    appendParagraph(e) {
        const content = e.target.childNodes[1].innerText
        var doc = this.state.editor.getDoc();
        var cursor = doc.getCursor(); // gets the line number in the cursor position
        var line = doc.getLine(cursor.line); // get the line contents
        console.log(line)
        var pos = { // create a new object to avoid mutation of the original selection
            line: cursor.line,
            ch: line.length// set the character position to the end of the line
        }
        doc.replaceRange(`<p>${content}</p>\n`, pos); // adds a new line
        e.target.childNodes[1].innerText = ""
    }

    appendHeaderOne(e) {
        const content = e.target.childNodes[1].innerText
        var doc = this.state.editor.getDoc();
        var cursor = doc.getCursor(); // gets the line number in the cursor position
        var line = doc.getLine(cursor.line); // get the line contents
        console.log(line)
        var pos = { // create a new object to avoid mutation of the original selection
            line: cursor.line,
            ch: line.length// set the character position to the end of the line
        }
        doc.replaceRange(`<h1>${content}</h1>\n`, pos); // adds a new line
        e.target.childNodes[1].innerText = ""
    }

    appendHeaderTwo(e) {
        const content = e.target.childNodes[1].innerText
        var doc = this.state.editor.getDoc();
        var cursor = doc.getCursor(); // gets the line number in the cursor position
        var line = doc.getLine(cursor.line); // get the line contents
        console.log(line)
        var pos = { // create a new object to avoid mutation of the original selection
            line: cursor.line,
            ch: line.length// set the character position to the end of the line
        }
        doc.replaceRange(`<h2>${content}</h2>\n`, pos); // adds a new line
        e.target.childNodes[1].innerText = ""
    }

    appendHeaderThree(e) {
        // debugger
        const content = e.target.childNodes[1].innerText
        var doc = this.state.editor.getDoc();
        var cursor = doc.getCursor(); // gets the line number in the cursor position
        var line = doc.getLine(cursor.line); // get the line contents
        console.log(line)
        var pos = { // create a new object to avoid mutation of the original selection
            line: cursor.line,
            ch: line.length// set the character position to the end of the line
        }
        doc.replaceRange(`<h3>${content}</h3>\n`, pos); // adds a new line
        e.target.childNodes[1].innerText = ""
    }

    appendOrderedList(e) {
        const content = e.target.childNodes[1].innerText
        var doc = this.state.editor.getDoc();
        var cursor = doc.getCursor(); // gets the line number in the cursor position
        var line = doc.getLine(cursor.line); // get the line contents
        console.log(line)
        var pos = { // create a new object to avoid mutation of the original selection
            line: cursor.line,
            ch: line.length// set the character position to the end of the line
        }
        doc.replaceRange(`<ol>\n<li>${content}</li>\n</ol>\n`, pos); // adds a new line
        e.target.childNodes[1].innerText = ""
    }

    appendUnorderedList(e) {
        const content = e.target.childNodes[1].innerText
        var doc = this.state.editor.getDoc();
        var cursor = doc.getCursor(); // gets the line number in the cursor position
        var line = doc.getLine(cursor.line); // get the line contents
        console.log(line)
        var pos = { // create a new object to avoid mutation of the original selection
            line: cursor.line,
            ch: line.length// set the character position to the end of the line
        }
        doc.replaceRange(`<ul>\n<li>${content}</li>\n</ul>\n`, pos); // adds a new line
        e.target.childNodes[1].innerText = ""
    }

    toggleIframe(e) {
        e.preventDefault();
        if (e.target.id === "show-iframe-form") {
            $(e.target).hide();
            $(e.target).siblings().show();
        } else if (e.target.id === "hide-iframe-form") {
            $(e.target.parentElement).siblings().show();
            $(e.target.parentElement).hide();
        }
    }

    toggleImage(e) {
        e.preventDefault();
        if (e.target.id === "show-image-form") {
            $(e.target).hide();
            $(e.target).siblings().show();
        } else if (e.target.id === "hide-image-form") {
            $(e.target.parentElement).siblings().show();
            $(e.target.parentElement).hide();
        }
    }

    toggleParagraph(e) {
        e.preventDefault();
        if (e.target.id === "show-paragraph-form") {
            $(e.target).hide();
            $(e.target).siblings().show();
        } else if (e.target.id === "hide-paragraph-form") {
            $(e.target.parentElement).siblings().show();
            $(e.target.parentElement).hide();
        }
    }

    toggleHeader(e) {
        e.preventDefault();
        if (e.target.id === "show-header-options") {
            $(e.target).hide();
            $(e.target).next().show();
        } else if (e.target.id === "show-headerOne-form") {
            $(e.target.parentElement).hide();
            $('#headerOne-form').show();
        } else if (e.target.id === 'hide-headerOne-form') {
            $('#headerOne-form').hide();
            $('#show-header-options').show();
        } else if (e.target.id === "show-headerTwo-form") {
            $(e.target.parentElement).hide();
            $('#headerTwo-form').show();
        } else if (e.target.id === 'hide-headerTwo-form') {
            $('#headerTwo-form').hide();
            $('#show-header-options').show();
        } else if (e.target.id === "show-headerThree-form") {
            $(e.target.parentElement).hide();
            $('#headerThree-form').show();
        } else if (e.target.id === 'hide-headerThree-form') {
            $('#headerThree-form').hide();
            $('#show-header-options').show();
        }
    }

    toggleList(e) {
        e.preventDefault();
        if (e.target.id === "show-list-options") {
            $(e.target).hide();
            $(e.target).next().show();
        } else if (e.target.id === "show-orderedList-form") {
            $(e.target.parentElement).hide();
            $('#orderedList-form').show();
        } else if (e.target.id === 'hide-orderedList-form') {
            $('#orderedList-form').hide();
            $('#show-list-options').show();
        } else if (e.target.id === "show-unorderedList-form") {
            $(e.target.parentElement).hide(); //good
            $('#unorderedList-form').show();
        } else if (e.target.id === 'hide-unorderedList-form') {
            $('#unorderedList-form').hide();
            $('#show-list-options').show();
        }
    }


    render () {
        const {
            language,
            displayName,
            value,
            onChange
        } = this.props

        const iframeOpen = "<video> src='"
        const iframeClose = "'</video>"
        const imageOpen = "<img src='"
        const imageClose = "'>"
        const paragraphOpen = "<p>"
        const paragraphClose = "</p>"
        const headerOneOpen = "<h1>"
        const headerOneClose = "</h1>"
        const headerTwoOpen = "<h2>"
        const headerTwoClose = "</h2>"
        const headerThreeOpen = "<h3>"
        const headerThreeClose = "</h3>"
        const orderedListOpen = "<ol>"
        const orderedListClose = "</ol>"
        const unorderedListOpen = "<ul>"
        const unorderedListClose = "</ul>"


        return (
        <div className="editor-container">
            <section id="tag-buttons">
                <div className="add-tag" id="iframe">
                    <button onClick={this.toggleIframe} className='tag-button' id="show-iframe-form">video</button>
                    <form onSubmit={this.appendIframe} className='tag-form' id="video-form">
                        {iframeOpen}<span contentEditable="true" className="tag-input" id="image-input" placeholder='insert video link...'></span>{iframeClose}
                        <button type="submit" id="add-iframe">add tag</button>
                        <button onClick={this.toggleIframe} id="hide-iframe-form">x</button>
                    </form>
                </div>

                <div className="add-tag" id="image">
                    <button onClick={this.toggleImage} className='tag-button' id="show-image-form">image</button>
                    <form onSubmit={this.appendImage} className='tag-form' id="image-form">
                        {imageOpen}<span contentEditable="true" className="tag-input" id="image-input" placeholder='insert image link...'></span>{imageClose}
                        <button type="submit">add tag</button>
                        <button onClick={this.toggleImage} id="hide-image-form">x</button>
                    </form>
                </div>

                <div className="add-tag" id="paragraph">
                    <button onClick={this.toggleParagraph} className='tag-button' id="show-paragraph-form">paragraph</button>
                    <form onSubmit={this.appendParagraph} className='tag-form' id="paragraph-form">
                        {paragraphOpen}<span contentEditable="true" className="tag-input" id="paragraph-input" placeholder='insert paragraph link...'></span>{paragraphClose}
                        <button type="submit">add tag</button>
                        <button onClick={this.toggleParagraph} id="hide-paragraph-form">x</button>
                    </form>
                </div>

                <div id="headers">
                    <button onClick={this.toggleHeader} id="show-header-options">header</button>
                    
                    <div id="show-header-forms">
                        <button onClick={this.toggleHeader} className='tag-button' id="show-headerOne-form">large</button>
                        <button onClick={this.toggleHeader} className='tag-button' id="show-headerTwo-form">medium</button>
                        <button onClick={this.toggleHeader} className='tag-button' id="show-headerThree-form">small</button>
                    </div>

                    <div id="header-forms">
                            <form onSubmit={this.appendHeaderOne} className='tag-form' id="headerOne-form">
                                {headerOneOpen}<span contentEditable="true" className="tag-input" id="headerOne-input" placeholder='insert headerOne link...'></span>{headerOneClose}
                                <button type="submit">add tag</button>
                                <button onClick={this.toggleHeader} id="hide-headerOne-form">x</button>
                            </form>

                            <form onSubmit={this.appendHeaderTwo} className='tag-form' id="headerTwo-form">
                                {headerTwoOpen}<span contentEditable="true" className="tag-input" id="headerTwo-input" placeholder='insert headerTwo link...'></span>{headerTwoClose}
                                <button type="submit">add tag</button>
                                <button onClick={this.toggleHeader} id="hide-headerTwo-form">x</button>
                            </form>

                            <form onSubmit={this.appendHeaderThree} className='tag-form' id="headerThree-form">
                                {headerThreeOpen}<span contentEditable="true" className="tag-input" id="headerThree-input" placeholder='insert headerThree link...'></span>{headerThreeClose}
                                <button type="submit">add tag</button>
                                <button onClick={this.toggleHeader} id="hide-headerThree-form">x</button>
                            </form>
                    </div>
                </div>

                <div id="lists">
                    <button onClick={this.toggleList} id="show-list-options">list</button>

                    <div id="show-list-forms">
                        <button onClick={this.toggleList} className='tag-button' id="show-orderedList-form">numbered</button>
                        <button onClick={this.toggleList} className='tag-button' id="show-unorderedList-form">bulleted</button>
                    </div>

                    <div id="list forms">
                        <form onSubmit={this.appendOrderedList} className='tag-form' id="orderedList-form">
                            {orderedListOpen}<span contentEditable="true" className="tag-input" id="orderedList-input" placeholder='insert orderedList...'></span>{orderedListClose}
                            <button type="submit">add tag</button>
                            <button onClick={this.toggleList} id="hide-orderedList-form">x</button>
                        </form>

                        <form onSubmit={this.appendUnorderedList} className='tag-form' id="unorderedList-form">
                            {unorderedListOpen}<span contentEditable="true" className="tag-input" id="unorderedList-input" placeholder='insert unorderedList...'></span>{unorderedListClose}
                            <button type="submit">add tag</button>
                            <button onClick={this.toggleList} id="hide-unorderedList-form">x</button>
                        </form>
                    </div>


                </div>

            </section>


            <div className='editor-title'>
                {displayName}
            </div>
            <ControlledEditor 
                onBeforeChange={this.handleChange}
                editorDidMount={this.setEditor}
                value={value}
                className='html-editor'
                options={{
                    linewrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material'
                }}
            />
            <button onClick={this.append}>button</button>
            <button onClick={this.saveCode}>Save Code</button>
        </div>
    )
    }
}

// export default Editor;

const mSTP = (state) => ({

})

const mDTP = dispatch => ({
    fetchFile: file => dispatch(fetchFile(file)),
    createFile: file => dispatch(createFile(file))
})

export default connect(mSTP,mDTP)(Editor)