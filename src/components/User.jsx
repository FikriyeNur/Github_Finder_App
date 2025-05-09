const User = ({ user }) => {
  const { avatar_url, name, followers, html_url, blog, login } = user;

  return (
    <div className="col-md-3 d-flex">
      <div
        className="card my-3"
        style={{
          maxWidth: "300px",
          minHeight: "400px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={avatar_url}
          alt={name}
          className="card-img-top"
          style={{
            objectFit: "cover",
            height: "300px",
            width: "100%",
          }}
        />
        <div className="card-body">
          {(name || login) && <h5 className="card-title">{name || login}</h5>}{" "}
          <p>Followers : {followers}</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={html_url}
            className="btn btn-primary btn-sm"
          >
            Go to Github
          </a>
          {blog ? (
            <a
              target="_blank"
              href={blog}
              className="btn btn-primary btn-sm ms-2"
            >
              Go to Web Site
            </a>
          ) : (
            <span className="text-danger fw-bold ms-2">No Website</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
