import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
        image: "http://",
        address: 'Some address 5',
        description:'1 meetup!'
    
  },
];

function HomePage() { 
    return <MeetupList meetups={ } 
    />
}

export default HomePage;