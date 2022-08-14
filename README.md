# React Snippet Generator (RSG)
RSG is a CLI tool that generates boilerplate react components.


## Install
```sh
npm i -D @mr-moto/react-snippet-generator
yarn -D @mr-moto/react-snippet-generator
pnpm i -D @mr-moto/react-snippet-generator
```

## Config
Include a .rsgrc ( or another cosmiconfig format file ) at the root of your project directory. 

You can set a custom path for the generated components in this file

```sh
{
  components: {
    path: 'src/custom_path_here'
  },
  pages: {
    path: 'src/custom_path_here'
  }
}
```


## Usage
```sh
npx rsg [command] <name>
```


### Examples
```sh
npx rsg component button
npx rsg page AboutUs
npx rsg c input -t
```


### Commands


#### `component` (`c`)
creates a react component in the src/components directory
```sh
npx rsg component <name> [options]
npx rsg c <name> [options]
```


##### arguments
| argument | required | description |
| -------- | -------- | ----------- |
| `<name>` | yes      | name of the component. RSG will automatically capitalize the first letter |


##### options
| option | alias | required | description |
| ------ | ----- | -------- | ----------- |
| `--ts` | `-t`  | no       | generates a react ts component |


#### `page` (`p`)
creates a react component in the src/page directory
```sh
npx rsg page <name> [options]
npx rsg p <name> [options]
```



##### arguments
| argument | required | description |
| -------- | -------- | ----------- |
| `<name>` | yes      | name of the component. RSG will automatically capitalize the first letter |


##### options
| option | alias | required | description |
| ------ | ----- | -------- | ----------- |
| `--ts` | `-t`  | no       | generates a react ts component |
