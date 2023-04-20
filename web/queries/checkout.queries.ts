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
    id
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
    bold {
    sources
    weight
  }
  name
  }
`;

const SET_CHECKOUT_SETTINGS = `#graphql
  mutation setCheckoutSettings(
    $checkoutBrandingInput: CheckoutBrandingInput!
    $checkoutProfileId: ID!
  ) {
    checkoutBrandingUpsert(
      checkoutBrandingInput: $checkoutBrandingInput
      checkoutProfileId: $checkoutProfileId
    ) {
      checkoutBranding {
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
    userErrors {
      field
      message
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

  fragment colorFields on CheckoutBrandingColorGroup {
    accent
    background
    foreground
  }

  fragment imageFields on Image {
    altText
    url
    id
  }

  fragment fontGroupFields on CheckoutBrandingFontGroup {
    base {
      sources
      weight
    }
    bold {
      sources
      weight
    }
    name
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
`;

export { GET_CHECKOUT_LIST, GET_CHECKOUT_SETTINGS, SET_CHECKOUT_SETTINGS };
