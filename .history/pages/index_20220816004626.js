import { useEffect,useState } from 'react';
import MeetupList from "../components/meetups/MeetupList";
import Layout from '../components/layout/Layout'
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5",
    description: "1 meetup!",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 6",
    description: "2 meetup!",
  },
];

function HomePage(props) {
  //using pre-render , dont need to use useState and useEffect
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => { 
  //   //send a http request and fetch data
  //   setLoadedMeetups(DUMMY_MEETUPS);

  // }, []);
  return (
  
      // <MeetupList meetups={loadedMeetups} />
     <MeetupList meetups={props.meetups} />
    )
    ;
}

// it has to be a getStaticProps name
// export async function getStaticProps() {
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 1
//   };
//  }

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  //fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    }
  }

}

export default HomePage;
