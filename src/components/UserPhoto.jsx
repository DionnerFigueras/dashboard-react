const UserPhoto = ({ url }) => {
    
    return(
        <div className="userphoto">
            <div className="container">
            <img src={url} alt="User " className="userImg" />
            </div>
            <p className="adminName">Admin name</p>
        </div>
    )
}

export default UserPhoto;