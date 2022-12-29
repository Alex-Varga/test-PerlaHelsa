<template>
  <div class="product-information-tabs">
    <div class="tab-titles">
      <div class="tab-title" :class="{active: i == selectedTab}" v-for="(item, i) of tabTitles" :key="i" @click="setActiveTab(i)">
        {{ item }}
      </div>
    </div>

    <div class="tab-content-wrapper">
      <div class="tab-content" v-if="selectedTab == 0">
        <span>Комплекс EPA + DHA кислот і натуральних вітамінів А & D3 для здоров'я твоєї шкіри, волосся, зору, сну, міцних кісток, суглобів та імунітету.</span>
      </div>

      <div class="tab-content" v-if="selectedTab == 1">
        <ul>
          <li>Покращують стан шкіри: борються з акне та сприяють її регенерації</li>
          <li>Зменшують випадіння волосся, стимулюють його ріст</li>
          <li>Підіймають настрій та полегшують симптоми депресії</li>
          <li>Зміцнюють імунітет: зменшують запальні процеси</li>
          <li>Поліпшують роботу гормонів, серця і ЦНС</li>
          <li>Зменшують болі в суглобах</li>
          <li>Покращують метаболізм і роботу ШКТ</li>
        </ul>
      </div>

      <div class="tab-content" v-if="selectedTab == 2">
        <table>
          <tbody>
            <tr>
              <td>
                <p><strong>Склад:</strong></p>
              </td>
              <td>
                <p>100% риб'ячий жир з печінки тріски, желатин, гліцерин.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p><strong><strong>EPA / DHA</strong></strong></p>
              </td>
              <td>
                <p>170 мг / 205 мг</p>
              </td>
            </tr>
            <tr>
              <td>
                <p><strong>Вітамін-А</strong></p>
              </td>
              <td>
                <p>656 мкг 2187&nbsp;МО</p>
              </td>
            </tr>
            <tr>
              <td>
                <p><strong>Вітамін-D3</strong></p>
              </td>
              <td>
                <p>5.2 мкг 210&nbsp;МО</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="tab-content" v-if="selectedTab == 3">
        <p>
          Для профілактики, дорослим і дітям від 11 років – <strong>4 капсули на день</strong>, разом із їжею або одразу після. Бажано з іншими жирами для кращого засвоєння.<br><br>
          <strong>Курс прийому:</strong> 2-3 місяці, після чого зробити перерву 1-2 місяці або перейти на Омега-3 із Тунця.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
const props = defineProps({
  tabTitles: {
    type: Array,
    required: true
  }
})

const selectedTab = ref(0)

const setActiveTab = (id) => {
  selectedTab.value = id
}
</script>

<style lang="scss" scoped>
.product-information-tabs {

  .tab-titles {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 40, 79, 0.1);
    padding-bottom: 8px;

    .tab-title {
      position: relative;
      font-weight: 700;
      font-size: 11px;
      line-height: 14px;
      text-transform: uppercase;
      color: var(--primary);
      opacity: 0.4;
      cursor: pointer;

      @media (min-width: 767px) {
        font-size: 17px;
        line-height: 22px;
        letter-spacing: 0.03em;
      }

      &.active {
        opacity: 1;

        &::after {
          position: absolute;
          content: '';
          bottom: -9px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--primary);
        }
      }
    }
  }

  .tab-content-wrapper {
    padding-top: 12px;

    .tab-content {
      font-family: 'Onest';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      color: var(--primary);

      @media (min-width: 767px) {
        font-size: 18px;
        line-height: 26px;
      }

      strong {
        font-style: italic;
      }

      ul {
        margin-left: 20px;
      }

      table {
        width: 100%;

        tr {
          display: table;
          width: 100%;
          vertical-align: baseline;
          border-bottom: 1px solid #1D1D1B;

          td {
            width: 40%;
            padding: 7px 0;
          }
        }
      }
    }
  }
}
</style>