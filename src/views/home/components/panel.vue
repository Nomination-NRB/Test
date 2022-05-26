<template>
  <div class="main">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="基本操作" name="basic" class="el-tabs__content">
        <el-scrollbar noresize height="560px">
          <div style="width: 98%">
            <el-divider content-position="center" style="font-size: 20px">(像素)放大/缩小</el-divider>
            <div class="slider-demo-block">
              <span class="demonstration">X轴变化率(倍)</span>
              <el-slider v-model="zoomXValue" :step="0.1" :min="0.1" :max="10" show-input />
            </div>
            <div class="slider-demo-block">
              <span class="demonstration">Y轴变化率(倍)</span>
              <el-slider v-model="zoomYValue" :step="0.1" :min="0.1" :max="10" show-input />
            </div>
            <el-button @click="resizeHandler" type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center">
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px">旋转</el-divider>
            <div class="slider-demo-block">
              <span class="demonstration">角度(%)</span>
              <el-slider v-model="rotateValue" :step="1" :min="-180" :max="180" show-input />
            </div>
            <el-button @click="rotateHandler" type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center">
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px">仿射</el-divider>
            <el-button @click="affineHandler" type="primary" style="margin-top: 6px; margin-left: 4px; align-items: center">
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px">翻转/镜像</el-divider>
            <div>
              <el-radio v-model="spinVaue" label="X" size="large" border>X轴翻转</el-radio>
              <el-radio v-model="spinVaue" label="Y" size="large" border>Y轴翻转</el-radio>
            </div>

            <el-button @click="reversalHandler" type="primary" style="margin-top: 6px; margin-left: 4px; align-items: center">
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px">平移</el-divider>
            <div class="slider-demo-block">
              <span class="demonstration">X轴偏移(%)</span>
              <el-slider v-model="transXValue" :step="1" :min="-180" :max="180" show-input />
            </div>
            <div class="slider-demo-block">
              <span class="demonstration">Y轴偏移(%)</span>
              <el-slider v-model="transYValue" :step="1" :min="-180" :max="180" show-input />
            </div>
            <el-button @click="translateHandler" type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center">
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
            <el-divider content-position="center" style="font-size: 20px">对数变换</el-divider>
            <el-button @click="logChangeHandler" type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center">
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px">反色变换/反转</el-divider>
            <el-button @click="reverseChangeHandler" type="primary" style="margin-top: 6px; margin-left: 4px; align-items: center">
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px">伽马变换/幂次变换</el-divider>
            <div class="slider-demo-block">
              <span class="demonstration" style="margin-right: 4px; overflow: visible">幂次值</span>
              <el-input v-model="input1" placeholder="输入值" style="margin-left: 10px; width: 200px" />
            </div>

            <el-button @click="gammaChangeHandler" type="primary" style="margin-top: 6px; margin-left: 4px; align-items: center">
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px">直方图均衡化</el-divider>
            <el-button @click="histogramToBalanceHandler" type="primary" style="margin-top: 6px; margin-left: 4px; align-items: center">
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px">直方图规一化</el-divider>
            <el-button @click="histogramToOneHandler" type="primary" style="margin-top: 6px; margin-left: 4px; align-items: center">
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px">分段线性变换</el-divider>
            <div class="slider-demo-block">
              <span class="demonstration" style="margin-right: 4px; overflow: visible">a</span>
              <el-input v-model="input2" placeholder="输入值" style="margin-left: 10px; width: 200px" />
            </div>
            <div class="slider-demo-block">
              <span class="demonstration" style="margin-right: 4px; overflow: visible">b</span>
              <el-input v-model="input2" placeholder="输入值" style="margin-left: 10px; width: 200px" />
            </div>
            <div class="slider-demo-block">
              <span class="demonstration" style="margin-right: 4px; overflow: visible">c</span>
              <el-input v-model="input2" placeholder="输入值" style="margin-left: 10px; width: 200px" />
            </div>
            <div class="slider-demo-block">
              <span class="demonstration" style="margin-right: 4px; overflow: visible">d</span>
              <el-input v-model="input2" placeholder="输入值" style="margin-left: 10px; width: 200px" />
            </div>
            <el-button @click="linearChangeHandler" type="primary" style="margin-top: 6px; margin-left: 4px; align-items: center">
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px">对比度拉伸</el-divider>
            <el-button @click="contrastHandler" type="primary" style="margin-top: 6px; margin-left: 4px; align-items: center">
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
            <el-divider content-position="center" style="font-size: 20px">椒盐噪声</el-divider>
            <div class="slider-demo-block">
              <span class="demonstration">椒噪声比例</span>
              <el-slider v-model="zoomPepperValue" :step="0.01" :min="0.001" :max="1" show-input />
            </div>
            <div class="slider-demo-block">
              <span class="demonstration">盐噪声比例</span>
              <el-slider v-model="zoomSaltValue" :step="0.01" :min="0.001" :max="1" show-input />
            </div>
            <el-button @click="addSaltPepperHandler" type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center">
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px">高斯噪声</el-divider>
            <div class="slider-demo-block">
              <span class="demonstration" style="margin-right: 4px; overflow: visible">均值</span>
              <el-input v-model="input2" placeholder="输入值" style="margin-left: 10px; width: 200px" />
            </div>
            <div class="slider-demo-block">
              <span class="demonstration" style="margin-right: 4px; overflow: visible">方差</span>
              <el-input v-model="input2" placeholder="输入值" style="margin-left: 10px; width: 200px" />
            </div>
            <el-button @click="addGaussianHandler" type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center">
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
            <el-divider content-position="center" style="font-size: 20px">模糊操作
            </el-divider>
            <div>
              <el-tag style="margin-top: 6px; align-items: center; font-size: 15px">Motion</el-tag>
            </div>
            <div class="slider-demo-block">
              <span class="demonstration" style="margin-right: 4px; overflow: visible">距离</span>
              <el-input v-model="input2" placeholder="输入值" style="margin-left: 10px; width: 200px" />
            </div>
            <div class="slider-demo-block">
              <span class="demonstration" style="margin-right: 4px; overflow: visible">角度</span>
              <el-input v-model="input2" placeholder="输入值" style="margin-left: 10px; width: 200px" />
            </div>

            <div>
              <el-tag style="margin-top: 6px; align-items: center; font-size: 15px">Disk</el-tag>
            </div>
            <div class="slider-demo-block">
              <span class="demonstration" style="margin-right: 4px; overflow: visible">半径</span>
              <el-input v-model="input2" placeholder="输入值" style="margin-left: 10px; width: 200px" />
            </div>

            <el-button @click="motionHandler" type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center">
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px">维纳滤波
            </el-divider>
            <el-row>
              <div style="margin-bottom: 15px">
                <div>
                  <el-radio v-model="ValueOfWiener" label="PSF" size="large" border>PSF</el-radio>
                  <el-radio v-model="ValueOfWiener" label="NSR" size="large" border>NSR</el-radio>
                  <el-radio v-model="ValueOfWiener" label="NCORR, ICORR" size="large" border>NCORR, ICORR</el-radio>
                </div>
              </div>
            </el-row>
            <el-button @click="wienerHandler" type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center">
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px">平滑约束复原
            </el-divider>
            <el-button @click="smoothHandler" type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center">
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px">自适应中值滤波
            </el-divider>
            <el-button @click="selfMedianHandler" type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center">
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>
            <el-divider content-position="center" style="font-size: 20px">自适应均值滤波
            </el-divider>
            <el-button @click="selfMeanHandler" type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center">
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
            <el-divider content-position="center" style="font-size: 20px">平滑
            </el-divider>
            <div style="margin-bottom: 15px">
              <div>
                <el-radio v-model="ValueOfMeanOrMedian" label="mean" size="large" border>均值滤波</el-radio>
                <el-radio v-model="ValueOfMeanOrMedian" label="median" size="large" border>中值滤波</el-radio>
              </div>
            </div>
            <div>
              <span class="demonstration" style="margin-right: 4px; overflow: visible">滤波核大小</span>
              <el-input v-model="input2" placeholder="输入值" style="margin-left: 10px; width: 200px" />
            </div>

            <el-button @click="filterHandler" type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center">
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>

            <el-divider content-position="center" style="font-size: 20px">锐化
            </el-divider>
            <div style="margin-bottom: 15px">
              <div>
                <el-radio v-model="ValueOfSharpen" label="Sobel" size="large" border>Sobel</el-radio>
                <el-radio v-model="ValueOfSharpen" label="LoG" size="large" border>LoG</el-radio>
                <el-radio v-model="ValueOfSharpen" label="Laplace" size="large" border>Laplace</el-radio>
                <el-radio v-model="ValueOfSharpen" label="Prewitt" size="large" border>Prewitt</el-radio>
              </div>
            </div>

            <div>
              <span class="demonstration" style="margin-right: 4px; overflow: visible">滤波核大小</span>
              <el-input v-model="input2" placeholder="输入值" style="margin-left: 10px; width: 200px" />
            </div>

            <el-button @click="sharpenHandler" type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center">
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
            <el-divider content-position="center" style="font-size: 20px">傅里叶变换（空间域到频域变换）
            </el-divider>
            <div style="margin-bottom: 15px">
              <div style="width: 565px; height: auto; align-items: stretch">
                <div>
                  <el-radio v-model="ValueOfMeanOrMedian" label="magnitude" size="large" border>幅度谱</el-radio>
                  <el-radio v-model="ValueOfMeanOrMedian" label="phase" size="large" border>相位谱</el-radio>
                </div>
              </div>
            </div>
            <el-button @click="fftHandler" type="primary"
              style="margin-top: 6px; margin-left: 4px; align-items: center">
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>

            <el-divider content-position="center" style="font-size: 20px">平滑
            </el-divider>
            <div style="margin-bottom: 15px">
              <div style="width: 565px; height: auto; align-items: stretch">
                <div>
                  <el-radio v-model="ValueOfMeanOrMedian" label="ideal" size="large" border>理想低通滤波</el-radio>
                  <el-radio v-model="ValueOfMeanOrMedian" label="butterworth" size="large" border>巴特沃斯低通滤波</el-radio>
                  <el-radio v-model="ValueOfMeanOrMedian" label="gaussian" size="large" border>高斯低通滤波</el-radio>
                </div>
              </div>
            </div>
            <div>
              <span class="demonstration" style="margin-right: 4px; overflow: visible">阈值大小</span>
              <el-input v-model="input2" placeholder="输入值" style="margin-left: 10px; width: 200px" />
            </div>

            <el-button @click="lowFilterHandler" type="primary"
              style="margin-top: 26px; margin-left: 4px; align-items: center">
              <el-icon size="medium">
                <Setting />
              </el-icon>
              应用
            </el-button>

            <el-divider content-position="center" style="font-size: 20px">锐化
            </el-divider>
            <div style="margin-bottom: 15px">
              <div style="width: 565px; height: auto; align-items: stretch">
                <div>
                  <el-radio v-model="ValueOfMeanOrMedian" label="idealHigh" size="large" border>理想高通滤波</el-radio>
                  <el-radio v-model="ValueOfMeanOrMedian" label="butterworthHigh" size="large" border>巴特沃斯高通滤波</el-radio>
                  <el-radio v-model="ValueOfMeanOrMedian" label="gaussianHigh" size="large" border>高斯高通滤波</el-radio>
                </div>
              </div>
            </div>
            <div>
              <span class="demonstration" style="margin-right: 4px; overflow: visible">阈值大小</span>
              <el-input v-model="input2" placeholder="输入值" style="margin-left: 10px; width: 200px" />
            </div>

            <el-button @click="highFilterHandler" type="primary"
              style="margin-top: 26px; margin-left: 4px; align-items: center">
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
      affineValue: 0,
      reversalValue: 0,
      translateValue: 0,
      logChangeValue: 0,
      reverseChangeValue: 0,
      gammaChangeValue: 0,
      histogramToBalanceValue: 0,
      histogramToOneValue: 0,
      linearChange: 0,
      contrastValue: 0,
      addSaltPepperValue: 0,
      addGaussianValue: 0,
      motionValue: 0,
      wienerValue: 0,
      smoothValue: 0,
      selfMedianValue: 0,
      selfMeanValue: 0,
      filterValue: 0,
      sharpenValue: 0,
      fftValue: 0,
      lowFilterValue: 0,
      highFilterValue: 0,
      spinVaue: "X",
      ValueOfMeanOrMedian: "mean",
      ValueOfSharpen: "Sobel",
      ValueOfWiener: "PSF",
      transXValue: 0,
      transYValue: 0,
    };
  },
  methods: {

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
        message: "已旋转图片",
        type: "success",
      });
    },

    async affineHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.affine({
        affineValue: this.affineValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "已仿射图片",
        type: "success",
      });
    },

    async reversalHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.reversal({
        reversalValue: this.reversalValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "已翻转图片",
        type: "success",
      });
    },

    async translateHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.translate({
        translateValue: this.translateValue,
        id: _id,
      });


      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "已平移图片",
        type: "success",
      });
    },
    
    async logChangeHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.logChange({
        logChangeValue: this.logChangeValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "图片已对数变换",
        type: "success",
      });
    },

    async reverseChangeHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.reverseChange({
        reverseChangeValue: this.reverseChangeValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "图片已反转变换",
        type: "success",
      });
    },

    async gammaChangeHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.gammaChange({
        gammaChangeValue: this.gammaChangeValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "图片已伽马变换",
        type: "success",
      });
    },
    
    async histogramToBalanceHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.histogramToBalance({
        histogramToBalanceValue: this.histogramToBalanceValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "直方图已均衡化",
        type: "success",
      });
    },
    
    
    async histogramToOneHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.histogramToOne({
        histogramToOneValue: this.histogramToOneValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "直方图已归一化",
        type: "success",
      });
    },


    async linearChangeHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.linearChange({
        linearChangeValue: this.linearChangeValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "图片已线性变换",
        type: "success",
      });
    },
    
    async contrastHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.contrast({
        contrastValue: this.contrastValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "图片已对比变换",
        type: "success",
      });
    },
    
    async addSaltPepperHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.addSaltPepper({
        addSaltPepperValue: this.addSaltPepperValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "图片已加入椒盐噪声",
        type: "success",
      });
    },
    
    async addGaussianHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.addGaussian({
        addGaussianValue: this.addGaussianValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "图片已加入高斯噪声",
        type: "success",
      });
    },
    
    async motionHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.motion({
        motionValue: this.motionValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "图片已模糊",
        type: "success",
      });
    },
   
    async wienerHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.wiener({
        wienerValue: this.wienerValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "图片已经过Wiener滤波处理",
        type: "success",
      });
    },
    
    async smoothHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.smooth({
        smoothValue: this.smoothValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "图片已经过平滑约束复原处理",
        type: "success",
      });
    },
    
    async selfMedianHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.selfMedian({
        selfMedianValue: this.selfMedianValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "图片已经过自适应中值滤波处理",
        type: "success",
      });
    },
    
    async selfMeanHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.selfMean({
        selfMeanValue: this.selfMeanValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "图片已经过自适应均值滤波处理",
        type: "success",
      });
    },
    
    async filterHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.filter({
        filterValue: this.filterValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "图片已经过滤波处理",
        type: "success",
      });
    },
    
    async sharpenHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.sharpen({
        sharpenValue: this.sharpenValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "图片已经过锐化处理",
        type: "success",
      });
    },
    
    async fftHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.fft({
        fftValue: this.fftValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "图片已经过傅里叶变换",
        type: "success",
      });
    },
    
    async lowFilterHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.lowFilter({
        lowFilterValue: this.lowFilterValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "图片已经过低通滤波处理",
        type: "success",
      });
    },
    
    async highFilterHandler() {
      let loading = ElLoading.service({
        lock: true,
        text: "处理中...",
        background: "rgba(255, 255, 255, 0.2)",
      });
      let _id = this.$store.getters.id;
      //以上为必备操作

      //针对不同操作调用不同API即可
      let res = await API.highFilter({
        highFilterValue: this.highFilterValue,
        id: _id,
      });

      //以下为必备操作
      this.$store.commit("image/SET_URL", res.data.file);
      this.$forceUpdate();
      this.$emit("refresh");
      loading.close();
      ElNotification({
        title: "操作成功",
        message: "图片已经过高通滤波处理",
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

.slider-demo-block .demonstration+.el-slider {
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
