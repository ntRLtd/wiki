import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import MonacoEditor, { OnMount } from "@monaco-editor/react";

interface EditorProps {
  content: string;
}
export const EditorContent = forwardRef(function EditorWithRef(
  props: EditorProps,
  ref
) {
  const { content } = props;
  const editorRef = useRef<any>(null);

  const onMountMonaco = useCallback<OnMount>((editor, monaco) => {
    editorRef.current = editor;
  }, []);

  useImperativeHandle(ref, () => editorRef.current);

  return (
    <div
      className="w-full overflow-y-auto bg-gray-100"
      style={{ height: "calc(100vh - 128px)" }}
    >
      <MonacoEditor
        height="calc(100vh - 128px)"
        defaultLanguage="ini"
        value={content || ""}
        onMount={onMountMonaco}
      />
    </div>
  );
});
