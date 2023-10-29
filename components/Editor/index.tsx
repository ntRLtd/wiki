import { useCallback, useEffect, useRef } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";

import { activeFileAtom } from "@/app/model";
import { Footer } from "./Footer";
import { SaveButtonStatus, updateSaveBtnStatus } from "./model";
import { getFileContent, saveContentApi } from "@/api";
import { EditorContent } from "./Editor";

interface EditorProps {}

export const Editor = (props: EditorProps) => {
  const editorRef = useRef<any>(null);
  const toast = useToast();

  const activeFile = useAtomValue(activeFileAtom);
  const saveBtnUpdater = useSetAtom(updateSaveBtnStatus);

  const { data: fileContent, error } = useQuery({
    queryKey: ["fileContent", activeFile],
    retry: false,
    enabled: Boolean(activeFile),
    queryFn: () => getFileContent(activeFile),
  });

  const handleSave = useCallback(() => {
    if (!editorRef.current) return;

    const _updateContent = async () => {
      try {
        const content = editorRef.current.getValue();
        await saveContentApi(activeFile, content);
        saveBtnUpdater(SaveButtonStatus.Succeed);
        toast({
          title: "保存成功",
          status: "success",
        });
      } catch {
        saveBtnUpdater(SaveButtonStatus.Failed);
        toast({
          title: "保存失败",
          status: "error",
        });
      }
    };

    _updateContent();
  }, [activeFile, saveBtnUpdater, toast]);

  useEffect(() => {
    if (error !== null) {
      toast({
        title: "获取文件内容失败",
        status: "error",
      });
    }
  }, [error, toast]);

  return (
    <div className="flex-1 relative">
      <EditorContent content={fileContent?.raw ?? ""} ref={editorRef} />
      <Footer onSave={handleSave} />
    </div>
  );
};
