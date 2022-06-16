<template>
  <div>
    <div class="head d-md-block d-none">
      <div class="head-tab">
        <div class="container">
          <div>
            <img src="@/static/img/logo.svg" />
            <a class="auth txt-green" href="/">หน้าหลัก</a>
            <a class="auth txt-green" href="#">เกี่ยวกับเรา</a>
            <a class="auth txt-green" href="#">ผลงานของเรา</a>
            <a class="auth txt-green" href="#">บริการของเรา</a>
            <a class="auth txt-green" href="#">บทความ</a>
            <a class="auth txt-green" href="/JoinUs">ร่วมงานกับเรา</a>
            <a class="auth txt-green" href="#">ติดต่อเรา</a>
          </div>
        </div>
      </div>
    </div>
    <div class="head d-md-none d-block">
      <div class="head-tab headline">
        <img src="@/static/img/logo.svg" class="img-logo-menu" />
        <img src="@/static/img/REALTECH.png" class="w-25" />
        <div class="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
            <span></span>
          </label>
          <ul class="menu__box text-center">
            <img src="@/static/img/logo.svg" class="w-25" />
            <img src="@/static/img/REALTECH.png" class="w-25" />
            <li><a class="auth txt-green" href="/">หน้าหลัก</a></li>
            <li><a class="auth txt-green" href="#">เกี่ยวกับเรา</a></li>
            <li><a class="auth txt-green" href="#">ผลงานของเรา</a></li>
            <li><a class="auth txt-green" href="#">บริการของเรา</a></li>
            <li><a class="auth txt-green" href="#">บทความ</a></li>
            <li><a class="auth txt-green" href="/JoinUs">ร่วมงานกับเรา</a></li>
            <li><a class="auth txt-green" href="#">ติดต่อเรา</a></li>
          </ul>
        </div>
      </div>
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
@media screen and (max-width: 770px) {
  .head-tab .auth {
    font-size: 1.25rem;
  }
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

/* menu mobile */

#menu__toggle {
  opacity: 0;
}

#menu__toggle:checked ~ .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked ~ .menu__btn > span::before {
  top: 0;
  transform: rotate(0);
}
#menu__toggle:checked ~ .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
  visibility: visible;
  left: 0;
}

.menu__btn {
  display: flex;
  align-items: center;
  position: fixed;
  top: 20px;
  right: 20px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 2;
}

.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;

  width: 100%;
  height: 2px;

  background-color: #145536;

  transition-duration: 0.25s;
}
.menu__btn > span::before {
  content: "";
  top: -8px;
}
.menu__btn > span::after {
  content: "";
  top: 8px;
}

.menu__box {
  display: block;
  position: fixed;
  visibility: hidden;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  background-color: #e6fff3;
  transition-duration: 0.25s;
  z-index: 1;
}

.menu__item {
  display: block;
  padding: 12px 24px;
  color: #333;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: 0.25s;
}
.menu__item:hover {
  background-color: #ffffff;
}
.img-logo-menu {
  width: 15%;
  padding: 0px;
  margin-left: 5%;
  margin-top: -3%;
  margin-bottom: -3%;
}
.headline .img,
.headline .hamburger-menu {
  margin: 0px;
  display: inline-block;
  padding: 1em;
  vertical-align: top;
}

.headline .hamburger-menu {
  text-align: right;
  padding-right: 2em;
  float: right;
}
</style>
