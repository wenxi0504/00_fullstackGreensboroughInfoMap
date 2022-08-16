//our-domain.com
import NewMeetupForm from '../../components/meetups/NewMeetupForm'


function NewMeetupPage() { 

    function addMeetuphandler() { };

    return <NewMeetupForm onAddMeetup={ addMeetuphandler} />
}
export default NewMeetupPage;