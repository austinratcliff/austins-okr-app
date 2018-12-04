const express = require('express');
const app = express();
const Intercom = require('intercom-client');
const client = new Intercom.Client({ token: process.env.INTERCOM });

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.get('/', (request, response) => {
  response.sendFile(__dirname + 'index.html');
});

const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.post('/initialize', (request, response) => {
  const body = request.body;
  response.send({
    canvas: {
      content: {
        components: [
          {
            id: 'text',
            type: 'text',
            text: 'Rate your conversation again',
            style: 'header',
            align: 'center'
          },
          {
            type: 'single-select',
            id: 'single-select',
            options: [
              {
                type: 'option',
                id: '1',
                text: '😠'
              },
              {
                type: 'option',
                id: '2',
                text: '🙁'
              },
              {
                type: 'option',
                id: '3',
                text: '😐'
              },
              {
                type: 'option',
                id: '4',
                text: '😃'
              },
              {
                type: 'option',
                id: '5',
                text: '😍'
              }
            ],
            action: {
              type: 'submit'
            }
          }
        ],
      },
    },
  });
});

app.post('/submit', (request, response) => {
  const body = request.body;
  const conversationId = body['context']['conversation_id'];
  let newConversationRating = body['input_values']['single-select'];

  client.conversations.find({ id: conversationId }, (response) => {
    let initialConversationRating = response['body']['conversation_rating']['rating'];
    let message;
    
    initialConversationRating = intToEmoji(initialConversationRating);
    newConversationRating = intToEmoji(newConversationRating);
    
    if(newConversationRating > initialConversationRating){
      message = 'Awesome! You made them happier! 🎉';
    }else if(newConversationRating == initialConversationRating){
      message = 'At least you tried... 🙃';
    }else{
      message = '🚨NEEDS IMMEDIATE IMPROVEMENT!';
    }

    const reply = {
      id: conversationId,
      type: 'admin',
      message_type: 'note',
      admin_id: '1816610',
      body: `Your previous conversation rating was ${initialConversationRating}.\nYour new rating is ${newConversationRating}.\n\n${message}`
    };

    client.conversations.reply(reply);
  });

  response.send({
    canvas: {
      content: {
        components: [
          {
            id: 'text',
            type: 'text',
            text: 'Thanks!',
            style: 'header',
            align: 'center'
          },
        ],
      },
    },
  });
});

function intToEmoji(variable){
  if(variable == 1){
    return '😠';
  }else if(variable == 2){
    return '🙁';
  }else if(variable == 3){
    return '😐';
  }else if(variable == 4){
    return '😃';
  }else if(variable == 5){
    return '😍';
  }else{
    return 'nothing';
  }
}