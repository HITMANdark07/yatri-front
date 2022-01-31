import React, { useState }from 'react';
import styles from '../styles/MyProfile.module.css';

const MyProfile = () => {
    const [data, setData] = useState({
      Name: "Amit",
      Email: "amit@gmail.com",
      Address: "Kolkata",
      Mobile: "980123456",
      Pan:"GSA786",
      Aadhar: "123456789123",
      GSTIN: "BGHASS12346",
    });

    const [edit,setEdit] = useState(true);

    const { Name, Email, Address,Mobile,Pan,Aadhar,GSTIN} = data;

    const changeHandler = (event) => {
      let name = event.target.name;
      if (name === "Pan") {
        setData({
          ...data,
          [event.target.name]: event.target.value.toUpperCase(),
        });
      }
      else{
        setData({ ...data, [event.target.name]: event.target.value });
      }
      
    };

    return (
      <div className={styles.profileContainer}>
        <div className={styles.profileContent}>
          <div className={styles.profilePic}>
            <label htmlFor="fileToUpload">
              <img src="./bxs-camera.svg" className={styles.camera} />
              <input
                type="file"
                id="fileToUpload"
                style={{ visibility: "hidden" }}
              />
            </label>
            <img
              src="https://i.ibb.co/yNGW4gg/avatar.png"
              className={styles.image}
              alt="Avatar"
            />
            <h2>Saurabh Kumar</h2>
          </div>
          <div className={styles.edit}>
            <button
              className={styles.profileBtn}
              onClick={() => setEdit((prev) => !prev)}
            >
              Edit Profile
            </button>
          </div>
        </div>

        <div className={styles.details}>
          <ul>
            <li>
              <b>Full name</b>
              <input
                disabled={edit}
                type="text"
                name="Name"
                value={Name}
                required
                onChange={changeHandler}
              ></input>
            </li>
            <li>
              <b>Email</b>
              <input
                disabled={edit}
                type="text"
                name="Email"
                value={Email}
                required
                onChange={changeHandler}
              ></input>
            </li>
            <li>
              <b>Contact number</b>
              <input
                disabled={edit}
                type="tel"
                name="Mobile"
                value={Mobile}
                onChange={changeHandler}
                required
              />
            </li>
            <li>
              <b>Address</b>
              <input
                disabled={edit}
                type="text"
                name="Address"
                value={Address}
                onChange={changeHandler}
              ></input>
            </li>
            <li>
              <b>Pan number</b>
              <input
                disabled={edit}
                type="text"
                name="Pan"
                value={Pan}
                onChange={changeHandler}
              ></input>
            </li>
            <li>
              <b>Adhar number</b>
              <input
                disabled={edit}
                type="number"
                name="Aadhar"
                value={Aadhar}
                onChange={changeHandler}
              ></input>
            </li>
            <li>
              <b>GSTIN(optional)</b>
              <input
                disabled={edit}
                type="text"
                name="GSTIN"
                value={GSTIN}
                onChange={changeHandler}
              ></input>
            </li>
          </ul>
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.profileBtn}>UPDATE</button>
        </div>
        {/* <div className={styles.profileContainer}>
          <table>
             <tr>
                <td>
                  <section>
                    <label for="fileToUpload">
                      <img src="./bxs-camera.svg" className={styles.camera}/>
                      <input type="file" id="fileToUpload"/>
                    </label>
                    <img src="https://i.ibb.co/yNGW4gg/avatar.png" id="blah" alt="Avatar"/>
                  </section>
                  <h1>Bharadwaj</h1>
                  <h3>Web Designer and Developer</h3>
                </td>
                <td>
                    <ul>
                      <li>
                        <b>Full name</b> 
                        <input type="text" name="fname" id="fname" maxlength="100" value="Bharadwaj" required /> 
                        <i className="fa fa-edit" id="edit1"></i>
                      </li>
                      <li>
                        <b>Email</b> 
                        <input type="email" name="email" id="email" maxlength="150" value="Bharadwajyl@gmail.com" required />
                      </li>
                      <li>
                        <b>Contact number</b> 
                        <input type="tel" name="mobile" id="mobile" maxlength="10" value="0123456789" required /> 
                        <i class="fa fa-edit" id="edit2"></i>  
                      </li>
                      <li>
                        <b>Address</b> 
                        <input type="text" name="address" id="address" maxlength="250" value="Street, Pincode, Province/State,Country" required /> 
                        <i class="fa fa-edit" id="edit3"></i> 
                        <i class="fa fa-check" id="check3"></i>
                      </li>
                    </ul>
                </td>
              </tr>
              <tr>
                <td className={styles.profileSection2}>
                      <h2>PUBLISH YOUR PRODUCT</h2>
                      <ul>
                        <li>
                          <select>
                            <option value="0">Choose a category</option>
                            <option value="fruits">Fruits</option>
                            <option value="groceries">Groceries</option>
                            <option value="vegetables">Vegetables</option>
                          </select>
                        </li>
                        <li>
                          <label for="productimage">Upload Your Product Picture</label>
                          <input type="file" name="productimage" id="productimage" accept=".jpg,.JPG,.png,.PNG,.jpeg,.JPEG" required />
                        </li>
                        <li>
                          <label for="title">Product Title</label>
                          <input type="text" id="title" name="title" placeholder="eg:Farm Tomoto" maxlength="30" required="" />
                        </li>
                        <li>
                          <label for="tags">Tags</label>
                          <input type="text" id="tags" name="tags" placeholder="eg:tomoto,brinjal,onions" maxlength="50" required="" />
                        </li>

                        <li>
                          <label for="description">Description</label>
                          <textarea id="description" name="description" placeholder="Tell something about your product" maxlength="250" required="" ></textarea>
                        </li>
                      </ul>
                    <button className={styles.profileBtn}>SUBMIT</button>
                </td>
              </tr>
          </table>
          </div> */}
      </div>
    );
}

export default MyProfile
