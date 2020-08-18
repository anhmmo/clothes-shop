import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectDirectorySectons = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
