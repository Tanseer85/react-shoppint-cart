export const removeProduct = (productId) => {
 
    return {
        type: 'REMOVE_PRODUCT',
        payload: {
            productId: productId
        }
    }
};