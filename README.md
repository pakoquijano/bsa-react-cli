## Instalation
```
npm install -g bsa-react-cli
```

This will add a bsa-cli into your terminal, command line and you will be able to call it from your project root.
 
######Available comands:
Type bsa-cli --help

```
  Options:

    -h, --help                   output usage information
    -V, --version                output the version number
    -c, --component [component]  name of your Component
    -s, --stateless [stateless]  name of your dumb component
    -o, --container [container]  name of your container
    -d, --ducks     [ducks]      name of the duck feature
    -p, --path      [path]       path for the generated structure [module|component]

```
I don't recommend setting the path option as the scripts use a commonly accepted approach.

### Examples

#### Guided Component creation 
```
$ bsa-cli                                             
  ____ ____    _      __  __       ____ _____    ____ _     ___ 
 | __ ) ___|  / \    |  \/  |_   _/ ___|_   _|  / ___| |   |_ _|
 |  _ \___ \ / _ \   | |\/| | | | \___ \ | |   | |   | |    | | 
 | |_) |__) / ___ \  | |  | | |_| |___) || |   | |___| |___ | | 
 |____/____/_/   \_\ |_|  |_|\__, |____/ |_|    \____|_____|___|
                             |___/                              
Enter the name of component *: SuperComponent
Optional path, we recommend to leave blank(will default to /src/[components]):
Creating src/components/SuperComponent
Creating src/components/SuperComponent/index.js
Creating src/components/SuperComponent/SuperComponent.jsx
Creating src/components/SuperComponent/messages.js
Creating src/components/SuperComponent/style.less
Get a cofee and enjoy the time you saved :)!

```
#### Command Component creation 

```
$ bsa-cli -c Button                                             

Creating src/components/button
Creating src/components/button/index.js
Creating src/components/button/button.jsx
Creating src/components/button/messages.js
Creating src/components/button/style.less
Get a cofee and enjoy the time you saved :)!

```
#### Custom Path

```
$ bsa-cli -c HomePage -p src/layouts                                             

Creating src/layouts/HomePage
Creating src/layouts/HomePage/index.js
Creating src/layouts/HomePage/HomePage.jsx
Creating src/layouts/HomePage/messages.js
Creating src/layouts/HomePage/style.less
Get a cofee and enjoy the time you saved :)!

```
#### Containers 
```
$ bsa-cli -o CountrySelect                                            
                           
Creating src/containers/CountrySelect
Creating src/containers/CountrySelect/index.js
Creating src/containers/CountrySelect/container.js
Get a cofee and enjoy the time you saved :)!

```

#### Store Feature Duck
```
$ bsa-cli -d SearchPerson                                            
                           
Creating src/store/features/SearchPerson
Creating src/store/features/SearchPerson/index.js
Creating src/store/features/SearchPerson/actions.js
Creating src/store/features/SearchPerson/reducers.js
Creating src/store/features/SearchPerson/thunks.js
Creating src/store/features/SearchPerson/types.js

```
### Changing templates
If you clone, or fork the repo. You will find a src folder. The logic here is simple:
######The templates folder
Plain js files with export a function. The function accepts the name received from the CLI and returns a string
 
 After you adjusted the templates, you will need to compile ES6 to ES5, there is already a Babel script ready for you.
 
 ``` 
 npm run babelCompile
 ```
 
 Your new setup is ready to be used. You can adjust the command line 
 name in the package.json file. You can change react-cli to whatever you 
 like until the name is not used on your system. You have more options here, you can either 
 compile and run npm link. This will replace the globally installed version with your local, or 
 change the command name to something project specific and run ***npm install -g***. Or you can add an 
 npm script to run it from your project. As you wish :)
 
#### @TODO
- I welcome any suggestions, forks or pull requests :)
- This could be useful to created unit test files if we use some in the future ;)

## LICENCE 
Copyright for portions of project Foo are held by Julius Koronci, 2017 react-bash-scritps as part of project Bar. All other copyright for project Foo are held by Francisco Quijano, 2018].