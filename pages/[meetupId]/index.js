import { MongoClient,ObjectId } from 'mongodb';
import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail.module';

function meetupDetails(props) {
    return <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={ props.meetupData.description} />
}

export async function getStaticPaths() {
     const client=await MongoClient.connect('mongodb+srv://......')
    const db = client.db();
    const meetupCollection = db.meetupCollection('meetups');
    const meetups = await meetupCollection.find({}, {_id:1}).toArray();
    client.close();
    return {
        fallback: 'blocking',
        paths: meetups.map(meetup => ({
            params: {meetupId:meetup._id.toString()}
        }))
        // paths: [
        //     {
        //         params: {
        //             meetupId:'m1',
        //         }
        //     },
        //      {
        //         params: {
        //             meetupId:'m2',
        //         }
        //     },
        // ]
    }

 }
export async function getStaticProps(context) {
   //fetch data for a single meetup
    const meetupId = context.param.meetupIds;
    const client=await MongoClient.connect('mongodb+srv://......')
    const db = client.db();
    const meetupCollection = db.meetupCollection('meetups');
    const selectedMeetup = await meetupCollection.findOne({
        _id:ObjectId(meetupId),
    });
    client.close();
    return {
        props: {
            // meetupData: {
            //     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
            //    id:meetupId,
            //     title: "First Meetup",
            //     address: "some street 5",
            //     description:"This is a first meet up",
                
            // }
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description:selectedMeetup.description
            },
        }
    }


 };

export default meetupDetails;