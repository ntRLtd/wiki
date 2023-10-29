import { atom } from "jotai";

export const fileContentAtom = atom("");

export const changeFileAtom = atom(
  null,
  (_get, set, newFileContent: string) => {
    set(fileContentAtom, newFileContent);
  }
);

export const activeFileAtom = atom("");

export const changeActiveFileAtom = atom(
  null,
  (_get, set, newActiveFile: string) => {
    set(activeFileAtom, newActiveFile);
  }
);
