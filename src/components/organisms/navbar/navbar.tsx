import React from 'react';
import styles from './navbar.module.css';
import Button, { ButtonType } from '../../atoms/button/Button';
import CamsolLogo from '../../icons/CamsolLogo';
import NavLink from '../../atoms/navlink/navlink';

export type NavbarProps = {
  links: Array<string>;
  logo?: React.ReactNode;
  btnLabel?: string;
};

const LINKS = ['About', 'Our Process', 'Company', 'Team', 'Projects', 'Magazine'];
const Navbar = ({
  logo = <CamsolLogo />,
  links = LINKS,
  btnLabel = 'Book consultant',
}: NavbarProps) => {
  return (
    <nav className={styles.row}>
      <ul className={styles.links}>
        {logo}
        {links.map((link) => (
          <NavLink key={link} label={link} />
        ))}
      </ul>
      <Button type={ButtonType.SOLID} text={btnLabel} />
    </nav>
  );
};

export default Navbar;
