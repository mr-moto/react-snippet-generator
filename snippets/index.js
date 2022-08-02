module.exports.js = (name) => {
  return {
    index: `export { ${name} } from './${name}';`,
    fc: `export const ${name} = () => {
            return (
              <div>${name}</div>
            )
          }
    `,
  };
};

module.exports.ts = (name) => {
  return {
    index: `export { ${name} } from './${name}';`,
    fc: `type Props = {}

          const ${name} = (props: Props) => {
              return (
                  <div>${name}</div>
              )
          }
    `,
  };
};
