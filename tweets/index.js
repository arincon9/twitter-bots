var Twit = require("twit");

var bot = new Twit({
  consumer_key: process.env.
    LEARNINGBOT_CONSUMER_KEY,
  consumer_secret: process.env.
    LEARNINGBOT_CONSUMER_SECRET,
  access_token: process.env.
    LEARNINGBOT_ACCESS_TOKEN,
  access_token_secret: process.env.
    LEARNINGBOT_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000
});

function getBotTimeline(){
  bot.get("statuses/home_timeline", { count: 10},
    function(err, data, response){
      if(err){
        console.log(err);
      }else{
        data.forEach(function(d){
          console.log(d.text);
          console.log(d.user.screen_name);
          console.log(d.id_str);
          console.log("\n");
        });
      }
  });
}

bot.post("statuses/update", {status: "",
  in_reply_to_status_id: ""},
  function(err, data, response){
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});
