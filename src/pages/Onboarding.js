import React from 'react';
import { motion } from 'framer-motion';
// locals
import CreateImg from '../assets/images/create.png';
import ReadImg from '../assets/images/read.png';
import SubmitImg from '../assets/images/submit.png';

export default function Onboarding() {
  return (
    <motion.main
      className="onboarding__main animate__animated"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="home__hero">
        <h1>Thanks For Stopping By</h1>
        <h2>
          Here it is all about letting go of our thoughts. This is a safe space
          where you can share your feelings and see how others are feeling and
          support them.
        </h2>
      </div>
      <div className="home__steps">
        {/* home steps will look like this */}
        <div className="step__container">
          <div className="step__left">
            <h3>01/ Create your lantern </h3>
            <p>
              First you are going to write down whatever it is you need to let
              go of. It can be a negative feeling, something you want to
              manifest. Big or small it does not matter.
            </p>
            <p className="subtitle">
              Remember this is a safe space share whatever you want. There are
              no requirements. Just come as you are.
            </p>
          </div>
          <div className="step__right">
            <img
              src={CreateImg}
              alt="create example"
              width="640px"
              height="365px"
              className="animate__animated  animate__fadeIn"
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
        {/* home steps will look like this */}
        <div className="step__container">
          <div className="step__left">
            <h3>02/ Send your lantern</h3>
            <p>
              Once you write your lantern send it out to the world. Watch it
              float away into the sky.
            </p>
            <p className="subtitle">
              As your lantern floats away notice how the thought leaves your
              mind and you feel a little lighter.
            </p>
          </div>
          <div className="step__right">
            <img
              src={SubmitImg}
              alt="submit example"
              width="640px"
              height="365px"
              className="animate__animated  animate__fadeIn"
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
        {/* home steps will look like this */}
        <div className="step__container">
          <div className="step__left">
            <h3>03/ Read other lanterns</h3>
            <p>
              Click on the floating lanterns to open them and see how other
              people are feeling. All messages are anonymous. Offer support by
              adding a reaction.
            </p>
            <p className="subtitle">
              No on is required to read or react to anything. And everything is
              always anonymous no one will know it is you.
            </p>
          </div>
          <div className="step__right">
            <img
              src={ReadImg}
              alt="read example"
              width="640px"
              height="365px"
              className="animate__animated  animate__fadeIn"
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
        <div className="step__container">
          <div className="step__left">
            <h3>04/ The Team</h3>
            <ul>
              <li>Riley Jakusik - Project Manager / UX Engineer</li>
              <li>Mark Ambrocio - Full Stack Developer</li>
              <li>Matt Baisl - UI Designer</li>
              <li>Mackenzie Chernok - UX Designer</li>
              <li>Artur Ciecierski - UX/UI Designer</li>
              <li>Erin Gruenwedel - UI Designer</li>
              <li>Vicki Lei - UI Designer / Front End Developer</li>
              <li>Tyler Morales - Front End Developer</li>
              <li>Justin Wang - UX Designer</li>
            </ul>
          </div>
          <div className="step__right">
            <img
              src="https://picsum.photos/seed/picsum2/640/365"
              alt="placeholder"
              width="640px"
              height="365px"
              className="animate__animated  animate__fadeIn"
            />
          </div>
        </div>
      </div>
    </motion.main>
  );
}
