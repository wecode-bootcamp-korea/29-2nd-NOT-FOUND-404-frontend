import React, { useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

require('@toast-ui/editor/dist/toastui-editor.css');

function MarkDown() {
  const editorRef = useRef();

  const saveData = () => {
    const editorInstance = editorRef.current.getInstance();
    const getContent = editorInstance.getMarkdown();
    console.log(getContent);
  };

  return (
    <>
      <div>
        <Editor
          initialValue=""
          previewStyle="vertical"
          height="560px"
          initialEditType="markdown"
          useCommandShortcut={true}
          ref={editorRef}
        />
      </div>
      <button onClick={saveData}>눌러요</button>
    </>
  );
}

export default MarkDown;
