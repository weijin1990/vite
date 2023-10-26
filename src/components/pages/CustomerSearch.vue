<template>
  <div class="content">
    <v-card
      class="mx-auto text-left mt-3"
      width="100%"
    >
      <v-card-title>
        <div class="d-flex align-center">
          <v-icon style="color: rgb(108, 203, 108); zoom: 1.8;">
            mdi-account-box
          </v-icon><p>顧客検索</p>
        </div>
      </v-card-title>
    </v-card>

    <v-card
      class="mx-auto text-left mt-3"
      width="100%"
    >
      <v-card-title>
        <div class="d-flex align-center">
          <v-icon style="color: rgb(55, 94, 201)">
            mdi-magnify
          </v-icon><h6>検索条件</h6>
        </div>
      </v-card-title>
      <v-card-text>
        <v-accordion>
          <v-accordion-item>
            <v-accordion-header
              class="header"
              @click="toggleAccordion"
            >
              <div class="accordion-title">
                <v-icon>{{ isOpen ? 'mdi-chevron-down' : 'mdi-chevron-right' }}</v-icon>
                <a class="title-text">キーワード検索</a>
              </div>
              <v-btn
                color="#0070d2"
                @click.stop="searchByKeyWord"
              >
                検索
              </v-btn>
            </v-accordion-header>
            <v-accordion-content>
              <div class="mt20 pl50 pr50">
                <v-text-field
                  v-if="isOpen"
                  variant="outlined"
                />
              </div>
            </v-accordion-content>
          </v-accordion-item>
        </v-accordion>

        <v-divider style="margin-top: 15px; margin-bottom: 15px;" />

        <v-accordion>
          <v-accordion-item>
            <v-accordion-header
              class="header"
              @click="toggleAccordion2"
            >
              <div class="accordion-title">
                <v-icon>{{ isOpen2 ? 'mdi-chevron-down' : 'mdi-chevron-right' }}</v-icon>
                <a class="title-text">項目別検索</a>
              </div>
              <v-btn
                color="#0070d2"
                @click.stop="searchByFields"
              >
                検索
              </v-btn>
            </v-accordion-header>
            <v-accordion-content>
              <div
                v-if="isOpen2"
                class="mt20"
              >
                <v-row>
                  <v-col cols="5">
                    <v-text-field
                      label="顧客名(漢字)"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="5">
                    <v-text-field
                      label="電話番号（固定）"
                      variant="outlined"
                    />
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="5">
                    <v-text-field
                      label="メールアドレス1"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="5">
                    <v-text-field
                      label="被保険者名（漢字）"
                      variant="outlined"
                    />
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="5">
                    <v-text-field
                      label="顧客名（カナ）"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="5">
                    <v-text-field
                      label="電話番号（携帯）"
                      variant="outlined"
                    />
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="5">
                    <v-text-field
                      label="メールアドレス2"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="5">
                    <v-text-field
                      label="被保険者名（カナ）"
                      variant="outlined"
                    />
                  </v-col>
                </v-row>
              </div>
            </v-accordion-content>
          </v-accordion-item>
        </v-accordion>
      </v-card-text>
    </v-card>

    <v-card
      class="mx-auto text-left mt-3"
      width="100%"
    >
      <v-card-title>
        <div class="d-flex align-center">
          <v-icon style="color: rgb(37, 127, 211)">
            mdi-database
          </v-icon><h6>検索結果({{ apiData ? apiData.length : "0" }})</h6>
        </div>
      </v-card-title>
      <v-card-text>
        <div class="table-container">
          <v-data-table
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items="customerList"
            item-value="name"
            class="elevation-1"
          >
            <template #item.customer="{ item }">
              <router-link :to="'/customer/' + item.customer_no">
                {{ item.customer }}
              </router-link>
            </template>
            <template #item.telephone="{ item }">
              <a :href="`tel:${item.telephone}`">{{ item.telephone }}</a>
            </template>
            <template #item.mobilephone="{ item }">
              <a :href="`tel:${item.mobilephone}`">{{ item.mobilephone }}</a>
            </template>
            <template #item.email_1="{ item }">
              <a :href="`mailto:${item.email_1}`">{{ item.email_1 }}</a>
            </template>
            <template #item.email_2="{ item }">
              <a :href="`mailto:${item.email_2}`">{{ item.email_2 }}</a>
            </template>

            <template #no-data>
              <v-icon style="color: rgb(104, 104, 104);">
                mdi-alert
              </v-icon>
              <div>検索条件に一致する結果がありません。</div>
            </template>
          </v-data-table>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'CustomerSearch',
  data() {
    return {
      isOpen: false,
      isOpen2: false,
      amplifyRes: {},
      itemsPerPage: 10,
      headers: [
        {
          title: '顧客名（漢字）',
          align: 'start',
          sortable: false,
          key: 'customer' },
        { title: '顧客名（カナ）', align: 'start', sortable: false, key: 'customer_kn' },
        { title: '電話番号（固定）', align: 'start', sortable: false, key: 'telephone' },
        { title: '電話番号（携帯）', align: 'start', sortable: false, key: 'mobilephone' },
        { title: 'メールアドレス１', align: 'start', sortable: false, key: 'email_1' },
        { title: 'メールアドレス２', align: 'start', sortable: false, key: 'email_2' },
        { title: '被保険者名（漢字）', align: 'start', sortable: false, key: 'insured_name' },
        { title: '被保険者名（カナ）', align: 'start', sortable: false, key: 'insured_name_kn' }
      ],
      customerList: [],
        
    }
  },
  computed: {
    apiData() {
      return this.amplifyRes?.tblSocialDtList;
    },
  },
  async mounted() {

  },
  methods: {
    actionBtn(ev) {
      this.$router.push({ path: '/home' });
    },
    toggleAccordion(event) {
      this.isOpen = !this.isOpen;
    },
    toggleAccordion2(event) {
      this.isOpen2 = !this.isOpen2;
    },
    async searchByKeyWord() {
      this.amplifyRes = await this.$store.dispatch('callFetchSocialInfoList');

      this.customerList = this.apiData.map(item => {
        return {
          customer_no: item.customer_no,
          customer: item.customer,
          customer_kn: item.customer_kn,
          telephone: item.telephone,
          mobilephone: item.mobilephone,
          email_1: item.email_1,
          email_2: item.email_2,
          insured_name: '',
          insured_name_kn: '',
        };
      });
    },
    async searchByFields() {
      alert('未実装');
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  min-height: calc(100vh - 160px);
}
  .table-container a {
    color: #0C5CAB;
    font-weight: 400;
    text-decoration: none; 

    &:hover {
      color: #0176D3;
      text-decoration: underline; 
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .accordion-title {
    display: flex;
    align-items: center;
  }

  .title-text {
    margin-right: 16px;
    &:not(:hover) {
      color: black;
    }
  }

  .full-screen {
    width: 800px;
  }

  .v-col, .pl50 {
    padding-left: 50px;
  }

  .pr50 {
    padding-right: 50px;
  }

  .mt20 {
    margin-top: 20px;
  }
</style>

<style lang="scss">
  .table-container th {
    background-color: #F3F3F3;
    &:hover {
      background-color: #FCFCFC;
    }
    &:not(:last-of-type) {
      border-right:1px solid #666666;
    }
  }
</style>
