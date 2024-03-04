"use client";
import React from "react";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
  loading: () => <>Perparing Editor</>
})

type Props = {
  editorValues: string;
  getEditorValues: (value: string) => void;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
};

const TextEditor = ({
  disabled,
  editorValues,
  getEditorValues,
  className,
  placeholder,
}: Props) => {
  const config = {
    statusbar: false,
    readonly: disabled,
    autofocus: false,
    spellcheck: true,
    buttons:
      "font,fontsize,bold,italic,underline,strikethrough,eraser,ul,ol,paragraph,lineHeight,superscript,subscript,spellcheck,cut,copy,paste,selectall,image,video,link",
    placeholder: placeholder ?? "",
  };
  return (
    <div className={`w-full ` + className}>
      <JoditEditor
        value={editorValues || ""}
        config={config}
        onChange={() => { }}
        onBlur={(newContent) => {
          getEditorValues(newContent);
        }}
      />
    </div>
  );
};

export default TextEditor;