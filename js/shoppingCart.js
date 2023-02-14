document.getElementById('black-forest-btn').addEventListener('click',function(){

    const inputQty = getValuFronInputField('black-forest-qty');
    const blackForestPrice = getInnerTextFronTextField('black-forest-price');
    

  

    const totalBlackForestPrice = blackForestPrice*inputQty;
    setValueById('black-forest-qty',blackForestPrice);

    const blackForestQty = getInnerTextFronTextField('total-black-forest-qty');
    const totalBlackForestQty = blackForestQty +inputQty;
    setValueById('total-black-forest-qty',totalBlackForestQty);


    const blackForest = getInnerTextFronTextField('total-black-forest-price');
    const billingPrice = blackForest +totalBlackForestPrice;
    setValueById('total-black-forest-price',billingPrice);

   
    
})
document.getElementById('cookies-btn').addEventListener('click',function(){

    const inputQty = getValuFronInputField('cookies-qty');
    const cookiesPrice = getInnerTextFronTextField('cookies-price');
    

  

    const totalCookiesPrice = cookiesPrice*inputQty;
    setValueById('cookies-qty',cookiesPrice);

    const cookiesQty = getInnerTextFronTextField('total-cookies-qty');
    const totalCookiesQty = cookiesQty +inputQty;
    setValueById('total-cookies-qty',totalCookiesQty);


    const cookies = getInnerTextFronTextField('total-cookies-price');
    const billingPrice = cookies +totalCookiesPrice;
    setValueById('total-cookies-price',billingPrice);
    
})
document.getElementById('vanilla-cake-btn').addEventListener('click',function(){

    const inputQty = getValuFronInputField('vanilla-cake-qty');
    const vanillaCakePrice = getInnerTextFronTextField('vanilla-cake-price');
    

  

    const totalVanillaCakePrice = vanillaCakePrice*inputQty;
    setValueById('vanilla-cake-qty',vanillaCakePrice);

    const vanillaCakeQty = getInnerTextFronTextField('total-vanilla-cake-qty');
    const totalVanillaCakeQty = vanillaCakeQty +inputQty;
    setValueById('total-vanilla-cake-qty',totalVanillaCakeQty);


    const vanillaCake = getInnerTextFronTextField('total-vanilla-cake-price');
    const billingPrice = vanillaCake +totalVanillaCakePrice;
    setValueById('total-vanilla-cake-price',billingPrice);

   
    
})
document.getElementById('donut-btn').addEventListener('click',function(){

    const inputQty = getValuFronInputField('donut-qty');
    const donutPrice = getInnerTextFronTextField('donut-price');
    

  

    const totalDonutPrice = donutPrice*inputQty;
    setValueById('donut-qty',donutPrice);

    const cookiesQty = getInnerTextFronTextField('total-donut-qty');
    const totalDonutQty = cookiesQty +inputQty;
    setValueById('total-donut-qty',totalDonutQty);


    const donut = getInnerTextFronTextField('total-donut-price');
    const billingPrice = donut +totalDonutPrice;
    setValueById('total-donut-price',billingPrice);

   
    
})