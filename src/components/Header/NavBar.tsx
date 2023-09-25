import { NAVIGATION_LINKS } from '../../settings/config';
import NavLink from './NavLink';

export default function NavBar() {
  return (
    <div className='flex gap-12'>
      {NAVIGATION_LINKS.map((link) => (
        <NavLink key={link.text} {...link} />
      ))}
    </div>
  );
}
