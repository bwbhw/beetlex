<template>
  <div>
    <el-container class="home">
      <el-header class="header">
        <div class="header-left">
          <img src="../assets/resources/images/YE39.png" />
        </div>
        <div class="header-right">
          <el-badge class="item">
            <el-button size="small" @click="handleDocClick()"
              ><i class="item-doc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i
              >文档</el-button
            >
          </el-badge>
          <el-badge class="item">
            <el-button size="small" @click="handleSettingClick()"
              ><i class="item-setting">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i
              >设置</el-button
            >
          </el-badge>
          <el-badge :value="200" :max="99" class="item3">
            <el-button size="small" @click="handleNoticeClick()"
              ><i class="item-notice">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i
              >通知</el-button
            >
          </el-badge>
          <el-badge value="new" class="item4">
            <el-button size="small" @click="handleUpdateClick()"
              ><i class="item-updating">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i
              >更新</el-button
            >
          </el-badge>
          <div class="el-badge item4">
            <router-link
              to="/login"
              :style="{
                textDecoration: 'none',
                color: '#333333',
                fontSize: '14px',
              }"
              >登录</router-link
            >
          </div>
        </div>
      </el-header>
      <el-container class="main">
        <el-aside class="left">
          <el-tree
            :data="treeData"
            :props="defaultProps"
            @node-click="handleNodeClick"
            @node-contextmenu="handleNodeRightClick"
            class="tree-list"
          ></el-tree>
          <ye-context-menu ref="ctxMenu"></ye-context-menu>
        </el-aside>
        <el-main class="center">
          <div class="top">
            <h6>三维模型</h6>
            <div draggable="true">
              <three-model-view></three-model-view>
            </div>
          </div>
          <div class="bottom">
            <h6>二维图例</h6>
            <div>
              <two-model-view></two-model-view>
            </div>
          </div>
        </el-main>
        <el-aside class="right">
          <propItem></propItem>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import yeContextMenu from "./yeContextMenu.vue";
import propItem from "./propItem.vue";
import threeModelView from "./threeModelView.vue";
import twoModelView from "./twoModelView.vue";

const handleNodeClick = (data) => {
  console.log(data);
};

const handleNodeRightClick = (event, Data) => {
  console.log("节点右击了！！", Data);
  console.log(this.$refs.ctxMenu);
  this.$refs.ctxMenu.setNodeVisiable("block");
};

const handleDocClick = () => {
  window.location.href = "https://docs.ljsbim.com/docs/intro/";
  document.body.innerHTML = "<h6 onclick='window.history.back()'>返回<h6>";
  console.log("点击了");
};
const handleSettingClick = () => {
  window.location.href = "https://www.baidu.com/";
  document.body.innerHTML = "<h6 onclick='window.history.back()'>返回<h6>";
  console.log("点击了");
};
const handleNoticeClick = () => {
  window.location.href = "https://www.sogou.com/";
  document.body.innerHTML = "<h6 onclick='window.history.back()'>返回<h6>";
  console.log("点击了");
};
const handleUpdateClick = () => {
  window.location.href = "https://so.com/";
  document.body.innerHTML = "<h6 onclick='window.history.back()'>返回<h6>";
  console.log("点击了");
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

.home {
  width: 100%;
  height: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}

.header .header-left {
}

.header .header-left img {
  width: auto;
  height: 50px;
}

.header .header-right {
  padding-right: 20px;
}

.item {
  margin-left: 10px;
}

.item .item-doc {
  background: url(../assets/resources/icons/document.png);
  background-size: 100% 100%;
  width: 40px;
  height: 40px;
}

.item .item-setting {
  background: url(../assets/resources/icons/setting.png);
  background-size: 100% 100%;
  width: 40px;
  height: 40px;
}

.item3 {
  margin-left: 10px;
}

.item3 .item-notice {
  background: url(../assets/resources/icons/email.png);
  background-size: 100% 100%;
  width: 40px;
  height: 40px;
}

.item4 {
  margin-left: 30px;
}

.item4 .item-updating {
  background: url(../assets/resources/icons/update.png);
  background-size: 100% 100%;
  width: 40px;
  height: 40px;
}

.main {
  height: calc(100vh - 60px);
}

.main .left {
  border: 1px solid #eeeeee;
  max-width: 280px;
  width: 20%;
  height: calc(100% - 12px);
  margin: 5px;
  overflow: auto;
  border-radius: 5px;
  color: #333;
}

.main .left .tree-list {
  position: relative;
}

.main .center {
  height: calc(100% - 12px);
  overflow: hidden;
  padding: 0;
}

.main .center .top {
  margin-top: 5px;
  display: block;
  height: calc(50% - 40px);
}

.main .center .top > h6 {
  border: 1px solid #eeeeee;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  background: #eeeeee;
  color: #333;
}

.main .center .top > div {
  margin-top: 10px;
  height: calc(100% - 25px);
  background: #eeeeee;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  padding: 10px;
}

.main .center .bottom {
  margin-top: 45px;
  display: block;
  height: calc(50% - 40px);
}

.main .center .bottom > h6 {
  border: 1px solid #eeeeee;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  background-color: #eeeeee;
  color: #333;
}

.main .center .bottom > div {
  height: calc(100% - 25px);
  margin-top: 10px;
  background: #eeeeee;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  padding: 10px;
}

.main .right {
  max-width: 280px;
  width: 20%;

  height: calc(100% - 12px);
  margin: 5px;
  overflow: auto;
  border-radius: 5px;
}
</style>