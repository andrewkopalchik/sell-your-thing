export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields:[
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options:{
                hotspot: true,
            }
        },
        {
            name: 'name',
            tittle: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            tittle: 'Slug',
            type: 'slug',
            options:{
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            tittle: 'Price',
            type: 'number'
        },
        {
            name: 'details',
            tittle: 'Details',
            type: 'string',
        }
    ]
}