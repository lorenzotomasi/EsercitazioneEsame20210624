"use strict";
exports.__esModule = true;
exports.SlopeByIdResponseJsonSchema = exports.SlopeListBySkiliftIdResponseJsonSchema = exports.SkiliftByIdResponseJsonSchema = exports.SkiliftsListByLocationIdResponseJsonSchema = exports.LocationListResponseJsonSchema = exports.LoactionResponseJsonSchema = void 0;
var SlopeExtendedJsonSchema = {
    type: "object",
    properties: {
        id: { type: "number", example: 1 },
        name: { type: "string", example: "The name of the slope" },
        open: { type: "boolean", example: true },
        difficulty: { type: "number", example: 2 },
        openTime: { type: "string", format: "date", example: "12:30" },
        closeTime: { type: "string", format: "date", example: "12:30" }
    }
};
var TiketPostBodyJsonSchema = {
    type: "object",
    required: ["name", "skiliftsId"],
    properties: {
        name: { type: "string", example: "The name of the task" },
        skiliftsId: { type: "number", example: 4 }
    }
};
var SlopeJsonSchema = {
    type: "object",
    properties: {
        id: { type: "number", example: 1 },
        name: { type: "string", example: "The name of the slope" },
        open: { type: "boolean", example: true }
    }
};
var SkiliftsExtendJsonSchema = {
    type: "object",
    properties: {
        id: { type: "number", example: 1 },
        name: { type: "string", example: "The name of the skilift" },
        open: { type: "boolean", example: true },
        openTime: { type: "string", format: "date", example: "12:30" },
        closeTime: { type: "string", format: "date", example: "12:30" },
        numberOfPeople: { type: "number", exammple: 100 },
        slope: { type: "array", items: SlopeJsonSchema }
    }
};
var SkiliftsJsonSchema = {
    type: "object",
    properties: {
        id: { type: "number", example: 1 },
        name: { type: "string", example: "The name of the skilift" }
    }
};
var LocationJsonSchema = {
    type: "object",
    properties: {
        id: { type: "number", example: 1 },
        name: { type: "string", example: "The of the location" },
        description: {
            type: "string",
            example: "The description of the location"
        },
        skilifts: {
            type: "array",
            items: SkiliftsJsonSchema
        }
    }
};
var LocationExtendJsonSchema = {
    type: "object",
    properties: {
        id: { type: "number", example: 1 },
        name: { type: "string", example: "The of the location" },
        description: {
            type: "string",
            example: "The description of the location"
        },
        skilifts: {
            type: "array",
            items: SkiliftsExtendJsonSchema
        }
    }
};
var LocationByIdJsonSchema = {
    type: "object",
    required: ["LocationId"],
    properties: {
        locationId: { type: "number", example: 1, "in": "path" }
    }
};
var SkiliftByIdJsonSchema = {
    type: "object",
    required: ["skiliftId"],
    properties: {
        skiliftId: { type: "number", example: 1, "in": "path" }
    }
};
exports.LoactionResponseJsonSchema = {
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
                    example: "No location present with this id"
                }
            }
        }
    }
};
exports.LocationListResponseJsonSchema = {
    descritpion: "Get list of location",
    response: {
        200: {
            type: "array",
            items: LocationJsonSchema
        },
        404: {
            type: "object",
            properties: {
                statusCode: { type: "number", example: 404 },
                message: { type: "string", example: "No location present" }
            }
        }
    }
};
exports.SkiliftsListByLocationIdResponseJsonSchema = {
    descritpion: "Get list of skilifts by location id",
    params: LocationByIdJsonSchema,
    response: {
        200: {
            type: "array",
            items: SkiliftsExtendJsonSchema
        },
        404: {
            type: "object",
            properties: {
                statusCode: { type: "number", example: 404 },
                message: {
                    type: "string",
                    example: "No location present with this id"
                }
            }
        }
    }
};
exports.SkiliftByIdResponseJsonSchema = {
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
                    example: "No skilift present with this id"
                }
            }
        }
    }
};
exports.SlopeListBySkiliftIdResponseJsonSchema = {
    descritpion: "Get slope list by skilift id",
    params: SkiliftByIdJsonSchema,
    response: {
        200: {
            type: "array",
            items: SlopeExtendedJsonSchema
        },
        404: {
            type: "object",
            properties: {
                statusCode: { type: "number", example: 404 },
                message: {
                    type: "string",
                    example: "No skilift present with this id"
                }
            }
        }
    }
};
exports.SlopeByIdResponseJsonSchema = {
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
                    example: "No skilift present with this id"
                }
            }
        }
    }
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
