<template>
  <div>
    <Datepicker v-model="date" range :preset-ranges="presetRanges"></Datepicker>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { endOfMonth, endOfYear, startOfMonth, startOfYear, subMonths, subDays, subYears } from 'date-fns';

interface PresetRange {
  label: string;
  range: Date[] | string[];
  style?: Record<string, string>;
  slot?: string
}

const date = ref()

const presetRanges = ref<PresetRange[]>([
  { label: 'Today', range: [new Date(), new Date()] },
  { label: 'Last 7 days', range: [subDays(new Date(), 7), new Date()] },
  { label: 'This month', range: [startOfMonth(new Date()), endOfMonth(new Date())] },
  {
    label: 'Last month',
    range: [startOfMonth(subMonths(new Date(), 1)), endOfMonth(subMonths(new Date(), 1))],
  },
  { label: 'This year', range: [startOfYear(new Date()), endOfYear(new Date())] },
  { label: 'Last year', range: [startOfYear(subYears(new Date(), 1)), endOfYear(subYears(new Date(), 1))] },
  {
    label: 'This year (slot)',
    range: [startOfYear(new Date()), endOfYear(new Date())],
    slot: 'yearly',
  },
  {
    label: 'Last year (slot)',
    range: [endOfYear(new Date()),startOfYear(new Date())],
    slot: 'yearly',
  },
]);
</script>
<style>
.dp__range_between{
  background: rgba(30, 129, 176,0.5) !important;
  border-top: 1px solid rgba(30, 129, 176,0.5);
    border-bottom: 1px solid rgba(30, 129, 176,0.5);
}
</style>