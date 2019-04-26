import About from "./containers/About/About";
import Projects from "./containers/Projects/Projects";
import Resume from "./containers/Resume/Resume";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";
import NewProject from './containers/NewProject/NewProject';

const routes = [
    { path: "/", name: "HOME", Component: Home, exact : true },
    { path: "/about", name: "ABOUT", Component: About, exact : false  },
    { path: "/resume", name: "RESUME", Component: Resume, exact : false },
    { path: "/portfolio", name: "PROJECTS", Component: Projects, exact : false },
    { path: "/contact", name: "CONTACT", Component: Contact, exact : false },
    { path: "/newProject", name: "NEWPROJECT", Component: NewProject, exact : false }
];


export default routes;