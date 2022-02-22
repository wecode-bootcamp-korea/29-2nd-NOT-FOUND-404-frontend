import React from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

require('@toast-ui/editor/dist/toastui-editor.css');

function MarkDown() {
  return (
    <div>
      <Editor
        initialValue=""
        previewStyle="vertical"
        height="560px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </div>
  );
}

export default MarkDown;
