import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import SLider1 from "../../../assets/images/slider/slider-1.jpg";
import SLider2 from "../../../assets/images/slider/slider-2.jpg";

const items = [
  {
    id: 0,
    src: SLider1,
    altText: "We Providing 1",
    caption: `This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
    vel velit auctor aliquet. Aenean sollicitudin, lorem quis
    bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
    nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
    sit amet mauris. Morbi accumsan ipsum velit.`,
  },
  {
    id: 1,
    src: SLider2,
    altText: "We Providing 2",
    caption: `This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
    vel velit auctor aliquet. Aenean sollicitudin, lorem quis
    bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
    nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
    sit amet mauris. Morbi accumsan ipsum velit.`,
  },
  {
    id: 2,
    src: SLider1,
    altText: "We Providing 3",
    caption: `This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
    vel velit auctor aliquet. Aenean sollicitudin, lorem quis
    bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
    nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
    sit amet mauris. Morbi accumsan ipsum velit.`,
  },
  {
    id: 3,
    src: SLider2,
    altText: "We Providing 4",
    caption: `This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
    vel velit auctor aliquet. Aenean sollicitudin, lorem quis
    bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
    nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
    sit amet mauris. Morbi accumsan ipsum velit.`,
  },
];

class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.id}
        >
          <img src={item.src} className="w-100" alt={item.altText} />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.altText}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {/* <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        /> */}
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default MyCarousel;
