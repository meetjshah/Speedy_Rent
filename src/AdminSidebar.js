import "./AdminSidebar.css";
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            {/* <Link to="/" className="link"> */}
            <li className="sidebarListItem">
              <PersonIcon className="sidebarIcon" />
              <Link className="link" to = '/admin_profile'>
                Administrator Profile
              </Link>
            </li>
            {/* </Link> */}
            <li className="sidebarListItem">
              <ManageAccountsIcon className="sidebarIcon" />
              <Link className="link" to = '/user_table'>
                Users Management
              </Link>
            </li>
            <li className="sidebarListItem">
              <AppRegistrationIcon className="sidebarIcon" />
              <Link className="link" to = '/manage_table'>
                Management
              </Link>
            </li>
            <li className="sidebarListItem">
              <AnnouncementIcon className="sidebarIcon" />
              <Link className="link" to = '/complain_table'>
                Complain Management
              </Link>
            </li>
            <li className="sidebarListItem">
              <LogoutIcon className="sidebarIcon" />
              Log out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}