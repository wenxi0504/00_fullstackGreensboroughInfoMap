function MeetupDetail(props) { 
    return (
        <Fragment>
            <img src={props.image}
                alt={ props.title} />
        <h1> A First Meetup</h1>
        <p> The meetup description</p>
        <address>Some Street 5,Some city</address>
    </Fragment>
        
    )
}
export default MeetupDetail;