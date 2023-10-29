import { atom } from "jotai";

export enum SaveButtonStatus {
  Loading = "loading",
  Succeed = "succeed",
  Failed = "failed",
  Pending = "pending",
}
export const saveBtnStatus = atom(SaveButtonStatus.Pending);
export const updateSaveBtnStatus = atom(
  null,
  (_get, set, newStatus: SaveButtonStatus) => {
    set(saveBtnStatus, newStatus);
  }
);
