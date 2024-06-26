<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Cars">Cars</router-link> |
    <router-link to="/Console">Console</router-link> |
    <router-link to="/Friends">Friends</router-link>
    
  </nav>
  <router-view/>

  <div id="app">
    <FriendsView :friends="FriendsView" />
  </div>
</template>

<script>
import FriendsView from '../src/views/FriendsView.vue'

export default {
  name: 'AppTwo',
  components: {
    FriendsView, 
  },
  data() {
    return {
      FriendsView: [
        { id: 1, name: 'Masooda George', contactDetails: '021-234-7456', email: 'Mgeorge@gmail.com', gender: 'female',profile:"Mgeorge" },
        { id: 2, name: 'Caleb Okkers', contactDetails: '083-654-3210', email: 'calebO@gmail.com', gender: 'male', profile:"calebO" },
        { id: 3, name: 'Jordan Springveldt', contactDetails: '075-654-3280', email: 'Jspringveldt@gmail.com', gender: 'female',profile:"Jspringveldt"  },
        { id: 4, name: 'Nikilitha Kakaza', contactDetails: '072-894-3250', email: 'Nkakaza@gmail.com', gender: 'female', profile:"Nkakaza"  },
        { id: 5, name: 'Yolanda Matiwane', contactDetails: '082-898-1234', email: 'Ymatiwane@gmail.com', gender: 'female', profile:"YMatiwane"  },
        { id: 6, name: 'Sage abrahams', contactDetails: '072-220-1965', email: 'Sabrahams@gmail.com', gender: 'male', profile:"Sagibaby"  },
       
       
      ],
    };
  },
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
#appTwo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}
</style>
