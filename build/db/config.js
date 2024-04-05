"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.client = exports.connect = void 0;
const mongodb_1 = require("mongodb");
const uri = 'mongodb://drenvio:moM5f3AodwLE5d0A@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin';
const client = new mongodb_1.MongoClient(uri);
exports.client = client;
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
});
exports.connect = connect;
const close = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.close();
        console.log('Connection to MongoDB closed');
    }
    catch (error) {
        console.error('Error closing connection to MongoDB', error);
    }
});
exports.close = close;
