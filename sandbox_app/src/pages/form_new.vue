<template>
  <v-container>
    <input-form
      :initialData="fields"
      :errors="errors"
      @save-item="save"
      @add-hobby="errors.hobbies.push(initalValueHobby())"
      @remove-hobby="index => errors.hobbies.splice(index, 1)"
    ></input-form>
  </v-container>
</template>

<script>
import InputForm from "@/components/InputForm.vue";

export default {
  components: {
    "input-form": InputForm
  },
  data() {
    return {
      fields: {},
      errors: {},
      initalValue: () => {
        return {
          name: null,
          email: null,
          hobbies: []
        };
      },
      initalValueHobby: () => {
        return { name: null, age: null };
      }
    };
  },
  methods: {
    initilize() {
      console.log("New page initilized.");
      this.fields = this.initalValue();
      this.errors = this.initalValue();
    },
    save(form) {
      console.log("save started.");
      this.initilizeObject(this.errors);
      console.debug(form);
      this.validate(form);
    },
    validate(form) {
      if (form.name === null || form.name.length === 0) {
        this.errors.name = "required!";
      }
      if (form.email === null || form.email.length === 0) {
        this.errors.email = "required!";
      }
      form.hobbies.forEach((item, i) => {
        if (item.name === null || item.name.length === 0) {
          this.errors.hobbies[i].name = "required!";
        }
      });
    },
    initilizeObject(obj) {
      Object.keys(obj).forEach(key => {
        if (obj[key] instanceof Array) {
          console.debug("Array", key);
          obj[key].forEach(item => {
            this.initilizeObject(item);
          });
        } else if (obj[key] instanceof Object) {
          console.debug("Object", key);
          this.initilizeObject(obj[key]);
        } else {
          console.debug("Primitive", key);
          obj[key] = null;
        }
      });
      console.debug(obj);
    }
  },
  created() {
    this.initilize();
  }
};
</script>
