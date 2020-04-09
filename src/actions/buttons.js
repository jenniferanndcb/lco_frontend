export const createButton = (localAuth) => ({
  type: "CREATE_BUTTON",
  payload: localAuth,
});

export const removeDataset = (localAuth) => ({
  type: "REMOVE_DATASET",
  payload: localAuth,
});
