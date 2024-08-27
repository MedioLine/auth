declare module 'supertest' {
    import { SuperTest, Test } from 'supertest';
    const request: SuperTest<Test>;
    export default request;
  }
  