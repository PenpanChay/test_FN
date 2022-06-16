<template>
  <div>
    <div class="bg-footer">
      <h1 class="txt-size-footer-h">
        REAL<b>TECH เพื่อนร่วมทางสู่ความสำเร็จ</b>
      </h1>
    </div>
    <div style="background-image: url('/img/bgfooter.jpg')">
      <div class="container">
        <div class="row row-cols-md-5 row-cols-2">
          <div class="col">
            <img src="@/static/img/logo-realtech-f.png" class="w-100" />
          </div>
          <div class="col pt-3 m-auto d-md-block d-none">
            <h1 class="txt-color-green-dark txt-size-footer">
              <b>ABOUT REALTECH</b>
            </h1>
            <a href="/"><h2 class="txt-color-green txt-size-footer"><b>หน้าหลัก</b></h2></a>
            <h2 class="txt-color-green txt-size-footer"><b>เกี่ยวกับเรา</b></h2>
            <h2 class="txt-color-green txt-size-footer"><b>ผลงานของเรา</b></h2>
            <a href="/JoinUs">
              <h2 class="txt-color-green txt-size-footer">
                <b>ร่วมงานกับเรา</b>
              </h2>
            </a>
          </div>
          <div class="col pt-3 m-auto d-md-block d-none">
            <h1 class="txt-color-green-dark txt-size-footer">
              <b>OUR SERVICES</b>
            </h1>
            <h2 class="txt-color-green txt-size-footer">
              <b>Solution Platform</b>
            </h2>
            <h2 class="txt-color-green txt-size-footer">
              <b>Business Digital Transformation</b>
            </h2>
            <h2 class="txt-color-green txt-size-footer">
              <b>Digital Marketing Service</b>
            </h2>
          </div>
          <div class="col pt-3 m-auto d-md-block d-none">
            <h1 class="txt-color-green-dark txt-size-footer"><b>SUPPORT</b></h1>
            <h2 class="txt-color-green txt-size-footer"><b>ติดต่อเรา</b></h2>
          </div>
          <div class="col pt-3 m-auto">
            <h1 class="txt-color-green txt-size-footer pt-2">
              <i class="fab fa-line txt-color-green-dark"></i
              ><b>
                อาคาร Liberty Plaza ชั้น 10 1000 ซอยสุขุมวิท 55 ถนนสุขุมวิท
                แขวงคลองตั้นเหนือ เขตวัฒนา กรุงเทพฯ 10110</b
              >
            </h1>
            <h1 class="txt-color-green txt-size-footer pt-2">
              <i class="fab fa-facebook txt-color-green-dark"></i
              ><b> @realtech-th</b>
            </h1>
            <h1 class="txt-color-green txt-size-footer pt-2">
              <i class="fa fa-home txt-color-green-dark"></i
              ><b> Realtech - เรอัลเทค</b>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-footer-bottom">
      <p>Copyright 2021, www.realtech-th.com. All right reserved</p>
    </div>
  </div>
</template>

<style>
.bg-footer {
  background: linear-gradient(
    90deg,
    rgb(4 91 70) 0%,
    rgb(45 154 80) 35%,
    rgb(4 91 70) 100%
  );
  padding: 1rem;
  text-align: center;
  color: #ffffff;
}
.txt-size-footer {
  font-size: small;
}

.bg-footer-bottom {
  background: linear-gradient(
    90deg,
    rgb(4 91 70) 0%,
    rgb(45 154 80) 35%,
    rgb(4 91 70) 100%
  );
  padding: 0.5rem;
  text-align: center;
  color: #ffffff;
  font-size: small;
}
.txt-size-footer-h {
  font-size: 2rem;
}
@media screen and (max-width: 440px) {
  .txt-size-footer-h {
    font-size: 1.5rem;
  }
}
</style>
