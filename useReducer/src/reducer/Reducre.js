
export const ProducteReduser=(state,action)=>{
 switch (action.type) {
    case 'PRICE':
        return {...state,
            Price: action.payload
              } 
                 case 'QUNATITY':
            return {
               ...state,
                 Quantity:action.payload
            
                   }  

                    case 'DISCOUNT':
            return {
                ...state,
                 Discount:action.payload
            
                   }  
    default:
        state;
 }

 }