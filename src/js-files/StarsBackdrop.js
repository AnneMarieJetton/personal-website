//-------Files-----------
import '../css-files/StarsBackdrop.css';

//-------Other-----------
import React from "react";
import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import { Stars } from "@react-three/drei";


//Stars backdrop that sits behind the entire webpage.
const StarsBackdrop = () => {


    //----------Content--------
    return (
        <div className="Stars__Parent">
            <Canvas>
                <Suspense fallback={null}>
                    <Stars
                        radius={300}
                        depth={60}
                        count={20000}
                        factor={7}
                        saturation={0}
                        fade={true}
                    />
                </Suspense>
            </Canvas>
        </div>
    );

};


//----------Export----------

export default StarsBackdrop;