// use local storage to manage cart data
const localStorageData = time =>{
    let setData = {};

    //get the shopping cart from local storage
    const storedData = localStorage.getItem("Time");
    if(storedData){
        setData = JSON.parse(storedData);
    }

    // add quantity
    const quantity = setData[time];
    if(quantity){
        const newQuantity = quantity + 1;
        setData[time] = newQuantity;
    }
    else{
        setData[time] = 1;
    }
    localStorage.setItem('Time', JSON.stringify(setData));
}

const getstoredData = () =>{
    let setData = {};

    //get the shopping cart from local storage
    const storedData = localStorage.getItem('Time');
    if(storedData){
        setData = JSON.parse(storedData);
    }
    return setData;
}

const removeFromDb = time =>{
    const storedData = localStorage.getItem('Time');
    if(storedData){
        const setData = JSON.parse(storedData);
        if(time in setData){
            delete setData[time];
            localStorage.setItem('Time', JSON.stringify(setData));
        }
    }
}

const deletesetData = () =>{
    localStorage.removeItem('Time');
}

export {
   localStorageData, 
    getstoredData,
    removeFromDb,
    deletesetData
}
