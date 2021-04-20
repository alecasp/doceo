import React, { useState } from "react";
import Loading from "../Components/Loading/Loading";
import firebase, { collection, firebaseApp } from "../firebase";

import "./Admin.css";

function Admin() {
  const [loading, setLoading] = useState(() => false);

  const handleAdminForm = async (e) => {
    e.preventDefault();

    setLoading(true);
    // storing image to firebase
    // -----------------------

    // storing image to variable
    const image = e.target.image.files[0];

    // making reference of storage
    const storageRef = firebaseApp.storage().ref();

    // reference to the place where it should store.
    const NewsImagesImageRef = storageRef.child(`NewsImages/${image.name}`);

    // upload image to that reference
    await NewsImagesImageRef.put(image);
    //   .then(() => console.log("Image uploaded"))
    //   .catch((error) => console.log(error.message));
    const imageUrl = await NewsImagesImageRef.getDownloadURL();

    collection
      .add({
        heading: e.target.heading.value,
        description: e.target.description.value,
        link: e.target.link.value,
        time: firebase.firestore.Timestamp.now(),
        imageUrl,
      })
      .then((doc) => {
        console.log(doc);
        console.log("Document Added");
        setLoading(false);
        alert("Document Added");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return !loading ? (
    <section className="container admin-form">
      <fieldset>
        <legend>Admin Form</legend>
        <form onSubmit={handleAdminForm}>
          <div className="row">
            <label htmlFor="heading">News Heading:</label>
            <input type="text" required name="heading" id="heading" />
          </div>
          <div className="row">
            <label htmlFor="description">News Description:</label>
            <textarea
              required
              name="description"
              id="description"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="row">
            <label htmlFor="image">News Image:</label>
            <input required type="file" name="image" id="image" />
          </div>
          <div className="row">
            <label htmlFor="link">News Link:</label>
            <input required type="text" name="link" id="link" />
          </div>
          <button className="shadow">Add News</button>
        </form>
      </fieldset>
    </section>
  ) : (
    <Loading />
  );
}

export default Admin;
