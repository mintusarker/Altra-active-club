// use local storage to manage  data
const localStorageData = time =>{
    let setData = {};

    //get the data from local storage
    const storedData = localStorage.getItem("Time");
    if(storedData){
        setData = JSON.parse(storedData);
    }

    // add Time
    const toTime = setData[time];
    if(toTime){
        const newToTime = toTime + 1;
        setData[time] = newToTime;
    }
    else{
        setData[time] = 1;
    }
    localStorage.setItem('Time', JSON.stringify(setData));
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

export {
   localStorageData,
   removeFromDb
  }

