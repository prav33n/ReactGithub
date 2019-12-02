export const ActionTypes = {
    SETSELECTEDREPO: 'SET_SELECTED_REPO',
};

export const setSelectedRepo = (selectedRepo = null) => ({
    type: ActionTypes.SETSELECTEDREPO,
    payload: selectedRepo,
});