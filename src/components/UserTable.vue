<template>
  <div>
    <my-table :arr="list"></my-table>

    <my-table :arr="list">
      <template v-slot="scope">
        <a href="scope.row.imgurl">{{ scope.row.imgurl }}</a>
      </template>
    </my-table>

    <my-table :arr="list">
      <template v-slot="scope">
        <img width="200" :src="scope.row.imgurl" alt="" />
      </template>
    </my-table>
  </div>
</template>

<script>
import MyTable from "./MyTable.vue";
export default {
  components: { MyTable },
  data() {
    return {
      list: [
        {
          id: 100,
          name: "张三",
          age: 20,
          imgurl: "http://pic1.win4000.com/wallpaper/a/574d56297e96c.jpg",
        },
        {
          id: 101,
          name: "赵四",
          age: 24,
          imgurl: "http://pic1.win4000.com/wallpaper/a/574d56297e96c.jpg",
        },
        {
          id: 102,
          name: "wangwu",
          age: 23,
          imgurl: "http://pic1.win4000.com/wallpaper/a/574d56297e96c.jpg",
        },
        {
          id: 103,
          name: "张大麻子",
          age: 25,
          imgurl: "http://pic1.win4000.com/wallpaper/a/574d56297e96c.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
</style>