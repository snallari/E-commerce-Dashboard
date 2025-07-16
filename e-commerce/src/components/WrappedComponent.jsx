import React from "react"
// eslint-disable-next-line no-unused-vars
const withLoading = (ChildComponent) => {
    return function WithLoadingComponent(props) {
        const { loading, ...restProps } = props;
        if (loading) {
            return <div>Loading</div>;
        }
        return <ChildComponent {...restProps} />;
    }
}


export default withLoading