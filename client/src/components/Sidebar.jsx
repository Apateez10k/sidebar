import React from 'react';
import Menu from './Menu.jsx';
import Booking from './Booking.jsx';
import Hours from './Hours.jsx';
import Contact from './Contact.jsx';
import GMap from './GMap.jsx';

const axios = require('axios');
// import '../../dist/style.css';


export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      place: {
        hours: ['Monday: 8:00 AM – 6:00 PM', 'Tuesday: 8:00 AM – 6:00 PM', 'Wednesday: 8:00 AM – 6:00 PM', 'Thursday: 8:00 AM – 6:00 PM', 'Friday: 8:00 AM – 6:00 PM', 'Saturday: 8:00 AM – 6:00 PM', 'Sunday: 8:00 AM – 6:00 PM'],
        address: '',
        phone: '',
        website: '',
        location: 'https://maps.gdoogle.com/?cid=4336663750511421120',
        id: '',
        name: '',
        url: '',
        menu_url: '',
        coords: { lat: 0, lng: 0 },
      },
      isLoaded: true,
      isModal: false,
    };

    this.getPlace = this.getPlace.bind(this);
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.getPlace();
      this.setState({ isModal: true });
    }
  }

  getPlace() {
    const id = window.location.href.split('/')[4];
    // axios.get(`${BASE_URL}/api/restaurants/${id}`)
    axios.get(`http://localhost:1337/api/restaurants/${id}`)
      .then((res) => {
        this.setState({
          place: res.data,
          isLoaded: true,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const {
      hours, address, phone, website, location, id, name, url, menu_url, coords,
    } = this.state.place;
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    }
    if (this.state.isLoaded) {
      return (

        <div className="sidebar">
          <Menu menuUrl={menu_url} />
          <div className="greyBar" />
          <Booking />
          <div className="greyBar" />
          <div className="inSidebar">
            <Hours hours={hours} />
            {this.state.isModal &&
              <Contact
                address={address}
                phone={phone}
                website={url}
                lat={coords.lat}
                lng={coords.lng}
                id={id}
                name={name}
              />}
            <GMap
              location={location}
              id={id}
            />
          </div>
        </div>
      );
    }
  }
}

// window.Sidebar = Sidebar;

