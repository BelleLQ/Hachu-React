import {createContext} from "react"


const CategoryContext = createContext([{
    "categoryName": "",
    "photoUrl": [],
    "categoryDesc":""
}]);

export default CategoryContext;