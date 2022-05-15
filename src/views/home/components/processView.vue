<template>
  <div class="container">
    <div class="mainView">
      <!-- <div class="viewTitle">数字图像处理面板</div></div> -->
      <div class="stepView">
        <div
          class="stepContent"
          :style="{
            transform: 'translateX(' + -stepStatusActive * 1200 + 'px)',
          }"
        >
          <div class="viewContent">
            <div class="leftContent">
              <div class="imageShowView">
                <!-- 上传图像 -->
                <el-upload
                  action="http://0.0.0.0:8080/#/"
                  class="avatar-uploader"
                  :http-request="uploadImg"
                  :show-file-list="false"
                  :on-success="handleImgSuccess"
                  :before-upload="beforeImgUpload"
                >
                  <el-image
                    v-if="imageUrl"
                    :src="imageUrl"
                    fit="contain"
                    class="avatar-uploader"
                  />
                  <el-icon v-else class="avatar-uploader-icon"
                    ><Plus
                  /></el-icon>
                </el-upload>
                <!-- 处理的预览图像 -->
                <el-image
                  :src="imageUrl"
                  fit="contain"
                  class="avatar-uploader image"
                >
                </el-image>
              </div>
            </div>
            <div class="rightContent">
              <!-- 右侧菜单 -->
              <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
              >
                <el-menu-item index="0">图像</el-menu-item>
                <el-menu-item index="1">基本操作</el-menu-item>
                <el-sub-menu index="2">
                  <template #title>灰度变换</template>
                  <el-menu-item index="2-1">item one</el-menu-item>
                  <el-menu-item index="2-2">item two</el-menu-item>
                  <el-menu-item index="2-3">item three</el-menu-item>
                  <el-sub-menu index="2-4">
                    <template #title>噪声添加</template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                    <el-menu-item index="2-4-2">item two</el-menu-item>
                    <el-menu-item index="2-4-3">item three</el-menu-item>
                  </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="3">复原</el-menu-item>
                <el-menu-item index="4">空间域操作</el-menu-item>
                <el-menu-item index="5">频域操作</el-menu-item>
              </el-menu>
              <!-- 右侧内容 -->
              <div class="menu_panel">
                <panel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-dialog v-model="centerDialogVisible" title="提示" width="30%" center>
      <span>{{ centerDialogContent }}</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="centerDialogVisibleHandler"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import {
  Plus,
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { ElNotification, UploadProps } from "element-plus";
import { hello, uploadImage } from "@/api/resolve";
import panel from "@/views/home/components/panel";
export default {
  components: {
    Plus,
    Document,
    IconMenu,
    Location,
    Setting,
    panel,
  },
  data() {
    return {
      stepStatusActive: 0,
      imageUrl: "",
      centerDialogVisible: false,
      activeIndex: "0",
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      let { data: helloData } = await hello();
      if (helloData) {
        ElNotification({
          title: "你好！",
          message: helloData,
          type: "success",
        });
      }
    },
    handleImgSuccess(response, uploadFile) {
      this.imageUrl = URL.createObjectURL(uploadFile.raw);
    },
    async uploadImg(param) {
      console.log("待上传的图像：", param);
      const formData = new FormData();
      formData.append("file", param.file);
      let rsp = await uploadImage(formData);
      console.log(rsp);
    },
    beforeImgUpload(rawFile) {
      if (rawFile.type !== "image/jpeg") {
        ElMessage.error("Avatar picture must be JPG format!");
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped>
.el-menu-demo {
  width: 100%;
}

.image {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
}
.imageShowView {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.rightContent {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.leftContent {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.avatar-uploader {
  width: 270px;
  height: 270px;
}
.avatar-uploader .avatar {
  width: 270px;
  height: 270px;
  display: block;
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 270px;
  height: 270px;
  text-align: center;
}
.container {
  min-width: 1280px;
  position: relative;
  width: 100%;
  background-color: #f4f6fc;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* 伪元素 */
.container::after {
  content: "";
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
  /* background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%); */
  transition: 1.8s ease-in-out;
  border-radius: 50%;
  filter: blur(1px);
  animation: color-change-5x 12s linear infinite alternate both,
    wave 12s linear infinite alternate both;
}
.viewTitle {
  position: absolute;
  top: 1%;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bolder;
  font-size: 36px;
  color: #2d66f6;
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(2px);
  padding: 5px;
  border-bottom: 2px solid #2d66f6;
}
.viewPic {
  z-index: 20;
  position: absolute;
  width: 200px;
  height: 200px;
  bottom: 0;
  left: 20px;
}
.mainView {
  opacity: 0.99;
  z-index: 10;
  height: 720px;
  width: 1240px;
  background-color: #fff;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.stepView {
  position: relative;
  margin-top: 15px;
  width: 1200px;
  height: 90%;
  background: #fff;
  overflow: hidden;
}
.viewContent {
  position: absolute;
  width: 1200px;
  height: 100%;
  transition: 0.5s ease-in-out;
  display: flex;
  flex-direction: row;
}
.cell-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: auto;
}
.doneView {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.doneViewLeft {
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.doneViewRight {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-size: 28px;
  color: #2d66f6;
  font-weight: bold;
  padding: 5px;
}
.tipsContent {
  font-size: 18px;
  padding: 5px;
  font-weight: bold;
}
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

@keyframes color-change-5x {
  0% {
    background: #2d67f6;
  }
  50% {
    background: #4481eb;
  }
  100% {
    background: #04befe;
  }
}
@keyframes wave {
  0% {
    transform: translateY(-50%);
    transform: translateX(0);
  }
  100% {
    transform: translateY(-20%);
    transform: translateX(20%);
  }
}
</style>
