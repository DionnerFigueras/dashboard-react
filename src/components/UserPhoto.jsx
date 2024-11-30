const UserPhoto = ({ url, name }) => {
    
    return(
        <div className="userphoto">
            <div className="container">
            <img src={url} alt="User " className="userImg" />
            </div>
            <p className="adminName">{name}</p>
        </div>
    )
}

export default UserPhoto;