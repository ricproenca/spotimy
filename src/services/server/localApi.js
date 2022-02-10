import { Model, createServer } from 'miragejs';

export function makeServer({ environment = 'test' } = {}) {
  return createServer({
    environment,

    models: {
      user: Model
    }

    //seeds
    //routes
  });
}
