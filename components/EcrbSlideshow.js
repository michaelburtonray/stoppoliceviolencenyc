import React from 'react'

function EcrbSlideshow({fields}) {
  const { slides } = fields;
  const slickSettings = {
    arrows: false,
    dots: false,
    fade: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  if(slides && slides.length > 0) {
    return (
      <div>
        {
          slides.map( (slide, idx) => {
            return (
              <div data-index={idx} key={slide.sys.id} className="ecrb-slide">
                <img src={slide.fields.file.url} alt={slide.fields.title} />
                <div className='slick-slide__caption'>
                  <div className="description">{slide.fields.description}</div>
                </div>
              </div>
            )
          })
        }
        <style jsx>{`
          .ecrb-slide {
            background: red;
          }
          .ecrb-slide img {
            display: block;
            margin: auto;
            width: 100%;
          }
          .slick-slide__caption {
            align-items: center;
            background: rgba(1,51,60,.5);
            bottom: 0;
            color: #f7ebe3;
            display: flex;
            flex-direction: column;
            font: 1.5em/1 Montserrat;
            justify-content: center;
            left: 0;
            padding: 0 1em;
            pointer-events: none;
            position: absolute;
            right: 0;
            text-align: center;
            top: 0;
          }
          .description {
            font-size: 45px;
          }
        `}</style>
      </div>
    )
  } else {
    return null;
  }
}

export default EcrbSlideshow
