<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./components/Counter.svelte";
  import List from "./components/List.svelte";
  import AddTask from "./components/AddTask.svelte";

  /**
   * [
      { text: 'Learn js', done: false },
      { text: 'Clean bedroom', done: true },
      { text: 'TODO ??', done: false },
    ]
   */
  let tasks;

  const changeDone = (index) => {
    const newTasks = [...tasks]; // copie du tableau
    newTasks[index] = { ...newTasks[index], done: !newTasks[index].done };

    // Todo
  };

  const addTask = (text) => {
    const task = {
      text: text,
      done: false,
    };
    tasks = [...tasks, task];
  };
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a
      href="https://github.com/sveltejs/kit#readme"
      target="_blank"
      rel="noreferrer">SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>

  <div class="todo-app">
    <h1>Todo List App</h1>

    <!--Todo -->
    <List />
    <!--Todo -->
    <AddTask />
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
  .todo-app {
    text-align: left;
  }
</style>
