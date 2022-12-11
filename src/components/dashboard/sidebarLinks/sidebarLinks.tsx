import { Link } from "../../utilities";
import { FiSettings, FiInbox, FiLogOut } from 'react-icons/fi';
import { GoProject } from 'react-icons/go';
import { IoAnalytics } from 'react-icons/io5';

export function SidebarLinks() {
  return (
    <>
      <li>
        <Link variant="simple-alt" href="/dashboard">
          <IoAnalytics style={{marginRight: '16px'}}/>
          Analytics
        </Link>
      </li>
      <li>
        <Link variant="simple-alt" href="/dashboard/inbox">
          <FiInbox style={{marginRight: '16px'}}/>
          Inbox
        </Link>
      </li>
      <li>
        <Link variant="simple-alt" href="/dashboard/projects">
          <GoProject style={{marginRight: '16px'}}/>
          Projects
        </Link>
      </li>
      <li>
        <Link variant="simple-alt" href="/dashboard/settings">
          <FiSettings style={{marginRight: '16px'}}/>
          Settings
        </Link>
      </li>
      <li>
        <Link variant="simple-alt" href="/dashboard/logout">
          <FiLogOut style={{marginRight: '16px'}}/>
          Log out
        </Link>
      </li>
    </>
  )
}