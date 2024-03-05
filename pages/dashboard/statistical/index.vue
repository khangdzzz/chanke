<script lang="ts" setup>
import { formatDate, getStartTime, endTimeDay } from "~/utils/formatters"
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

definePageMeta({
	middleware: 'auth',
	layout: 'dashboad',
})

const gameStore = useGameStore()
const statisticalStore = useStatisticalStore()

const defaultGame = ref({ gameType: "", name: "Tất cả" })

const games = computed(() => {
	return [{ gameType: "", name: "Tất cả" }, ...gameStore.listGamesDetail]
})

const startDate = ref(getStartTime())

const endDate = ref(endTimeDay())

onMounted(async () => {
	const condition = `?startDate=${startDate.value}&endDate=${endDate.value}`
	await statisticalStore.getStatistical(condition)
})

const statistical = computed(() => statisticalStore.statistical)
const result = computed(() => {
	let amount = 0
	let bonus = 0
	statisticalStore.statistical?.forEach((item) => {
		amount += item.amount
		bonus += item.bonus
	})
	return {
		amount,
		bonus,
		result: amount - bonus
	}
})

const searchStatistical = async () => {
	let condition = `?startDate=${startDate.value}&endDate=${endDate.value}`
	condition += defaultGame.value.gameType ? `&gameName=${defaultGame.value.gameType}` : ''

	await statisticalStore.getStatistical(condition)
}

const formatNumber = (value?: number) => {
	return value ? Number(value).toLocaleString() : 0
}

</script>

<template>
	<div class="search-user">
		<v-select v-model="defaultGame" :items="games" item-value="gameType" item-title="name" variant="outlined"
			label="Loại Game" class="games" dense :clearable="false" return-object></v-select>
		<div class="content__item">
			<div class="content__item__title">Thời Gian Bắt Đầu</div>
			<div class="content__item__input">
				<VueDatePicker v-model="startDate"></VueDatePicker>
			</div>
		</div>
		<div class="content__item">
			<div class="content__item__title">Thời Gian Kết Thúc</div>
			<div class="content__item__input">
				<VueDatePicker v-model="endDate"></VueDatePicker>
			</div>
		</div>
		<v-btn class="icon" append-icon="mdi-magnify" @click="searchStatistical()">Tìm Kiếm</v-btn>
	</div>
	<div class="container-search">
		<table class="table">
			<thead class="head">
				<tr class="row">
					<th class="cell">THỜI GIAN</th>
					<th class="cell">Tổng Tiền Vào</th>
					<th class="cell">Tổng Tiền Trả</th>
					<th class="cell">Kết Quả</th>

				</tr>
			</thead>
			<tbody class="body">
				<tr class="row" v-for="item in statistical" :key="item.time">
					<td class="cell">{{ item.time }}</td>
					<td class="cell">{{ formatNumber(item.amount) }}</td>
					<td class="cell">{{ formatNumber(item.bonus) }}</td>
					<td class="cell">{{ formatNumber(item.amount - item.bonus) }}</td>
				</tr>
				<tr class="row">
					<td class="cell">Tổng</td>
					<td class="cell">{{ formatNumber(result.amount) }}</td>
					<td class="cell">{{ formatNumber(result.bonus) }}</td>
					<td class="cell">{{ formatNumber(result.result) }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<style lang="scss" scoped>
.search-user {
	display: flex;
	padding-bottom: 35px;
	flex-direction: column;
	gap: 10px;
	width: 50%;
	color: #000;

	>.games {
		width: 100%;
	}

	>.input {
		display: block;
		width: 100%;
		padding: 0.375rem 0.75rem;
		font-size: 0.9375rem;
		line-height: 1.6;
		color: #898989;
		background-color: #fff;
		background-clip: padding-box;
		border: 1px solid #eaeaea;
		border-radius: 3px;
		transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	}

	>.icon {
		background-color: $primary-color;
		color: #fff;
		border-radius: 4px;
		max-width: 127px;
		width: 100%;
	}
}

.container-search {
	width: 100%;
	overflow-x: auto;
	color: #000;

	>.table {
		width: 100%;
		margin-bottom: 12px;
		border-collapse: collapse;
		border-spacing: 0;
		border: 1px solid #e0e0e0;
	}

	>.table>.head {
		background-color: $primary-color;
		color: white;
	}

	>.table>.head>.row>.cell {
		padding: 8px 16px;
		font-size: 0.9rem;
		font-weight: 900;
		line-height: 1.5;
		text-align: center;
		border: 1px solid #e0e0e0;
		white-space: nowrap;
	}

	>.table tbody>.row:nth-child(odd) {
		background-color: #fff;
	}

	>.table tbody>.row:nth-child(even) {
		background-color: #f6f6f6;
	}

	>.table tbody>.row>.cell {
		padding: 8px 16px;
		font-size: 0.9rem;
		font-weight: 400;
		line-height: 1.5;
		text-align: center;
		border: 1px solid #e0e0e0;
		white-space: nowrap;
	}

	>.table tbody>.row>.cell>.payment {
		background-color: $primary-color;
		color: #fff !important;
		padding: 0 8px !important;
	}

	>.table tbody>.row>.cell>.betName {
		cursor: pointer;
		background-color: $primary-color;
		color: #fff;
		padding: 1px 2px;
		border-radius: 1px;
	}

	>.table tbody>.row>.cell {
		&>.result {
			padding: 3px 6px;
			color: #fff;
			border-radius: 3px;
		}

		&>.-lose {
			background: #343a40;
		}

		&>.-win {
			background: linear-gradient(to bottom right, #62fb62, #21a544) !important;
		}
	}
}
</style>
