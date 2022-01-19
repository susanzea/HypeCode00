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


    render () {
            const {
            language,
            displayName,
            value,
            onChange
        } = this.props



        return (
        <div className="editor-container">
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
        </div>
    )
    }
}

export default Editor;