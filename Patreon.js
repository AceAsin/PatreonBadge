const Axios = require('axios').default;
const Readline = require('readline');

const RL = Readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Prompt() {

  RL.question('Patreon Username: ', (username) => {
    Axios.get(`https://www.patreon.com/${username}`)
      .then(({ data }) => {
        const Data = JSON.parse(data.split('Object.assign(window.patreon.bootstrap, ').pop().split(');').shift());
        if ('campaign' in Data) {
          console.log(`Campaign ID: ${Data.campaign.data.id}`);
        }
        else {
          throw { response: { status: 400, statusText: 'Bad Request' } };
        }
      })
      .catch(({ response }) => {
        console.error(`${response.status} ${response.statusText}`);
      })
      .finally(() => {
        Prompt();
      });
  });

}

Prompt();
