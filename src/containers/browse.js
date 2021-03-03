import React, { useState, useEffect, useContext } from 'react';
// import Fuse from 'fuse.js';
import { Card, Header, Loading, Player } from '../components';
import { BottomShadow, NavShadow } from '../components/header/styles/header';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer'
import * as ROUTES from '../constants/routes';


export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [category, setCategory] = useState('films');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState();
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  const user = {
    displayName: "Matt",
    photoURL: "1"
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [user])

  useEffect(() => {
    setSlideRows(slides[category])
  }, [slides, category]);

//  useEffect(() => {
//     const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
//     const results = fuse.search(searchTerm).map(({ item }) => item);
    
//     if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
//         setSlideRows(results);
//     } else {
//         setSlideRows(slides[category]);
//     }
//   }, [searchTerm])

  return profile.displayName ? (
    <>
    {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1.jpg" dontShowOnSmallViewPort>
        <NavShadow />
        <Header.Frame>
          <Header.Group>
            <Header.BrowseLogo to={ROUTES.HOME} src="../images/misc/logo.svg" alt="Netflix" />
            <Header.Link 
              active={category === 'films' ? 'true' : 'false'}
              onClick={() => setCategory('films')}>
              Movies
            </Header.Link>
            <Header.Link 
              active={category === 'series' ? 'true' : 'false'}
              onClick={() => setCategory('series')}>
              TV Shows
            </Header.Link>
          </Header.Group>

          <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.Link>{user.displayName}</Header.Link>
                </Header.Group>
                <Header.Group>
                  <Header.Link onClick={() => firebase.auth().signOut()}>
                      Sign out of Netflix
                  </Header.Link>
                </Header.Group>
            </Header.Dropdown>
          </Header.Profile>

          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureTitle src="../images/misc/joker-title.png" alt="Joker"/>
          <Header.Text>
          Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him.
          </Header.Text>
          <Player>
            <Player.Button />
            <Player.Video />
          </Player>
        </Header.Feature>
        <BottomShadow />
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>

      <FooterContainer />
    </>)
    : (<SelectProfileContainer 
        user={user}
        setProfile={setProfile}
      />);
}