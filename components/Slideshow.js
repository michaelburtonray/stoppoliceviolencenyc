import React from 'react';

export default class Slideshow extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentSlideIndex: 0
    }

    this.goToNext = this.goToNext.bind(this);
  }

  componentDidMount() {
    setInterval(()=> {
      this.goToNext();
    }, 4800);
  }

  goToNext() {
    const { currentSlideIndex } = this.state;
    const slidesLength = this.props.fields.slides.length;

    if(currentSlideIndex + 1 < slidesLength) {
      this.setState({currentSlideIndex: currentSlideIndex +  1})
    } else {
      this.setState({currentSlideIndex: 0})
    }
  }

  render() {
    const { currentSlideIndex } = this.state;
    const { slides } = this.props.fields;

    if(slides && slides.length > 0) {
      return (
        <div className="slideshow">
          {slides.map( (slide, idx) => {
            return (
              <div data-index={idx} key={slide.sys.id} className={idx === currentSlideIndex ? `current slide` : `slide`}>
                <div className="slide-image-wrapper">
                  <img src={slide.fields.file.url} alt={slide.fields.title} />
                </div>
                <div className='caption'>
                  <div className="caption__inner">{slide.fields.description}</div>
                </div>
              </div>
            )
          })}
          <style jsx>{`
            .slideshow {
              position: relative;
            }
            .slide {
              display: grid;
              grid-template-columns: 1fr 1fr;
              opacity: 0;
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              transition: opacity var(--slow);
            }
            .slide:first-child {
              position: relative;
            }
            .current.slide {
              opacity: 1;
              z-index: -1;
              transition: none;
            }
            .slide-image-wrapper {
              margin-right: -100%;
            }
            .slide-image-wrapper img {
              display: block;
              width: 100%;
            }
            .caption {
              background: rgba(1,51,60,.5);
              box-sizing: border-box;
              color: #f7ebe3;
              display: flex;
              font: 12px/1 Montserrat;
              justify-content: center;
              margin-left: -100%;
              padding: 0 var(--gutter);
            }

            @media (min-width: 480px) {
              .caption {
                font-size: 24px;
              }
            }

            @media (min-width: 768px) {
              .caption {
                font-size: 45px;
              }
            }

            .caption__inner {
              align-self: center;
              max-width: 100%;
              text-align: center;
            }
          `}</style>
        </div>
      )
    } else {
      return null;
    }
  }
}
