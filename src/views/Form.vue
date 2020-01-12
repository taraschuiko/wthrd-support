<template>
  <form class="form" action="#">
    <input class="form__email" type="email" name="email" placeholder="Email" />
    <textarea
      class="form__message"
      name="message"
      cols="30"
      rows="10"
      placeholder="Message"
    ></textarea>
    <button class="form__button">Send</button>
  </form>
</template>

<script>
export default {
  name: "Form",
  components: {}
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  padding: 16px;

  input,
  textarea {
    font-family: "Museo Sans";
    font-size: 16px;
    border-radius: 4px;
    border: 0;
    padding: 16px;
    outline: 0;
    resize: none;
  }

  &__email {
    margin-bottom: 16px;
  }

  &__message {
    margin-bottom: 20px;
  }

  &__button {
    font-family: "Museo Sans";
    font-size: 16px;
    font-weight: 700;
    padding: 18px;
    text-align: center;
    background: #111111;
    color: #ffffff;
    border: 0;
    border-radius: 4px;
    outline: 0;
  }
}
</style>
