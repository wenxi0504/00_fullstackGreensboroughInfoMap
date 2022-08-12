import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image: "http://",
    address: "Some address 5",
    description: "1 meetup!",
  },
  {
    id: "m2",
    title: "A second meetup",
    image: "http://",
    address: "Some address 6",
    description: "2 meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
