import React from 'react';
export type NavbarProps = {
    links: Array<string>;
    logo?: React.ReactNode;
    btnLabel?: string;
};
declare const Navbar: ({ logo, links, btnLabel, }: NavbarProps) => JSX.Element;
export default Navbar;
