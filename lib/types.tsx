export interface RecommendedTypes {
    image : string
    amount : string
    name : string
}
export interface ProductsType {
    name : string
    price : number
    category : string
    image : string 
    stock : number
    description : string
    recent : boolean
    sold : number
    rating : number
    tag : string
}
export type ChooseType = {
    icon: React.ReactNode;
    heading: string;
    text: string;
}