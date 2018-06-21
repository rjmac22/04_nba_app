import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from './sideNav_items'


const SideNavigation = (props) => (
  <div>
    <SideNav
      showNav={props.showNav}
      onHideNav={props.onHideNav}
      navStyle={{
        background: '#242424',
        maxwidth:'220px'
      }}
    >
      <SideNavItems {...props}/>
    </SideNav>
  </div>
);

export default SideNavigation;
