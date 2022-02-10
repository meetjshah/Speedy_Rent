import AdminSidebar from "./AdminSidebar"
import AdminUserTable from "./AdminUserTable"
import AdminProfile from "./AdminProfile"
import AdminComplainManage from "./AdminComplainManage"
import AdminManage from "./AdminManage"
import "./AdminPage.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AdminPage() {
    return (
        <Router>
            <AdminSidebar/>
            <div className="admin_page_div">
                <Switch>
                    <Route path="/admin_profile">
                        <AdminProfile/>
                    </Route>
                    <Route path="/user_table"> 
                        <AdminUserTable/>
                    </Route>
                    <Route path="/manage_table"> 
                        <AdminManage/>
                    </Route>
                    <Route path="/complain_table"> 
                        <AdminComplainManage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default AdminPage