import React from "react"
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