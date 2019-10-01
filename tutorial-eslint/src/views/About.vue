<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      message: 'aha'
    }
  },

  methods: {
    func1() {
      console.log('aha')
      console.log('ihi')
      const aha = 1
      if (aha) {
        console.log('ufu')
      }
    }
  }
}
</script>
