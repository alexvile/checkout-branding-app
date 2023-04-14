const GET_CHECKOUT_LIST = `#graphql
  query getCheckoutList {
    checkoutProfiles(first: 250) {
      nodes {
        id
        name
      }
    }
  }
`;

const GET_CHECKOUT_SETTINGS = `#graphql
  query getCheckoutSettings($checkoutProfileId: ID!) {
    checkoutBranding(checkoutProfileId: $checkoutProfileId) {
      customizations {
        checkbox {
          cornerRadius
        }
        control {
          border
          color
          cornerRadius
          labelPosition
        }
        favicon {
          image {
            ...imageFields
          }
        }
        global {
          cornerRadius
          typography {
            kerning
            letterCase
          }
        }
        header {
          alignment
          banner {
            image {
              ...imageFields
            }
          }
          logo {
            image {
              ...imageFields
            }
            maxWidth
          }
          position
        }
        headingLevel1 {
          typography {
            ...typographyFields
          }
        }
        headingLevel2 {
          typography {
            ...typographyFields
          }
        }
        headingLevel3 {
          typography {
            ...typographyFields
          }
        }
        main {
          backgroundImage {
            image {
              ...imageFields
            }
          }
        }
        merchandiseThumbnail {
          border
          cornerRadius
        }
        orderSummary {
          backgroundImage {
            image {
              ...imageFields
            }
          }
        }
        primaryButton {
          ...buttonFields
        }
        secondaryButton {
          ...buttonFields
        }
        select {
          border
          typography {
            ...typographyFields
          }
        }
        textField {
          border
          typography {
            ...typographyFields
          }
        }
      }
      designSystem {
        colorPalette {
          canvas {
            ...colorFields
          }
          color1 {
            ...colorFields
          }
          color2 {
            ...colorFields
          }
          critical {
            ...colorFields
          }
          interactive {
            ...colorFields
          }
          primary {
            ...colorFields
          }
        }
        cornerRadius {
          base
          small
          large
        }
        typography {
          primary {
            ...fontGroupFields
          }
          secondary {
            ...fontGroupFields
          }
          size {
            base
            ratio
          }
        }
      }
    }
  }

  fragment typographyFields on CheckoutBrandingTypographyStyle {
    font
    kerning
    letterCase
    size
    weight
  }

  fragment imageFields on Image {
    altText
    url
  }

  fragment buttonFields on CheckoutBrandingButton {
    background
    blockPadding
    border
    cornerRadius
    inlinePadding
    typography {
      ...typographyFields
    }
  }

  fragment colorFields on CheckoutBrandingColorGroup {
    accent
    background
    foreground
  }

  fragment fontGroupFields on CheckoutBrandingFontGroup {
    base {
      sources
      weight
    }
  }
`;

export { GET_CHECKOUT_LIST, GET_CHECKOUT_SETTINGS };
