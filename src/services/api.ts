import axios from "axios";
import MockAdapter from "axios-mock-adapter";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

const mock = new MockAdapter(api);

mock.onGet("/api/v1/teams/1/members").reply(200, [
  {
    id: 1,
    name: "John Doe",
    role: "Junior I",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Junior II",
  },
  {
    id: 3,
    name: "John Smith",
    role: "Senior I",
  },
]);

mock.onGet("/api/v1/teams/1/members/1").reply(200, {
  id: 1,
  name: "John Doe",
  role: "Junior I",
  jira: {
    external_id: "jira-1",
    goal: 3,
  },
});

mock.onGet("/api/v1/teams/1/members/1").reply(200, {
  id: 2,
  name: "Jane Done",
  role: "Junior II",
});

mock.onGet("/api/v1/teams/1/members/1").reply(200, {
  id: 3,
  name: "John Smith",
  role: "Senior I",
});

mock.onPost("/api/v1/teams/1/members").reply(201, {
  id: 4,
  name: "Mr Jack",
  role: "Pleno II",
});

mock.onPut("/api/v1/teams/1/members/4").reply(200, {
  id: 4,
  name: "Mr Jack",
  role: "Pleno III",
});

mock.onDelete("/api/v1/teams/1/members/1").reply(204);
mock.onDelete("/api/v1/teams/1/members/2").reply(204);
mock.onDelete("/api/v1/teams/1/members/3").reply(204);
mock.onDelete("/api/v1/teams/1/members/4").reply(204);
