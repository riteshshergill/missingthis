import React, { useEffect } from 'react';
import '../styles/RandomThoughts.css';

//rfce to create boilerplate

function RandomThoughts() {

    //https://codepen.io/steinvc/pen/nOPLgv
    //https://colorlib.com/wp/bootstrap-textareas/

  const [title, setTitle] = React.useState('');
  const [randomThoughts, setRandomThoughts] = React.useState('');

  const handleTitleValueUpdated = (e) => {
    setTitle(e.target.value);
  }

  const handleRandomThoughtsValueUpdated = (e) => {
    setRandomThoughts(e.target.value);
  }

  useEffect(() => {
    console.log(title);
  },[title]);

  return (
    <>
      <div className = "randomThoughts">

      <div className="container">
        <div className="row top10">
          <div className="col-sm">
            <div className="row-sm">
              <h2>Random Thoughts</h2>
            </div>
            <div className="row-sm">
              <div id="margin">
                Title: <input id="title" type="text" name="title" className="titleText" value="Remember the good times?"/></div>
		            <textarea id="text" name="text" rows="4" className="textPad" onChange={handleRandomThoughtsValueUpdated}
                 value="Used to be a time when times were simpler. Movies were badass.. toys were meant to be played with outside. Shows didn't have any hidden agendas or political views to shove down out throats.">
                  
                </textarea>  
		            <br/>
		            {/* <input id="button" type="submit" value="Create"></input> */}

              </div>
            </div>
          
          </div>
        </div>
      </div>
        
       

    </>
    
    
  )
}

export default RandomThoughts