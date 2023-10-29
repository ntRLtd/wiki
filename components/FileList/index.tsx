import { useQuery } from "@tanstack/react-query";
import { Divider, VStack } from "@chakra-ui/react";

import { getFileListApi } from "@/api";
import { FileItem } from "./FileItem";

export const FILE_LIST_QUERY_SCOPE = "filetree";

interface FileListProps {
  queryKey: string;
  root?: string;
}
const FileList = (props: FileListProps) => {
  const { queryKey, root } = props;
  const { data: resp } = useQuery({
    queryKey: [FILE_LIST_QUERY_SCOPE, queryKey],
    queryFn: async () => {
      return getFileListApi(root);
    },
  });

  return (
    <VStack divider={<Divider />} spacing={2} className="my-2">
      {(resp || []).map((item) => (
        <FileItem data={item} key={item.name} />
      ))}
    </VStack>
  );
};

export default FileList;
