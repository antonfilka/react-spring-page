const SET_OVERLAY_IS_ACTIVE = "SET-OVERLAY-IS-ACTIVE"
const SET_SEARCH_STRING = "SET-SEARCH-STRING"
const SET_ACTIVE_TAB_ID = "SET-ACTIVE-TAB-ID"

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
    cards: [
            {
                title: 'Spring Boot',
                text: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.',
                img: 'https://spring.io/images/projects/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg',
                id: 1,
            }, {
                title: 'Spring Framework',
                text: 'Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.',
                img: 'https://spring.io/images/projects/spring-framework-640ad1b04f7efa89e0f0f7353e6b5e02.svg?v=2',
                id: 2,
            }, {
                title: 'Spring Data',
                text: 'Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.',
                img: 'https://spring.io/images/projects/spring-data-79cc203ed8c54191215a60f9e5dc638f.svg',
                id: 3,
            }, {
                img: 'https://spring.io/images/projects/spring-cloud-81fe04ab129ab99da0e7c7115bb09920.svg',
                title: 'Spring Cloud',
                text: 'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.',
                id: 4,
            }, {
                img: 'https://spring.io/images/projects/spring-data-flow-9eb1733b76b6cd62cbdd9bc9a2b04e56.svg',
                title: 'Spring Cloud Data Flow',
                text: 'Provides an orchestration service for composable data microservice applications on modern runtimes.',
                id: 5,
            }, {
                img: 'https://spring.io/images/projects/spring-security-b712a4cdb778e72eb28b8c55ec39dbd1.svg',
                title: 'Spring Security',
                text: 'Protects your application with comprehensive and extensible authentication and authorization support.',
                id: 6,
            }, {
                img: 'https://spring.io/images/projects/spring-graphql-2ba54760cd0651ad26e7425a0f65385d.svg',
                title: 'Spring for GraphQL',
                text: 'Spring for GraphQL provides support for Spring applications built on GraphQL Java.',
                id: 7,
            }, {
                img: 'https://spring.io/images/projects/logo-session-5b3068613a1bee9a50a69f12c6d255f5.png',
                title: 'Spring Session',
                text: 'Provides an API and implementations for managing a user’s session information.',
                id: 8,
            }, {
                img: 'https://spring.io/images/projects/spring-integration-ed45c92142d821851bf6c771f4c556bb.svg?v=2',
                title: 'Spring Integration',
                text: 'Supports the well-known Enterprise Integration Patterns through lightweight messaging and declarative adapters.',
                id: 9,
            }, {
                img: 'https://spring.io/images/projects/spring-hateoas-7da375e1fbd0213275eaa7009926e1cb.svg?v=2',
                title: 'Spring HATEOAS',
                text: 'Simplifies creating REST representations that follow the HATEOAS principle.',
                id: 10,
            }, {
                img: 'https://spring.io/images/projects/spring-restdocs-7ba253b6470bc54f9dba54e12eef549b.png',
                title: 'Spring REST Docs',
                text: 'Lets you document RESTful services by combining hand-written documentation with auto-generated snippets produced with Spring MVC Test or REST Assured.',
                id: 11,
            }, {
                img: 'https://spring.io/images/projects/spring-batch-4ed8fe7187bf70afd9c8efa229a4f77c.svg',
                title: 'Spring Batch',
                text: 'Simplifies and optimizes the work of processing high-volume batch operations.',
                id: 12,
            }, {
                img: 'https://spring.io/images/projects/spring-amqp-6d6aaf6b4861d1cb458e53fb029b4046.svg?v=2',
                title: 'Spring AMQP',
                text: 'Applies core Spring concepts to the development of AMQP - based messaging solutions.',
                id: 13,
            }, {
                img: 'https://spring.io/images/projects/spring-edf462fec682b9d48cf628eaf9e19521.svg',
                title: 'Spring CredHub',
                text: 'Provides client-side support for storing, retrieving, and deleting credentials from a CredHub server running in a Cloud Foundry platform.',
                id: 14,
            }, {
                img: 'https://spring.io/images/projects/spring-flo-9b976862b11e6dd682bcc4ae9f0eca1b.svg?v=2',
                title: 'Spring Flo',
                text: 'Provides a JavaScript library that offers a basic embeddable HTML5 visual builder for pipelines and simple graphs.',
                id: 15,
            }, {
                img: 'https://spring.io/images/projects/spring-kafka-1f159a30a8723794dfa7260ffbdae5b0.svg?v=2',
                title: 'Spring for Apache Kafka',
                text: 'Provides Familiar Spring Abstractions for Apache Kafka.',
                id: 16,},],
    searchString: '',
    activeTabId: []
}

export const homeReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_OVERLAY_IS_ACTIVE: {
            return({...state, overlayIsActive: action.isActive})
        }
        case SET_SEARCH_STRING:{
            return ({...state, searchString: action.searchString})
        }
        case SET_ACTIVE_TAB_ID:{
            if(state.activeTabId.includes(action.id)){
                return ({...state, activeTabId: state.activeTabId.filter(item => item !== action.id)});
            } else {
                return ({...state, activeTabId: [...state.activeTabId, action.id]});
            }
        }
        default:
            return state;
    }
}

export const setOverlayIsActive = (isActive) => ({type: SET_OVERLAY_IS_ACTIVE, isActive});
export const setSearchString = (searchString) => ({type: SET_SEARCH_STRING, searchString});
export const setActiveTabId = (id) => ({type: SET_ACTIVE_TAB_ID, id});