const supertest = require("supertest");
const app = require("../app"); // Assuming your index.js is in the root directory
// Create a Supertest Agent
const request = supertest(app);


describe("Tasks Route handlers", () => {

  it("should handle the root route and render 'main'", async () => {
    const response = await request.get("/tasks/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Todo");
  });

  it("should handle the '/tasks/todo' route and render 'alltodos'", async () => {
    const response = await request.get("/tasks/todo");
    expect(response.status).toBe(200);
    expect(response.text).toContain("<title>Todo</title>");
  });

  it("should handle the endpoint '/newtodo' and render 'newTodo'", async () => {
    const response = await request.get("/tasks/newtodo");
    expect(response.status).toBe(200);
    expect(response.text).toContain("<h1>Add TO-DO</h1>");
  });

  it("should handle the '/tasks/delete' route and delete task", async () => {
    const taskId = 1; // Replace with a valid task ID
    const response = await request.delete("/tasks/delete/1");
    expect(response.status).toBe(302);      // status code for redirection
    expect(response.headers.location).toBe("http://localhost:3000/tasks/todo");
  });

  it("should handle the '/tasks/delete' if task is not available", async () => {
    const response = await request.delete("/tasks/delete/101");
    expect(response.status).toBe(404);      // status code for 
    expect(response.text).toContain("Task not found");
  });

// Post - test case that simulate form submission
  it("should create a new task with valid input", async () => {
    const taskData = { title: "New Task" };

    const response = await request
      .post("/tasks/add")
      .type("form")
      .send(taskData);

    expect(response.status).toBe(302); // Expect a redirect status code
    expect(response.headers.location).toBe("http://localhost:3000/tasks/todo"); // Check the redirection URL
  });

  it("should handle missing title in the request", async () => {
    const taskData = {}; // Missing 'title' field

    const response = await request
      .post("/tasks/add")
      .type("form")
      .send(taskData);

    expect(response.status).toBe(400); // Expect a 400 (Bad Request) status code
    expect(response.body).toEqual({ error: "Title is required." }); // Check the error response
  });

});