export const setActiveTabIdFormatter = (state, action) => {
  if (state.activeTabId.includes(action.payload)) {
    return {
      ...state,
      activeTabId: state.activeTabId.filter(item => item !== action.payload),
    };
  } else {
    return { ...state, activeTabId: [...state.activeTabId, action.payload] };
  }
};
