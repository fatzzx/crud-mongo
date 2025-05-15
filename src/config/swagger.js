import swaggerJsdoc from "swagger-jsdoc";

const options = {
  url: "/docs/swagger.json",
  customCssUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.css",
  customJs: [
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-bundle.js",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-standalone-preset.js",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-init.js",
  ],

  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Animes",
      version: "1.0.0",
      description: "API para gerenciamento de animes e listas de usuários",
    },
    servers: [
      {
        url: "https://crud-mongo-sepia.vercel.app/",
        description: "Servidor de prod",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

export const specs = swaggerJsdoc(options);
