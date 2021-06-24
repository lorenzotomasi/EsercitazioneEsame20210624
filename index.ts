import { fastify } from "fastify";
import { fastifySwagger } from "fastify-swagger";
import {
  LoactionResponseJsonSchema,
  LocationListResponseJsonSchema,
  SkiliftByIdResponseJsonSchema,
  SkiliftsListByLocationIdResponseJsonSchema,
  SlopeByIdResponseJsonSchema,
  SlopeListBySkiliftIdResponseJsonSchema,
} from "./schema/schema";

const BaseURL = "/api/";

const app = fastify({
  logger: true,
  ignoreTrailingSlash: true,
});

app.register(fastifySwagger, {
  routePrefix: "/documentation",
  swagger: {
    info: {
      title: "Cecklist",
      description: "API for acces data from database of ski resort",
      version: "0.1.0",
    },
    host: "localhost:9090",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
  exposeRoute: true,
});

app.get(
  `${BaseURL}locations`,
  {
    schema: LocationListResponseJsonSchema,
  },
  async (req, reply) => {}
);

app.get(
  `${BaseURL}locations/:id`,
  {
    schema: LoactionResponseJsonSchema,
  },
  async (req, reply) => {}
);

app.get(
  `${BaseURL}locations/:id/skilifts`,
  {
    schema: SkiliftsListByLocationIdResponseJsonSchema,
  },
  async (req, reply) => {}
);

app.get(
  `${BaseURL}skilifts/:id`,
  {
    schema: SkiliftByIdResponseJsonSchema,
  },
  async (req, reply) => {}
);

app.get(
  `${BaseURL}skilifts/:id/slopes`,
  {
    schema: SlopeListBySkiliftIdResponseJsonSchema,
  },
  async (req, reply) => {}
);

app.get(
  `${BaseURL}slope/:id`,
  {
    schema: SlopeByIdResponseJsonSchema,
  },
  async (req, reply) => {}
);

app.listen(9090, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
