# Mercado Libre - Quasar API

Repository that stores the source code for the Quasar api.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them:

- Install [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Install [Yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable)
  ```
  npm install --global yarn
  ```
- Install [Serverless](https://www.serverless.com/)

  ```
  yarn global add serverless
  ```

- Install [Git](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Instalaci%C3%B3n-de-Git)

### Installing

A step by step series of examples that tell you how to get a development env running

- **Step 1**: Clone project from github repository on your local enviroment

```
git clone https://github.com/IrwinVargas/quasar_mercadolibre
```

- **Step 2**: Install dependencies

```
yarn
```

- **Step 3**: Start enviroment File. Copy .env.example file with a new file called .env.

```
cp ".env.example" ".env"
```

now, set values for every enviroment variable

- **Step 4**: Start local enviroment

```
yarn dev
```

**Note**: This project is enabled, any change can harm the event.

## Api key

When you run, you can se the documentation site type in the browse:

- http://localhost:5000/api-docs/

## Deployment

To deploy, Just need to push all your changes in the master branch 

```
git push origin master
```

Wait a momment and you can verify if your changes was applied in the next URL:

- http://envquasar.eba-i6em3i6w.us-east-1.elasticbeanstalk.com/

## Built With

- [NODEJS]() - The open source server environment used
- [Yarn]() - Dependency Management
- [NPM]() - Dependency Management
- [AWS EB]() - Used to manage AWS EC2 instances

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/IrwinVargas/quasar_mercadolibre/tags).

## Authors

- **Irwin Vargas** - _Initial work_ - Jul 6, 2021
  See also the list of [contributors](https://github.com/IrwinVargas/quasar_mercadolibre/contributors) who participated in this project.

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- aws
