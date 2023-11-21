import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <>
    <nav>
        <h1>Stories <button>Courses</button></h1>
      </nav>
      <header>
        <h1>User Profile</h1>
      </header>

      <section>
        <div className="profile">
          <img src="public/profile.jpg" alt="Profile Image" width="80" height="80" />
          <div className="profile-info">
            <h2>Anuj Gosalia O</h2>
            <p>5482 245</p>
            <p>Cofounder & CEO at Terry Tales</p>
            <p>134 Posts</p>
          </div>
        </div>

        <div className="posts">
          <h2>STORIES</h2>

          <div className="post">
            <h3>A Changing World Order</h3>
            <p>The evolving geopolitical, economic, and social structures that shape the global system. The international order is not static; it undergoes shifts and transformations over time due to various factors. Several key elements contribute to a changing world order.</p>
          </div>

          <div className="post">
            <h3>Indian v/s Australia</h3>
            <p>Think about it; this cricket series was all therapy, laying our childhood traumas to rest, and now working with...</p>
          </div>

          <div className="post">
            <h3>Write To Build</h3>
            <p>Similar to this page...</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
