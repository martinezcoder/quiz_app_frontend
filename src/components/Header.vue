<template>
  <div>
    <b-nav tabs>
      <b-nav-item disabled><b>Fancy Quiz App</b></b-nav-item>
      <b-nav-item disabled><b>Counter {{ numCorrect }} / {{ numTotal }}</b></b-nav-item>
    </b-nav>
  </div>
</template>

<script>

export default {
  // another way to define props with an Array instead of a Hash
  props: [
    'numCorrect',
    'numTotal'
  ]
}
</script>
