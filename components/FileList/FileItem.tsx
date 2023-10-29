import { useCallback } from "react";
import { useAtom } from "jotai";
import cx from "classnames";
import { Text } from "@chakra-ui/react";

import { activeFileAtom } from "@/app/model";
import { TreeItem } from "@/api";
import { Icon } from "../Icon";
import { DirItem } from "./DirItem";

interface FileItemProps {
  data: TreeItem;
}
export const FileItem = (props: FileItemProps) => {
  const { data } = props;
  const { name, path, isDir } = data;

  const [activeFile, setActiveFile] = useAtom(activeFileAtom);

  const handleClickFile = useCallback(() => {
    setActiveFile(path);
  }, [setActiveFile, path]);

  if (isDir) {
    return <DirItem {...props} />;
  }
  return (
    <div
      className={cx({
        "h-9 w-full flex items-center px-4 gap-2 cursor-pointer": true,
        "bg-blue-100": activeFile === path,
      })}
      onClick={handleClickFile}
    >
      <Icon name="file-text" />
      <Text className="font-semibold">{name}</Text>
    </div>
  );
};
