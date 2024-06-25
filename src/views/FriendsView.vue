<template>
    <div class="FriendsView">
      <div v-if="friends.length > 0">
       
        <div v-for="friend in friends" :key="friend.id" class="card" :class="{ 'male-border': friend.gender === 'male', 'female-border': friend.gender === 'female' }">
          <div class="card-header">
            {{ friend.name }}
          </div>
          <div class="card-body">
            <p><strong>ContactDetails:</strong> {{ friend.contactDetails }}</p>
            <p><strong>Email:</strong> {{ friend.email }}</p>
            <p><strong>Profile:</strong> {{ friend.profile }}</p>
          </div>
        </div>
      </div>
      <div v-else>
      
        <p>No friends to display.</p>
      </div>
    </div>
  </template>

  
  
  <script>
  export default {
    props: {
      friends: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .FriendsView {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .card {
    border: 2px solid transparent;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
    width: 100vh;
    height: 150px;
  }
  
  .card-header {
    background-color: #f0f0f0;
    padding: 10px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    font-weight: bold;
  }
  
  .card-body {
    padding: 10px;
  }
  
  
  .male-border {
    border-color: gold;
  }
  
  .female-border {
    border-color: green;
  }
  </style>
  