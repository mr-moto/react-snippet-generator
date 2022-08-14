const fs = require("fs");
const mkdirp = require("mkdirp");
const snippets = require("../snippets");
const prettier = require("prettier");

const { cosmiconfigSync } = require("cosmiconfig");

module.exports.createFile = async (name, options, dir) => {
  const { ts } = options;

  const explorerSync = cosmiconfigSync("rsg");
  const { config } = explorerSync.search();

  const componentName = name.charAt(0).toUpperCase() + name.slice(1);

  const extx = ts ? "tsx" : "jsx";
  const ext = ts ? "ts" : "js";

  const componentDir = {
    js: `${process.cwd()}/${
      config[dir]?.path ?? `src/${dir}`
    }/${componentName}`,
    ts: `${process.cwd()}/${
      config[dir]?.path ?? `src/${dir}`
    }/${componentName}`,
  };

  if (fs.existsSync(`${componentDir[ext]}`)) {
    console.log(`${componentName} component directory already exists`);
    return false;
  }
  try {
    await mkdirp(componentDir[ext]);

    const prettierOptions = (await prettier.resolveConfig(
      `${componentDir[ext]}/${componentName}.${ext}`
    )) || {
      singleQuote: true,
    };

    prettierOptions.filepath = `${componentDir[ext]}/${componentName}.${extx}`;

    const fc = await prettier.format(
      snippets[ext](componentName).fc,
      prettierOptions
    );
    const index = await prettier.format(
      snippets[ext](componentName).index,
      prettierOptions
    );

    fs.writeFileSync(`${componentDir[ext]}/${componentName}.${extx}`, fc);
    fs.writeFileSync(`${componentDir[ext]}/index.${ext}`, index);
  } catch (error) {
    console.log(error);
    return false;
  }

  return true;
};
