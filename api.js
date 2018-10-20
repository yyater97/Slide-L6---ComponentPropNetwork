let rootURL = 'https://api.iextrading.com/1.0';

export default function API(code){
    let url = `${rootURL}/stock/${code}/book`;
    return fetch(url).then(function(response){
        return response.text();
    }).then(function(text){
        let data =  JSON.parse(text);
        return{
            stockIndex: data.quote.latestPrice,
            stockChangeRaw: data.quote.change,
            stockChangePercent: data.quote.changePercent
        };
    });
}