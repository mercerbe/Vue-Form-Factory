<script>
// import { required } from "vuelidate/lib/validators";

import FormBuilder from "./builders/FormBuilder";
import FormDirector from "./builders/FormDirector";

export default {
  name: "App",
  components: {
    UserForm: new FormDirector(new FormBuilder()).makeUserForm()
  }
};
</script>

<template>
  <div id="app">
    <h2>Create Form</h2>
    <UserForm />

    <h2>Edit Form</h2>
    <UserForm :id="1" />
  </div>
</template>

<style>
#app {
  padding: 1em;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h2 {
  font-size: 2em;
  margin-bottom: 0.75em;
}

h2:not(:first-child) {
  margin-top: 0.75em;
}

input,
textarea {
  border-radius: 0.25em;
  padding: 0.75em;
  border: 1px solid #999;
}
</style>
