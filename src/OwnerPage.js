import OwnerSidebar from "./OwnerSidebar"
import OwnerUserTable from "./OwnerUserTable"
import OwnerProfile from "./OwnerProfile"
import OwnerComplainManage from "./OwnerComplainManage"
import OwnerManage from "./OwnerManage"
import "./OwnerPage.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function OwnerPage() {
    return (
        <Router>
            <OwnerSidebar/>
            <div className="owner_page_div">
                <Switch>
                    <Route path="/owner_profile">
                        <OwnerProfile/>
                    </Route>
                    <Route path="/owner_user_table"> 
                        <OwnerUserTable/>
                    </Route>
                    <Route path="/owner_manage_table"> 
                        <OwnerManage/>
                    </Route>
                    <Route path="/owner_complain_manage"> 
                        <OwnerComplainManage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default OwnerPage