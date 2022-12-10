import { Link } from "../../utilities";

export function SidebarLinks() {
  return (
    <>
      <li>
        <Link variant="simple-alt" href="/dashboard">Analytics</Link>
      </li>
      <li>
        <Link variant="simple-alt" href="/dashboard/inbox">Inbox</Link>
      </li>
      <li>
        <Link variant="simple-alt" href="/dashboard/projects">Projects</Link>
      </li>
      <li>
        <Link variant="simple-alt" href="/dashboard/settings">Settings</Link>
      </li>
      <li>
        <Link variant="simple-alt" href="/dashboard/logout">Log Out</Link>
      </li>
    </>
  )
}