const SlopeExtendedJsonSchema = {
  type: "object",
  properties: {
    id: { type: "number", example: 1 },
    name: { type: "string", example: "The name of the slope" },
    open: { type: "boolean", example: true },
    difficulty: { type: "number", example: 2 },
    openTime: { type: "string", format: "date", example: "12:30" },
    closeTime: { type: "string", format: "date", example: "12:30" },
  },
};

const TiketPostBodyJsonSchema = {
  type: "object",
  required: ["name", "skiliftsId"],
  properties: {
    name: { type: "string", example: "The name of the task" },
    skiliftsId: { type: "number", example: 4 },
  },
};

const SlopeJsonSchema = {
  type: "object",
  properties: {
    id: { type: "number", example: 1 },
    name: { type: "string", example: "The name of the slope" },
    open: { type: "boolean", example: true },
  },
};

const SkiliftsExtendJsonSchema = {
  type: "object",
  properties: {
    id: { type: "number", example: 1 },
    name: { type: "string", example: "The name of the skilift" },
    open: { type: "boolean", example: true },
    openTime: { type: "string", format: "date", example: "12:30" },
    closeTime: { type: "string", format: "date", example: "12:30" },
    numberOfPeople: { type: "number", exammple: 100 },
    slope: { type: "array", items: SlopeJsonSchema },
  },
};

const SkiliftsJsonSchema = {
  type: "object",
  properties: {
    id: { type: "number", example: 1 },
    name: { type: "string", example: "The name of the skilift" },
  },
};

const LocationJsonSchema = {
  type: "object",
  properties: {
    id: { type: "number", example: 1 },
    name: { type: "string", example: "The of the location" },
    description: {
      type: "string",
      example: "The description of the location",
    },
    skilifts: {
      type: "array",
      items: SkiliftsJsonSchema,
    },
  },
};

const LocationExtendJsonSchema = {
  type: "object",
  properties: {
    id: { type: "number", example: 1 },
    name: { type: "string", example: "The of the location" },
    description: {
      type: "string",
      example: "The description of the location",
    },
    skilifts: {
      type: "array",
      items: SkiliftsExtendJsonSchema,
    },
  },
};

const LocationByIdJsonSchema = {
  type: "object",
  required: ["LocationId"],
  properties: {
    locationId: { type: "number", example: 1, in: "path" },
  },
};

const SkiliftByIdJsonSchema = {
  type: "object",
  required: ["skiliftId"],
  properties: {
    skiliftId: { type: "number", example: 1, in: "path" },
  },
};

export const LoactionResponseJsonSchema = {
  descritpion: "Get single cecklist by cecklist ID",
  params: LocationByIdJsonSchema,
  response: {
    200: LocationExtendJsonSchema,
    404: {
      type: "object",
      properties: {
        statusCode: { type: "number", example: 404 },
        message: {
          type: "string",
          example: "No location present with this id",
        },
      },
    },
  },
};

export const LocationListResponseJsonSchema = {
  descritpion: "Get list of location",
  response: {
    200: {
      type: "array",
      items: LocationJsonSchema,
    },
    404: {
      type: "object",
      properties: {
        statusCode: { type: "number", example: 404 },
        message: { type: "string", example: "No location present" },
      },
    },
  },
};

export const SkiliftsListByLocationIdResponseJsonSchema = {
  descritpion: "Get list of skilifts by location id",
  params: LocationByIdJsonSchema,
  response: {
    200: {
      type: "array",
      items: SkiliftsExtendJsonSchema,
    },
    404: {
      type: "object",
      properties: {
        statusCode: { type: "number", example: 404 },
        message: {
          type: "string",
          example: "No location present with this id",
        },
      },
    },
  },
};

export const SkiliftByIdResponseJsonSchema = {
  descritpion: "Get skilift by id",
  params: SkiliftByIdJsonSchema,
  response: {
    200: SkiliftsExtendJsonSchema,
    404: {
      type: "object",
      properties: {
        statusCode: { type: "number", example: 404 },
        message: {
          type: "string",
          example: "No skilift present with this id",
        },
      },
    },
  },
};

export const SlopeListBySkiliftIdResponseJsonSchema = {
  descritpion: "Get slope list by skilift id",
  params: SkiliftByIdJsonSchema,
  response: {
    200: {
      type: "array",
      items: SlopeExtendedJsonSchema,
    },
    404: {
      type: "object",
      properties: {
        statusCode: { type: "number", example: 404 },
        message: {
          type: "string",
          example: "No skilift present with this id",
        },
      },
    },
  },
};

export const SlopeByIdResponseJsonSchema = {
  descritpion: "Get slope by id",
  params: SkiliftByIdJsonSchema,
  response: {
    200: SlopeExtendedJsonSchema,
    404: {
      type: "object",
      properties: {
        statusCode: { type: "number", example: 404 },
        message: {
          type: "string",
          example: "No skilift present with this id",
        },
      },
    },
  },
};

// export const TaskPostJsonSchema = {
//     description: "Post a new tiket, for a specific skilift and get the tiket just created",
//     params: CecklistByIdGetParamsJsonSchema,
//     body: TaskPostBodyJsonSchema,
//     response: {
//         201: SingleTaskResponseJsonSchema,
//         400: PostRespons400JsonSchema,
//         404: TaskListGetRespons404JsonSchema,
//     }
// }
