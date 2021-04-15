import { Provider } from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AboutUs from "../components/layouts/AboutUs";
import ContactUs from "../components/layouts/ContactUs";
import NavigationBar from "../components/layouts/NavigationBar";
import NotFoundPage from "../components/layouts/NotFoundPage";
import AddNote from "../components/Notes/AddNote";
import EditNote from "../components/Notes/EditNote";
import NotesHubDashboard from "../components/Notes/NotesHubDashboard";
import store from "../store/store";

const AppRouter = ()=>{
    return (
      <Provider store={store}>
        <BrowserRouter>
          <NavigationBar />
          <Switch>
            <Route path="/" exact={true} component={NotesHubDashboard} />
            <Route path="/addnote" component={AddNote} />
            <Route path="/editnote/:id" component={EditNote} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/aboutus" component={AboutUs} />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
}

export default AppRouter