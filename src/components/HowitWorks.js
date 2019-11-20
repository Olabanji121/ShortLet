import React from "react";
import Iphone from "../resources/images/useiphone.jpg";
import Ios from '../resources/images/ios.svg';
import And from '../resources/images/and.png';
import Title from "../components/Title";


const HowitWorks = () => {
  return (
      <section className="mt-5">
       <Title title={"HOW IT WORKS"} styleClass={"section-title"} />
    <div className="how-center ">
        
    <div class="row">
             <div className="col text-center">
        <img src={Iphone} alt="phone view" className="phone" />
      </div>
            <div className="col span-1-of-2 steps-box">
                <div className="works-step">
                    <div>1</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laborum tempore consequuntur magni reprehenderit veritatis!</p>
                </div>
                <div className="works-step">
                    <div>2</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laborum tempore consequuntur magni reprehenderit veritatis!!</p>
                </div>
                <div className="works-step">
                    <div>3</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laborum tempore consequuntur magni reprehenderit veritatis!!</p>
                </div>
                <div className="works-step">
                    <div>4</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laborum tempore consequuntur magni reprehenderit veritatis!</p>
                </div>

                <a href="/" className="btn-app"><img src={Ios} alt="Ios app download"  className="ios-img"/></a>
                <a href="/" className="btn-app"><img src={And} alt="andriod download"/> </a>
            </div>
        </div>
     
    </div>
      </section>
   
  );
};

export default HowitWorks;
