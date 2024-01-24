import { App } from "@slack/bolt";

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
});

app.event("reaction_added", async ({ event, client }) => {
  console.log(event);
  await client.chat.postMessage({
    channel: event.item.channel,
    text: "Hello world!",
  });
});

(async () => {
  try {
    await app.start();
    console.log("Slack bot started!");
  } catch (error) {
    console.error("Unable to start App", error);
    process.exit(1);
  }
})();
