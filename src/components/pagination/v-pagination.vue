
<template>
  <div :class="{ 'flex justify-between items-center': goButton }">
    <div :class="{ 'flex justify-between items-center': (props.styled === 'simple') }">
      <nav
        class="mb-2"
        aria-label="Pagination"
        :class="{ 'mb-3': props.styled === 'centered' }"
      >
      <div class="inline-flex">
        <button disabled="false" :class="classesFirst(currentPage)" @click.prevent="changePage(currentPage - 1)">
          <slot name="prev">
            <span class="sr-only">Previous</span>
            <v-icon name="previous" />
          </slot>
        </button>
        <button v-if="hasFirst()" @click.prevent="changePage(1)" :class="classesPage(1)">1</button>
        <button v-if="hasFirst()" :class="classesPage(1)">...</button>
        <button v-for="(page, index) in calculatedPages" :key="index" :class="classesPage(page)" @click.prevent="changePage(page)">
          {{ page }}
        </button>
        <button v-if="hasLast()" :class="classesPage(totalPages)">...</button>
        <button v-if="hasLast()" @click.prevent="changePage(totalPages)" :class="classesPage(totalPages)">{{ totalPages }}</button>
        <button disabled="false" :class="classesLast(currentPage)" @click.prevent="changePage(currentPage + 1)">
          <slot name="next">
            <span class="sr-only">Next</span>
            <v-icon name="next" />
          </slot>
        </button>
      </div>

      </nav>
      <div v-if="props.Label" :class="{ 'order-first': props.styled === 'simple' }">
        <p class="text-sm text-gray-700">
          Showing
          <span class="font-medium">{{ paginationFrom }}</span>
          to
          <span class="font-medium">{{ paginationTo }}</span>
          of
          <span class="font-medium">{{ totalItems }}</span>
          results
        </p>
      </div>
    </div>
    <div v-if="goButton">
      <label
        for="search"
        class="pr-3 text-gray-500 text-xs font-semibold uppercase"
      >{{ textBeforeInput }}</label>
      <input
        type="text"
        placeholder="Page no"
        class="w-28 px-4 py-1 rounded-l outline-none border-t-2 border-l-2 border-b-2 placeholder:text-xs uppercase font-semibold"
        :class="`focus:${borderActiveColor}`"
        v-model="pageInput"
      />
      <button
        class="px-4 py-1.5 rounded-r bg-indigo-500 text-white"
        @click.prevent="changePage(pageInput)"
      >{{ textAfterInput }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalItems: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    required: true
  },
  pageRange: {
    type: Number,
    default: 2
  },
  goButton: {
    type: Boolean,
    default: false
  },
  textBeforeInput: {
    type: String,
    default: 'Go to page'
  },
  textAfterInput: {
    type: String,
    default: 'Go'
  },
  borderActiveColor: {
    type: String,
    default: 'border-indigo-500'
  },
  borderTextActiveColor: {
    type: String,
    default: 'text-indigo-500'
  },
  styled: {
    type: String,
    default: 'simple'
  },
  size: {
    type: String,
    default: 'md'
  },
  Label: {
    // type: Boolean,
    default: true
  },
})

/* eslint-enable no-alert, no-console */
const emit = defineEmits<{
  (event: 'page-changed', id: number): void //eslint-disable-line no-alert, no-console
}>()
/* eslint-disable */

const pageInput = ref<number>(1)

const totalPages = Math.ceil(props.totalItems / props.perPage)

const paginationFrom = computed(() => (props.currentPage - 1) * props.perPage + 1)

const paginationTo = computed(() => {
  let end = (props.currentPage * props.perPage);
  return props.totalItems < end ? props.totalItems : end;
})

const isFirstPage = computed(() => {
  return props.currentPage === 1
})

const isLastPage = computed(() => {
  return props.currentPage >= totalPages
})

// methods
const changePage = (page: number) => {
  if (page > 0 && page <= totalPages) {
    emit('page-changed', page)
  }
}

// try
const rangeStart = computed(() => {
  var start = props.currentPage - props.pageRange
  return (start > 0) ? start : 1
})

const rangeEnd = computed(() => {
  var end = (props.currentPage + props.pageRange)
  return (end < totalPages) ? end : totalPages
})

const hasFirst = () => {
  return rangeStart.value !== 1
}

const hasLast = () => {
  return rangeEnd.value < totalPages
}

const calculatedPages = computed(() => {
  var pages = []
  for (var i = rangeStart.value; i <= rangeEnd.value; i++) {
    pages.push(i)
  }
  return pages
})

const listSizeClasses = {
  xs: 'px-2 h-5 ',
  sm: 'px-2 h-6 ',
  md: 'px-3 h-8 ',
  lg: 'px-4 h-10 ',
  xl: 'px-5 h-12 ',
}

//style
const classesPage = (page: number) => {
  if(page === props.currentPage){
    return [
      listSizeClasses[props.size],
      `flex items-center justify-center leading-tight `,
      `text-blue-600 bg-blue-50 dark:bg-gray-700 dark:text-white`,
      `border border-gray-300 dark:border-gray-700 border-solid`,
      `dark:hover:bg-gray-700 dark:hover:text-white hover:bg-blue-100 hover:text-blue-700 `,
    ];
  }else{
    return [
      listSizeClasses[props.size],
      `flex items-center justify-center leading-tight`,
      `text-gray-500 bg-white dark:bg-gray-800 dark:text-gray-400`,
      `border border-gray-300 dark:border-gray-700 border-solid`,
      `hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white`,
    ];
  }
}

const classesFirst = (page: number) => {
  if(page === 1){   
    return [
      listSizeClasses[props.size],
      `flex items-center justify-center first:rounded-l-md last:rounded-r-dm ml-0 leading-tight`,
      `border border-gray-300 hover:bg-gray-100 hover:text-gray-700 border-solid`,
      `cursor-not-allowed`,
      `bg-gray-100 text-gray-700`,
      `dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white dark:bg-gray-700 dark:text-white`,
    ];
  }else{
    return [
      listSizeClasses[props.size],
      `flex items-center justify-center first:rounded-l-md last:rounded-r-md ml-0 leading-tight`,
      `border border-gray-300 hover:bg-gray-100 hover:text-gray-700 border-solid`,
      `bg-white text-gray-500`,
      `dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`,
    ];
  }
}
const classesLast = (page: number) => {
  if(page >= totalPages){   
    return [
      listSizeClasses[props.size],
      `flex items-center justify-center first:rounded-l-md last:rounded-r-dm ml-0 leading-tight`,
      `border border-gray-300 hover:bg-gray-100 hover:text-gray-700 border-solid`,
      `cursor-not-allowed`,
      `bg-gray-100 text-gray-700`,
      `dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white dark:bg-gray-700 dark:text-white`,
    ];
  }else{
    return [
      listSizeClasses[props.size],
      `flex items-center justify-center first:rounded-l-md last:rounded-r-md ml-0 leading-tight`,
      `border border-gray-300 hover:bg-gray-100 hover:text-gray-700 border-solid`,
      `bg-white text-gray-500`,
      `dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`,
    ];
  }
}
</script>
