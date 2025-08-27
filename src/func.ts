export const updateAudco_usdt = async () => {
  return fetch('https://api.daexglobal.com/pc/exchange/24hr/statistics?coin=AUDCO&quote_unit=USDT')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .catch(error => {
      throw error;
    });
}

export const updateBnb = async () => {
  return fetch('https://api.daexglobal.com/pc/exchange/24hr/statistics?coin=BNB&quote_unit=USDT')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .catch(error => {
      throw error;
    });
}

export const updateAudcoAudSell = async () => {
  return fetch('https://bapi.gdwallet.cc/chain/realtime/price?coin=AUDCO&currency=AUD')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .catch(error => {
      throw error;
    });
}

export const updateUsdt = async () => {
  return fetch('https://bapi.gdwallet.cc/chain/realtime/price?coin=USDT&currency=AUD')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .catch(error => {
      throw error;
    });
}

// export const updateAudcoAudBuy = async () => {
//   return fetch('https://bapi.gdwallet.cc/chain/realtime/price?coin=AUDCO&currency=AUD')
//     .then(response => {
//       if (!response.ok) throw new Error('Network response was not ok');
//       return response.json();
//     })
//     .catch(error => {
//       throw error;
//     });
// }