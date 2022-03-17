const SET_OVERLAY_IS_ACTIVE = "SET_OVERLAY_IS_ACTIVE"
const SET_SEARCH_STRING = "SET_SEARCH_STRING"
const SET_ACTIVE_TAB_ID = "SET_ACTIVE_TAB_ID"

export const setOverlayIsActive = (payload) => ({type: SET_OVERLAY_IS_ACTIVE, payload});
export const setSearchString = (payload) => ({type: SET_SEARCH_STRING, payload});
export const setActiveTabId = (payload) => ({type: SET_ACTIVE_TAB_ID, payload});
