
const ratioMock = `
/**
 * Create ratio-bound content blocks, to keep media (e.g. images, videos) in
 * their correct aspect ratios.
 *
 * http://alistapart.com/article/creating-intrinsic-ratios-for-video
 *
 * 1. Default is a 1:1 ratio (i.e. a perfect square).
 */

.o-ratio {
  position: relative;
  display: block;

  &:before {
    content: "";
    display: block;
    width: 100%;
    padding-bottom: 100%; /* [1] */
  }

}

  .o-ratio__content,
  .o-ratio > iframe,
  .o-ratio > embed,
  .o-ratio > object {
    position: absolute;
    top:    0;
    bottom: 0;
    left:   0;
    height: 100%;
    width:  100%;
  }

/* Ratio variants.
   ========================================================================== */

/**
 * Generate a series of ratio classes to be used like so:
 *
 *   <div class="o-ratio  o-ratio--golden-ratio">
 *
 */


   
    .o-ratio--2\\:1:before {
      padding-bottom:  50%;
    }
    .o-ratio--4\\:3:before {
      padding-bottom:  75%;
    }
    .o-ratio--16\\:9:before {
      padding-bottom:  56.25%;
    }

/* Contain modifier.
   ========================================================================== */

/**
 * Only works with image content.
 * Contains the image to the boundaries, without cropping or stretching it.
 */

.o-ratio--img-contain > .o-ratio__content:before {
    height: auto;
    margin: auto;
    max-height: 100%;
    max-width: 100%;
    width: auto;
  }

}
`;

export default ratioMock;
