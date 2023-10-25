<template>
  <div class="tab-container">
    <v-card class="tab-card left-card">
      <v-tabs v-model="leftTab">
        <v-tab class="custom-tab">
          <h3>最近参照したデータ</h3>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="leftTab">
        <v-tab-item>
          <v-card class="inner-card">
            <v-card-title>
              最近参照した顧客カルテ
            </v-card-title>
            <v-card-text>
              <div class="sample-info">
                <v-icon style="color: rgb(31, 74, 192)">
                  mdi-office-building-cog
                </v-icon><h4>株式会社金融百貨店</h4>
              </div>
            </v-card-text>
          </v-card>
          <v-card class="inner-card">
            <v-card-title>
              最近参照した【フラット】顧客情報
            </v-card-title>
            <v-card-text>
              <div class="sample-info">
                <v-icon style="color: rgb(192, 31, 39)">
                  mdi-account-box-multiple
                </v-icon><h4>フラット顧客</h4>
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <v-card class="tab-card right-card">
      <v-tabs>
        <v-tab class="custom-tab">
          <h3>リンク集</h3>
        </v-tab>
      </v-tabs>

      <v-tabs-items>
        <v-tab-item>
          <div class="link-list">
            <ul>
              <li class="block">
                <p><strong>マニュアル</strong></p>
                <ul class="inner-list">
                  <li><a href="#">FiCS操作マニュアル</a></li>
                </ul>
              </li>
              <li class="block">
                <p><strong>顧客分析用レポート</strong></p>
                <ul class="inner-list">
                  <li><a href="#">顧客分析用レポート（保険）</a></li>
                  <li><a href="#">顧客分析用レポート（証券）</a></li>
                  <li><a href="#">顧客分析用レポート（信託）</a></li>
                  <li><a href="#">顧客分析用レポート（フラット）</a></li>
                  <li><a href="#">顧客分析用レポート（NEOBANK）</a></li>
                </ul>
              </li>
              <li class="block">
                <p><strong>内部管理部向けレポート</strong></p>
                <ul class="inner-list">
                  <li><a href="#">すべての商談メモ一覧</a></li>
                  <li><a href="#">本日の商談メモ一覧</a></li>
                  <li><a href="#">昨日の商談メモ一覧</a></li>
                  <li><a href="#">今週の商談メモ一覧</a></li>
                  <li><a href="#">先週の商談メモ一覧</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>


<script>
export default {
  name: 'HomePage',

  data() {
    return {
      leftTab: null,
    };
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
.tab-container {
  display: flex;
  width: 100%;
  min-height: calc(100vh - 132px);
}

.tab-card {
  display: flex;
  flex: 1;
  margin: 10px;
  flex-direction: column;

  &.left-card {
    flex: 2;
  }

  &.right-card {
    height: fit-content;
  }
}

.inner-card {
  border: 1px solid #ccc;
  padding: 16px;
  width: calc(100% - 20px);
  margin: 10px;
  min-height: 300px;
}

.link-list {
  padding: 16px 0 40px;

  ul {
    list-style-type: none;
    padding: 0 0 0 16px;

    li.block {
      margin-top: 20px;
    }
  }
  ul.inner-list {
    list-style-type: disc;
    padding: 0 0 0 40px;
  }
  p {
    margin: 0;
  }
}


  // TODO サンプル用、削除予定
  .sample-info {
    display: flex;
    align-items: center;
  }
</style>

<style>
  .v-tab--selected .v-tab__slider {
    background-color: #0070d2;
  }
</style>