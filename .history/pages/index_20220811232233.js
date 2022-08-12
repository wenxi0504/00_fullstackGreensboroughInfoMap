import MeetupList from "../components/meetups/MeetupList";
import photo from "../images/01yellowhouse.jpg";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image: photo,
    address: "Some address 5",
    description: "1 meetup!",
  },
  {
    id: "m2",
    title: "A second meetup",
    image: photo,
    address: "Some address 6",
    description: "2 meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
