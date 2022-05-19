<template>
  <div class="main">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="基本操作" name="basic" class="el-tabs__content">
        <el-scrollbar noresize height="560px">
          <div style="width: 98%">
            <el-divider content-position="center" style="font-size: 20px"
              >(像素)放大/缩小</el-divider
            >
            <div class="slider-demo-block">
              <span class="demonstration">X轴变化率(倍)</span>
              <el-slider
                v-model="zoomXValue"
                :step="0.1"
                :min="0.1"
                :max="10"
                show-input
              />
            </div>
            <div class="slider-demo-block">
              <span class="demonstration">Y轴变化率(倍)</span>
              <el-slider
                v-model="zoomYValue"
                :step="0.1"
                :min="0.1"
                :max="10"
                show-input
              />
            </div>
            <el-button
              @click="resizeHandler"
              type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
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
                show-input
              />
            </div>
            <el-button
              @click="rotateHandler"
              type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px"
              >仿射</el-divider
            >
            <el-button
              type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
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
              style="margin-top: 6px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
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
                show-input
              />
            </div>
            <el-button
              @click="translateHandler"
              type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
          </div>
        </el-scrollbar>
      </el-tab-pane>
      <el-tab-pane label="灰度变换" name="change" class="el-tabs__content">
        <el-scrollbar noresize height="560px">
          <div style="width: 98%">
            <el-divider content-position="center" style="font-size: 20px"
              >对数变换</el-divider
            >
            <el-button
              @click="resizeHandler"
              type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px"
              >反色变换/反转</el-divider
            >
            <el-button
              type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px"
              >伽马变换/幂次变换</el-divider
            >
            <div class="slider-demo-block">
              <span
                class="demonstration"
                style="margin-right: 4px; overflow: visible"
                >幂次值</span
              >
              <el-input
                v-model="input1"
                placeholder="输入值"
                style="margin-left: 10px; width: 200px"
              />
            </div>

            <el-button
              type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px"
              >直方图均衡化</el-divider
            >
            <el-button
              type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px"
              >直方图规定化</el-divider
            >
            <el-button
              type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px"
              >分段线性变换</el-divider
            >
            <div class="slider-demo-block">
              <span
                class="demonstration"
                style="margin-right: 4px; overflow: visible"
                >a</span
              >
              <el-input
                v-model="input2"
                placeholder="输入值"
                style="margin-left: 10px; width: 200px"
              />
            </div>
            <div class="slider-demo-block">
              <span
                class="demonstration"
                style="margin-right: 4px; overflow: visible"
                >b</span
              >
              <el-input
                v-model="input2"
                placeholder="输入值"
                style="margin-left: 10px; width: 200px"
              />
            </div>
            <div class="slider-demo-block">
              <span
                class="demonstration"
                style="margin-right: 4px; overflow: visible"
                >c</span
              >
              <el-input
                v-model="input2"
                placeholder="输入值"
                style="margin-left: 10px; width: 200px"
              />
            </div>
            <div class="slider-demo-block">
              <span
                class="demonstration"
                style="margin-right: 4px; overflow: visible"
                >d</span
              >
              <el-input
                v-model="input2"
                placeholder="输入值"
                style="margin-left: 10px; width: 200px"
              />
            </div>
            <el-button
              type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px"
              >对比度拉伸</el-divider
            >
            <el-button
              type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
          </div>
        </el-scrollbar>
      </el-tab-pane>
      <el-tab-pane label="噪声添加" name="noise" class="el-tabs__content">
        <el-scrollbar noresize height="560px">
          <div style="width: 98%">
            <el-divider content-position="center" style="font-size: 20px"
              >椒盐噪声</el-divider
            >
            <div class="slider-demo-block">
              <span class="demonstration">椒噪声比例</span>
              <el-slider
                v-model="zoomPepperValue"
                :step="0.01"
                :min="0.001"
                :max="1"
                show-input
              />
            </div>
            <div class="slider-demo-block">
              <span class="demonstration">盐噪声比例</span>
              <el-slider
                v-model="zoomSaltValue"
                :step="0.01"
                :min="0.001"
                :max="1"
                show-input
              />
            </div>
            <el-button
              @click="resizeHandler"
              type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px"
              >高斯噪声</el-divider
            >
            <div class="slider-demo-block">
              <span
                class="demonstration"
                style="margin-right: 4px; overflow: visible"
                >均值</span
              >
              <el-input
                v-model="input2"
                placeholder="输入值"
                style="margin-left: 10px; width: 200px"
              />
            </div>
            <div class="slider-demo-block">
              <span
                class="demonstration"
                style="margin-right: 4px; overflow: visible"
                >方差</span
              >
              <el-input
                v-model="input2"
                placeholder="输入值"
                style="margin-left: 10px; width: 200px"
              />
            </div>
            <el-button
              @click="resizeHandler"
              type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
          </div>
        </el-scrollbar>
      </el-tab-pane>

      <el-tab-pane label="复原操作" name="re" class="el-tabs__content">
        <el-scrollbar noresize height="560px">
          <div style="width: 98%">
            <el-divider content-position="center" style="font-size: 20px"
              >模糊操作
            </el-divider>
            <div>
              <el-tag
                style="margin-top: 6px; align-items: center; font-size: 15px"
                >Motion</el-tag
              >
            </div>
            <div class="slider-demo-block">
              <span
                class="demonstration"
                style="margin-right: 4px; overflow: visible"
                >距离</span
              >
              <el-input
                v-model="input2"
                placeholder="输入值"
                style="margin-left: 10px; width: 200px"
              />
            </div>
            <div class="slider-demo-block">
              <span
                class="demonstration"
                style="margin-right: 4px; overflow: visible"
                >角度</span
              >
              <el-input
                v-model="input2"
                placeholder="输入值"
                style="margin-left: 10px; width: 200px"
              />
            </div>

            <div>
              <el-tag
                style="margin-top: 6px; align-items: center; font-size: 15px"
                >Disk</el-tag
              >
            </div>
            <div class="slider-demo-block">
              <span
                class="demonstration"
                style="margin-right: 4px; overflow: visible"
                >半径</span
              >
              <el-input
                v-model="input2"
                placeholder="输入值"
                style="margin-left: 10px; width: 200px"
              />
            </div>

            <el-button
              @click="resizeHandler"
              type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px"
              >维纳滤波
            </el-divider>
            <el-row>
              <div style="margin-bottom: 15px">
                <div style="width: 565px; height: auto; align-items: stretch">
                  <el-button type="primary" plain>PSF</el-button>
                  <el-button type="success" plain>NSR</el-button>
                  <el-button type="info" plain>NCORR, ICORR</el-button>
                </div>
              </div>
            </el-row>
            <el-button
              @click="resizeHandler"
              type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px"
              >平滑约束复原
            </el-divider>
            <el-button
              @click="resizeHandler"
              type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px"
              >自适应中值滤波
            </el-divider>
            <el-button
              @click="resizeHandler"
              type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px"
              >自适应均值滤波
            </el-divider>
            <el-button
              @click="resizeHandler"
              type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
          </div>
        </el-scrollbar>
      </el-tab-pane>
      <el-tab-pane label="空间域操作" name="space" class="el-tabs__content">
        <el-scrollbar noresize height="560px">
          <div style="width: 98%">
            <el-divider content-position="center" style="font-size: 20px"
              >平滑
            </el-divider>
            <div style="margin-bottom: 15px">
              <div style="width: 565px; height: auto; align-items: stretch">
                <el-button type="primary" plain>均值滤波</el-button>
                <el-button type="success" plain>中值滤波</el-button>
              </div>
            </div>
            <div>
              <span
                class="demonstration"
                style="margin-right: 4px; overflow: visible"
                >滤波核大小</span
              >
              <el-input
                v-model="input2"
                placeholder="输入值"
                style="margin-left: 10px; width: 200px"
              />
            </div>

            <el-button
              @click="resizeHandler"
              type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>

            <el-divider content-position="center" style="font-size: 20px"
              >锐化
            </el-divider>
            <div style="margin-bottom: 15px">
              <div style="width: 565px; height: auto; align-items: stretch">
                <el-button type="primary" plain>Sobel</el-button>
                <el-button type="success" plain>LoG</el-button>
                <el-button type="success" plain>Laplace</el-button>
                <el-button type="success" plain>Prewitt</el-button>
              </div>
            </div>

            <div>
              <span
                class="demonstration"
                style="margin-right: 4px; overflow: visible"
                >滤波核大小</span
              >
              <el-input
                v-model="input2"
                placeholder="输入值"
                style="margin-left: 10px; width: 200px"
              />
            </div>

            <el-button
              @click="resizeHandler"
              type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
          </div>
        </el-scrollbar>
      </el-tab-pane>
      <el-tab-pane label="频域操作" name="op" class="el-tabs__content">
        <el-scrollbar noresize height="560px">
          <div style="width: 98%">
            <el-divider content-position="center" style="font-size: 20px"
              >傅里叶变换（空间域到频域变换）
            </el-divider>
            <div style="margin-bottom: 15px">
              <div style="width: 565px; height: auto; align-items: stretch">
                <el-button type="primary" plain>幅度谱</el-button>
                <el-button type="success" plain>相位谱</el-button>
              </div>
            </div>
            <el-button
              @click="resizeHandler"
              type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>

            <el-divider content-position="center" style="font-size: 20px"
              >平滑
            </el-divider>
            <div style="margin-bottom: 15px">
              <div style="width: 565px; height: auto; align-items: stretch">
                <el-button type="primary" plain>理想低通滤波</el-button>
                <el-button type="success" plain>巴特沃斯低通滤波</el-button>
                <el-button type="success" plain>高斯低通滤波</el-button>
              </div>
            </div>
            <div>
              <span
                class="demonstration"
                style="margin-right: 4px; overflow: visible"
                >阈值大小</span
              >
              <el-input
                v-model="input2"
                placeholder="输入值"
                style="margin-left: 10px; width: 200px"
              />
            </div>

            <el-button
              @click="resizeHandler"
              type="primary"
              style="margin-top: 26px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>

            <el-divider content-position="center" style="font-size: 20px"
              >锐化
            </el-divider>
            <div style="margin-bottom: 15px">
              <div style="width: 565px; height: auto; align-items: stretch">
                <el-button type="primary" plain>理想高通滤波</el-button>
                <el-button type="success" plain>巴特沃斯高通滤波</el-button>
                <el-button type="success" plain>高斯高通滤波</el-button>
              </div>
            </div>
            <div>
              <span
                class="demonstration"
                style="margin-right: 4px; overflow: visible"
                >阈值大小</span
              >
              <el-input
                v-model="input2"
                placeholder="输入值"
                style="margin-left: 10px; width: 200px"
              />
            </div>

            <el-button
              @click="resizeHandler"
              type="primary"
              style="margin-top: 26px; margin-left: 4px; align-items: center"
            >
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import * as API from "@/api/resolve";
import { Setting, Calendar } from "@element-plus/icons-vue";
import { ElNotification, ElLoading } from "element-plus";
export default {
  components: {
    Setting,
    Calendar,
  },
  data() {
    return {
      activeName: "basic",
      zoomXValue: 1,
      zoomYValue: 1,
      zoomPepperValue: 0.02,
      zoomSaltValue: 0.02,
      rotateValue: 0,
      spinVaue: "X",
      transXValue: 0,
      transYValue: 0,
    };
  },
  methods: {
    async translateHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "已缩小/放大图片",
        type: "success",
      });
    },
    async rotateHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.rotate({
        rotateValue: this.rotateValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "已缩小/放大图片",
        type: "success",
      });
    },
    async resizeHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.resize({
        zoomXValue: this.zoomXValue,
        zoomYValue: this.zoomYValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "已缩小/放大图片",
        type: "success",
      });
    },
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
