## Présentation du projet
***

Application MERN de test d'un site de réseau social fictif avec authentification, gestion des likes et light/dark mode (techno: Typescript, React, Redux Toolkit, MUI, Node & Express, MongoDB, Mongoose, JWT)

Le client du projet a été initialisé avec le starter de la CLI [Create React App](https://github.com/facebook/create-react-app).


## 🚀 Installation du projet
***

- récupération du projet sur Github par HTTPS :

```shell script
$ git clone https://github.com/tony-dugue/real-you.git
```

- aller dans le dossier client et installer les packages du front :
```bash
npm install
# ou
yarn install
```

- aller dans le dossier server et installer les packages du back :
```bash
npm install
# ou
yarn install
```

- dans le dossier server, à la racine, créer un fichier .env avec ce contenu (remplacer les données de connexion xxxx à une base de données MongoDB) et la clé pour JWT

[Lien pour créer une bdd MongoDB](https://www.mongodb.com/cloud)

```bash
MONGO_URL='mongodb+srv://xxxx:xxxx@xxxx.mongodb.net/?retryWrites=true&w=majority'
JWT_SECRET='xxxxx'
PORT=3001
```

## Démarrer l'application
***
Pour démarrer le serveur de développement (à la racine du projet dans le dossier server) :
```bash
npm run dev
# ou
yarn dev
```

***
Pour démarrer le projet dans le navigateur (à la racine du projet dans le dossier client) :
```bash
npm run start
# ou
yarn start
```

Le projet sera visible dans le navigateur à l'adresse (en mode développeur) :
[http://localhost:3000](http://localhost:3000)

(la page se rechargera lors des modifications.
Les lint Errors seront visible dans le terminal.)

## Mise en production
***

Préparer le projet pour le déploiement (dans le dossier client) :

```bash
npm run build
# ou
yarn build
```

## Ressources utilisées dans le projet
***

### Librairies utilisées côté client :
</br>

React UI Tools : [Material UI](https://mui.com/material-ui/getting-started/installation/)<br />
Router : [react-router](https://reactrouter.com) <br />
State manager : [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started) <br />
Redux Persist: [Redux Persist](https://github.com/rt2zz/redux-persist) <br />
React Dropzone: [React Dropzone](https://react-dropzone.js.org/) <br />
Google Fonts: [Google Fonts](https://fonts.google.com/) <br />
Formik: [Formik](https://formik.org/docs/overview) <br />
Yup: [Yup](https://github.com/jquense/yup) <br />
</br>
### Librairies utilisées côté back :
</br>

Runtime: [NodeJS](https://nodejs.org/en/download/) <br />
Framework API : [ExpressJS](https://expressjs.com/fr) <br />
Hot reload du serveur Express: [Nodemon](https://github.com/remy/nodemon) <br />
Dotenv: [Dotenv](https://github.com/motdotla/dotenv) <br />
Base de données: [MongoDB](https://www.mongodb.com/) <br />
ORM: [Mongoose](https://github.com/Automattic/mongoose) <br />
JWT: [JsonWebToken](https://github.com/auth0/node-jsonwebtoken) <br />
Upload de fichiers: [Multer](https://github.com/expressjs/multer) <br />
Stockage des fichiers: [GridFS-Storage](https://github.com/devconcept/) et [multer-gridfs-storage](https://github.com/devconcept/multer-gridfs-storage ) <br />

