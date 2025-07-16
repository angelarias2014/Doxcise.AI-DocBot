"use client"

import React, { useRef, useEffect } from "react"
import { Editor } from "@toast-ui/react-editor"
import "@toast-ui/editor/dist/toastui-editor.css"

interface OutputEditorProps {
  content: string;
}

const OutputEditor = ({ content }: OutputEditorProps) => {
  const editorRef = useRef<any>(null);

  // Converts text into markdown bullet points
  const formatAsMarkdownBullets = (text: string): string => {
    const lines = text
      .split("\n")
      .map(line => line.trim())
      .filter(line => line.length > 0);

    return lines.map(line => `- ${line}`).join("\n");
  };

  useEffect(() => {
    if (editorRef.current && content) {
      const markdown = formatAsMarkdownBullets(content);
      editorRef.current.getInstance().setMarkdown(markdown);
    }
  }, [content]);

  return (
    <div className="editor-wrapper">
      <Editor
        ref={editorRef}
        previewStyle="vertical"
        height="400px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </div>
  );
};

export default OutputEditor;
