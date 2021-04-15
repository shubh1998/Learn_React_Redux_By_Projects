import {v4 as uuid} from "uuid";
import AboutUs from "../components/layouts/AboutUs";
import ContactUs from "../components/layouts/ContactUs";
import NotFoundPage from "../components/layouts/NotFoundPage";
import AddNote from "../Pages/Notes/AddNote";
import EditNote from "../Pages/Notes/EditNote";
import NotesList from "../Pages/Notes/NotesList";
import EditProfile from "../Pages/User/EditProfile";
import Home from "../Pages/User/Home";
import LoginPage from "../Pages/User/LoginPage";
import RegisterPage from "../Pages/User/RegisterPage";
import ViewProfile from "../Pages/User/ViewProfile";

const routerList = [
    {
        key: uuid(),
        path: "/",
        component: NotesList,
        hasNavbar: true,
    },
    {
        key: uuid(),
        path: "/addnote",
        component: AddNote,
        hasNavbar: true
    },
    {
        key: uuid(),
        path: "/editnote/:id",
        component: EditNote,
        hasNavbar: true
    },
    {
        key: uuid(),
        path: "/aboutus",
        component: AboutUs,
        hasNavbar: true
    },
    {
        key: uuid(),
        path: "/contactus",
        component: ContactUs,
        hasNavbar: true
    },
    {
        key: uuid(),
        path: "/home",
        component: Home,
        hasNavbar: true
    },
    {
        key: uuid(),
        path: "/login",
        component: LoginPage,
        hasNavbar: true
    },
    {
        key: uuid(),
        path: "/register",
        component: RegisterPage,
        hasNavbar: true
    },
    {
        key: uuid(),
        path: "/editprofile/:id",
        component: EditProfile,
        hasNavbar: true
    },
    {
        key: uuid(),
        path: "/viewprofile/:id",
        component: ViewProfile,
        hasNavbar: true
    },
    {
        key: uuid(),
        component: NotFoundPage,
        hasNavbar: false
    }
];

export default routerList;