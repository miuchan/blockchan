import btcstats from 'btc-stats';

function getBtcPrice() {
  return new Promise(resolve => {
    btcstats.avg((err, resp) => {
      if (err) {
        throw err;
      }
      return resolve(resp.price);
    });
  });
}

export function changeNumByUnit(num, unit) {
  if (unit === 'usd') {
    return num * getBtcPrice();
  }
  if (unit === 'mbtc') {
    return (num * 1000).toFixed(5);
  }
  if (unit === 'bits') {
    return (num * 1000000).toFixed(2);
  }

  return num;
}
