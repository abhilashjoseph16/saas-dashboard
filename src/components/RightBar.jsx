import React from "react";
import "../css/components/RightBar.css";
import ThemedIcon from "./ThemedIcon";
import BugIcon from "../assets/icons/BugIcon.png";
import UserIcon from "../assets/icons/UserIcon.png";
import BroadcastIcon from "../assets/icons/Broadcast.png";
import ProfileOne from "../assets/icons/profile1.png";
import ProfileTwo from "../assets/icons/profile2.png";
import ProfileThree from "../assets/icons/profile3.png";
import ProfileFour from "../assets/icons/profile4.png";
import ProfileFive from "../assets/icons/profile5.png";
import ProfileSix from "../assets/icons/profile6.png";
import ProfileSeven from "../assets/icons/profile7.png";
import ProfileEight from "../assets/icons/profile8.png";
import ProfileNine from "../assets/icons/profile9.png";
import ProfileTen from "../assets/icons/profile10.png";
import ProfileEleven from "../assets/icons/profile11.png";

function RightBar() {
  return (
    <div className="rightbar-content">
      <section className="rightbar-section">
        <h3 className="rightbar-section-title">Notifications</h3>
        <ul className="rightbar-list">
          <li className="rightbar-list-item">
            <span className="rightbar-list-item-icon">
              <ThemedIcon lightSrc={BugIcon} darkSrc={BugIcon} />
            </span>
            <div className="rightbar-list-item-text">
              <p>You have a bug that needs...</p>
              <small>Just now</small>
            </div>
          </li>
          <li className="rightbar-list-item">
            <span className="rightbar-list-item-icon">
              <ThemedIcon lightSrc={UserIcon} darkSrc={UserIcon} />
            </span>
            <div className="rightbar-list-item-text">
              <p>New user registered</p>
              <small>59 minutes ago</small>
            </div>
          </li>
          <li className="rightbar-list-item">
            <span className="rightbar-list-item-icon">
              <ThemedIcon lightSrc={BugIcon} darkSrc={BugIcon} />
            </span>
            <div className="rightbar-list-item-text">
              <p>You have a bug that needs...</p>
              <small>12 hours ago</small>
            </div>
          </li>
          <li className="rightbar-list-item">
            <span className="rightbar-list-item-icon">
              <ThemedIcon lightSrc={BroadcastIcon} darkSrc={BroadcastIcon} />
            </span>
            <div className="rightbar-list-item-text">
              <p>Andi Lane subscribed to you</p>
              <small>Today, 11:59 AM</small>
            </div>
          </li>
        </ul>
      </section>

      <section className="rightbar-section">
        <h3 className="rightbar-section-title">Activities</h3>
        <ul className="rightbar-list">
          <li className="rightbar-list-item">
            <ThemedIcon
              className="rightbar-avatar"
              lightSrc={ProfileOne}
              darkSrc={ProfileOne}
            />
            <div className="rightbar-list-item-text">
              <p>You have a bug that needs...</p>
              <small>Just now</small>
            </div>
          </li>

          <li className="rightbar-list-item">
            <ThemedIcon
              className="rightbar-avatar"
              lightSrc={ProfileTwo}
              darkSrc={ProfileTwo}
            />
            <div className="rightbar-list-item-text">
              <p>Released a new version</p>
              <small>59 minutes ago</small>
            </div>
          </li>
          <li className="rightbar-list-item">
            <ThemedIcon
              className="rightbar-avatar"
              lightSrc={ProfileThree}
              darkSrc={ProfileThree}
            />
            <div className="rightbar-list-item-text">
              <p>Submitted a bug</p>
              <small>12 hours ago</small>
            </div>
          </li>
          <li className="rightbar-list-item">
            <ThemedIcon
              className="rightbar-avatar"
              lightSrc={ProfileFour}
              darkSrc={ProfileFour}
            />
            <div className="rightbar-list-item-text">
              <p>Modified A data in Page X</p>
              <small>Today, 11:59 AM</small>
            </div>
          </li>
          <li className="rightbar-list-item">
            <ThemedIcon
              className="rightbar-avatar"
              lightSrc={ProfileFive}
              darkSrc={ProfileFive}
            />
            <div className="rightbar-list-item-text">
              <p>Deleted a page in Project X</p>
              <small>Feb 2, 2023</small>
            </div>
          </li>
        </ul>
      </section>

      <section className="rightbar-section">
        <h3 className="rightbar-section-title">Contacts</h3>
        <ul className="rightbar-list contacts">
          <li className="rightbar-list-item">
            <ThemedIcon
              className="rightbar-contact-avatar"
              lightSrc={ProfileSix}
              darkSrc={ProfileSix}
            />
            <div className="rightbar-list-item-text">
              <p>Natali Craig</p>
            </div>
          </li>
          <li className="rightbar-list-item">
            <ThemedIcon
              className="rightbar-contact-avatar"
              lightSrc={ProfileSeven}
              darkSrc={ProfileSeven}
            />
            <div className="rightbar-list-item-text">
              <p>Drew Cano</p>
            </div>
          </li>
          <li className="rightbar-list-item">
            <ThemedIcon
              className="rightbar-contact-avatar"
              lightSrc={ProfileEight}
              darkSrc={ProfileEight}
            />
            <div className="rightbar-list-item-text">
              <p>Orlando Diggs</p>
            </div>
          </li>
          <li className="rightbar-list-item">
            <ThemedIcon
              className="rightbar-contact-avatar"
              lightSrc={ProfileNine}
              darkSrc={ProfileNine}
            />
            <div className="rightbar-list-item-text">
              <p>Andi Lane</p>
            </div>
          </li>
          <li className="rightbar-list-item">
            <ThemedIcon
              className="rightbar-contact-avatar"
              lightSrc={ProfileTen}
              darkSrc={ProfileTen}
            />
            <div className="rightbar-list-item-text">
              <p>Kate Morrison</p>
            </div>
          </li>
          <li className="rightbar-list-item">
            <ThemedIcon
              className="rightbar-contact-avatar"
              lightSrc={ProfileEleven}
              darkSrc={ProfileEleven}
            />
            <div className="rightbar-list-item-text">
              <p>Koray Okumus</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default RightBar;
