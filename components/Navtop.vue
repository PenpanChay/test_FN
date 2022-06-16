<template>
  <div>
    <div class="head d-md-block d-none">
      <div class="head-tab">
        <div class="container">
          <div>
            <img src="@/static/img/logo.svg" />
            <a class="auth txt-green-light" href="#">หน้าหลัก</a>
            <a class="auth txt-green" href="#">เกี่ยวกับเรา</a>
            <a class="auth txt-green" href="#">ผลงานของเรา</a>
            <a class="auth txt-green" href="#">บริการของเรา</a>
            <a class="auth txt-green" href="#">บทความ</a>
            <a class="auth txt-green" href="#">ร่วมงานกับเรา</a>
            <a class="auth txt-green" href="#">ติดต่อเรา</a>
          </div>
        </div>
      </div>
    </div>
    <div class="d-md-none d-block">
      
    </div>
  </div>
</template>

<style>
.head-tab {
  background: #ffffff;
  padding: 20px 0px 20px 0px;
}
.head-tab .container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.head-tab .container img {
  width: 10%;
}
.head-tab .auth {
  color: white;
  display: inline-block;
  text-decoration: none;
  box-sizing: border-box;
  font-size: 1.5rem;
  padding: 10px;
}

.head-tab .txt-green-light {
  color: #3ad996;
}
.head-tab .txt-green {
  color: #237561;
}
.head-tab .txt-muted:hover,
.head-tab .txt-blue:hover {
  color: #000000;
}
</style>
