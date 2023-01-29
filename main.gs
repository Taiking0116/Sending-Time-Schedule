const bot = new LineBotSdk.client("チャンネルアクセストークン");
function doPost(e) { bot.call(e, callback) };
function callback(e) {
 if (bot.bool(e, "message", "text")) {
   bot.replyMessage(e, [bot.imageMessage("時間割画像URL")]);
 }
};
