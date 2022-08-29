import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styles/Content.css';

//rfce to create boilerplate

function Content() {

  const [images, setImages] = React.useState([]);
  const maxNumber = 5;

  const[isUploaded, setIsUploaded] = React.useState(false);

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    setIsUploaded(!isUploaded);
  };

  const[showBannerEditButtonPanel, setShowBannerEditButtonPanel] = React.useState("bannerEditButtonsPanel showBannerEditButtonPanel");

  const [tooltip, showTooltip] = React.useState(true);

  const onErrorOccured = () => {
      alert("Error occured while uploading!");
  }
  const showBannerEditButtons = () => {
    return "bannerEditButtonsPanel showBannerEditButtonPanel";
  }
  const hideBannerEditButtons = () => {
    setShowBannerEditButtonPanel("bannerEditButtonsPanel hideBannerEditButtonPanel");
  }

  const [bannerImageText, setBannerImageText] = React.useState('');

  const handleValueUpdated = (e) => {
    setBannerImageText(e.target.value);
  }


  return (
    <>
      
      <div className="contentBody">
        
          <Carousel className="carouselExtensions" showArrows={false} useKeyboardArrows={true} showIndicators={false} dynamicHeight="true">
              <div className="carouselRowWidth">
                  <img src="https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" />
                  <p className="legend">Legend 1</p>
              </div>
              <div className="carouselRowWidth">
                  <img src="https://m.media-amazon.com/images/M/MV5BMmU1NGUzNWQtN2FmNy00NDg5LWFmZTctYjU5NTIxMzI1M2E1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg" />
                  <p className="legend">Legend 2</p>
              </div>
              <div className="carouselRowWidth">
                  <img src="https://m.media-amazon.com/images/M/MV5BNTkzY2YzNmYtY2ViMS00MThiLWFlYTEtOWQ1OTBiOGEwMTdhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" />
                  <p className="legend">Legend 3</p>
              </div>
          </Carousel>
          <div className="arrows">
            <ArrowBackIosIcon/><ArrowForwardIosIcon/>
          </div>
      </div>
       

    </>
    
    
  )
}

export default Content