const fs = require("fs");
const path = require("path");

function generateOperationsFile() {
  const graphqlDir = path.join(__dirname, "../src/graphql");
  const outputFile = path.join(__dirname, "../src/graphql/operations.ts");

  let operations = [];
  let fileHeader = `// Auto-generated GraphQL operations - DO NOT EDIT MANUALLY
// Run 'npm run generate-operations' to regenerate this file

`;

  // Read mutations
  const mutationsDir = path.join(graphqlDir, "mutations");
  if (fs.existsSync(mutationsDir)) {
    const mutationFiles = fs
      .readdirSync(mutationsDir)
      .filter((f) => f.endsWith(".graphql"));

    mutationFiles.forEach((file) => {
      const content = fs.readFileSync(path.join(mutationsDir, file), "utf8");
      const mutationName = extractOperationName(content, "mutation");
      if (mutationName) {
        const constName = camelToConstant(mutationName);
        operations.push(`export const ${constName} = \`${content.trim()}\`;`);
      }
    });
  }

  // Read queries
  const queriesDir = path.join(graphqlDir, "queries");
  if (fs.existsSync(queriesDir)) {
    const queryFiles = fs
      .readdirSync(queriesDir)
      .filter((f) => f.endsWith(".graphql"));

    queryFiles.forEach((file) => {
      const content = fs.readFileSync(path.join(queriesDir, file), "utf8");
      // Skip comment-only files
      if (content.trim().startsWith("#")) return;

      const queryName = extractOperationName(content, "query");
      if (queryName) {
        const constName = camelToConstant(queryName);
        operations.push(`export const ${constName} = \`${content.trim()}\`;`);
      }
    });
  }

  const finalContent = fileHeader + operations.join("\n\n") + "\n";
  fs.writeFileSync(outputFile, finalContent);

  console.log(`✅ Generated ${operations.length} operations in ${outputFile}`);
}

function extractOperationName(content, type) {
  const regex = new RegExp(`${type}\\s+(\\w+)`, "i");
  const match = content.match(regex);
  return match ? match[1] : null;
}

function camelToConstant(str) {
  return str
    .replace(/([A-Z])/g, "_$1")
    .toUpperCase()
    .replace(/^_/, "");
}

generateOperationsFile();
