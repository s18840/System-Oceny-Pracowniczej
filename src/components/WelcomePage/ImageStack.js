import React from "react";
import {ImageStack, ImageStackBottom, ImageStackTop} from "../../styles/WelcomePageStyle";
import imgTop from "../../assets/img/contact_img.png"
import imgBottom from "../../assets/img/Group_13.png"

function imageStack(){


  return(
    <ImageStack>
      <ImageStackTop>
        <img src={imgTop} alt=""/>
      </ImageStackTop>
      <ImageStackBottom>
        <img src={imgBottom} alt=""/>
      </ImageStackBottom>
    </ImageStack>
  );

}

export default imageStack();