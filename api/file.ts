import axios from "axios";

import { API_PATH } from "@/app/constants";
import { getApiResponse } from "@/app/utils";

export interface TreeItem {
  name: string;
  path: string;
  isDir: boolean;
}
export const getFileListApi = async (currPath = "./") => {
  const response = await axios.get(`${API_PATH}/rulesets/file-tree`, {
    params: { subDir: currPath },
  });
  return getApiResponse<TreeItem[]>(response.data);
};

export const getFileContent = async (filepath: string) => {
  const response = await axios.get(`${API_PATH}/rulesets/get-content`, {
    params: { filepath },
  });
  return getApiResponse<{ raw: string }>(response.data);
};

export const saveContentApi = async (filepath: string, content: string) => {
  const response = await axios.put(`${API_PATH}/rulesets/save`, {
    filepath,
    updateContent: content,
  });
  return getApiResponse<boolean>(response.data);
};
