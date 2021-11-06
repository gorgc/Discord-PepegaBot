import { Command } from "../../Interfaces";

export const command: Command = {
  name: "ping",
  run: async (client, message, _) => {
    await message.channel.send(
      `${client.user.username}: ${client.ws.ping}ms ping!`
    );
  },
};
