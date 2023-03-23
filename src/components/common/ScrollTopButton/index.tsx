import React from 'react';

type Props = {};

const ScrollTopButton = (props: Props) => {
  return (
    <div className="fixed bottom-[25px] right-[30px] z-[900] block">
      <a
        href="#top"
        className={`w-[42px] bg-gray-BB h-[42px] block text-center pt-4 text-[11px] uppercase rounded-[50%] bg-[url('https://mksdmcdn-9b59.kxcdn.com/awsm-wp/wp-content/themes/awsm-wp/assets/images/arrow_to_top.png')] bg-no-repeat bg-center`}
      ></a>
    </div>
  );
};

export default ScrollTopButton;
