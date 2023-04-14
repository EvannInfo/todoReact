<script>
  export let addTask;

  let input;
</script>

<!-- Todo -->
<input
  type="text"
  placeholder="Ajouter un todo"
  size="100"
  onChange={(e) => {
    input = e.target.value;
  }}
/>
<!-- Todo -->
<button onClick={() => addTask(input)}>Add Todo</button>
