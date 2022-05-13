<template>
<div class="header">
  
    <h1 class="header-name"><span>GBEMI</span>ft<span>BITMAMA</span></h1>
</div>
    
</template>
<script>
export default {
    
}
</script>
<style>
    .header{
  padding: 0;
  margin: 0;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
  
  
}
.header-name{
  color: #484848;
  font-size: 50px;
  font-weight: bold;
  font-family: monospace;
  letter-spacing: 7px;
  cursor: pointer
}
.header-name span{
  transition: .5s linear
}
.header-name:hover span:nth-child(1){
  margin-right: 30px
  
}

.header-name:hover span:nth-child(2){
  margin-left: 30px
}
.header-name:hover span{
  color: #fff;
  text-shadow: 0 0 10px #fff,
               0 0 20px #fff, 
               0 0 40px #fff;
}
</style>