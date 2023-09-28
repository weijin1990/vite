<template>
        <v-card
    class="mx-auto text-left ml-5"
    color="#F3F2F2"
    width="95%"
    >
    <v-row no-gutters align="end">
      <v-col cols="1">
        <v-icon
      size="70px"
      color="#2A739E"
      icon="mdi-account-box"
    >  </v-icon>
      </v-col>

    <v-col class="">
      <v-card-subtitle style="color: #006DCC;" class="mb--5">設定</v-card-subtitle>
  <v-card-title>
      ユーザ
    </v-card-title>
    </v-col>
  </v-row>
    </v-card>

    <v-card
    class="mx-auto text-left mt-3"
    width="100%"
    >
      <v-card-text>
        <p>
          このページで、ユーザを作成、表示、及び管理できます。
          さらに、モバイルデバイスからユーザ詳細の表示と編集、パスワードのリセット、およびその他の管理タスクを実行するには、……
        </p>
        ビュー  <v-select v-model="select"
    :items="items"
    item-title="key"
    item-value="val"
    ></v-select>

    <br>

    <v-table>
    <thead>
      <tr>
        <th class="text-left">
          アクション
        </th>
        <th class="text-left">
          氏名
        </th>
        <th class="text-left">
          別名
        </th>
        <th class="text-left">
          ユーザ名
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in users"
        :key="item.name"
      >
        <td><a href="#">{{ item.action }}</a></td>
        <td>{{ item.name }}</td>
        <td>{{ item.alias }}</td>
        <td>{{ item.username }}</td>
      </tr>
    </tbody>
  </v-table>

      </v-card-text>
    </v-card>
</template>

<script>
export default {
  name: 'Dashboard',
  computed: {
  },
  data() {
    return {
      select: { key: '01.すべてのユーザ', val: '1' },
      items: [ 
        { key: '01.すべてのユーザ', val: '1' },
        { key: 'Bar', val: 'Fizz' },
      ],
      users: [
  { action: '編集', name: '氏名１', alias: 'Frozen Yogurt', username: 159, },
  { action: '編集', name: '氏名２', alias: 'Ice cream sandwich', username: 237, },
  { action: '編集', name: '氏名３', alias: 'Eclair', username: 262, },
  { action: '編集', name: '氏名４', alias: 'Cupcake', username: 305, },
  { action: '編集', name: '氏名５', alias: 'Gingerbread', username: 356, },
  { action: '編集', name: '氏名６', alias: 'Jelly bean', username: 375, },
  { action: '編集', name: '氏名７', alias: 'Lollipop', username: 392, },
  { action: '編集', name: '氏名８', alias: 'Honeycomb', username: 408, },
  { action: '編集', name: '氏名９', alias: 'Donut', username: 452, },
  { action: '編集', name: '氏名１０', alias: 'KitKat', username: 518, },
],
    }
  },
  methods: {
    actionBtn(ev) {
      this.$router.push({ path: '/home' });
    },
    fetchBtn(ev) {
      this.$router.push({ path: '/fetch' });
    }
  }
}
</script>

<style>
.mb--5 {
  margin-bottom: -10px !important;
}
  .full-screen {
    width: 800px;
  }
</style>
