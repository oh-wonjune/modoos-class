import React, { useState, useEffect, useRef, FC } from "react";

const Container: FC = () => {

   const videoRef = useRef<HTMLVideoElement | null>(null);
  const endCallRef = useRef<HTMLButtonElement | null>(null);

  const requestVideo = () => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
          if (endCallRef.current) {
            endCallRef.current.classList.remove('c-join');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    const endCallButton = endCallRef.current;
    const videoElement = videoRef.current;

    const handleEndCallClick = () => {
      if (videoElement && videoElement.srcObject === null) {
        requestVideo();
      } else if (videoElement) {
        videoElement.srcObject = null;
        if (endCallButton) {
          endCallButton.classList.add('c-join');
        }
      }
    };

    if (endCallButton) {
      endCallButton.addEventListener('click', handleEndCallClick);
    }

    // Initial request for video
    requestVideo();

    // Cleanup event listener on component unmount
    return () => {
      if (endCallButton) {
        endCallButton.removeEventListener('click', handleEndCallClick);
      }
    };
  }, []);

  return (
    <div className="app">
        <main className="c-main">
          <aside>
            {/*<a href="#" className="c-logo" title="Navigate to the homepage." aria-label="CoolProject&Co" />*/}
            <img src="https://raw.githubusercontent.com/oh-wonjune/modoos-class-contents/main/icon.png" style={{width:"70px"}}/>
            <nav className="c-navigation">
              <ul>
                <li><button aria-label="Team performance." className="c-navigation__button"><i aria-hidden="true" className="far fa-dot-circle" /></button></li>
                <li><button aria-label="Performance review." className="c-navigation__button"><i aria-hidden="true" className="far fa-clipboard" /></button></li>
                <li><button aria-label="Team overview." className="c-navigation__button"><i aria-hidden="true" className="far fa-eye" /></button></li>
                <li><button aria-label="Active friends." className="c-navigation__button"><i aria-hidden="true" className="fas fa-user-friends" /></button></li>
                <li><button aria-label="Yearly statistics." className="c-navigation__button"><i aria-hidden="true" className="far fa-chart-bar" /></button></li>
                <li><button aria-label="Video chat." className="c-navigation__button c-navigation__button--active"><i aria-hidden="true" className="fas fa-video" /></button></li>
              </ul>
            </nav>
            <button className="c-profile" />
          </aside>
          <div className="c-video">
            <header>
              <button className="c-video-back"><i className="fas fa-chevron-left" /></button>
              <h1>JavaScript 수업시간</h1>
              <span><i aria-hidden="true" className="fas fa-user-friends" />1팀</span>
            </header>
            <div className="c-webcam">
              <div className="c-webcam-container">
                <div className="c-webcam-inchat">
                </div>
                <div className="c-webcam__video-controls">
                  <ul>
                    <li><button className="c-control"><i className="fas fa-expand-arrows-alt" /></button></li>
                    <li><button className="c-control"><i className="fas fa-microphone-alt-slash" /></button></li>
                    <li><button className=" c-control--end-call c-join" ref={endCallRef}><i className="fas fa-phone" /></button></li>
                    <li><button className="c-control"><i className="fas fa-video" /></button></li>
                    <li><button className="c-control"><i className="fas fa-cog" /></button></li>
                  </ul>
                </div>
                <div className="c-webcam__video"><video autoPlay={true} id="c-stream" ref={videoRef}>
                  </video></div>
              </div>
            </div>
          </div>
          <div className="c-chat">
            <div className="c-chat__window">
              <header className="c-chat__info">
                <h2>Group Chat</h2>
                <div>
                  <button className="c-chat__tab c-chat__tab--active">Messages</button>
                  <button className="c-chat__tab">Participants</button>
                </div>
              </header>
              <div className="c-chat__conversation">
                <div className="c-user__chat ">
                  <span>You</span>
                  <p>수업 시작하겠습니다.</p>
                </div>
                <div className="c-user__chat c-user__chat-other ">
                  <span>Lubalin</span>
                  <p>Yes let's Do it!</p>
                </div>
                <div className="c-user__chat ">
                  <span>You</span>
                  <p>조용</p>
                </div>
                <div className="c-user__chat c-user__chat-other ">
                  <span>Lubalin</span>
                  <p>sry</p>
                </div>

              </div>
              <div className="c-chat__inputs">
                <input type="text" placeholder="Write your message..." />
                <button className="c-chat__inputs-send" aria-label="Send message"><i aria-hidden="true" className="fas fa-paper-plane" /></button>
              </div>
            </div>
          </div>
        </main>
      </div>
  );
};

export default Container;
