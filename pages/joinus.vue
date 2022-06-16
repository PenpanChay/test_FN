<template>
  <div>
    <div class="container w-75 pt-5 pb-5">
      <h2 class="txt-color-green-light"><b>ร่วมงานกับเรา</b></h2>
      <form v-on:submit.prevent="send_data" class="pt-3 pb-3">
        <div class="form-group">
            <label for="name" class="txt-color-green-dark txt-name">
                ชื่อ - นามสกุล:
            </label>
            <input type="text" class="form-control input-size" id="namesur" placeholder="กรุณากรอกชื่อ - นามสกุล" name="namesur" v-model="namesur" onkeypress="return event.charCode >= 3585 && event.charCode <= 3641 || event.charCode >= 3648 && event.charCode <= 3660 || event.charCode = 8" />
        </div>
        <div class="form-group">
            <label for="phone" class="txt-color-green-dark txt-name">
                เบอร์โทรศัพท์:
            </label>
            <input type="text" class="form-control input-size" id="phonesnum" placeholder="กรุณากรอกเบอร์โทร" name="phonesnum" v-model="phones" onkeypress="return event.charCode >= 48 && event.charCode <= 57"  maxlength="10" />
        </div>
        <span>
            <button type="submit" class="btn btn-lg btn-success">
                Submit
            </button>
        </span>
      </form>
      <h3>{{ this.m_namesur }}</h3>
      <h3>{{ this.m_phones }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
          namesur: "",
          phones: "",
          m_namesur: "",
          m_phones: ""
    };
  },
  methods: {
      send_data() {
          if (this.namesur == '' || this.namesur == null || this.phones == '' || this.phones == null || this.phones.length < 10) {
                this.$swal({
                    icon: 'error',
                    text: 'กรุณากรอกข้อมูลให้ครบ',
                    confirmButtonColor: '#145536',
                });
            } else if(this.phones.length == 10) {     
                this.m_namesur = 'ชื่อ - นามสกุล : ' + this.namesur
                this.m_phones = 'เบอร์โทรศัพท์ : ' + this.phones
            }
      }
  },
};
</script>

<style>
.txt-name {
  font-size: small;
}
.input-size {
  font-size: medium;
}
</style>
