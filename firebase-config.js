// Configuración web de Firebase (Consola de Firebase > Configuración del proyecto > Tus apps > Web).
// Estos valores NO son secretos: identifican el proyecto. La protección real son el login
// y las reglas de seguridad (archivo firestore.rules).
window.FIREBASE_CONFIG = {
  apiKey: "PEGAR_AQUI",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Quién es quién: al entrar, la app pone el nombre automáticamente.
window.DISPLAY_USUARIOS = {
  // "correo-de-steven@ejemplo.com": "Steven",
  // "correo-de-vanessa@ejemplo.com": "Vanessa",
};
