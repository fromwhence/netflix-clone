import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { 
  Group, 
  Background, 
  Overlay, 
  Container, 
  Logo,
  BrowseLogo, 
  Link, 
  Text, 
  ButtonLink,
  Feature,
  FeatureTitle,
  FeatureCallOut,
  PlayButton,
  Search,
  SearchIcon,
  SearchInput,
  Profile,
  Picture,
  Dropdown
  
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.NavShadow = function NavShadow({ children, ...restProps}) {
  return <NavShadow {...restProps}></NavShadow>
}

Header.BottomShadow = function BottomShadow({ children, ...restProps}) {
  return <BottomShadow {...restProps}></BottomShadow>
}

Header.Overlay = function HeaderOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
  const [searchActive, setSearchActive] = useState(false)

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive(!searchActive)}>
        <img src="../images/icons/search.png" alt="Search" />     
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Titles, people, genres"
        active={searchActive}
      />
    </Search>
  )

}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  )
}

Header.BrowseLogo = function HeaderBrowseLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <BrowseLogo {...restProps} />
    </ReactRouterLink>
  )
}

Header.Link = function HeaderLink({ children, ...restProps}) {
  return <Link {...restProps}>{children}</Link>
}

Header.Text = function HeaderText({ children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps}) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureTitle = function headerFeatureTitle({ children, ...restProps }) {
  return <FeatureTitle {...restProps}>{children}</FeatureTitle>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return (
    <PlayButton {...restProps}>
      <img src="/images/icons/play-button.png" alt="Play" />
      {children} 
    </PlayButton>
  )
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}
    </Profile>
}

Header.Picture = function HeaderPicture( { src, children, ...restProps }) {
  return <Picture {...restProps} src={`../images/users/${src}.png`}>{children}</Picture>
}

// dropdown
Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>
}

