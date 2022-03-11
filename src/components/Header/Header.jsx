import React, {useState} from "react";
import classes from "./Header.module.css";
import Tabs from "./Tabs/Tabs";
import SideBar from "./../SideBar/SideBar"

const Header = () => {
    const tabs = [
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
        id: 6,
    },]
    const [overlayIsActive, setOverlayIsActive] = useState(false);

    return (<>
        <SideBar overlayIsActive={overlayIsActive} setOverlayIsActive={setOverlayIsActive} tabs={tabs}/>
        <div className={classes.header}>
            <div>
                <a href="https://spring.io">
                    <img className={classes.logo}
                         src={'https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg'}
                         alt="img"/>
                </a>
            </div>
            <Tabs className={classes.tabs} tabs={tabs}/>
            <div className={classes.burger}>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'
                    alt="img" onClick={() => setOverlayIsActive(true)}/>
            </div>
        </div>
    </>)
}

export default Header;