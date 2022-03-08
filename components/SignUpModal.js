import React,{ useState} from 'react';
import { connect } from 'react-redux';
import { toggleShow } from '../redux/user/user.action';
import styles from '../styles/SignUpModal.module.css';
import SignUpForm from './SignUpForm';

const SignUpModal = ({toggle}) => {
  const handleClose = () => {
    toggle();
  }
  const [type, setType] = useState("SignIn");
    return (
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          <div className={styles.titleCloseBtn}>
            <button
              onClick={() => {
                toggle();
              }}
            >
              X
            </button>
          </div>
          <div className={styles.content}>
            <div className={styles.userTypeContainer}>
              <span
                className={[
                  styles.userType,
                  type === "SignIn" ? styles.active : {},
                ].join(" ")}
                onClick={() => setType("SignIn")}
              >
                Sign In
              </span>
              <span
                className={[
                  styles.userType,
                  type === "SignUp" ? styles.active : {},
                ].join(" ")}
                onClick={() => setType("SignUp")}
              >
                Sign Up
              </span>
            </div>
            <div>
              <SignUpForm close={handleClose} val={type} />
            </div>
          </div>
        </div>
      </div>
    );
}
const mapStateToProps = (state) => ({
  currentUser : state.user.currentUser
});
const mapDispatchToProps = (dispatch) => ({
  toggle : () =>  dispatch(toggleShow())
})

export default connect(mapStateToProps,mapDispatchToProps)(SignUpModal)
