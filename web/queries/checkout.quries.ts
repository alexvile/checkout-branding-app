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

export { GET_CHECKOUT_LIST };
