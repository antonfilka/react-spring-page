import { setActiveTabIdFormatter } from "../formatters/homePageFormatter"

const SET_OVERLAY_IS_ACTIVE = "SET_OVERLAY_IS_ACTIVE"
const SET_SEARCH_STRING = "SET_SEARCH_STRING"
const SET_ACTIVE_TAB_ID = "SET_ACTIVE_TAB_ID"
const SET_CARDS = "SET_CARDS"

const initialState = {
    overlayIsActive: false,
    tabs: [
        {
        tabTitle: 'Why Spring',
        isDropdown: true,
        tabItems: [{itemTitle: 'Overview', link: 'https://spring.io/why-spring',}, {
            itemTitle: 'Microservices', link: 'https://spring.io/microservices',
        }, {itemTitle: 'Reactive', link: 'https://spring.io/reactive',}, {
            itemTitle: 'Event Driven', link: 'https://spring.io/event-driven',
        }, {itemTitle: 'Cloud', link: 'https://spring.io/cloud',}, {
            itemTitle: 'Web Applications', link: 'https://spring.io/web-applications',
        }, {itemTitle: 'Serverless', link: 'https://spring.io/',}, {itemTitle: 'Batch', link: 'https://spring.io/',}],
        id: 1,
    }, {
        tabTitle: 'Learn',
        isDropdown: true,
        tabItems: [{itemTitle: 'Overview', link: 'https://spring.io/learn', id: 1,}, {
            itemTitle: 'Quickstart', link: 'https://spring.io/quickstart', id: 2,
        }, {itemTitle: 'Guides', link: 'https://spring.io/guides', id: 3,}, {
            itemTitle: 'Blog', link: 'https://spring.io/blog', id: 4,
        },],
        id: 2,
    }, {
        tabTitle: 'Projects',
        isDropdown: true,
        tabItems: [{itemTitle: 'Overview', link: 'https://spring.io/projects', id: 1,}, {
            itemTitle: 'Spring Boot', link: 'https://spring.io/projects/spring-boot', id: 2,
        }, {
            itemTitle: 'Spring Framework', link: 'https://spring.io/projects/spring-framework', id: 3,
        }, {
            itemTitle: 'Spring Cloud', link: 'https://spring.io/projects/spring-cloud', id: 4,
        }, {
            itemTitle: 'Spring Cloud Data Flow', link: 'https://spring.io/projects/spring-cloud-dataflow', id: 5,
        }, {
            itemTitle: 'Spring Data', link: 'https://spring.io/projects/spring-data', id: 6,
        }, {
            itemTitle: 'Spring Integration', link: 'https://spring.io/projects/spring-integration', id: 7,
        }, {
            itemTitle: 'Spring Batch', link: 'https://spring.io/projects/spring-batch', id: 8,
        }, {
            itemTitle: 'Spring Security', link: 'https://spring.io/projects/spring-security', id: 9,
        }, {itemTitle: 'View all projects', link: 'https://spring.io/projects', id: 10,},],
        id: 3,
    }, {
        tabTitle: 'Training', isDropdown: false, link: 'https://spring.io/training', id: 4,
    }, {
        tabTitle: 'Support', isDropdown: false, link: 'https://spring.io/support', id: 5,
    }, {
        tabTitle: 'Community',
        isDropdown: true,
        tabItems: [{itemTitle: 'Overview', link: 'https://spring.io/community'}, {
            itemTitle: 'Events', link: 'https://spring.io/events'
        }, {itemTitle: 'Team', link: 'https://spring.io/team'},],
        id: 6,}],
    cards: [],
    searchString: '',
    activeTabId: []
}

export const homeReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_OVERLAY_IS_ACTIVE: {
            return({...state, overlayIsActive: action.payload})
        }
        case SET_SEARCH_STRING:{
            return ({...state, searchString: action.payload})
        }
        case SET_ACTIVE_TAB_ID:{
            return setActiveTabIdFormatter(state,action);
        }
        case SET_CARDS:{
            return ({...state, cards: action.payload});
        }
        default:
            return state;
    }
}
