import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Skeleton,
  Text,
} from "@chakra-ui/react";

import { Icon } from "../Icon";
import FileList from "./index";
import { TreeItem } from "./api";
import { Suspense } from "react";

interface DirItemProps {
  data: TreeItem;
}
export const DirItem = (props: DirItemProps) => {
  const { data } = props;
  const { name, path } = data;

  return (
    <Accordion className="w-full" allowToggle>
      <AccordionItem border="none" className="w-full min-h-9">
        {({ isExpanded }) => (
          <>
            <AccordionButton className="flex gap-2" _hover={{}}>
              <AccordionIcon />
              <Icon name={isExpanded ? "folder-open" : "folder-close"} />
              <Text className="font-semibold">{name}</Text>
            </AccordionButton>
            <AccordionPanel className="p-0 ml-4">
              {isExpanded ? (
                <Suspense
                  fallback={
                    <Skeleton>
                      <div className="w-full h-9" />
                    </Skeleton>
                  }
                >
                  <FileList queryKey={name} root={path} />
                </Suspense>
              ) : null}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};
