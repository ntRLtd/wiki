import { useCallback, useMemo } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { Button } from "@chakra-ui/react";

import { SaveButtonStatus, saveBtnStatus, updateSaveBtnStatus } from "./model";

interface FooterProps {
  onSave?(): void;
}

const btnScheme: Record<SaveButtonStatus, string> = {
  [SaveButtonStatus.Pending]: "green",
  [SaveButtonStatus.Loading]: "gray",
  [SaveButtonStatus.Succeed]: "green",
  [SaveButtonStatus.Failed]: "red",
};

export const Footer = (props: FooterProps) => {
  const { onSave } = props;
  const status = useAtomValue(saveBtnStatus);
  const updater = useSetAtom(updateSaveBtnStatus);

  const handleSave = useCallback(() => {
    updater(SaveButtonStatus.Loading);
    onSave && onSave();
  }, [onSave, updater]);

  const isLoading = useMemo(
    () => status === SaveButtonStatus.Loading,
    [status]
  );

  return (
    <div className="absolute bottom-16 h-16 w-full z-0 border-t-gray-200 bg-gray-200">
      <div className="flex h-full w-full items-center justify-end px-2">
        <Button
          isLoading={isLoading}
          isDisabled={isLoading}
          onClick={handleSave}
          colorScheme={btnScheme[status]}
        >
          确认修改
        </Button>
      </div>
    </div>
  );
};
