<template>
  <router-view></router-view>
</template>

<script>
export default {};
</script>

<style>
.mainDiv {
  width: 500px;
  height: 500px;
  background: #319aaf;
  padding: 50px;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 50px;
  color: whitesmoke;
  text-align: center;
  font-size: 18px;
}
.mainDiv div {
  padding: 10px;
}
.mainDiv label {
  display: block;
}
button {
  background: transparent;
  border-radius: 20px;
  padding: 10px 15px;
  border: 2px solid whitesmoke;
  color: whitesmoke;
  font-size: 16px;
}
.inputs {
  margin-top: 10px;
  width: 250px;
  height: 30px;
}
button:hover {
  background:whitesmoke;
  border-radius: 20px;
  padding: 10px 15px;
  border: 2px solid whitesmoke;
  color: #319aaf;
}
</style>
