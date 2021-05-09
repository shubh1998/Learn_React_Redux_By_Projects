import AboutUs from "../components/Layouts/AboutUs/AboutUs";
import ContactUs from "../components/Layouts/ContactUs/ContactUs";
import NotFoundPage from "../components/Layouts/NotFoundPage/NotFoundPage";
import AddNote from "../Pages/Notes/AddNote";
import Home from "../Pages/Notes/Home";
import MyNotes from "../Pages/Notes/MyNotes";

const routerList = [
    {
        key: 1,
        label: "Home",
        path: "/",
        component: Home,
        hasNavbar: true,
    },
    {
        key: 2,
        label: "Add Note",
        path: "/addnote",
        component: AddNote,
        hasNavbar: true,
    },
    {
        key: 3,
        label: "My Notes",
        path: "/mynotes",
        component: MyNotes,
        hasNavbar: true
    },
    {
        key: 4,
        label: "About Us",
        path: "/aboutus",
        component: AboutUs,
        hasNavbar: true
    },
    {
        key: 5,
        label: "Contact Us",
        path: "/contactus",
        component: ContactUs,
        hasNavbar: true
    },
    {
        key: 6,
        label: "Edit Note",
        path: "/editnote/:id",
        component: AddNote,
        hasNavbar: true
    },
    {
        key: 7,
        label: "Not Found Page",
        component: NotFoundPage,
        hasNavbar: false
    }
];

export default routerList;