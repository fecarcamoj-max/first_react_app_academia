function UserCard({name, age, isOnline}){


    return (
        <>
            <hr/>
            <ul>
                <li>{name}</li>
                <li>{age}</li>
<li>{isOnline ? "Activo" : "NO"}</li>
            </ul>
            <hr/>
        </>
    )
}

export default UserCard