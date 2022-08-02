export const js = (name: string) => {
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

export const ts = (name: string) => {
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
