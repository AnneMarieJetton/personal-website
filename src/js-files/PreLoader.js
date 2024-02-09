//-------Files-----------
import '../css-files/PreLoader.css';

//-------Other-----------
import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

//Preloader while page is loading
const PreLoader = () => {


  //----------Content--------

  return (
    <div className="preLoaderSpinner">
      <div>
        <BounceLoader
          size={100}
          color={"#080808"}
          loading={true}
        />
      </div>
    </div>
  )

};


//----------Export----------

export default PreLoader;