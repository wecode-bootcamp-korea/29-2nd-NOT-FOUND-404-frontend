import React, { useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

require('@toast-ui/editor/dist/toastui-editor.css');

function MarkDown({ setGetContent }) {
  const editorRef = useRef();

  const saveData = () => {
    const editorInstance = editorRef.current.getInstance();
    setGetContent(editorInstance.getMarkdown());
  };

  return (
    <div>
      <Editor
        initialValue=""
        previewStyle="vertical"
        height="560px"
        initialEditType="markdown"
        onChange={saveData}
        useCommandShortcut={true}
        ref={editorRef}
      />
    </div>
  );
}

export default MarkDown;
