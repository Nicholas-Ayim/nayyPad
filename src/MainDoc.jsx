import React from "react";
import "./mainDoc.css";
import ReactMarkdown from 'react-markdown'
export default function MainDoc({selectedNote,upDatedNote}) {
  const onEdit = (field,value)=>{
    upDatedNote({
      ...selectedNote,
      [field] : value,
      lastModified : Date.now()
    })
  }
  if(!selectedNote){
    return <div className="no-active">No note</div>
  }
  return (
    <>
      <div className="format-doc">
        <div className="main-title">
          <input
            placeholder="Untitled"
            type="text"
            className="title-textField"
            autoFocus
            value={selectedNote?.title}
            onChange={(e)=>onEdit("title",e.target.value)}
          />
          <div className="main-document">
            <textarea placeholder="main body"
            value={selectedNote?.body}
            onChange={(e)=>onEdit("body",e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="preview-document">
          {/* <textarea
            type="text"
            className="preview"
            placeholder="preview"
            value={selectedNote?.body}
            onChange={(e)=>onEdit("body",e.target.value)}
          ></textarea> */}
          <ReactMarkdown className="preview">{selectedNote?.body}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}
