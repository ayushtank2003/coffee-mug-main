let selectedCard=null;
function selectCustomerType(type){
    document.getElementById('CustomerType').value=type
    if(selectedCard!=null){
        selectedCard.classList.remove('selected-card')
    }

    selectedCard=document.getElementById(type+'Card');
    selectedCard.classList.add('selected-card');
}

function calculateTotal(){

    const CustomerType=document.getElementById('CustomerType').value;
    const CoffeeType=document.getElementById('CoffeeType').value;
    const CoffeeSize=document.getElementById('CoffeeSize').value;
    const quantity=document.getElementById('quantity').value;

    let price=4;
    switch(CoffeeType){
        
        case 'latte':
            switch(CoffeeSize){
                case 'Small':
                    price=3;
                    break;
                    
                case 'Medium':
                    price=4;
                    break;

                case 'Large':
                    price=5;
                    break;
                default:
                    break;
            }
        
        case 'espresso':
            switch(CoffeeSize){
                case 'Small':
                    price=4;
                    break;


                case 'Medium':
                    price=6;
                    break;

                case 'Large':
                    price=7;
                    break;
                default:
                    break;
            }
         
        case 'mocha':
            switch(CoffeeSize){
                case 'Small':
                    price=3;
                    break;


                case 'Medium':
                    price=6;
                    break;

                case 'Large':
                    price=8;
                    break;
                default:
                    break;
            }
         
    }

    let discount=0;

    switch(CustomerType){
        case 'gold':
            if(quantity>=5){
                discount=0.3;
            }

            else{
                discount=0.2;
            }
            break;
         
        case 'silver':
           
            discount=0.1;
            break;

        case 'regular':
            discount=0.1;
            break;

        default:
            break;
    }
    const totalPrice=price*quantity;
    const discountApplied=totalPrice*discount;
    const finalAmount=totalPrice-discountApplied;
    document.getElementById('totalPrice').innerText=`${totalPrice.toFixed(2)}`
    document.getElementById('discountApplied').innerText=`${discountApplied.toFixed(2)}`
    document.getElementById('finalAmount').innerText=`${finalAmount.toFixed(2)}`
}