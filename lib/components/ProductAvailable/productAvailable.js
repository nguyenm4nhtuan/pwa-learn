import React, {Fragment} from "react";
import {number}          from "prop-types";

const ProductAvailable = (props) => {
    const {availableQty} = props;
    return (
        <Fragment>
            <p>Available Qty</p>
            <p>{availableQty}</p>
        </Fragment>
    );
};

ProductAvailable.propTypes = {
    availableQty: number.isRequired
}

export default ProductAvailable;
