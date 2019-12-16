<template>
  <v-container>
    <input-form
      :initial-value="fields"
      :error-messages="errorMessages"
      @save-item="save"
      @add-hobby="errorMessages.hobbies.push(initalValueHobby())"
      @remove-hobby="index => errorMessages.hobbies.splice(index, 1)"
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
      fields: null,
      errorMessages: null,
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
      this.fields = Object.assign({}, this.initalValue());
      this.errorMessages = Object.assign({}, this.initalValue());
    },
    save(form) {
      console.log("save started.");
      this.initilizeObject(this.errorMessages);
      console.debug(form);
      this.validate(form);
    },
    validate(form) {
      if (form.name === null || form.name.length === 0) {
        this.errorMessages.name = "required!";
      }
      if (form.email === null || form.email.length === 0) {
        this.errorMessages.email = "required!";
      }
      form.hobbies.forEach((item, i) => {
        if (item.name === null || item.name.length === 0) {
          this.errorMessages.hobbies[i].name = "required!";
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
