import React from "react"
const withLoading = (WrappedComponent) => {
    return function WithLoadingComponent(props) {
        const { loading, ...restProps } = props;
        if (loading) {
            return <div>Loading</div>;
        }
        return <WrappedComponent {...restProps} />;
    }
}

export default withLoading