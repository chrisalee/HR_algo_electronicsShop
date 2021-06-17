const getMoneySpent = (keyboards, drives, b) => {
    keyboards.sort((low, high) => low - high);
    drives.sort((low, high) => low - high);
    let mostMoneySpent = 0;
    
    for(let i = 0; i < keyboards.length; i++) {
        for(let j= 0; j < drives.length; j++){
            let comboTotal = keyboards[i] + drives[j];
            console.log("total", comboTotal)
            if(comboTotal > b) {
                continue;
            } else {
                if(comboTotal > mostMoneySpent) {
                    mostMoneySpent = comboTotal;
                } else {
                    continue;
                }
            }
        }
    }
    if(mostMoneySpent == 0) {
        console.log("-1");
        return -1;
    } else {
        console.log(mostMoneySpent);
        return mostMoneySpent;
    }
}
