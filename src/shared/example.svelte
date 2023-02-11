<script lang="ts">
  import automator from '../services/automator.svelte';
  import { authorization } from '$services/authorization';
</script>

<automator conf={authorization.signup.startup}></automator>