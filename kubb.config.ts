import { defineConfig } from "@kubb/core";
import { pluginReactQuery } from "@kubb/plugin-react-query";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginClient } from "@kubb/plugin-client";
import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig(() => {
  const docsUrl = process.env.VITE_DOCS_URL as string;
  const outputPath = process.env.VITE_OUTPUT_PATH as string;
  const clientPath = process.env.VITE_CLIENT_PATH;

  console.log(docsUrl, outputPath, clientPath);
  return {
    root: ".",

    input: {
      path: docsUrl,
    },
    output: {
      path: outputPath,
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
          importPath: clientPath,
        },
      }),
    ],
  };
});
