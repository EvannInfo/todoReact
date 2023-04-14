<script>
  import Task from "./Task.svelte";

  export let tasks;
  export let changeDone;
</script>

<!-- Todo -->

<h3>The list</h3>
<ol>
  {#each tasks as task, index}
    <li>
      <Task />
    </li>
  {/each}
</ol>

<style>
</style>
