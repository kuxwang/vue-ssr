<template>
	<div class="about">
		<List v-model:loading="loading" :finished="finished" @load="loadMore">
			<div class="p-15 text-14" v-for="(item, index) in list" :key="item.title">
				<div>标题{{ index }}</div>
				<div>{{ item.text || '' }}</div>
			</div>
		</List>
	</div>
</template>

<script setup>
// import {onMounted} from "vue"
import { List } from "vant";
import { useLoadMore } from "@/composeable/useLoadMore.js";
import { res as mock } from "./data";

const getList = (params) => {
  console.log('params')
  console.log(params)
	return new Promise((resolve) => {
		setTimeout(() => {
			const res = mock;
			res.result.pageNum = params.pageNum;
			res.result.total = 51;
      res.result.list.forEach(i => {
        i.text = `分页参数为${params.pageNum}`
      })
			resolve(res.result);
		}, 2000);
	});
};

const { page, list, loading, finished, onLoad } = useLoadMore();

const loadMore = () => {
	const params = {
    pageNum: page.value.pageNum,
    pageSize: page.value.pageSize,
		id: 1,
	};
	onLoad(getList(params));
};
</script>
