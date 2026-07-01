# API RESTful

## Create Product
method: POST
endpoint: /api/products
body:
```{
    "name": "Product 1",
    "description": "Description of product 1",
    "price": 100,
    
}
```
status: 201

## Error Create Product
method: POST
endoint: /api/products
body:
``json
{
    "name": "Product 1",
}

response:
```json
{
    "error": "El campo price es requerido"
}
```
status: 400
## Get All Products
