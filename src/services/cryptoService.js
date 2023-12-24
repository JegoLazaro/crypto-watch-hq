import axios from "axios";
import moment from "moment";

axios({
    method: 'get',
    url: 'https://api.coingecko.com/api/v3/search/trending',
    responseType: 'stream'
  })
    .then(function (response) {
      response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });