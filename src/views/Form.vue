<template>
  <form class="form" action="#" novalidate @submit="send">
    <input
      class="form__email"
      type="email"
      name="email"
      placeholder="Email"
      v-model="email"
      :class="this.invalidEmail ? 'invalid' : ''"
    />
    <textarea
      class="form__message"
      name="message"
      cols="30"
      rows="5"
      placeholder="Message"
      v-model="message"
      :class="this.invalidMessage ? 'invalid' : ''"
    ></textarea>
    <button
      class="form__button"
      :class="this.sending ? 'form__button--active' : ''"
      :disabled="this.sending"
    >
      {{ this.sending ? "Sending..." : "Send" }}
    </button>
  </form>
</template>

<script>
import router from "../router";

export default {
  name: "Form",
  components: {},
  data() {
    return {
      email: "",
      message: "",
      invalidEmail: false,
      invalidMessage: false,
      sending: false,
      queryParams: {},
      emailData: {
        service_id: process.env.VUE_APP_SERVICE_ID,
        template_id: process.env.VUE_APP_TEMPLATE_ID,
        user_id: process.env.VUE_APP_USER_ID
      }
    };
  },
  mounted() {
    this.queryParams = this.$route.query;
  },
  methods: {
    validate() {
      // eslint-disable-next-line no-useless-escape
      const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      let invalidEmail = false;
      let invalidMessage = false;

      if (this.email.trim().length === 0) {
        invalidEmail = true;
      } else if (!emailRegEx.test(this.email.toLowerCase())) {
        invalidEmail = true;
      }

      if (this.message.trim().length === 0) {
        invalidMessage = true;
      }

      this.invalidEmail = invalidEmail;
      this.invalidMessage = invalidMessage;

      if (invalidEmail || invalidMessage) {
        return false;
      } else {
        return true;
      }
    },
    send() {
      event.preventDefault();

      if (this.validate()) {
        this.sending = true;
        fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...this.emailData,
            template_params: {
              email: this.email,
              message: this.message,
              system_version: this.queryParams.system_version,
              device_model: this.queryParams.device_model,
              app_version: this.queryParams.app_version
            }
          })
        }).then(() => router.push("success"));
      }
    }
  }
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
    color: #111111;
    border-radius: 4px;
    border: 0;
    padding: 16px;
    outline: 0;
    resize: none;
    line-height: 1.5;
    border: 1px solid #ffffff;
    appearance: none;

    &::placeholder {
      color: #90a9be;
    }
  }

  .invalid {
    border: 1px solid #ec547a;
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
    cursor: pointer;

    &--active {
      background-color: rgba(17, 17, 17, 0.2);
      cursor: default;
    }
  }
}
</style>
