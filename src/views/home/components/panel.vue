<template>
  <div class="main">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="基本操作" name="basic" class="el-tabs__content">
        <el-scrollbar height="560px">
          <el-divider content-position="center" style="font-size: 20px"
            >放大/缩小</el-divider
          >
          <div class="slider-demo-block">
            <span class="demonstration">X轴变化率(%)</span>
            <el-slider
              v-model="zoomXValue"
              :step="1"
              :min="-100"
              :max="100"
              show-stops
              show-input
            />
          </div>
          <div class="slider-demo-block">
            <span class="demonstration">Y轴变化率(%)</span>
            <el-slider
              v-model="zoomYValue"
              :step="1"
              :min="-100"
              :max="100"
              show-stops
              show-input
            />
          </div>
          <el-button type="primary" style="margin-top: 6px; margin-left: 4px"
            >应用</el-button
          >
          <el-divider content-position="center" style="font-size: 20px"
            >旋转</el-divider
          >
          <div class="slider-demo-block">
            <span class="demonstration">角度(%)</span>
            <el-slider
              v-model="rotateValue"
              :step="1"
              :min="-180"
              :max="180"
              show-stops
              show-input
            />
          </div>
          <el-button type="primary" style="margin-top: 6px; margin-left: 4px"
            >应用</el-button
          >
          <el-divider content-position="center" style="font-size: 20px"
            >仿射</el-divider
          >
          <el-button type="primary" style="margin-top: 12px; margin-left: 4px"
            >应用</el-button
          >
          <el-divider content-position="center" style="font-size: 20px"
            >翻转/镜像</el-divider
          >
          <div>
            <el-radio v-model="spinVaue" label="X" size="large" border
              >X轴翻转</el-radio
            >
            <el-radio v-model="spinVaue" label="Y" size="large" border
              >Y轴翻转</el-radio
            >
          </div>
          <el-button
            type="primary"
            :icon="Setting"
            style="margin-top: 6px; margin-left: 4px"
            >应用</el-button
          >
          <el-divider content-position="center" style="font-size: 20px"
            >平移</el-divider
          >
          <div class="slider-demo-block">
            <span class="demonstration">X轴偏移(%)</span>
            <el-slider
              v-model="transXValue"
              :step="1"
              :min="-180"
              :max="180"
              show-stops
              show-input
            />
          </div>
          <div class="slider-demo-block">
            <span class="demonstration">Y轴偏移(%)</span>
            <el-slider
              v-model="transYValue"
              :step="1"
              :min="-180"
              :max="180"
              show-stops
              show-input
            />
          </div>
          <el-button
            type="primary"
            :icon="Setting"
            style="margin-top: 6px; margin-left: 4px"
            >应用</el-button
          >
        </el-scrollbar>
      </el-tab-pane>
      <el-tab-pane label="灰度变换" name="change" class="el-tabs__content"
        >Role</el-tab-pane
      >
      <el-tab-pane label="噪声添加" name="noise" class="el-tabs__content"
        >Task</el-tab-pane
      >
      <el-tab-pane label="复原操作" name="re" class="el-tabs__content"
        >Task</el-tab-pane
      >
      <el-tab-pane label="空间域操作" name="space" class="el-tabs__content"
        >Task</el-tab-pane
      >
      <el-tab-pane label="频域操作" name="op" class="el-tabs__content"
        >Task</el-tab-pane
      >
    </el-tabs>
  </div>
</template>

<script>
import {
  Setting,
  Delete,
  Edit,
  Search,
  Share,
  Upload,
} from "@element-plus/icons-vue";
export default {
  components: {
    Setting,
  },
  data() {
    return {
      activeName: "basic",
      zoomXValue: 0,
      zoomYValue: 0,
      rotateValue: 0,
      spinVaue: "X",
      transXValue: 0,
      transYValue: 0,
    };
  },
};
</script>

<style scoped>
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
.slider-demo-block .demonstration {
  font-size: 14px;
  line-height: 44px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
}
.slider-demo-block .demonstration + .el-slider {
  flex: 1 0 60%;
}
.el-tabs__content {
  padding: 4px;
  color: #6b778c;
}
.main {
  width: 590px;
  height: 650px;
}
</style>
