/* eslint-disable react-hooks/rules-of-hooks */

import { useSelector } from "react-redux"
import GridLayout from "./GridLayout"
import withLoading from "./WrappedComponent"
import { useMemo } from "react"

const Wrapper = withLoading(GridLayout)
function HeaderDD() {
    const products = useSelector((state) => state.product)
    // eslint-disable-next-line no-unused-vars
    const unique = useMemo(() => {
        if (!products.products) return []
        return Array.from(new Set(products.products.map(product => product.category)))
    }, [products.products])
    console.log(unique);
    return <Wrapper loading={products.loading} products={products.products} unique={unique} />
}
export default HeaderDD