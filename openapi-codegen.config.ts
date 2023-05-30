import { generateReactQueryComponents, generateSchemaTypes } from "@openapi-codegen/typescript";
import { defineConfig } from "@openapi-codegen/cli";

/***
 * @Note This doesn't work due to NextJS SWC. Until it is supported.
 * Delete .swcrc, run `generate:api` script and then restore the .swcrc
 * after wards
 *
 * @author Joseph Julius Owonvwon
 */
export default defineConfig({
  petStore: {
    from: {
      relativePath: "./api-doc.yaml",
      source: "file",
    },
    outputDir: "core/api",
    to: async (context) => {
      const filenamePrefix = "petStore";
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });
      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },
});
