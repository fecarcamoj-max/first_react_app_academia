function UserCard(props){

    return (
        <>
            <hr/>
            <ul>
                <li>{props.name}</li>
                <li>{props.age}</li>
                <li>{props.isOnline}</li>
            </ul>
            <hr/>
        </>
    )
}

export default UserCard