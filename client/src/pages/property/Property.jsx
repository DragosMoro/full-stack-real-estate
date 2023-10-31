import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom';
import { getProperty } from '../../utils/api';
import { SyncLoader } from 'react-spinners';
import "./Property.css"
import { AiFillHeart, AiTwotoneCar } from 'react-icons/ai';
import { FaShower } from 'react-icons/fa';
import { MdMeetingRoom, MdLocationPin } from 'react-icons/md';
const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const { data, isLoading, isError } = useQuery(["resd", id], () => getProperty(id));
  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <SyncLoader height="80" width="80" radius={1} color="#4066ff" aria-label="sync-loading" />
        </div>
      </div>
    )
  }
  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span>Error while fetching the property details</span>
        </div>
      </div>
    )
  }
  return (
    <div className='wrapper'>
      <div className="flexColStart paddings innerWidth property-container">
        {/* like button */}
        <div className="like">
          <AiFillHeart size={24} color="beige" />
        </div>
        {/* image */}
        <img src={data?.image} alt="house image" />

        <div className="flexCenter property-details">
          {/* left */}
          <div className="flexColStart left">
            {/* head */}
            <div className="flexStart head">
              <span className='primaryText'>{data?.title}</span>
              <span className='orangeText' style={{ fontSize: "1.5rem" }}>$ {data?.price}</span>
            </div>
            {/* facilities */}
            <div className="flexStart facilities">
              {/* bathrooms */}
              <div className="flexStart facility">
                <FaShower size={20} color="#1f3e72" />
                <span>{data?.facilities.bathrooms} {data?.facilities.bathrooms == 1 ? 'Bathroom' : 'Bathrooms'}</span>
              </div>
              {/* parkings */}
              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1f3e72" />
                <span>{data?.facilities.parking} {data?.facilities.parking == 1 ? 'Parking' : 'Parkings'}</span>
              </div>
              {/* bedrooms */}
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1f3e72" />
                <span>{data?.facilities.bedrooms} {data?.facilities.bedrooms == 1 ? 'Room' : 'Rooms'}</span>
              </div>
            </div>

            {/* description */}
            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.description}
            </span>

            {/* address */}
            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} color="#1f3e72" />
              <span className="secondaryText">
                {data?.address}, {data?.city},  {data?.country}
              </span>
            </div>
            <button className="button">
              Book your visit
            </button>
          </div>
          {/* right side */}
          <div className="right">
            <div className="map">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Property