import { NavLink } from "react-router-dom";
import { LinkData } from "../data";

const NavLinkList = () => {
  function activeLinkStyles({ isActive }) {
    return {
      color: isActive && "#b20c0c",
    };
  }

  const LinkMap = LinkData.map(({ url, title }, index) => {
    return (
      <NavLink to={url} key={index} style={activeLinkStyles} end>
        {title}
      </NavLink>
    );
  });
  return LinkMap;
};

export default NavLinkList;
