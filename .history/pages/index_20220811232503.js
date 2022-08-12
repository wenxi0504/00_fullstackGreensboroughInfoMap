import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image: <a href="https://www.freepik.com/photos/home-garden"></a>,
    address: "Some address 5",
    description: "1 meetup!",
  },
  {
    id: "m2",
    title: "A second meetup",
    image: (
      <a href="https://www.freepik.com/photos/home-garden">
        Home garden photo created by wirestock - www.freepik.com
      </a>
    ),
    address: "Some address 6",
    description: "2 meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
