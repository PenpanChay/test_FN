<template>
  <div>
    <!-- add slide banner -->
    <div id="CarouselSlide" class="carousel slide" data-ride="carousel">
      <!-- <ol class="carousel-indicators">
        <li data-target="#CarouselSlide" data-slide-to="0" class="active"></li>
      </ol> -->
      <div class="carousel-inner">
        <div class="item active">
          <img
            src="@/static/img/Maskgroup.jpg"
            alt="banner-first"
            class="w-100"
          />
        </div>
        <!-- <div class="item">
          <img src="@/static/img/Maskgroup.jpg" alt="banner-second" class="w-100" />
        </div> -->
      </div>
      <a class="left carousel-control" href="#CarouselSlide" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#CarouselSlide" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="container">
      <div class="row section-first">
        <div class="col-md-6 col-12 txt-alg pl-5 pr-5">
          <img
            src="@/static/img/REALTECH.png"
            alt="REALTECH-TEXT"
            class="w-50"
          />
          <h2 class="txt-color-green pt-5">
            <b>เกิดจากกลุ่มเพื่อนที่มีความหลงใหลและ</b>
          </h2>
          <h2 class="txt-color-green"><b>ชื่นชอบในเทคโนโลยีเหมือนกัน</b></h2>
          <h2 class="txt-color-green">
            <b>ได้ตกลง รวมตัวกันก่อตั้งบริษัทคนรุ่นใหม่หัวใจไอที</b>
          </h2>
          <h2 class="txt-color-green"><b>โดยมีแนวคิดที่อยากจะเป็น</b></h2>
        </div>
        <div class="col-md-6 col-12 txt-alg-end m-auto">
          <h1 class="txt-color-green bold-size pl-4">เบื้องหลัง</h1>
          <h1 class="txt-color-green-light bold-size txt-size pl-5">
            ความสำเร็จ
          </h1>
          <h1 class="txt-color-green-dark bold-size pl-4">ของทุกธุรกิจ</h1>
        </div>
      </div>
    </div>
    <div class="d-md-block d-none">
      <history-year-pc></history-year-pc>
    </div>
    <div class="d-md-none d-block">
      <history-year-mobile></history-year-mobile>
    </div>
    <div class="bg-white">
      <div class="container">
        <img src="@/static/img/CONTINUE.png" class="img-wid" />
      </div>
      <div class="container text-center txt-color-green-light pt-5">
        <h1 class="txt-size-num">BLOG</h1>
        <slide-blog></slide-blog>
      </div>
      <div class="container">
        <div class="row text-center">
          <div class="col-md-6 col-12">
            <img src="@/static/img/realtech-poster.png" class="w-100" />
          </div>
          <div class="col-md-6 col-12 pt-5">
            <img src="@/static/img/title-ourvision.png" class="w-50" />
            <div class="row m-auto">
              <div class="col-md-3 col-3 pt-5 pb-5 m-auto">
                <img src="@/static/img/Vector1.png" class="w-50" />
              </div>
              <div class="col-md-9 col-9 pt-5 m-auto text-left">
                <h1 class="txt-color-green-light">
                  REAL<span class="txt-color-green-light"><b> DREAM</b></span>
                </h1>
                <h2 class="txt-color-green-dark">ฝันที่ยิ่งใหญ่</h2>
              </div>
              <div class="col-md-3 col-3 pt-5 pb-5 m-auto">
                <img src="@/static/img/Vector2.png" class="w-50" />
              </div>
              <div class="col-md-9 col-9 pt-5 m-auto text-left">
                <h1 class="txt-color-green-light">
                  REAL<span class="txt-color-green-light"><b> BEGIN</b></span>
                </h1>
                <h2 class="txt-color-green-dark">จุดเริ่มต้นความสร้างสรรค์</h2>
              </div>
              <div class="col-md-3 col-3 pt-5 pb-5 m-auto">
                <img src="@/static/img/Vector3.png" class="w-50" />
              </div>
              <div class="col-md-9 col-9 pt-5 m-auto text-left">
                <h1 class="txt-color-green-light">
                  REAL<span class="txt-color-green-light"><b> HOPE</b></span>
                </h1>
                <h2 class="txt-color-green-dark">ไม่สิ้นหวัง</h2>
              </div>
              <div class="col-md-3 col-3 pt-5 pb-5 m-auto">
                <img src="@/static/img/Vector4.svg" class="w-50" />
              </div>
              <div class="col-md-9 col-9 pt-5 m-auto text-left">
                <h1 class="txt-color-green-light">
                  REAL<span class="txt-color-green-light"><b> US</b></span>
                </h1>
                <h2 class="txt-color-green-dark">เป็นตัวของตัวเอง</h2>
              </div>
              <div class="col-md-3 col-3 pt-5 pb-5 m-auto">
                <img src="@/static/img/Vector5.png" class="w-50" />
              </div>
              <div class="col-md-9 col-9 pt-5 m-auto text-left">
                <h1 class="txt-color-green-light">
                  REAL<span class="txt-color-green-light"><b> LIGHT</b></span>
                </h1>
                <h2 class="txt-color-green-dark">เส้นทางสู่ความสำเร็จ</h2>
              </div>
              <div class="col-md-3 col-3 pt-5 pb-5 m-auto">
                <img src="@/static/img/logo.svg" class="w-50" />
              </div>
              <div class="col-md-9 col-9 pt-5 m-auto text-left">
                <h1 class="txt-color-green-light">
                  REAL<span class="txt-color-green-light"><b> TECH</b></span>
                </h1>
                <h2 class="txt-color-green-dark">REAL YOU</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideBlog from "@/components/SlideBlog";
import HistoryYearPc from "@/components/HistoryYearPc";
import HistoryYearMobile from "@/components/HistoryYearMobile";
export default {
  components: { SlideBlog, HistoryYearPc, HistoryYearMobile },
  layout: "default",
};
</script>
<style>
.carousel-indicators li {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50%;
  border-left: 0px;
  border-right: 0px;
}
.section-first {
  padding-top: 6rem;
  padding-bottom: 2rem;
}
.txt-alg {
  text-align: right;
}
.bold-size {
  font-weight: 900;
}
.txt-size {
  font-size: xxx-large;
}

.bg-list {
  height: 100%;
  background: linear-gradient(
    90deg,
    rgb(28 114 91) 0%,
    rgb(45 154 80) 35%,
    rgb(96 185 118) 100%
  );
  background-repeat: repeat-y;
  background-size: 50% auto;
  background-position-x: right;
}

#content {
  position: relative;
  z-index: 2;
  padding: 30px;
  text-align: center;
  font-weight: bold;
  font-family: Arial, sans-serif;
}
.txt-size-num {
  font-size: 4rem;
  font-weight: 900;
}
.image-1 {
  position: absolute;
  left: 50%;
  margin-left: -2%;
}
.image-2 {
  position: absolute;
  left: 50%;
  margin-left: -1%;
}
.img-wid {
  width: 50%;
}
@media screen and (max-width: 440px) {
  .txt-alg {
    text-align: center;
  }
  .txt-alg-end {
    padding-top: 2.5rem;
    text-align: center;
  }
  .image-1 {
    position: absolute;
    left: 50%;
    margin-left: -7%;
  }
  .image-2 {
    position: absolute;
    left: 50%;
    margin-left: -4%;
  }
  .bg-txt {
    border: 1px solid #fff;
    border-radius: 1rem;
    padding: 10px;
    box-shadow: 3px 1px;
    background: #fff;
    opacity: 0.5;
  }
  .img-wid {
    width: 100%;
  }
}
</style>
