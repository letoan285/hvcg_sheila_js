
// interface IProduct {
//     id: number;
//     name: string;
//     price: number;
//     image: string;
// }

export interface IProduct {
    id: number;
    name: string;
    category_id: number;
    price?: number;
    src?: string;
}



// export const products: IProduct[] = [
//     {id: 1 , name: 'ihpnoe', price: 300, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000'},
//     {id: 2, name: 'Iphone 7', price: 500, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000'},
//     {id: 3, name: 'Iphone 12', price: 1500, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000'},
//     {id: 4, name: 'Samsung', price: 567, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000'},
//     {id: 5, name: 'Huawei', price: 234, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000'}
// ];


export const initialProducts: IProduct[] = [
    { id: 1, name: 'Iphone 4', category_id: 1, price: 600, src: 'https://bizc.vn/wp-content/uploads/2020/10/1410-2.jpg' },
    { id: 2, name: 'Iphone 12', category_id: 2, price: 1200, src: 'https://bizc.vn/wp-content/uploads/2020/10/1410-2.jpg' },
    { id: 3, name: 'Iphone 14', category_id: 1, price: 2300, src: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000' },
    { id: 4, name: 'Samsung alaxy', category_id: 4, price: 2300, src: 'https://bizc.vn/wp-content/uploads/2020/10/1410-2.jpg' },
    { id: 5, name: 'Iphone 6', category_id: 3, price: 2300, src: 'https://bizc.vn/wp-content/uploads/2020/10/1410-2.jpg' },
    { id: 6, name: 'Iphone 11', category_id: 3, price: 2300, src: 'https://bizc.vn/wp-content/uploads/2020/10/1410-2.jpg' },
    { id: 7, name: 'Iphone 14', category_id: 1, price: 2300, src: 'https://bizc.vn/wp-content/uploads/2020/10/1410-2.jpg' },
    { id: 8, name: 'Iphone opoo', category_id: 2, price: 2300, src: 'https://bizc.vn/wp-content/uploads/2020/10/1410-2.jpg' },
    { id: 9, name: 'Iphone 14', category_id: 4, price: 2300, src: 'https://bizc.vn/wp-content/uploads/2020/10/1410-2.jpg' },
    { id: 10, name: 'Huawei', category_id: 4, price: 2300, src: 'https://bizc.vn/wp-content/uploads/2020/10/1410-2.jpg' },
    { id: 11, name: 'Iphone 14', category_id: 2, price: 2300, src: 'https://bizc.vn/wp-content/uploads/2020/10/1410-2.jpg' },
    { id: 12, name: 'Brack Berry', category_id: 3, price: 2300, src: 'https://bizc.vn/wp-content/uploads/2020/10/1410-2.jpg' },
    { id: 13, name: 'Iphone 14', category_id: 2, price: 2300, src: 'https://bizc.vn/wp-content/uploads/2020/10/1410-2.jpg' },
    { id: 14, name: 'Huawei x5', category_id: 1, price: 2300, src: 'https://bizc.vn/wp-content/uploads/2020/10/1410-2.jpg' }
];

export const categories = [
    {id: 1, slug: 'mobile', name: 'Mobile', sort_order: 1},
    {id: 2,  slug: 'desktop', name: 'Desktop', sort_order: 2},
    {id: 3,  slug: 'laptop', name: 'Laptop', sort_order: 3},
    {id: 4,  slug: 'home-stuffs', name: 'Home Stuffs', sort_order: 4}
];