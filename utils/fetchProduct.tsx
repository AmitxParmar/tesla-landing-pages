import React from 'react'

type Props = {}

export async function fetchProduct(slug: { slug: string }) {
    const productsResponse = await fetch(
        `http://localhost:3000/api/product/${slug}`
    );
    const productsData = await productsResponse.json();

    return productsData;
}