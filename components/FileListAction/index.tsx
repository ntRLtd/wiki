import { Button, Flex } from "@chakra-ui/react";
import { Icon } from "../Icon";
import { useCallback } from "react";

interface FileListActionProps {
  onClick?(type: string): void;
}
export const FileListAction = (props: FileListActionProps) => {
  const { onClick } = props;

  const handleUpload = useCallback(() => {
    onClick && onClick("upload");
  }, [onClick]);

  return (
    <Flex className="mx-2 mb-4" rounded="sm" justifyContent="right">
      <Button
        isDisabled
        width="full"
        size="sm"
        colorScheme="blue"
        leftIcon={<Icon name="file-addition" />}
        onClick={handleUpload}
      >
        上传文件
      </Button>
    </Flex>
  );
};
