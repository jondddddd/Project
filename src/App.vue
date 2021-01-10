<template>
  <section class="container">
    <div class="fixed header">
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;1,400&display=swap"
        rel="stylesheet"
      />
      <link href="style 1.css" rel="stylesheet" type="text/css" />

      <i class="material-icons" @click="index = 0"> </i>
      <span></span>
      <i class="material-icons"></i>
      <div class="rightpart">
        <div class="logo">
          <img src="./assets//index_files/logo.png" height="50" width="50" />
          <div class="by-line">BY:LINE</div>
        </div>
      </div>

      <div class="dropdown-area">
        <div class="dropdown">
          <button class="dropbtn">
            <img
              class="menubtn"
              src="./assets/Background_Items/dropdown.png"
              width="31"
              height="31"
            />
          </button>
          <div class="dropdown-content">
            <a>Community</a>
            <a>About</a>
          </div>
        </div>

        <div class="dash-btn-area">
          <button class="dashboard-btn">Dashboard</button>
        </div>
      </div>
    </div>

    <div id="app">
      <Tinder
        ref="tinder"
        key-name="id"
        :queue.sync="queue"
        :offset-y="10"
        @submit="onSubmit"
      >
        <template slot-scope="scope">
          <div class="pic" <img src="./assets/Profiles/1.png" />
        </template>
      </Tinder>
      <div class="btns">
        <img src="./assets/Buttons/Pass.png" @click="decide('nope')" />
        <img src="./assets/Buttons/saved.png" @click="decide('super')" />
        <img src="./assets/Buttons/Like.png" @click="decide('like')" />
      </div>
    </div>
  </section>
</template>

<script>
import Tinder from "@/vue-tinder";
import source from "@/bing";

export default {
  name: "App",
  components: { Tinder },

  data: () => ({
    queue: [],
    offset: 0,
  }),
  created() {
    this.mock();
  },
  methods: {
    mock(count = 5) {
      const list = [];
      for (let i = 0; i < count; i++) {
        list.push({ id: source[this.offset] });
        this.offset++;
      }
      this.queue = this.queue.concat(list);
    },
    onSubmit({ item }) {
      if (this.queue.length < 9) {
        this.mock();
      }
    },
    decide(choice) {
      this.$refs.tinder.decide(choice);
    },
  },
};
</script>

<style lang ="scss" scoped>
pic {
  margin: 0;
  background-color: #49C69D;
}
html,
body {
  height: 100%;
  margin: 0px;
}

body {
  margin: 0;
  background-color: #212738;
  overflow: hidden;
}

#app .vue-tinder {
  position: absolute;
  border: 1px;
  solid: #49C69D;
  z-index: 1;
  left: 0;
  right: 0;
  top: 150px;
  margin: auto;
  width: 1100px;
  height: 600px;
  min-width: 300px;
  max-width: 2000px;
}
.btns {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4%;
  margin: auto;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  max-width: 355px;
}

.btns img {
  margin-right: 1px;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.btns img:nth-child(2n + 1) {
  width: 53px;
}

.btns img:nth-child(2n) {
  width: 65px;
}

.btns img:nth-last-child(1) {
  margin-right: 0;
}
.pic {
  border: 10px;
  solid: #49C69D;
  margin: auto;
  width: 100px;
  height: 100px;
  min-width: 50%;
  background-size: cover;
  background-position: center;
}
.logo {
  position: absolute;
  left: 2%;
  float: right;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 1000px;
  margin: 10px 10px;
  gap: 20px;
  align-items: left;
}
.by-line {
  position: absolute;
  font-family: "Ubuntu";
  font-style: Bold;
  font-weight: 600;
  font-size: 110%;
  line-height: 1%;
  letter-spacing: 0.1em;
  left: 7%;
  bottom: 50%;
  color: #212738;
}

.container {
  position: absolute;
  background: #212738;
  width: 100%;
  height: 100vh;
}
.header {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100px;
  z-index: 0;
  background: -webkit-linear-gradient(to top, #49C69D, #49C69D);
  background: linear-gradient(to top, #49C69D, #49C69D);
  clip-path: polygon(0 1%, 50% 0%, 100%);
  display: flex;
  justify-content: space-between;
  span {
    display: block;
    font-size: 4rem;
    padding-top: 2rem;
    text-shadow: 1px 1px 1px white;
  }
  i {
    padding: 24px;
  }
}
.dropdown-area {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  float: right;
  align-items: right;
  gap: 10px;
}
.dashboard-btn {
  position: absolute;
  background: #212738;
  border: 1px solid #49C69D;
  border-radius: 20px;
  padding: 5px 25px;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  right: 80px;
  top: 32%;
  align-items: right;
  letter-spacing: 0.03em;
  color: #49C69D;
}
.dropdown .dropbtn {
  position: absolute;
  background-color: #49C69D;
  border: none;
  outline: none;
  color: #212738;
  padding: 20px 20px;
  margin: 0;
  right: 7px;
  top: 10%;
  align-items: right;
  cursor: pointer;
}
.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #49C69D;
  min-width: 160px;
  z-index: 1;
}
.dropdown-content a {
  display: block;
  color: 212738;
  padding: 12px 16px;
  font-family: "Ubuntu";

  font-weight: 600;
  font-size: 110%;
  line-height: 1%;
  letter-spacing: 0.1em;
  text-align: center;
}
.dropdown-content a:hover {
  background-color: #f1f1f1;
  color: #49C69D;
}
.dropdown:hover .dropdown-content {
  display: flex;
  flex-direction: column;
}
.dropdown:hover .dropbtn {
  background-color: #49C69D;
}

.footer {
  width: 77vw;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  padding-bottom: 30px;
  justify-content: space-around;
  align-items: center;
}
@keyframes appear {
  from {
    transform: translate(-48%, -48%);
  }
  to {
    transform: translate(-50%, -50%);
  }
}
</style>
