const bot = new LineBotSdk.client("チャンネルアクセストークン");
function doPost(e) { bot.call(e, callback) };
function callback(e) {
 if (bot.bool(e, "message", "text", "明日の時間割")) {
   bot.replyMessage(e, [bot.imageMessage("時間割画像URL")]);
 }
};
