import UserSidebar from "./UserSidebar"
import UserUserTable from "./UserUserTable"
import UserProfile from "./UserProfile"
import UserComplainManage from "./UserComplainManage"
import UserManage from "./UserManage"
import "./UserPage.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function UserPage() {
    return (
        <Router>
            <UserSidebar/>
            <div className="user_page_div">
                <Switch>
                    <Route path="/user_profile">
                        <UserProfile/>
                    </Route>
                    <Route path="/user_user_table"> 
                        <UserUserTable/>
                    </Route>
                    <Route path="/user_manage_table"> 
                        <UserManage/>
                    </Route>
                    <Route path="/user_complain_manage"> 
                        <UserComplainManage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default UserPage