import Card from 'react-bootstrap/Card';

function JobDetails (props) {
    console.log( props.resp);
    return (<div >
     <Card style={{ width: '38rem' }}>
    {props.resp}
    </Card>
    </div>  );
}

export default JobDetails ;