
<template>
<div id="app">
  <div id="nav">
  <router-view/>
    </div>

</div>
  
</template>


<style>
*{
  margin:0;
  padding:0;
}
.view {
    width:100%;
    padding:50px; 
    }
a{text-decoration: none;}
#app{
  margin:0;
  padding:15px;
  
  background-color: rgb(195, 159, 253);
  border-radius:0;
}
#app2{
  width:100%;

  
  padding:0;
  box-shadow: 10px 10px 194px 0px rgba(0,0,0,0.75);
}
#nav{
  
  
  padding:0;
}
div{
  border-radius: 25px;
  
  
}
</style>