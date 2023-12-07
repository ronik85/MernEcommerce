import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import ProductList from '../features/Product-list/ProductList'
export default function HomePage() {
    return (
        <div>
            <Navbar>
                <ProductList />
            </Navbar>
        </div>
    )
}
