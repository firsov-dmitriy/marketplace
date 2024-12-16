import { defineConfig } from "@kubb/core";
import { pluginReactQuery } from "@kubb/plugin-react-query";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginClient } from "@kubb/plugin-client";

export default defineConfig(() => {
  return {
    root: ".",

    input: {
      path: `https://nest-profile-v2.vercel.app/api/docs`,
    },
    output: {
      path: "./src/gen",
      clean: true,
    },
    plugins: [
      pluginClient(),
      pluginTs(),
      pluginOas(),
      pluginReactQuery({
        group: {
          type: "tag",
          name({ group }) {
            return `${group}`;
          },
        },
        output: {
          path: "hooks",
        },
        client: {
          importPath: "../../../../axiosClient.ts",
        },
      }),
    ],
  };
});
