import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail.module';
function meetupDetails() {
    return <MeetupDetail image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg" title="First Meetup" address="some street 5" description="This is a first meet up"/>
}
export async function getStaticProps(context) {
   //fetch data for a single meetup
    const meetupId=context.param.meetupIds;
    return {
        props: {
            meetupData: {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
                title: "First Meetup",
                address: "some street 5",
                description:"This is a first meet up",
                
            }
        }
    }


 };

export default meetupDetails;