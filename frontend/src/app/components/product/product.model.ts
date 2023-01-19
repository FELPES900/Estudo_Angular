export interface Product{
    B1_COD: String,
    B1_DESC: String,
    B1_TIPO: String,
    B1_UM: String,
    B1_LOCPAD: String,
    B1_GARANT: String
}

export interface ProductContainer{
    Produtos: Product[]
}