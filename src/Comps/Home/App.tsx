import React from 'react';
import './App.scss';
import Routing from '../../Routing/Route';
import $ from 'jquery'
import PriceTable from '../PriceComp/PriceTable';
import { Link, animateScroll as scroll} from 'react-scroll'
import Navbar from '../Navbar/Navbar';

function App(props: {loggedin: boolean}) {

  $("button").on("touchsart mousedown", function () {
    $(this).addClass("clicked");
  });
  
  $("button").on("touchend mouseup", function () {
    $(this).removeClass("clicked");
    $(this).blur();
  });

  function scrollOnDown(){
    scroll.scrollTo(1000)
  }

  return (
    <>
    <Navbar />
    <div className='god'>
      <div className='head'>
          <div className='headTxt'>
            <h1>Fitness Project</h1>
            <span id='pricingSpan'><a onClick={scrollOnDown}></a></span>
          </div>
          <div className='headcircle' />
        </div>

        <div className='everythingElse'>
          <div className='subEverything'>
            <div className='hype'>
                <div className='hypeText'>
                  <h1 className='hyperText'>Hi</h1>
                </div>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frunningmagazine.ca%2Fwp-content%2Fuploads%2F2020%2F07%2FScreen-Shot-2020-07-19-at-4.10.38-PM.jpg' className='hypeImg' />
            </div>
            <div className='hype1'>
                <div className='hypeText1'>
                  <h1 className='hyperText1'>Bye</h1>
                </div>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frunningmagazine.ca%2Fwp-content%2Fuploads%2F2020%2F07%2FScreen-Shot-2020-07-19-at-4.10.38-PM.jpg' className='hypeImg1' />
            </div>

            <div className='priceyTable'>
              <PriceTable />
            </div>

          </div>
        </div>
    </div>



    </>
  );
}

export default App;
