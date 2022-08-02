const fs = require("fs");
const mkdirp = require("mkdirp");
const snippets = require("../snippets");
const prettier = require("prettier");

module.exports.createFile = async (name, options, dir) => {
  const { ts } = options;
  const componentName = name.charAt(0).toUpperCase() + name.slice(1);
  const componentDir = `${process.cwd()}/src/${dir}/${componentName}`;
  const extx = ts ? "tsx" : "jsx";
  const ext = ts ? "ts" : "js";

  if (fs.existsSync(`${componentDir}`)) {
    console.log(`${componentName} component directory already exists`);
    return false;
  }
  try {
    await mkdirp(componentDir);
    const prettierOptions = (await prettier.resolveConfig(
      `${componentDir}/${componentName}.${ext}`
    )) || {
      singleQuote: true,
    };

    prettierOptions.filepath = `${componentDir}/${componentName}.${extx}`;

    const fc = await prettier.format(
      snippets[ext](componentName).fc,
      prettierOptions
    );
    const index = await prettier.format(
      snippets[ext](componentName).index,
      prettierOptions
    );

    fs.writeFileSync(`${componentDir}/${componentName}.${extx}`, fc);
    fs.writeFileSync(`${componentDir}/index.${ext}`, index);
  } catch (error) {
    console.log(error);
    return false;
  }

  return true;
};
