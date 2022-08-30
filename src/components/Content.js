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
          

          <Carousel className="carouselExtensions" showArrows={true} useKeyboardArrows={true} showIndicators={false} dynamicHeight="true"
                renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                    hasPrev && (
                        <ArrowBackIosIcon onClick={clickHandler}/>
                    )
                }
                renderArrowNext={(clickHandler, hasNext, labelNext) =>
                    hasNext && (
                        <ArrowForwardIosIcon onClick={clickHandler}/>
                        
                    )
                }>
              <div className="carouselRowWidth">
                  <img src="https://m.media-amazon.com/images/M/MV5BMjQzODQyMzk2Nl5BMl5BanBnXkFtZTcwNTg4MjQ3OA@@._V1_.jpg" />
                  <p className="legend">Jurassic Park</p>
              </div>
              <div className="carouselRowWidth">
                  <img src="https://m.media-amazon.com/images/M/MV5BNzNlYjQ0ZmMtNDNmZC00MmEzLTgwYWEtMTJmYzBlMjllMTFiXkEyXkFqcGdeQXVyNjc2NDI1ODA@._V1_.jpg" />
                  <p className="legend">Predator</p>
              </div>
              <div className="carouselRowWidth">
                  <img src="https://m.media-amazon.com/images/M/MV5BZWVlYzU2ZjQtZmNkMi00OTc3LTkwZmYtZDVjNmY4OWFmZGJlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" />
                  <p className="legend">Robocop</p>
              </div>
              <div className="carouselRowWidth">
                  <img src="https://m.media-amazon.com/images/M/MV5BOTY4YWI2YjUtNWYwNi00ZjE5LTlmYmEtYjBlMTY4MDEyZWUwXkEyXkFqcGdeQXVyNTY2MzQ3MDE@._V1_.jpg" />
                  <p className="legend">Superman</p>
              </div>
              <div className="carouselRowWidth">
                  <img src="https://m.media-amazon.com/images/M/MV5BN2VlNjNhZWQtMTY2OC00Y2E1LWJkNGUtMDU4M2ViNzliMGYwXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" />
                  <p className="legend">Mad Max Road Warrior</p>
              </div>
              <div className="carouselRowWidth">
                  <img src="https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_.jpg" />
                  <p className="legend">Indiana Jones Raiders of the lost ark</p>
              </div>
              
              
          </Carousel>
          
          
      </div>
       

    </>
    
    
  )
}

export default Content