const http = require('http');
const httpie = require('httpie');
const JSDOM = require('jsdom').JSDOM;
const Port = process.env.PORT || 8888;

const server = http.createServer(async (request, response) => {

  const [ _, username, usePledges ] = request.url.split("/");

  if (!username) {
    
    response.writeHead(500, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({"error": 'username must be set.'}));
    return;

  }

  const { data } = await httpie.get('https://patreon.com/' + username);

  const { document } = (new JSDOM(data)).window;

  const message = (usePledges) ? document.querySelector('[data-tag="CampaignPatronEarningStats-earnings"] h2').innerHTML + "/mo" : document.querySelector('[data-tag="CampaignPatronEarningStats-patron-count"] h2').innerHTML + " patrons";

  const res = {
    schemaVersion: 1,
    label: "Patreon",
    namedLogo: "Patreon",
    message: message,
    color: "FFFFFF", // FF5441
    logoColor: "FFFFFF",
    cacheSeconds: 300
  };

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(res));
  response.end();
  
});

server.listen(Port);
console.log("Listening on port", Port);
