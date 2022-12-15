<template>
    <div id="app">
        <v-form ref="form" lazy-validation>
          <v-text-field
              v-model="search"
              label="Search"
              :counter="100" :rules="nameRules"
              solo-inverted
            ></v-text-field>
      </v-form>
      <Highlighter class="my-highlight" :style="{ color: 'red' }" highlightClassName="highlight text-decoration-underline"
        :searchWords="keywords" :autoEscape="true" :textToHighlight="text" />
  
      <!-- Table -->
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Calories
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td v-if="item.isMatch">
              <Highlighter class="my-highlight testing" :style="{ color: 'black' }"
                highlightClassName="highlight-match text-decoration-underline" :searchWords="keywords" :autoEscape="true"
                :textToHighlight="item.name" />
            </td>
            <td v-else>
              <Highlighter class="my-highlight testing" :style="{ color: 'black' }"
                highlightClassName="text-decoration-underline highlight" :searchWords="keywords" :autoEscape="true"
                :textToHighlight="item.name" />
            </td>
            <td>
              <p>{{ item.calories }}</p>
            </td>
          </tr>
        </tbody>
      </v-table>
      <!-- end table  -->
    </div>
  </template>
  
  <script>
  import Highlighter from 'vue-highlight-words'
  
  export default {
    name: 'app',
    components: {
      Highlighter
    },
    data() {
      return {
        search: "",
        textTesting: "",
        text: 'The dog is chasing the cat. Or perhaps they\'re just playing?',
        words: 'and or the',
        data: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Ice',
            calories: 50,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
          {
            name: 'Kit',
            calories: 51800,
          },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Ice',
            calories: 50,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
          {
            name: 'Kit',
            calories: 51800,
          },
        ],
  
      }
    },
    watch: {
      search() {
        this.isMatchs();
      }
    },
    methods: {
      isMatchs() {
        this.data.map((item, index) => {
          let element = item.name.split(' ');
          element.map(i => {
            if (i.toLowerCase() == this.search.toLowerCase()) {
              this.desserts[index].isMatch = true
            }else if(this.desserts[index].isMatch && i.toLowerCase() != this.search.toLowerCase()){
              this.desserts[index].isMatch = false
            }
          })
        })
      },
  
      searchText() {
        let result = []
        this.desserts.map(item => {
          if (item.name.toLowerCase().includes(this.search.toLowerCase())) {
            result.push(item);
          }
        })
        this.desserts = result;
      },
    },
    computed: {
      keywords() {
        return this.search.split(' ')
      },
    },
  }
  </script>
  <style>
  .highlight-match {
    background-color: orange !important;
  }
  </style>