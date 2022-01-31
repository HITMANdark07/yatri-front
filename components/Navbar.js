import React, { useState, useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import styles from "../styles/Navbar.module.css";
import { setCurrentUser } from "../redux/user/user.action";
import { useRouter } from "next/router";
import SignUpModal from "./SignUpModal";
import makeToast from "../Toaster";

const Navbar = ({currentUser, setUser}) => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [click, setClick] = useState(false);
  const [showSide, setShowSide] = useState(false);
  const pushMyProfile = () => {
    router.push(`/my-profile`);
  };

  const handleClick = () => {
    setShowSide((prevState) => !prevState);
    setClick((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.navItems}>
          <li className={styles.listItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/">About</Link>
          </li>
        </ul>
        <h1 className={styles.logo}>
          <span>Yatri</span>
          <span>cabs</span>
        </h1>
        <ul className={styles.mobile}>
          <li className={styles.listItem}>+91 9100008976</li>
          <li className={styles.listItem}>+91 45321768</li>
        </ul>
        <div>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <img
                className={styles.login}
                src="./bx-user-circle.svg"
                onClick={() => {
                  if(currentUser===null){
                    setModalOpen(true);
                  }
                }}
              />

              {
                currentUser &&
                (
                  <ul className={styles.dropdown}>
                  <li className={styles.li} onClick={pushMyProfile}>
                    <Link href="/my-profile">My Profile</Link>
                  </li>
                  <li className={styles.li}>
                    <Link href="/">My Booking</Link>
                  </li>
                  <li className={styles.li} onClick={() => {
                    setUser(null);
                    makeToast("success", "logout");
                  }}>
                    <Link href="/">Logout</Link>
                  </li>
                  </ul>
                )
              }
            </li>
            <div onClick={handleClick} className={styles.menuIcon}>
              <img
                src={click ? "./times-solid.svg" : "./bars-solid.svg"}
                className={styles.openIcon}
              />
            </div>
          </ul>
        </div>
        {modalOpen && <SignUpModal setOpenModal={setModalOpen} />}
      </div>

      <div
        className={showSide ? styles.showSidebar : styles.hideSideBar}
        // style={{ display: showSide ? "block" : "none" }}
      >
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>+91 9100008976</li>
          <li>+91 45321768</li>
        </ul>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  currentUser : state.user.currentUser
});
const mapDispatchToProps = (dispatch) => ({
  setUser : user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
