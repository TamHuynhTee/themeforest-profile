import React from 'react';
import FormContact from './components/FormContact';
import style from './style.module.css';

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div id="contact" className="container content-wrapper last-wrapper">
      {/* Title */}
      <div className="text-center">
        <h1 className="main-title title">
          Contact <span className="text-gray-AA">Me</span>
        </h1>
      </div>
      <div className="hr"></div>

      <div className={style.contactContainer}>
        <div className="col-span-1">
          <FormContact />
        </div>
        <div className="col-span-1">
          <div className={style.infoContainer}>
            <img src="https://mksdmcdn-9b59.kxcdn.com/awsm-wp/wp-content/uploads/2013/04/ico_1.png" />
            <h3>I will respond ASAP</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
              dolor quis purus egestas rhoncus. Etiam in sagittis elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed in dolor
              quis purus egestas rhoncus. Etiam in sagittis elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed in dolor quis
              purus egestas rhoncus. Etiam in sagittis elit.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed in dolor quis purus
              egestas rhoncus. Etiam in sagittis elit. Etiam in sagittis
              elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              in dolor quis purus egestas rhoncus. Etiam in sagittis elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
