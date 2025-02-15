import app from './app';
import init from './models/init'
import tasksRoutes from "./routes/TasksRoutes";

init();
tasksRoutes(app);

app.listen(3000,() => {
    console.log("Está funfando :)")
})

