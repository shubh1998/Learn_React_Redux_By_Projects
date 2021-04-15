import {v4 as uuid} from "uuid";
import AboutUs from "../components/layouts/AboutUs";
import ContactUs from "../components/layouts/ContactUs";
import NotFoundPage from "../components/layouts/NotFoundPage";
import AddNote from "../Pages/Notes/AddNote";
import EditNote from "../Pages/Notes/EditNote";
import NotesList from "../Pages/Notes/NotesList";

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
        component: NotFoundPage,
        hasNavbar: false
    }
];

export default routerList;