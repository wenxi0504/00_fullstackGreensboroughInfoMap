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

function HomePage() {
  return (
  
      <MeetupList meetups={DUMMY_MEETUPS} />
    )
    ;
}

export default HomePage;
